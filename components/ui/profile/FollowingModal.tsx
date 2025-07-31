"use client";

import React from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { Avatar, AvatarImage } from "../avatar";
import { Button } from "../button";
import toast from "react-hot-toast";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";

interface FollowingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  name: string;
  username: string;
  image: string;
  id?: string;
  userId?: string;
}

const FollowingsModal: React.FC<FollowingsModalProps> = ({
  isOpen,
  onClose,
  label,
  name,
  username,
  image,
  id,
  userId,
}) => {
  const { data: currentUser } = useCurrentUser();
  const followUser = async () => {
    try {
      const response = await axios.post("/api/user/follow", {
        userId: id,
      });

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
        data: { userId: id }, // axios allows sending body with DELETE like this
      });
      toast.success("Unfollowed successfully!");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to unfollow user");
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background with reduced opacity */}
          <div
            className="fixed inset-0 bg-black opacity-30"
            onClick={onClose}
          />

          {/* Modal content */}
          <div className="relative z-50 bg-[#333] w-full max-w-md max-h-[200vh] rounded-xl shadow-xl overflow-y-auto">
            <div className="p-4 pt-6 border-b border-gray-600 relative">
              <h2 className="text-lg font-bold text-center absolute left-1/2 top-2 transform -translate-x-1/2">
                {label}
              </h2>
              <button onClick={onClose} className="absolute right-4 top-4">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-11 h-11">
                    <AvatarImage
                      className="rounded-full object-cover"
                      src={image}
                    />
                  </Avatar>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-gray-400 text-sm">@{username}</p>
                  </div>
                </div>
                {currentUser?.id !== id && (
                  <Button
                    onClick={() =>
                      currentUser?.followingIds?.includes(id)
                        ? unfollowUser()
                        : followUser()
                    }
                    className={`w-32 ${
                      currentUser?.followingIds?.includes(id)
                        ? ""
                        : "bg-blue-500"
                    }`}
                  >
                    {currentUser?.followingIds?.includes(id)
                      ? "Following"
                      : "Follow"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default FollowingsModal;
