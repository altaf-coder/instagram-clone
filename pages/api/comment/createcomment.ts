import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { body, postId, parentId } = req.body;

  try {
    const currentUser = await getCurrentUser(req, res);
    if (!currentUser) return res.status(401).json({ error: "Unauthorized" });

    // 1. Create the comment
    const newComment = await prisma.comments.create({
      data: {
        body,
        userId: currentUser.id,
        postId,
        parentId: parentId || null,
      },
    });

    // 2. Determine whom to notify
    let targetUserId: string | null = null;
    let notificationBody = "";

    if (parentId) {
      // It's a reply — notify parent comment's author
      const parentComment = await prisma.comments.findUnique({
        where: { id: parentId },
        select: { userId: true },
      });

      if (parentComment && parentComment.userId !== currentUser.id) {
        targetUserId = parentComment.userId;
        notificationBody = `${
          currentUser.userName || "Someone"
        } replied to your comment.`;
      }
    } else {
      // It's a top-level comment — notify post owner
      const post = await prisma.post.findUnique({
        where: { id: postId },
        select: { userId: true, type: true },
      });

      if (post && post.userId !== currentUser.id) {
        targetUserId = post.userId;
        notificationBody = `${
          currentUser.userName || "Someone"
        } commented on your ${post.type === "POST" ? "Post" : "Reel"}.`;
      }
    }

    // 3. Create the notification
    if (targetUserId) {
      await prisma.notifications.create({
        data: {
          body: notificationBody,
          userId: targetUserId, // Receiver
          senderId: currentUser.id,
          postId,
          commentId: newComment.id,
          markRead: false,
          type: "COMMENT",
        },
      });
    }

    return res.status(200).json(newComment);
  } catch (error) {
    console.error("Error creating comment/notification:", error);
    return res
      .status(400)
      .json({ error: "Something went wrong in creating comment" });
  }
}
