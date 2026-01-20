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
      include: { likes: true, user: true }, // includes post owner too
    });

    if (!post) return res.status(404).json({ error: "Post not found" });

    const alreadyLiked = post.likes.some((user) => user.id === currentUser.id);

    if (alreadyLiked) {
      // UNLIKE
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          likes: {
            disconnect: { id: currentUser.id },
          },
        },
        include: { likes: true },
      });

      return res.status(200).json({ 
        message: "Post unliked",
        likesCount: updatedPost.likes.length,
        liked: false,
      });
    } else {
      // LIKE
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          likes: {
            connect: { id: currentUser.id },
          },
        },
        include: { likes: true },
      });

      // Avoid self-notifications
      if (post.user.id !== currentUser.id) {
        await prisma.notifications.create({
          data: {
            body: `${
              currentUser.userName || currentUser.name || "Someone"
            } liked your ${post.type === "POST" ? "Post" : "Reel"}.`,
            userId: post.user.id, // receiver
            senderId: currentUser.id,
            postId: post.id,
            markRead: false,
            type: "LIKE",
          },
        });
      }

      return res.status(200).json({ 
        message: "Post liked",
        likesCount: updatedPost.likes.length,
        liked: true,
      });
    }
  } catch (error) {
    console.error("Error in liking/unliking post:", error);
    return res.status(400).json({ error: "Something went wrong in liking" });
  }
}
