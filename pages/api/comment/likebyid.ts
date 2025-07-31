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

  if (!currentUser?.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.body; // this is commentId

  try {
    const comment = await prisma.comments.findUnique({
      where: { id },
      include: {
        commentLikes: true,
      },
    });

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    const alreadyLiked = comment.commentLikes.some(
      (user) => user.id === currentUser.id
    );

    if (alreadyLiked) {
      await prisma.comments.update({
        where: { id },
        data: {
          commentLikes: {
            disconnect: { id: currentUser.id },
          },
        },
      });

      return res.status(200).json({ message: "Comment unliked" });
    } else {
      await prisma.comments.update({
        where: { id },
        data: {
          commentLikes: {
            connect: { id: currentUser.id },
          },
        },
      });

      return res.status(200).json({ liked: true, message: "Comment liked" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
