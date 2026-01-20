import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const currentUser = await getCurrentUser(req, res);
    if (!currentUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Get all unique users this person has chats with
    const allUsers = [...(currentUser.following || []), ...(currentUser.followers || [])];
    const seenSet = new Set();
    const uniqueUserIds = allUsers
      .map((u: any) => u.id)
      .filter((id: string) => {
        if (seenSet.has(id) || id === currentUser.id) return false;
        seenSet.add(id);
        return true;
      });

    // Count unread messages
    let count = 0;
    for (const otherUserId of uniqueUserIds) {
      // Get conversation
      const conversation = await prisma.conversation.findFirst({
        where: {
          OR: [
            { user1Id: currentUser.id, user2Id: otherUserId },
            { user1Id: otherUserId, user2Id: currentUser.id }
          ]
        }
      });

      if (conversation) {
        // Count unread messages from this user
        const unreadCount = await prisma.message.count({
          where: {
            conversationId: conversation.id,
            senderId: otherUserId,
            receiverId: currentUser.id,
            seen: false,
          },
        });
        count += unreadCount;
      }
    }

    return res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching unread message count:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
