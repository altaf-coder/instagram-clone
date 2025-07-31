"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./avatar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const RightsideBar = () => {
  const { data: currentUser } = useCurrentUser();
  const [users, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchedUsers = async () => {
      try {
        const res = await axios.get("/api/user/getallusers");
        setAllUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedUsers();
  }, []);

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
    <div className="w-full p-4 flex flex-col space-y-4">
      {/* Current User */}
      <div
        className="flex items-center gap-4 hover:cursor-pointer"
        onClick={() => router.push(`/profile/${currentUser.id}`)}
      >
        <div className="rounded-full bg-gray-300 overflow-hidden">
          <Avatar className="h-11 w-11">
            <AvatarImage
              className="w-11 h-11  object-cover rounded-full"
              src={currentUser?.image || "/images/profile.webp"}
            />
          </Avatar>
        </div>
        <span className="text-sm font-medium text-gray-300">
          {currentUser?.userName || currentUser?.name}
        </span>
      </div>

      {/* Suggested Title */}
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-3">
        Suggested Accounts
      </h2>
      {users.length === 0 && <p className="text-sm text-gray-500">No Users</p>}
      {/* Suggested Users */}
      {users.map((user: any) => {
        const isFollowing = currentUser?.followingIds.includes(user.id);
        return (
          <div
            key={user.id}
            className="flex items-center gap-4 hover:cursor-pointer"
          >
            <Avatar
              className="h-11 w-11"
              onClick={() => router.push(`/profile/${user.id}`)}
            >
              <AvatarImage
                className="rounded-full w-11 h-11 object-cover"
                src={user.image || "/images/profile.webp"}
              />
            </Avatar>
            <span
              className="text-sm font-medium text-gray-300"
              onClick={() => router.push(`/profile/${user.id}`)}
            >
              {user?.userName || user?.name}
            </span>
            <p
              onClick={
                isFollowing
                  ? () => unfollowUser(user.id)
                  : () => followUser(user.id)
              }
              className={` ${
                isFollowing
                  ? "text-gray-400 hover:text-gray-500 text-sm"
                  : "text-blue-600 hover:text-blue-700 text-sm"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RightsideBar;
