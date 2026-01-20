"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card } from "./card";
import { Avatar, AvatarImage } from "./avatar";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "./button";
import axios from "axios";
import toast from "react-hot-toast";
import useCurrentUser from "@/hooks/useCurrentUser";

interface SharedPostMessageProps {
  post: {
    id: string;
    type: "POST" | "REEL";
    postImage: any[];
    caption?: string;
    user: {
      id: string;
      name?: string;
      userName?: string;
      image?: string;
    };
    likes?: any[];
  };
  senderName?: string;
  senderImage?: string;
  isOwnMessage: boolean;
  messageId: string;
  reactions?: Array<{ emoji: string; user: { id: string; image?: string } }>;
  onReaction?: (emoji: string) => void;
}

const SharedPostMessage: React.FC<SharedPostMessageProps> = ({
  post,
  senderName,
  senderImage,
  isOwnMessage,
  messageId,
  reactions = [],
  onReaction,
}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const [liked, setLiked] = React.useState(false);
  const [likesCount, setLikesCount] = React.useState(post.likes?.length || 0);

  React.useEffect(() => {
    if (post.likes?.some((like: any) => like.id === currentUser?.id)) {
      setLiked(true);
    }
  }, [post.likes, currentUser]);

  const handleLike = async () => {
    try {
      const res = await axios.post("/api/like", { id: post.id });
      if (res.data.message === "Post liked") {
        setLiked(true);
        setLikesCount((prev) => prev + 1);
      } else {
        setLiked(false);
        setLikesCount((prev) => Math.max(prev - 1, 0));
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleViewPost = () => {
    router.push(`/post/${post.id}`);
  };

  const quickReactions = ["❤️", "😂", "😮", "😢", "🙌"];

  // Get the first image/video URL - handle both string arrays and object arrays
  const getPostImage = () => {
    if (!post.postImage || !Array.isArray(post.postImage) || post.postImage.length === 0) {
      return null;
    }
    const firstImage = post.postImage[0];
    // Handle different formats: string, object with url property, or direct object
    if (typeof firstImage === "string") {
      return firstImage;
    } else if (firstImage && typeof firstImage === "object") {
      // Could be { url: string } or { id: string, url: string } or just the URL string in an object
      return (firstImage as any).url || (firstImage as any).id || String(firstImage);
    }
    return String(firstImage);
  };

  const postImageUrl = getPostImage();
  const isVideo = postImageUrl && /\.(mp4|mov|webm|mkv)$/i.test(postImageUrl);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className={`max-w-[350px] lg:max-w-[400px] ${isOwnMessage ? "order-2" : ""}`}>
        <Card
          className="overflow-hidden border border-border bg-card cursor-pointer hover:shadow-lg transition-all duration-200"
          onClick={handleViewPost}
        >
          {/* Post Preview Image - Square aspect ratio like Instagram */}
          <div className="relative w-full aspect-square bg-muted overflow-hidden group">
            {postImageUrl ? (
              <>
                {isVideo || post.type === "REEL" ? (
                  <video
                    src={postImageUrl}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                  />
                ) : (
                  <img
                    src={postImageUrl}
                    alt="Shared post"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                {/* Type Badge - Instagram style */}
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-white">
                    {post.type === "REEL" ? "📹 Reel" : "📷 Post"}
                  </span>
                </div>
                {/* Play icon for videos */}
                {(isVideo || post.type === "REEL") && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-sm rounded-full p-3">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">No media</span>
              </div>
            )}
          </div>

          {/* Post Info - Compact like Instagram */}
          <div className="p-3 bg-card">
            {/* Share indicator text */}
            {isOwnMessage ? (
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                You shared a {post.type === "REEL" ? "reel" : "post"}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                {senderName || "Someone"} sent you a {post.type === "REEL" ? "reel" : "post"}
              </p>
            )}
            
            {/* User Info */}
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="h-7 w-7 flex-shrink-0">
                <AvatarImage
                  src={post.user?.image || "/images/profile.webp"}
                  alt={post.user?.userName || post.user?.name}
                  className="object-cover"
                />
              </Avatar>
              <span className="text-sm font-semibold text-foreground truncate">
                {post.user?.userName || post.user?.name}
              </span>
            </div>

            {/* Caption */}
            {post.caption && (
              <p className="text-sm text-foreground line-clamp-2 mb-2 leading-relaxed">
                <span className="font-semibold mr-1">{post.user?.userName || post.user?.name}</span>
                {post.caption}
              </p>
            )}

            {/* Quick Actions - Instagram style */}
            <div className="flex items-center gap-4 pt-2 border-t border-border/50">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike();
                }}
                className="h-8 px-2 hover:bg-transparent"
              >
                <Heart
                  className={`h-5 w-5 ${liked ? "text-red-500 fill-red-500" : "text-foreground"}`}
                />
                <span className="ml-1.5 text-xs font-medium">{likesCount}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewPost();
                }}
                className="h-8 px-2 hover:bg-transparent"
              >
                <MessageCircle className="h-5 w-5 text-foreground" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewPost();
                }}
                className="h-8 px-2 hover:bg-transparent ml-auto text-xs font-medium text-primary"
              >
                View {post.type === "REEL" ? "reel" : "post"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Reactions and Quick Actions */}
        <div className="mt-2 flex items-center gap-2">
          {/* Reactions */}
          {reactions.length > 0 && (
            <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full">
              {reactions.map((reaction, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-base"
                  title={reaction.user?.id === currentUser?.id ? "You" : "Other"}
                >
                  {reaction.emoji}
                </motion.div>
              ))}
            </div>
          )}

          {/* Quick Reaction Buttons */}
          <div className="flex items-center gap-1">
            {quickReactions.map((emoji) => (
              <Button
                key={emoji}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-base hover:bg-muted/50 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onReaction?.(emoji);
                }}
              >
                {emoji}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SharedPostMessage;
