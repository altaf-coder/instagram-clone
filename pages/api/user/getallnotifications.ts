import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const currentUser = await getCurrentUser(req, res);

    if (!currentUser || !currentUser.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const notifications = await prisma.notifications.findMany({
      where: {
        userId: currentUser.id,
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
        post: {
          select: {
            id: true,
            caption: true,
          },
        },
        comment: {
          select: {
            id: true,
            body: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
