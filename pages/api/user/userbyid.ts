import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { id } = req.body

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        userName: true,
        image: true,
        followingIds: true,
        posts: true
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Users that this user is following
    const followingUsers = await prisma.user.findMany({
      where: {
        id: {
          in: user.followingIds || [],
        },
      },
      select: {
        id: true,
        name: true,
        userName: true,
        image: true,
      },
    });

    // Users who follow this user
    const followerUsers = await prisma.user.findMany({
      where: {
        followingIds: {
          has: id,
        },
      },
      select: {
        id: true,
        name: true,
        userName: true,
        image: true,
      },
    });

    return res.status(200).json({
      ...user,
      followersCount: followerUsers.length,
      followingCount: followingUsers.length,
      followers: followerUsers,
      following: followingUsers,
    });
  } catch (error) {
    console.error("User fetch error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
