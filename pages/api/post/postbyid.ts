import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "method not allowed" });
  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) {
    return res.status(422).json({ error: "unauthorized" });
  }
  const { id } = req.body;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
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
      },
    });
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "error in fecthing post" });
  }
}
