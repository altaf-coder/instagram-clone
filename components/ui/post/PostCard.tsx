"use client";

import React, { useEffect, useState, useRef } from "react";
import { Heart, MessageCircle, MoreHorizontal, Bookmark, Share2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { useRouter } from "next/navigation";
import CommentModal from "../comment/CommentCard";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DeletePostModal from "./DeletePostModal";
import ShareModal from "./ShareModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import VideoPlayer from "@/components/reel/VideoPlayer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { getSocket } from "@/lib/socket";

interface PostCardProps {
  image?: string;
  userName?: string;
  postImage?: string[];
  postImageId?: string;
  caption?: string;
  createdAt?: string | Date;
  id?: string;
  postId?: string;
  likesLength?: number;
  likedBy?: [string];
  savedBy?: [string];
  currentUser?: string;
  userId?: string;
}

const countAllComments = (comments: any[]): number => {
  if (!comments) return 0;
  return comments.reduce((total, comment) => {
    return (
      total +
      1 +
      (comment.replies && comment.replies.length > 0
        ? countAllComments(comment.replies)
        : 0)
    );
  }, 0);
};

const PostCard: React.FC<PostCardProps> = ({
  image,
  userName,
  postImage,
  postImageId,
  caption,
  createdAt,
  id,
  postId,
  likesLength,
  likedBy,
  savedBy,
  currentUser,
  userId,
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const router = useRouter();
  const [likesCount, setLikesCount] = useState(likesLength || 0);
  const [comments, setComments] = useState([]);
  const { data: currentUserId } = useCurrentUser();
  const deletePost = userId === currentUserId?.id;
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when video is visible
  useEffect(() => {
    if (!videoContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVideoVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Video is considered visible when 50% is in viewport
        rootMargin: "0px",
      }
    );

    observer.observe(videoContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.post("/api/comment/commentbypostid", {
        postId: id,
      });
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Setup socket connection for real-time updates
  useEffect(() => {
    if (!id) return;

    const socket = getSocket();

    // Listen for like updates
    const handlePostLiked = (data: { postId: string; likesCount: number; liked: boolean; userId: string }) => {
      if (data.postId === id) {
        setLikesCount(data.likesCount);
        if (data.userId === currentUser) {
          setLiked(data.liked);
        }
      }
    };

    // Listen for comment updates
    const handlePostCommented = (data: { postId: string }) => {
      if (data.postId === id) {
        fetchComments();
      }
    };

    socket.on("post-liked", handlePostLiked);
    socket.on("post-commented", handlePostCommented);

    return () => {
      socket.off("post-liked", handlePostLiked);
      socket.off("post-commented", handlePostCommented);
    };
  }, [id, currentUser]);

  useEffect(() => {
    if (id) {
      fetchComments();
    }
  }, [id]);

  useEffect(() => {
    if (likedBy?.includes(currentUser!)) setLiked(true);
    if (savedBy?.includes(currentUser!)) setSaved(true);
  }, [setLiked, currentUser, likedBy, savedBy]);

  const emitLikeUpdate = (postId: string, likesCount: number, liked: boolean, userId: string | undefined) => {
    const socket = getSocket();
    
    if (socket.connected) {
      socket.emit("post-like-update", {
        postId,
        likesCount,
        liked,
        userId,
      });
    } else {
      socket.once("connect", () => {
        socket.emit("post-like-update", {
          postId,
          likesCount,
          liked,
          userId,
        });
      });
    }
  };

  const toogleLike = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/like", { id: id });
      const newLiked = res.data.message === "Post liked";
      const newLikesCount = res.data.likesCount ?? (newLiked ? likesCount + 1 : Math.max(likesCount - 1, 0));
      
      setLiked(newLiked);
      setLikesCount(newLikesCount);

      // Emit socket event for real-time update to all clients
      emitLikeUpdate(id!, newLikesCount, newLiked, currentUser);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSave = async () => {
    setSaving(true);
    try {
      const res = await axios.post("/api/post/save", { id: id });
      setSaved(res.data.saved);
      toast.success(res.data.saved ? "Post saved" : "Post unsaved");
    } catch (error) {
      console.error("Error saving post:", error);
      toast.error("Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto bg-card text-foreground rounded-xl overflow-hidden shadow-lg border border-border mb-6 sm:mb-10"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-border/50">
        <div
          className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
          onClick={() => router.push(`/profile/${userId}`)}
        >
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage
              src={image || "/images/profile.webp"}
              alt="Profile"
              className="object-cover"
            />
          </Avatar>
          <div className="min-w-0 flex-1">
            <div
              className="font-semibold text-sm sm:text-base text-foreground cursor-pointer hover:opacity-80 transition-opacity truncate"
              onClick={() => router.push(`/profile/${userId}`)}
            >
              {userName}
            </div>
            {createdAt && (
              <div className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
              </div>
            )}
          </div>
        </div>
        {deletePost && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 flex-shrink-0"
            onClick={() => setIsDeleteOpen(true)}
          >
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Post Image */}
      <div className="w-full relative mx-auto" ref={videoContainerRef}>
        {postImage?.length === 1 &&
        /\.(mp4|mov|webm|mkv)$/i.test(postImage[0]) ? (
          <VideoPlayer src={postImage[0]} isActive={isVideoVisible} />
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {postImage?.map((post_image, index) => (
                <CarouselItem key={index}>
                  <Card className="p-0 rounded-none bg-card border-0">
                    <img
                      className="object-cover w-full aspect-square"
                      src={post_image}
                      alt={`post_image_${index + 1}`}
                    />
                    {postImage.length > 1 && (
                      <span className="text-xs bg-black/60 px-2 py-1 mt-2 ml-2 text-white absolute bottom-2 left-2 rounded">
                        {index + 1}/{postImage?.length}
                      </span>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {postImage && postImage.length > 1 && (
              <>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition" />
              </>
            )}
          </Carousel>
        )}
      </div>

      {/* Action Buttons */}
      <div className="px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toogleLike}
                disabled={loading}
                className="h-9 w-9 sm:h-10 sm:w-10"
              >
                {liked ? (
                  <Heart className="text-red-500 fill-red-500 text-xl" />
                ) : (
                  <Heart className="text-foreground text-xl" />
                )}
              </Button>
              <p className="text-xs text-foreground mt-1">
                {likesCount} {likesCount === 1 || likesCount === 0 ? "like" : "likes"}
              </p>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <MessageCircle className="text-foreground text-xl" />
              </Button>
              <p className="text-xs text-foreground mt-1">
                {countAllComments(comments)} {countAllComments(comments) === 1 ? "comment" : "comments"}
              </p>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setIsShareOpen(true)}
            >
              <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <Share2 className="text-foreground text-xl" />
              </Button>
              <p className="text-xs text-foreground mt-1">Share</p>
            </motion.div>
          </div>

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={toggleSave}
          >
            <Button
              variant="ghost"
              size="icon"
              disabled={saving}
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              {saved ? (
                <Bookmark className="text-primary fill-primary text-xl" />
              ) : (
                <Bookmark className="text-foreground text-xl" />
              )}
            </Button>
            <p className="text-xs text-foreground mt-1">Save</p>
          </motion.div>
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base">
          <span className="font-semibold mr-2 text-foreground">{userName}</span>
          <p className="text-sm text-foreground inline">
            {showFullCaption
              ? caption
              : `${caption.slice(0, 100)}${caption.length > 100 ? "..." : ""}`}
            {caption.length > 100 && (
              <button
                onClick={() => setShowFullCaption((prev) => !prev)}
                className="text-primary ml-1 hover:underline transition-colors"
              >
                {showFullCaption ? "less" : "more"}
              </button>
            )}
          </p>
        </div>
      )}

      {/* Comment Modal */}
      <CommentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        postId={id ?? ""}
      />
      <DeletePostModal
        id={id ?? ""}
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      />
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        postId={id ?? ""}
      />
    </motion.div>
  );
};

export default PostCard;
