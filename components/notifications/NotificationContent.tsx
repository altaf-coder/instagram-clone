"use client";

import React, { useState, useEffect } from "react";
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
  type?: string; // Notification type (FOLLOW, LIKE, COMMENT, etc.)
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
  type,
}) => {
  const linkHref = postId ? `/post/${postId}` : `/profile/${id}`;
  const { data: currentUser, mutate } = useCurrentUser();
  
  // Check if user is following based on currentUser's followingIds
  const isCurrentlyFollowing = currentUser?.followingIds?.includes(id) || false;
  const [isFollowing, setIsFollowing] = useState(isCurrentlyFollowing);
  
  // Update local state when currentUser changes
  useEffect(() => {
    setIsFollowing(currentUser?.followingIds?.includes(id) || false);
  }, [currentUser?.followingIds, id]);

  // Only show follow button for FOLLOW type notifications and if not already following
  const showFollowButton = type === "FOLLOW" && !postId && !isFollowing;

  const followUser = async () => {
    try {
      const response = await axios.post("/api/user/follow", {
        userId: id,
      });
      
      // Update local state
      setIsFollowing(true);
      
      // Refresh current user data to get updated followingIds
      if (mutate) {
        mutate();
      }
      
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
        data: { userId: id },
      });
      
      // Update local state
      setIsFollowing(false);
      
      // Refresh current user data to get updated followingIds
      if (mutate) {
        mutate();
      }
      
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
        <div className="flex justify-between w-full items-start gap-2">
          <Link href={linkHref} className="flex-1 min-w-0">
            <div className="flex flex-wrap text-sm text-foreground pr-2">
              <span className="font-bold mr-1 cursor-pointer hover:opacity-80">{username}</span>
              <span className="cursor-pointer">{body}</span>
              {commentId && (
                <span className="cursor-pointer ml-1 text-muted-foreground">
                  {comment}
                </span>
              )}
            </div>
          </Link>

          {/* Follow Back Button - Only show for FOLLOW notifications when not already following */}
          {showFollowButton && (
            <Button
              onClick={followUser}
              size="sm"
              variant="default"
              className="h-[30px] sm:h-[38px] bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base px-4 flex-shrink-0"
            >
              Follow Back
            </Button>
          )}
          
          {/* Following Button - Show when already following */}
          {type === "FOLLOW" && !postId && isFollowing && (
            <Button
              onClick={unfollowUser}
              size="sm"
              variant="secondary"
              className="h-[30px] sm:h-[38px] bg-muted hover:bg-muted/80 text-foreground text-sm sm:text-base px-4 flex-shrink-0"
            >
              Following
            </Button>
          )}
        </div>

        {/* Time */}
        <span className="text-muted-foreground text-xs mt-1">
          · {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
};

export default NotificationContent;
