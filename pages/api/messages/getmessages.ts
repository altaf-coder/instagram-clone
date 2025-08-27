import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { conversationId } = req.body;
    if (!conversationId) return res.status(400).json({ error: "Conversation ID is required" });

    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId,
            },
            orderBy: {
                createdAt: "asc",
            },
            include: {
                sender: true,
            },
        });
        return res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
} 