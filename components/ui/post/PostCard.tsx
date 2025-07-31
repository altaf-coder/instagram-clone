"use client";

import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
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
import useCurrentUser from "@/hooks/useCurrentUser";
import VideoPlayer from "@/components/reel/VideoPlayer";

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
  currentUser,
  userId,
}) => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const router = useRouter();
  const [likesCount, setLikesCount] = useState(likesLength || 0);
  const [comments, setComments] = useState([]);
  const { data: currentUserId } = useCurrentUser();
  const deletePost = userId === currentUserId?.id;
  const [showFullCaption, setShowFullCaption] = useState(false);

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

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    if (likedBy?.includes(currentUser!)) setLiked(true);
  }, [setLiked, currentUser, likedBy]);

  const toogleLike = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/like", { id: id });
      if (res.data.message === "Post liked") {
        setLiked(true);
        setLikesCount((prev) => prev + 1);
      } else {
        setLiked(false);
        setLikesCount((prev) => Math.max(prev - 1, 0));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black text-white rounded-xl overflow-hidden shadow-lg border-b border-gray-800 mb-6 sm:mb-10">
      {/* Header */}
      <div
        className="flex items-center px-4 py-3"
        onClick={() => router.push(`/profile/${userId}`)}
      >
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={image || "/images/profile.webp"}
          alt="Profile"
        />
        <div className="ml-4">
          <div
            className="font-semibold text-sm sm:text-base"
            onClick={() => router.push(`/profile/${userId}`)}
          >
            {userName}
          </div>
          {createdAt && (
            <div className="text-xs text-gray-400">
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </div>
          )}
        </div>
      </div>

      {/* Post Image */}
      <div className="w-full relative mx-auto">
        {/* Three dots icon */}
        {deletePost && (
          <span className="absolute top-2 right-14 z-30 text-white bg-black/50 p-1 rounded-full cursor-pointer">
            <BsThreeDots size={18} onClick={() => setIsDeleteOpen(true)} />
          </span>
        )}

        {postImage?.length === 1 &&
        /\.(mp4|mov|webm|mkv)$/i.test(postImage[0]) ? (
          <VideoPlayer src={postImage[0]} />
        ) : (
          <Carousel className="w-full max-w-[400px]">
            <CarouselContent>
              {postImage?.map((post_image, index) => (
                <CarouselItem key={index}>
                  <Card className="p-1 rounded-none bg-[black] border-gray-800">
                    <img
                      className="object-cover w-full"
                      src={post_image}
                      alt={`post_image_${index + 1}`}
                    />
                    <span className="text-xs bg-black/60 px-2 py-1 mt-2 ml-2 text-white absolute">
                      {index + 1}/{postImage?.length}
                    </span>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black transition" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black transition" />
          </Carousel>
        )}
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <button onClick={toogleLike} disabled={loading}>
              {liked ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-white text-xl" />
              )}
            </button>
            <p className="text-xs text-white mt-1">
              {likesCount}{" "}
              {likesCount === 1 || likesCount === 0 ? "Like" : "Likes"}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaRegComment
              className="text-white text-xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            <p className="text-xs text-white mt-1">
              {countAllComments(comments)}{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4 text-sm sm:text-base">
        <span className="font-semibold mr-2">{userName}</span>
        {caption && (
          <p className="text-sm text-white max-w-[250px]">
            {showFullCaption
              ? caption
              : `${caption.slice(0, 20)}${caption.length > 20 ? "..." : ""}`}
            {caption.length > 20 && (
              <button
                onClick={() => setShowFullCaption((prev) => !prev)}
                className="text-blue-400 ml-1"
              >
                {showFullCaption ? "less" : "more"}
              </button>
            )}
          </p>
        )}
      </div>

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
    </div>
  );
};

export default PostCard;
