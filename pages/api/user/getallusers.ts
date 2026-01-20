import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  
  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.email) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  
  try {
    const users = await prisma.user.findMany({
      where: {
        NOT: {
          id: currentUser.id,
        },
      },
      select: {
        id: true,
        name: true,
        userName: true,
        image: true,
        followingIds: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong in fetching users" });
  }
}
