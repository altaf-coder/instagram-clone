import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.id) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { messageId, emoji } = req.body;

  if (!messageId || !emoji) {
    res.status(400).json({ error: "Missing messageId or emoji" });
    return;
  }

  try {
    // Check if reaction already exists
    const existingReaction = await prisma.messageReaction.findUnique({
      where: {
        messageId_userId: {
          messageId,
          userId: currentUser.id,
        },
      },
    });

    if (existingReaction) {
      // Update existing reaction
      if (existingReaction.emoji === emoji) {
        // Remove reaction if same emoji clicked
        await prisma.messageReaction.delete({
          where: {
            id: existingReaction.id,
          },
        });
        res.status(200).json({ message: "Reaction removed", removed: true });
      } else {
        // Update to new emoji
        await prisma.messageReaction.update({
          where: {
            id: existingReaction.id,
          },
          data: {
            emoji,
          },
        });
        res.status(200).json({ message: "Reaction updated" });
      }
    } else {
      // Create new reaction
      await prisma.messageReaction.create({
        data: {
          messageId,
          userId: currentUser.id,
          emoji,
        },
      });
      res.status(200).json({ message: "Reaction added" });
    }
  } catch (error) {
    console.error("Error in reacting to message:", error);
    res.status(400).json({ error: "Something went wrong" });
  }
}
