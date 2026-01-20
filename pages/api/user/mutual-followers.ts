import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.id) return res.status(401).json({ error: "Unauthorized" });

  try {
    // Get all users that current user follows
    const followingUsers = await prisma.user.findMany({
      where: {
        id: { in: currentUser.followingIds },
      },
      select: {
        id: true,
        name: true,
        userName: true,
        image: true,
        followingIds: true,
      },
    });

    // Filter to only mutual followers (users who also follow current user)
    const mutualFollowers = followingUsers.filter((user) =>
      user.followingIds.includes(currentUser.id)
    );

    return res.status(200).json(mutualFollowers);
  } catch (error) {
    console.error("Error in fetching mutual followers:", error);
    return res
      .status(400)
      .json({ error: "Something went wrong in fetching mutual followers" });
  }
}
