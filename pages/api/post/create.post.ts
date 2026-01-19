import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import uploadFile from "@/lib/uploader";
import formidable from "formidable";
import fs from "fs";
import { PostType } from "@prisma/client"; // ✅ import enum from Prisma

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
    if (req.headers["content-type"]?.includes("multipart/form-data")) {
      return await handleMultipartUpload(req, res, currentUser);
    } else {
      return await handleJsonUpload(req, res, currentUser);
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
    maxFiles: 1,
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
        postImage: uploaded.map((file: any) => file.url), // ✅ fix
        type: type as PostType,
        userId: currentUser.id,
      },
    });

    return res.status(200).json(post);
  }

  return res.status(400).json({ error: "No video provided" });
}

async function handleJsonUpload(
  req: NextApiRequest,
  res: NextApiResponse,
  currentUser: any
) {
  const { caption, postImage, type } = req.body;

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
      postImage: uploaded.map((file: any) => file.url), // ✅ fix
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
