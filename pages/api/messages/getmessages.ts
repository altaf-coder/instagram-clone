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
            select: {
                id: true,
                body: true,
                media: true,
                createdAt: true,
                senderId: true,
                receiverId: true,
                conversationId: true,
                seen: true,
                delivered: true,
                sharedPostId: true,
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

        // Fetch sharedPost and reactions separately to avoid schema errors
        const messagesWithExtras = await Promise.all(
            messages.map(async (msg: any) => {
                // Check if message has sharedPostId (if field exists in DB)
                if ('sharedPostId' in msg && msg.sharedPostId) {
                    try {
                        const post = await prisma.post.findUnique({
                            where: { id: msg.sharedPostId },
                            select: {
                                id: true,
                                type: true,
                                postImage: true,
                                caption: true,
                                user: {
                                    select: {
                                        id: true,
                                        name: true,
                                        userName: true,
                                        image: true,
                                    },
                                },
                                likes: {
                                    select: {
                                        id: true,
                                    },
                                },
                            },
                        });
                        msg.sharedPost = post;
                    } catch (err) {
                        msg.sharedPost = null;
                    }
                } else {
                    msg.sharedPost = null;
                }

                // Fetch reactions if MessageReaction model exists
                try {
                    const reactions = await prisma.messageReaction.findMany({
                        where: { messageId: msg.id },
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    image: true,
                                },
                            },
                        },
                    });
                    msg.reactions = reactions || [];
                } catch {
                    msg.reactions = [];
                }

                return msg;
            })
        );

        res.status(200).json(messagesWithExtras);
    } catch (error: any) {
        console.error("Error fetching messages:", error);
        
        // If it's a schema/model error, provide helpful message
        if (error.message?.includes("Unknown field") || error.message?.includes("Unknown arg")) {
            res.status(500).json({ 
                error: "Database schema needs to be updated. Please run: npx prisma migrate dev --name add_message_features",
                details: error.message 
            });
        } else {
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    }
} 