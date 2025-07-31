"use client";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/navigation";
import CommentCard from "../ui/comment/CommentCard";
import DeletePostModal from "../ui/post/DeletePostModal";
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
import toast from "react-hot-toast";

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
  const [isFollowing, setIsFollowing] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  useEffect(() => {
    axios
      .post("/api/comment/commentbypostid", { postId: id })
      .then((res) => setComments(res.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (likedBy?.includes(currentUser!)) setLiked(true);
  }, [currentUser, likedBy]);

  const toogleLike = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/like", { id });
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
    <div className="w-full h-screen bg-black text-white overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {postImage?.length === 1 &&
            /\.(mp4|mov|webm|mkv)$/i.test(postImage[0]) && (
              <CarouselItem className="w-full h-full">
                <Card className="w-full h-full bg-black border-none rounded-none py-20  px-0 relative flex items-center justify-center">
                  <VideoPlayer src={postImage[0]} />

                  {/* Bottom-left Profile Info */}
                  <div className="absolute bottom-10 left-34 z-30 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={image || "/images/profile.webp"}
                        alt="Profile"
                        onClick={() => router.push(`/profile/${userId}`)}
                        className="w-10 h-10 rounded-full object-cover cursor-pointer"
                      />
                      <span
                        className="font-semibold cursor-pointer text-white"
                        onClick={() => router.push(`/profile/${userId}`)}
                      >
                        {userName}
                      </span>
                      {currentUserId?.id !== userId ? (
                        <button
                          className="text-sm bg-white text-black px-3 py-1 rounded-full"
                          onClick={Following ? unfollowUser : followUser}
                        >
                          {Following ? "Unfollow" : "Follow"}
                        </button>
                      ) : (
                        <button
                          className="text-sm bg-white text-black px-3 py-1 rounded-full"
                          onClick={() => router.push(`/profile/${userId}`)}
                        >
                          You
                        </button>
                      )}
                    </div>
                    {caption && (
                      <p className="text-sm text-white max-w-[250px]">
                        {showFullCaption
                          ? caption
                          : `${caption.slice(0, 20)}${
                              caption.length > 20 ? "..." : ""
                            }`}
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

                  {/* Bottom-right Likes + Comments */}
                  <div className="absolute bottom-32 right-4 z-30 flex flex-col items-center gap-2">
                    <button onClick={toogleLike} disabled={loading}>
                      {liked ? (
                        <FaHeart className="text-red-500 text-2xl" />
                      ) : (
                        <FaRegHeart className="text-white text-2xl" />
                      )}
                    </button>
                    <span className="text-xs text-white">{likesCount}</span>

                    <FaRegComment
                      onClick={() => setIsOpen(true)}
                      className="text-white text-2xl cursor-pointer"
                    />
                    <span className="text-xs text-white">
                      {countAllComments(comments)}
                    </span>
                    {deletePost && (
                      <span className=" text-white  p-2 rounded-full cursor-pointer">
                        <BsThreeDots
                          size={20}
                          onClick={() => setIsDeleteOpen(true)}
                        />
                      </span>
                    )}
                  </div>
                </Card>
              </CarouselItem>
            )}
        </CarouselContent>
      </Carousel>
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
    </div>
  );
};

export default ReelCard;
