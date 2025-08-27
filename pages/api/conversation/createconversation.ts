import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { user1Id, user2Id } = req.body;
  if (!user1Id || !user2Id || user1Id === user2Id) {
    return res.status(400).json({ message: "Invalid user IDs" });
  }

  try {
    let conversation = await prisma.conversation.findFirst({
      where: {
        OR: [
          { user1Id, user2Id },
          { user1Id: user2Id, user2Id: user1Id }
        ]
      }
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          user1Id,
          user2Id
        }
      });
    }

    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}