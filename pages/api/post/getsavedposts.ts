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

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: currentUser.id },
      include: {
        savedPosts: {
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
        },
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(user.savedPosts || []);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong in fetching saved posts" });
  }
}
