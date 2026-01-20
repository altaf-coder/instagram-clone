import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) return res.status(401).json({ error: "Unauthorized" });

  const { messageIds, conversationId } = req.body;
  
  if (!messageIds || !Array.isArray(messageIds) || messageIds.length === 0) {
    return res.status(400).json({ error: "Message IDs array is required" });
  }

  try {
    // Only mark messages as delivered if current user is the receiver
    const updatedMessages = await prisma.message.updateMany({
      where: {
        id: { in: messageIds },
        receiverId: currentUser.id, // Ensure current user is the receiver
        conversationId: conversationId || undefined,
        delivered: false, // Only update if not already delivered
      },
      data: {
        delivered: true,
      },
    });

    // Fetch updated messages to return
    const messages = await prisma.message.findMany({
      where: {
        id: { in: messageIds },
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            userName: true,
            image: true,
          },
        },
      },
    });

    res.status(200).json({ 
      success: true, 
      updatedCount: updatedMessages.count,
      messages 
    });
  } catch (error) {
    console.error("Error marking messages as delivered:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
