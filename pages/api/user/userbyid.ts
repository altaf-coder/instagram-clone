import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Support both GET (query params) and POST (body)
    const id = req.method === "GET" ? req.query.id : req.body.id;

    if (!id || typeof id !== "string") {
      res.status(400).json({ message: "Invalid user ID" });
      return;
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
      res.status(404).json({ message: "User not found" });
      return;
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

    res.status(200).json({
      ...user,
      followersCount: followerUsers.length,
      followingCount: followingUsers.length,
      followers: followerUsers,
      following: followingUsers,
    });
  } catch (error) {
    console.error("User fetch error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
