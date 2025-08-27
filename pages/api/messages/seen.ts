import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { conversationId, senderId } = req.body;
    if (!conversationId || !senderId) return res.status(400).json({ error: "Conversation ID and Sender ID are required" });
    try {
        await prisma.message.updateMany({
            where: {
                conversationId,
                senderId,
                seen: false
            },
            data: {
                seen: true
            }
        });
        return res.status(200).json({ message: "Messages marked as seen successfully" });
    } catch (error) {
        console.error("Error marking messages as seen:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
} 