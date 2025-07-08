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
  const { caption, postImage } = req.body;
  const post_image = await uploadFile(postImage);
  try {
    const post = await prisma.post.create({
      data: {
        caption,
        postImage: post_image,
        user: {
          connect: {
            id: currentUser?.id,
          },
        },
      },
    });
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "Something went wrong in creating post" });
  }
}
