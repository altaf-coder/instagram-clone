"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter, useSearchParams } from "next/navigation";
import { io, Socket } from "socket.io-client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

interface MessageUserListProps {
  conversationId?: string;
}

interface Message {
  id: string;
  body: string;
  createdAt: string;
  senderId: string;
  seen: boolean;
  conversationId?: string;
  sharedPost?: any;
}

let socket: Socket; // 🆕 socket instance

const MessageUsersList: React.FC<MessageUserListProps> = ({ conversationId }) => {
  const [uniqueUsers, setUniqueUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeUserId = searchParams?.get("userId");
  const [latestMessages, setLatestMessages] = useState<Record<string, Message | null>>({});

  const [onlineUsers, setOnlineUsers] = useState<Set<string>>(new Set());

  // 🆕 Setup socket
  useEffect(() => {
    if (!currentUser?.id) return;

    fetch("/api/socket"); // boot server
    if (!socket) {
      socket = io({ path: "/api/socket_io" });
    }

    // listen for new messages
    const handleReceiveMessage = (msg: Message) => {
      if (!msg || !msg.senderId) return;

      // update the latest message for that user
      const otherUserId = msg.senderId === currentUser.id ? activeUserId : msg.senderId;

      setLatestMessages((prev) => ({
        ...prev,
        [otherUserId!]: msg,
      }));
    };

    // Track online users
    const handleUserOnline = (userId: string) => {
      if (userId !== currentUser.id) {
        setOnlineUsers((prev) => new Set(prev).add(userId));
      }
    };

    const handleUserOffline = (userId: string) => {
      setOnlineUsers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(userId);
        return newSet;
      });
    };

    socket.on("receive-message", handleReceiveMessage);
    socket.on("user-online", handleUserOnline);
    socket.on("user-offline", handleUserOffline);

    // Emit that current user is online
    socket.emit("user-online", currentUser.id);

    return () => {
      if (socket) {
        socket.off("receive-message", handleReceiveMessage);
        socket.off("user-online", handleUserOnline);
        socket.off("user-offline", handleUserOffline);
      }
    };
  }, [currentUser?.id, activeUserId]);

  // Fetch followers/following (default chat list)
  useEffect(() => {
    if (!currentUser) return;
    const fetchUsers = async () => {
      try {
        const res = await axios.post("/api/user/userbyid", { id: currentUser.id });
        const allUsers = [...(res.data.following || []), ...(res.data.followers || [])];
        const seen = new Set();
        const unique = allUsers.filter((user) => {
          if (seen.has(user.id)) return false;
          seen.add(user.id);
          return true;
        });
        setUniqueUsers(unique);
      } catch {
        setUniqueUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentUser]);

  // Fetch initial latest messages
  useEffect(() => {
    if (!currentUser || uniqueUsers.length === 0) return;

    const fetchLatestMessages = async () => {
      const messagesData: Record<string, Message | null> = {};

      for (const user of uniqueUsers) {
        try {
          const res = await axios.post("/api/messages/getLatestMessage", {
            user1Id: currentUser.id,
            user2Id: user.id,
          });
          messagesData[user.id] = res.data || null;
        } catch {
          messagesData[user.id] = null;
        }
      }

      setLatestMessages(messagesData);
    };

    fetchLatestMessages();
  }, [uniqueUsers, currentUser]);

  // Sort users by latest message time
  const sortedUsers = [...uniqueUsers].sort((a, b) => {
    const msgA = latestMessages[a.id];
    const msgB = latestMessages[b.id];
    
    if (!msgA && !msgB) return 0;
    if (!msgA) return 1;
    if (!msgB) return -1;
    
    return new Date(msgB.createdAt).getTime() - new Date(msgA.createdAt).getTime();
  });

  // Handle search
  const handleSearch = async (q: string) => {
    setSearchQuery(q);
    if (!q.trim()) {
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    try {
      const res = await axios.post("/api/user/searchusers", { query: q });
      setSearchResults(res.data);
    } catch (err) {
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleUserClick = async (otherUserId: string, user: any) => {
    if (!currentUser?.id || !otherUserId) return;

    try {
      const res = await axios.post("/api/conversation/createconversation", {
        user1Id: currentUser.id,
        user2Id: otherUserId,
      });
      const conversationIdFromAPI = res.data.id;

      await axios.post("/api/messages/seen", {
        conversationId: conversationIdFromAPI,
        senderId: otherUserId,
      });

      router.push(
        `/messages?conversationId=${conversationIdFromAPI}&userId=${user.id}&name=${encodeURIComponent(
          user.name || user.userName
        )}&image=${encodeURIComponent(user.image || "")}`
      );

      setLatestMessages((prev) => ({
        ...prev,
        [user.id]: prev[user.id] ? { ...prev[user.id]!, seen: true } : prev[user.id],
      }));
    } catch (error) {
      console.error("Error creating conversation or marking seen:", error);
    }
  };

  const getMessagePreview = (msg: Message | null) => {
    if (!msg) return "No messages yet";
    if (msg.sharedPost) {
      return `📷 Shared a ${msg.sharedPost.type === "POST" ? "post" : "reel"}`;
    }
    return msg.body || "Sent a message";
  };

  return (
    <div className="h-[100dvh] bg-background text-foreground overflow-y-auto w-full scrollbar-hide">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border p-3 sm:p-4 backdrop-blur-sm bg-background/95">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Avatar className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0">
            <AvatarImage
              src={currentUser?.image || "/images/profile.webp"}
              alt={currentUser?.userName || currentUser?.name}
              className="object-cover"
            />
          </Avatar>
          <div className="flex-1 min-w-0">
            <h2 className="text-base sm:text-lg font-semibold text-foreground truncate">
              {currentUser?.userName || currentUser?.name}
            </h2>
            <p className="text-xs text-muted-foreground">Messages</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search messages..."
            className="pl-10 bg-muted/50 border-border focus:bg-background transition-colors"
          />
        </div>
      </div>

      {/* User List */}
      <div className="p-2 sm:p-3 pb-4">
        {searchQuery.trim() ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground px-2 mb-2">
              Search Results
            </h3>
            {searchLoading ? (
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>
            ) : searchResults.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-4">
                No users found
              </p>
            ) : (
              searchResults
                .filter((user: any) => user.id !== currentUser?.id)
                .map((user: any) => (
                  <motion.div
                    key={user.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                    onClick={() => handleUserClick(user.id, user)}
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={user.image || "/images/profile.webp"}
                        alt={user.userName || user.name}
                      />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {user.userName || user.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.name && user.userName ? user.name : "Tap to message"}
                      </p>
                    </div>
                  </motion.div>
                ))
            )}
          </div>
        ) : (
          <>
            <h3 className="text-sm font-semibold text-muted-foreground px-2 mb-2">
              Messages
            </h3>
            {loading ? (
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>
            ) : uniqueUsers.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-sm">No conversations yet</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Start a conversation with someone you follow
                </p>
              </div>
            ) : (
              <div className="space-y-0.5">
                {sortedUsers.map((user, index) => {
                  const latest = latestMessages[user.id];
                  const isUnseen =
                    latest && latest.senderId !== currentUser?.id && !latest.seen;
                  const isActive = user.id === activeUserId;
                  const isOnline = onlineUsers.has(user.id);

                  return (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.005 }}
                      whileTap={{ scale: 0.995 }}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        isActive
                          ? "bg-primary/10 border-l-2 border-primary"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => handleUserClick(user.id, user)}
                    >
                      <div className="relative flex-shrink-0">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={user.image || "/images/profile.webp"}
                            alt={user.userName || user.name}
                            className="object-cover"
                          />
                        </Avatar>
                        {/* Online status indicator */}
                        {isOnline && (
                          <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-background" />
                        )}
                        {/* Unread message indicator */}
                        {isUnseen && (
                          <span className="absolute -top-1 -right-1 bg-primary h-5 w-5 rounded-full border-2 border-background flex items-center justify-center">
                            <span className="text-[10px] text-primary-foreground font-bold">
                              {latest && latest.senderId !== currentUser?.id && !latest.seen ? 1 : ""}
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <p
                            className={`text-sm font-semibold truncate ${
                              isUnseen ? "text-foreground" : "text-foreground"
                            }`}
                          >
                            {user.userName || user.name}
                          </p>
                          {latest && (
                            <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                              {formatDistanceToNow(new Date(latest.createdAt), {
                                addSuffix: true,
                              })
                                .replace("about ", "")
                                .replace("less than a minute ago", "now")}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-xs truncate ${
                            isUnseen
                              ? "text-foreground font-semibold"
                              : "text-muted-foreground"
                          }`}
                        >
                          {getMessagePreview(latest)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MessageUsersList;
