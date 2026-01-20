import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.id) return res.status(401).json({ error: "Unauthorized" });

  const { id } = req.body;
  if (!id || typeof id !== "string")
    return res.status(422).json({ error: "Invalid post ID" });

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: { savedBy: true },
    });

    if (!post) return res.status(404).json({ error: "Post not found" });

    const alreadySaved = post.savedBy.some((user) => user.id === currentUser.id);

    if (alreadySaved) {
      // UNSAVE
      await prisma.post.update({
        where: { id },
        data: {
          savedBy: {
            disconnect: { id: currentUser.id },
          },
        },
      });

      return res.status(200).json({ message: "Post unsaved", saved: false });
    } else {
      // SAVE
      await prisma.post.update({
        where: { id },
        data: {
          savedBy: {
            connect: { id: currentUser.id },
          },
        },
      });

      return res.status(200).json({ message: "Post saved", saved: true });
    }
  } catch (error) {
    console.error("Error in saving/unsaving post:", error);
    return res.status(400).json({ error: "Something went wrong in saving post" });
  }
}
