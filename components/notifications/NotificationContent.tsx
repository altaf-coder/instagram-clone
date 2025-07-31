"use client";

import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import useCurrentUser from "@/hooks/useCurrentUser";

interface NotificationContentProps {
  username: string;
  createdAt: string;
  src: string;
  body: string;
  id: string;
  postId?: string;
  commentId?: string;
  comment?: string;
}

const NotificationContent: React.FC<NotificationContentProps> = ({
  username,
  createdAt,
  src,
  body,
  id,
  postId,
  commentId,
  comment,
}) => {
  const linkHref = postId ? `/post/${postId}` : `/profile/${id}`;
  const [isFollowing, setIsFollowing] = useState(false);
  const { data: currentUser } = useCurrentUser();
  const Following = currentUser?.followingIds?.includes(id);
  const followUser = async () => {
    try {
      const response = await axios.post("/api/user/follow", {
        userId: id,
      });
      setIsFollowing(true);
      toast.success("Followed Back successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to follow user");
    }
  };

  const unfollowUser = async () => {
    try {
      const response = await axios.delete("/api/user/follow", {
        data: { userId: id },
      });
      setIsFollowing(false);
      toast.success("Unfollowed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to unfollow user");
    }
  };
  return (
    <div className="flex items-start space-x-3 mt-5">
      {/* Avatar */}
      <Link href={`/profile/${id}`}>
        <Avatar className={`h-11 w-11 ${!postId && "mt-0"} cursor-pointer`}>
          <AvatarImage className="rounded-full object-cover" src={src} />
        </Avatar>
      </Link>

      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <Link href={linkHref}>
            <div className="flex flex-wrap text-sm text-white pr-2">
              <span className="font-bold mr-1 cursor-pointer">{username}</span>

              <span className="cursor-pointer">{body}</span>
              {commentId && (
                <span className="cursor-pointer ml-1 text-amber-100">
                  {comment}
                </span>
              )}
            </div>
          </Link>

          {/* Button stays top-aligned right */}
          {!postId && (
            <Button
              onClick={isFollowing ? unfollowUser : followUser}
              size="sm"
              variant="default"
              className={`h-[30px] sm:h-[38px] ${
                isFollowing
                  ? "bg-gray-600 hover:bg-gray-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white text-sm sm:text-base px-4`}
            >
              {currentUser?.followingIds.includes(id) && isFollowing
                ? "Following"
                : "Follow Back"}
            </Button>
          )}
        </div>

        {/* Time */}
        <span className="text-gray-400 text-xs mt-1">
          · {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
};

export default NotificationContent;
