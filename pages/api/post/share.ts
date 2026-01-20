import getCurrentUser from "@/lib/getCurrentUser";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.id) return res.status(401).json({ error: "Unauthorized" });

  const { postId, userIds } = req.body;
  
  if (!postId || typeof postId !== "string")
    return res.status(422).json({ error: "Invalid post ID" });

  if (!userIds || !Array.isArray(userIds) || userIds.length === 0)
    return res.status(422).json({ error: "Invalid user IDs" });

  try {
    // Verify post exists
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { user: true },
    });

    if (!post) return res.status(404).json({ error: "Post not found" });

    // Verify all users exist and are mutual followers
    const users = await prisma.user.findMany({
      where: {
        id: { in: userIds },
      },
      select: {
        id: true,
        followingIds: true,
      },
    });

    if (users.length !== userIds.length) {
      return res.status(404).json({ error: "Some users not found" });
    }

    // Check mutual follow relationship
    for (const user of users) {
      const isMutualFollow =
        currentUser.followingIds.includes(user.id) &&
        user.followingIds.includes(currentUser.id);
      
      if (!isMutualFollow) {
        return res.status(403).json({
          error: `You can only share with users who follow you and you follow. User ${user.id} is not a mutual follower.`,
        });
      }
    }

    // Create share records
    const sharePromises = userIds.map((userId) =>
      prisma.sharedPost.upsert({
        where: {
          postId_sharedById_sharedToId: {
            postId,
            sharedById: currentUser.id,
            sharedToId: userId,
          },
        },
        update: {
          createdAt: new Date(),
        },
        create: {
          postId,
          sharedById: currentUser.id,
          sharedToId: userId,
        },
      })
    );

    await Promise.all(sharePromises);

    // Create messages for shared users instead of notifications
    const messagePromises = userIds.map(async (userId) => {
      // Get or create conversation
      let conversation = await prisma.conversation.findFirst({
        where: {
          OR: [
            { user1Id: currentUser.id, user2Id: userId },
            { user1Id: userId, user2Id: currentUser.id }
          ]
        }
      });

      if (!conversation) {
        conversation = await prisma.conversation.create({
          data: {
            user1Id: currentUser.id,
            user2Id: userId
          }
        });
      }

      // Create message with shared post
      const message = await prisma.message.create({
        data: {
          conversationId: conversation.id,
          senderId: currentUser.id,
          receiverId: userId,
          body: `shared a ${post.type === "POST" ? "post" : "reel"}`,
          sharedPostId: post.id,
          seen: false,
          delivered: false,
        },
        include: {
          sender: {
            select: {
              id: true,
              name: true,
              userName: true,
              image: true,
            },
          },
          sharedPost: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  userName: true,
                  image: true,
                },
              },
              likes: {
                select: {
                  id: true,
                },
              },
            },
          },
        }
      });

      // Update conversation lastMessageAt
      await prisma.conversation.update({
        where: { id: conversation.id },
        data: { lastMessageAt: new Date() }
      });

      return message;
    });

    const messages = await Promise.all(messagePromises);

    // Return messages so they can be emitted via socket
    res.status(200).json({
      message: "Post shared successfully",
      sharedCount: userIds.length,
      messages: messages, // Include created messages
    });
  } catch (error) {
    console.error("Error in sharing post:", error);
    res.status(400).json({ error: "Something went wrong in sharing post" });
  }
}
