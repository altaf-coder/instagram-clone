import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import uploadFile from "@/lib/uploader";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.email)
    return res.status(422).json({ error: "Unauthorized in create post" });

  const { caption, postImage, type } = req.body;

  if (!postImage || (!postImage.images && !postImage.video)) {
    return res.status(400).json({ error: "No media provided" });
  }

  try {
    // Ensure only video or images are uploaded
    if (postImage.video && postImage.images?.length > 0) {
      return res
        .status(400)
        .json({ error: "Cannot upload both images and video" });
    }

    let uploaded;
    if (postImage.video) {
      uploaded = await uploadFile(postImage.video); // string
    } else if (postImage.images?.length > 0) {
      uploaded = await uploadFile(postImage.images); // string[]
    }

    const types = new Set(uploaded?.map((file) => file.type));
    if (types.size > 1) {
      return res.status(400).json({ error: "Mixed media types not allowed" });
    }

    const post = await prisma.post.create({
      data: {
        caption,
        postImage: uploaded?.map((file) => file.url),
        type,
        userId: currentUser.id,
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.error("Upload error:", error);
    return res
      .status(500)
      .json({ error: "Something went wrong in creating post" });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },
};
