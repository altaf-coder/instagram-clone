import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).end();
  }

  try {
    const { userId } = req.body;
    const currentUser = await getCurrentUser(req, res);

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    if (!currentUser || !currentUser.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const targetUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!targetUser) {
      throw new Error("Target user not found");
    }

    const currentFollowingIds = [...(currentUser.followingIds || [])];

    if (req.method === "POST") {
      // FOLLOW
      if (!currentFollowingIds.includes(userId)) {
        currentFollowingIds.push(userId);

        // Create notification if not self-follow
        if (userId !== currentUser.id) {
          await prisma.notifications.create({
            data: {
              body: `${
                currentUser.userName || currentUser.name || "Someone"
              } started following you.`,
              userId: userId, // Receiver
              senderId: currentUser.id, // Follower
              markRead: false,
              type: "FOLLOW",
            },
          });
        }
      }
    }

    if (req.method === "DELETE") {
      // UNFOLLOW
      const index = currentFollowingIds.indexOf(userId);
      if (index !== -1) {
        currentFollowingIds.splice(index, 1);
      }

      // Optional: You could delete notification if desired
      // But usually we don't delete follow notifications
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: currentFollowingIds,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Follow/Unfollow Error:", error);
    return res.status(400).json({ message: "Internal server error" });
  }
}
