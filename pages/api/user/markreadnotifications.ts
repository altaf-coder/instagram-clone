import { NextApiRequest, NextApiResponse } from "next";
import getCurrentUser from "@/lib/getCurrentUser";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const currentUser = await getCurrentUser(req, res);
    if (!currentUser) return res.status(401).json({ error: "Unauthorized" });

    await prisma.notifications.updateMany({
      where: {
        userId: currentUser.id,
        markRead: false,
      },
      data: {
        markRead: true,
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to mark notifications as read:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
