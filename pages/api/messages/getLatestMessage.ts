import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb"; 

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== "POST"){
        return res.status(405).end();
    }

    const { user1Id, user2Id } = req.body;

    if(!user1Id || !user2Id){
        return res.status(400).json({ error: "Missing user IDs" });
    }

    try {
        const latestMessage = await prisma.message.findFirst({
            where: {
                OR: [
                    { senderId: user1Id, receiverId: user2Id },
                    { senderId: user2Id, receiverId: user1Id }
                ]
            },
            orderBy: { createdAt: "desc" }
        });

        return res.status(200).json(latestMessage);
    } catch (error) {
        console.error("Error fetching latest message:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}