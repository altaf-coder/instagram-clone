"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./avatar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "./button";
import { motion } from "framer-motion";

const RightsideBar = () => {
  const { data: currentUser } = useCurrentUser();
  const [users, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchedUsers = async () => {
      try {
        const res = await axios.get("/api/user/getallusers");
        // Filter out current user just to be safe (API should already exclude it)
        const filteredUsers = res.data.filter(
          (user: any) => user.id !== currentUser?.id
        );
        setAllUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser?.id) {
      fetchedUsers();
    }
  }, [currentUser?.id]);

  const router = useRouter();
  const followUser = async (userId: string) => {
    try {
      const response = await axios.post("/api/user/follow", {
        userId,
      });

      toast.success("Followed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to follow user");
    }
  };

  const unfollowUser = async (userId: string) => {
    try {
      const response = await axios.delete("/api/user/follow", {
        data: { userId },
      });

      toast.success("Unfollowed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to unfollow user");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full p-4 flex flex-col space-y-4"
    >
      {/* Current User */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors"
        onClick={() => router.push(`/profile/${currentUser.id}`)}
      >
        <Avatar className="h-10 w-10">
          <AvatarImage
            className="object-cover rounded-full"
            src={currentUser?.image || "/images/profile.webp"}
          />
        </Avatar>
        <span className="text-sm font-medium text-foreground">
          {currentUser?.userName || currentUser?.name}
        </span>
      </motion.div>

      {/* Suggested Title */}
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-3 px-2">
        Suggested Accounts
      </h2>
      {users.length === 0 && (
        <p className="text-sm text-muted-foreground px-2">No Users</p>
      )}
      {/* Suggested Users */}
      {users
        .filter((user: any) => user.id !== currentUser?.id)
        .slice(0, 5)
        .map((user: any, index: number) => {
          const isFollowing = currentUser?.followingIds?.includes(user.id);
          return (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Avatar
                className="h-10 w-10 cursor-pointer"
                onClick={() => router.push(`/profile/${user.id}`)}
              >
                <AvatarImage
                  className="rounded-full object-cover"
                  src={user.image || "/images/profile.webp"}
                />
              </Avatar>
              <span
                className="text-sm font-medium text-foreground flex-1 cursor-pointer hover:opacity-80"
                onClick={() => router.push(`/profile/${user.id}`)}
              >
                {user?.userName || user?.name}
              </span>
              <Button
                variant={isFollowing ? "ghost" : "default"}
                size="sm"
                className="text-xs h-7 px-3"
                onClick={
                  isFollowing
                    ? () => unfollowUser(user.id)
                    : () => followUser(user.id)
                }
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </motion.div>
          );
        })}
    </motion.div>
  );
};

export default RightsideBar;
