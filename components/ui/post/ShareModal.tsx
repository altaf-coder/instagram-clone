"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import { getSocket } from "@/lib/socket";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
}

interface User {
  id: string;
  name?: string;
  userName?: string;
  image?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, postId }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [sharing, setSharing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchMutualFollowers();
    } else {
      setSelectedUsers([]);
    }
  }, [isOpen]);

  const fetchMutualFollowers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/user/mutual-followers");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching mutual followers:", error);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const toggleUser = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleShare = async () => {
    if (selectedUsers.length === 0) {
      toast.error("Please select at least one user");
      return;
    }

    try {
      setSharing(true);
      const response = await axios.post("/api/post/share", {
        postId,
        userIds: selectedUsers,
      });
      
      // Emit messages via socket so they appear immediately in chat
      if (response.data.messages && Array.isArray(response.data.messages)) {
        const socket = getSocket();
        response.data.messages.forEach((msg: any) => {
          socket.emit("send-message", msg);
        });
      }
      
      toast.success(`Shared with ${selectedUsers.length} user(s)`);
      onClose();
      setSelectedUsers([]);
    } catch (error: any) {
      console.error("Error sharing post:", error);
      toast.error(error.response?.data?.error || "Failed to share post");
    } finally {
      setSharing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border sm:max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-foreground">Share Post</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Select users to share with (mutual followers only)
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-2 max-h-[400px] overflow-y-auto">
          {loading ? (
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </>
          ) : users.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              No mutual followers found
            </p>
          ) : (
            users.map((user) => {
              const isSelected = selectedUsers.includes(user.id);
              return (
                <motion.div
                  key={user.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected ? "bg-primary/10" : "hover:bg-muted"
                  }`}
                  onClick={() => toggleUser(user.id)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={user.image || "/images/profile.webp"}
                      alt={user.userName || user.name || "User"}
                    />
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {user.userName || user.name || "Unknown"}
                    </p>
                    {user.name && user.userName && (
                      <p className="text-xs text-muted-foreground">{user.name}</p>
                    )}
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-primary text-primary-foreground rounded-full p-1"
                    >
                      <Check className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })
          )}
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
            disabled={sharing}
          >
            Cancel
          </Button>
          <Button
            onClick={handleShare}
            className="flex-1"
            disabled={selectedUsers.length === 0 || sharing}
          >
            {sharing ? "Sharing..." : `Share (${selectedUsers.length})`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
