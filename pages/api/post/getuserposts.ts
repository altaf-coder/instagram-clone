import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  const { userId } = req.query;
  if (!userId || typeof userId !== "string")
    return res.status(400).json({ error: "Invalid ID" });
  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
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
        likes: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "Something went wrong in fetching posts" });
  }
}
