"use client";
import React, { useEffect, useState } from "react";
import { Heart, MessageCircle, MoreHorizontal, Bookmark, Share2 } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CommentCard from "../ui/comment/CommentCard";
import DeletePostModal from "../ui/post/DeletePostModal";
import ShareModal from "../ui/post/ShareModal";
import VideoPlayer from "../reel/VideoPlayer";
import useCurrentUser from "../../hooks/useCurrentUser";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { getSocket } from "@/lib/socket";

interface ReelCardProps {
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
  isActive?: boolean;
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

const ReelCard: React.FC<ReelCardProps> = ({
  image,
  userName,
  postImage,
  caption,
  createdAt,
  id,
  postId,
  likesLength,
  likedBy,
  savedBy,
  currentUser,
  userId,
  isActive = false,
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
  const [isFollowing, setIsFollowing] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await axios.post("/api/comment/commentbypostid", { postId: id });
      setComments(res.data);
    } catch (error) {
      console.error(error);
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
  }, [currentUser, likedBy, savedBy]);

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
      const res = await axios.post("/api/like", { id });
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
      toast.success(res.data.saved ? "Reel saved" : "Reel unsaved");
    } catch (error) {
      console.error("Error saving reel:", error);
      toast.error("Failed to save reel");
    } finally {
      setSaving(false);
    }
  };
  const followUser = async () => {
    try {
      const response = await axios.post("/api/user/follow", {
        userId: userId,
      });
      setIsFollowing(true);
      toast.success("Followed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to follow user");
    }
  };

  const unfollowUser = async () => {
    try {
      const response = await axios.delete("/api/user/follow", {
        data: { userId: userId }, // axios allows sending body with DELETE like this
      });
      setIsFollowing(false);
      toast.success("Unfollowed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to unfollow user");
    }
  };
  const Following = currentUserId?.followingIds.includes(userId);

  return (
    <div className="w-full h-[100dvh] bg-black text-foreground overflow-visible relative flex flex-col">
      {postImage?.length === 1 &&
        /\.(mp4|mov|webm|mkv)$/i.test(postImage[0]) && (
          <div className="w-full h-full relative">
            <VideoPlayer src={postImage[0]} isActive={isActive} />

            {/* Bottom-left Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-4 lg:left-8 z-40 flex flex-col gap-2 max-w-[70%] sm:max-w-[75%] lg:max-w-[400px]"
            >
                    <div className="flex items-center gap-3 flex-wrap">
                      <Avatar
                        className="h-10 w-10 cursor-pointer"
                        onClick={() => router.push(`/profile/${userId}`)}
                      >
                        <AvatarImage
                          src={image || "/images/profile.webp"}
                          alt="Profile"
                          className="object-cover"
                        />
                      </Avatar>
                      <span
                        className="font-semibold cursor-pointer text-white hover:opacity-80"
                        onClick={() => router.push(`/profile/${userId}`)}
                      >
                        {userName}
                      </span>
                      {currentUserId?.id !== userId ? (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-sm px-3 py-1 h-auto"
                          onClick={Following ? unfollowUser : followUser}
                        >
                          {Following ? "Unfollow" : "Follow"}
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-sm px-3 py-1 h-auto"
                          onClick={() => router.push(`/profile/${userId}`)}
                        >
                          You
                        </Button>
                      )}
                    </div>
                    {caption && (
                      <p className="text-xs sm:text-sm text-white max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] break-words">
                        {showFullCaption
                          ? caption
                          : `${caption.slice(0, 80)}${
                              caption.length > 80 ? "..." : ""
                            }`}
                        {caption.length > 80 && (
                          <button
                            onClick={() => setShowFullCaption((prev) => !prev)}
                            className="text-blue-400 ml-1 hover:underline"
                          >
                            {showFullCaption ? "less" : "more"}
                          </button>
                        )}
                      </p>
                    )}
            </motion.div>

            {/* Bottom-right Likes + Comments + Share + Save */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-16 sm:bottom-20 lg:bottom-32 right-2 sm:right-4 z-40 flex flex-col items-center gap-2 sm:gap-3"
            >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toogleLike}
                        disabled={loading}
                        className="h-10 w-10 text-white hover:bg-white/10"
                      >
                        {liked ? (
                          <Heart className="text-red-500 fill-red-500 text-2xl" />
                        ) : (
                          <Heart className="text-white text-2xl" />
                        )}
                      </Button>
                      <span className="text-xs text-white">{likesCount}</span>
                    </motion.div>

                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      <Button variant="ghost" size="icon" className="h-10 w-10 text-white hover:bg-white/10">
                        <MessageCircle className="text-white text-2xl" />
                      </Button>
                      <span className="text-xs text-white">
                        {countAllComments(comments)}
                      </span>
                    </motion.div>

                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => setIsShareOpen(true)}
                    >
                      <Button variant="ghost" size="icon" className="h-10 w-10 text-white hover:bg-white/10">
                        <Share2 className="text-white text-2xl" />
                      </Button>
                    </motion.div>

                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={toggleSave}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={saving}
                        className="h-10 w-10 text-white hover:bg-white/10"
                      >
                        {saved ? (
                          <Bookmark className="text-white fill-white text-2xl" />
                        ) : (
                          <Bookmark className="text-white text-2xl" />
                        )}
                      </Button>
                    </motion.div>

                    {deletePost && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 text-white hover:bg-white/10"
                        onClick={() => setIsDeleteOpen(true)}
                      >
                        <MoreHorizontal className="text-white" size={20} />
                      </Button>
                    )}
            </motion.div>
          </div>
        )}
      <CommentCard
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
    </div>
  );
};

export default ReelCard;
