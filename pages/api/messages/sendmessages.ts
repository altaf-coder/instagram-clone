import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { conversationId, senderId, body, media,receiverId } = req.body;
  if (!conversationId || !senderId || (!body && !media)) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const message = await prisma.message.create({
      data: {
        conversationId,
        senderId,
        body,
        media,
        receiverId:receiverId
      }
    });

    // Optionally update lastMessageAt on conversation
    await prisma.conversation.update({
      where: { id: conversationId },
      data: { lastMessageAt: new Date() }
    });

    

    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}