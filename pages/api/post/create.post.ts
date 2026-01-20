import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import uploadFile from "@/lib/uploader";
import formidable from "formidable";
import fs from "fs";
import { PostType } from "@prisma/client";
import { IncomingMessage } from "http";

// Helper to parse JSON body when bodyParser is disabled
async function parseJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.email)
    return res.status(422).json({ error: "Unauthorized in create post" });

  try {
    // Parse form data for multipart requests
    const contentType = req.headers["content-type"] || "";
    if (contentType.includes("multipart/form-data")) {
      return await handleMultipartUpload(req, res, currentUser);
    } else {
      // Parse JSON body manually
      const body = await parseJsonBody(req);
      return await handleJsonUpload(req, res, currentUser, body);
    }
  } catch (error) {
    console.error("Upload error:", error);
    return res
      .status(500)
      .json({ error: "Something went wrong in creating post" });
  }
}

async function handleMultipartUpload(
  req: NextApiRequest,
  res: NextApiResponse,
  currentUser: any
) {
  const form = formidable({
    maxFiles: 10, // Allow multiple files for images
    maxFileSize: 100 * 1024 * 1024, // 100MB
  });

  const [fields, files] = await form.parse(req);

  const caption = fields.caption?.[0] || "";
  const type = fields.type?.[0] || "POST";

  // ✅ validate type against PostType enum
  if (!Object.values(PostType).includes(type as PostType)) {
    return res.status(400).json({ error: "Invalid post type" });
  }

  // Handle video upload
  if (files.video && files.video.length > 0) {
    const videoFile = files.video[0];

    // Read file buffer and upload
    const fileBuffer = fs.readFileSync(videoFile.filepath);
    const uploaded = await uploadFile(
      fileBuffer,
      videoFile.originalFilename || "video.mp4",
      "video"
    );

    const post = await prisma.post.create({
      data: {
        caption,
        postImage: uploaded.map((file: any) => file.url),
        type: type as PostType,
        userId: currentUser.id,
      },
    });

    return res.status(200).json(post);
  }

  // Handle image uploads
  if (files.images && files.images.length > 0) {
    const uploadedFiles = await Promise.all(
      files.images.map(async (imageFile) => {
        const fileBuffer = fs.readFileSync(imageFile.filepath);
        return await uploadFile(
          fileBuffer,
          imageFile.originalFilename || "image.jpg",
          "image"
        );
      })
    );

    const allUrls = uploadedFiles.flat().map((file: any) => file.url);

    const post = await prisma.post.create({
      data: {
        caption,
        postImage: allUrls,
        type: type as PostType,
        userId: currentUser.id,
      },
    });

    return res.status(200).json(post);
  }

  return res.status(400).json({ error: "No media provided" });
}

async function handleJsonUpload(
  req: NextApiRequest,
  res: NextApiResponse,
  currentUser: any,
  body?: any
) {
  // Use provided body or try to get from req.body
  const requestBody = body || req.body;
  
  if (!requestBody) {
    return res.status(400).json({ error: "Request body is required" });
  }
  
  const { caption, postImage, type } = requestBody;

  // ✅ validate type against PostType enum
  if (!Object.values(PostType).includes(type as PostType)) {
    return res.status(400).json({ error: "Invalid post type" });
  }

  if (!postImage || (!postImage.images && !postImage.video)) {
    return res.status(400).json({ error: "No media provided" });
  }

  // Ensure only video or images are uploaded
  if (postImage.video && postImage.images?.length > 0) {
    return res
      .status(400)
      .json({ error: "Cannot upload both images and video" });
  }

  let uploaded;
  if (postImage.video) {
    // Handle base64 video (fallback)
    uploaded = await uploadFile(postImage.video);
  } else if (postImage.images?.length > 0) {
    uploaded = await uploadFile(postImage.images);
  }

  if (!uploaded || uploaded.length === 0) {
    return res.status(400).json({ error: "Upload failed" });
  }

  const types = new Set(uploaded.map((file: any) => file.type));
  if (types.size > 1) {
    return res.status(400).json({ error: "Mixed media types not allowed" });
  }

  const post = await prisma.post.create({
    data: {
      caption,
      postImage: uploaded.map((file: any) => file.url),
      type: type as PostType,
      userId: currentUser.id,
    },
  });

  return res.status(200).json(post);
}

export const config = {
  api: {
    bodyParser: false, // Disable default bodyParser for multipart
    sizeLimit: "100mb",
  },
};
