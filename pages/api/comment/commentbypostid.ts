import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

// Recursive function to get all nested replies
const getRepliesRecursive = async (commentId: string): Promise<Comment[]> => {
  const replies = await prisma.comments.findMany({
    where: { parentId: commentId },
    include: {
      commentLikes: true,
      user: {
        select: {
          userName: true,
          image: true,
          name: true,
          id: true,
        },
      },
    },
  });

  // For each reply, fetch its nested replies recursively
  const repliesWithChildren = await Promise.all(
    replies.map(async (reply) => {
      const nestedReplies = await getRepliesRecursive(reply.id);
      return {
        ...reply,
        replies: nestedReplies,
      };
    })
  );

  return repliesWithChildren;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { postId, parentId } = req.body;

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid postId");
    }

    const rootComments = await prisma.comments.findMany({
      where: {
        postId,
        parentId: parentId || null,
      },
      include: {
        commentLikes: true,
        user: {
          select: {
            userName: true,
            image: true,
            name: true,
            id: true,
          },
        },
      },
    });

    // Attach recursive replies to each top-level comment
    const commentsWithReplies = await Promise.all(
      rootComments.map(async (comment) => {
        const replies = await getRepliesRecursive(comment.id);
        return {
          ...comment,
          replies,
        };
      })
    );

    return res.status(200).json(commentsWithReplies);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return res
      .status(500)
      .json({ error: "Something went wrong in fetching comments" });
  }
}
