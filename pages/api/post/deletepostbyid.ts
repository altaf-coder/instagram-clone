import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "method not allowed" });

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) return res.status(422).json({ error: "unauthorized user" });
  const { id } = req.body;
  try {
    const deletePost = await prisma.post.delete({
      where: {
        id,
      },
    });
    return res.status(200).json(deletePost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error in deleting post" });
  }
}
