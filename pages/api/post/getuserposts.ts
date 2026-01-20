import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const { userId } = req.query;
  if (!userId || typeof userId !== "string") {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }
  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    const posts = await prisma.post.findMany({
      where: {
        userId,
      },
      include: {
        user: {
          select: {
            userName: true,
            image: true,
            name: true,
            id: true,
          },
        },
        likes: {
          select: {
            id: true,
          },
        },
        savedBy: {
          select: {
            id: true,
          },
        },
        postComments: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong in fetching posts" });
  }
}
