import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();
  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.email)
    return res.status(422).json({ error: "Unauthorized in fetching posts" });
  const { type } = req.body;
  try {
    const posts = await prisma.post.findMany({
      where: {
        type,
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
