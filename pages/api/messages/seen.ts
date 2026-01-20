import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const { conversationId, senderId, messageIds } = req.body;
    
    if (!conversationId || !senderId) {
        return res.status(400).json({ error: "Conversation ID and Sender ID are required" });
    }

    try {
        const whereClause: any = {
            conversationId,
            senderId,
            seen: false,
        };

        // If specific message IDs are provided, use them
        if (messageIds && Array.isArray(messageIds) && messageIds.length > 0) {
            whereClause.id = { in: messageIds };
        }

        const updatedMessages = await prisma.message.updateMany({
            where: whereClause,
            data: {
                seen: true,
            },
        });

        // Fetch updated messages to return
        const messages = await prisma.message.findMany({
            where: whereClause.id ? { id: { in: messageIds } } : whereClause,
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
            message: "Messages marked as seen successfully",
            updatedCount: updatedMessages.count,
            messages,
        });
    } catch (error) {
        console.error("Error marking messages as seen:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
} 