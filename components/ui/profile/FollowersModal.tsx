"use client";

import React from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Avatar, AvatarImage } from "../avatar";
import { Button } from "../button";
import toast from "react-hot-toast";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  userName: string;
  image: string;
}

interface FollowModalProps {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  users: User[];
}

const FollowModal: React.FC<FollowModalProps> = ({
  isOpen,
  onClose,
  label,
  users,
}) => {
  const { data: currentUser, mutate } = useCurrentUser();
  const router = useRouter();

  const followUser = async (userId: string) => {
    try {
      await axios.post("/api/user/follow", { userId });
      toast.success("Followed successfully!");
      mutate(); // update currentUser
    } catch (error) {
      toast.error("Failed to follow user");
    }
  };

  const unfollowUser = async (userId: string) => {
    try {
      await axios.delete("/api/user/follow", {
        data: { userId },
      });
      toast.success("Unfollowed successfully!");
      mutate(); // update currentUser
    } catch (error) {
      toast.error("Failed to unfollow user");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background */}
          <div
            className="fixed inset-0 bg-black opacity-30"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="relative z-50 bg-[#333] w-full max-w-md max-h-[90vh] rounded-xl shadow-xl overflow-y-auto">
            <div className="p-4 pt-6 border-b border-gray-600 relative">
              <h2 className="text-lg font-bold text-center absolute left-1/2 top-2 transform -translate-x-1/2">
                {label}
              </h2>
              <button onClick={onClose} className="absolute right-4 top-4">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {users.length === 0 && null}

              {users?.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Avatar
                      className="w-11 h-11"
                      onClick={() => router.push(`/profile/${user.id}`)}
                    >
                      <AvatarImage
                        className="rounded-full object-cover"
                        src={user.image || "/images/profile.webp"}
                      />
                    </Avatar>
                    <div onClick={() => router.push(`/profile/${user.id}`)}>
                      <p className="font-bold">{user.name}</p>
                      <p className="text-gray-400 text-sm">@{user.userName}</p>
                    </div>
                  </div>
                  {currentUser?.id !== user.id && (
                    <Button
                      onClick={() =>
                        currentUser?.followingIds?.includes(user.id)
                          ? unfollowUser(user.id)
                          : followUser(user.id)
                      }
                      className={`w-28 ${
                        currentUser?.followingIds?.includes(user.id)
                          ? "bg-gray-600 hover:bg-gray-700"
                          : "bg-blue-500"
                      }`}
                    >
                      {currentUser?.followingIds?.includes(user.id)
                        ? "Following"
                        : "Follow"}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default FollowModal;
