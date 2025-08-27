"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter, useSearchParams } from "next/navigation";
import { io, Socket } from "socket.io-client"; // 🆕 import socket

interface MessageUserListProps {
  conversationId?: string;
}

interface Message {
  id: string;
  body: string;
  createdAt: string;
  senderId: string;
  seen: boolean;
  conversationId?: string; // 🆕 add because socket emits conversationId too
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

  // 🆕 Setup socket
  useEffect(() => {
    fetch("/api/socket"); // boot server
    socket = io({ path: "/api/socket_io" });

    // listen for new messages
    socket.on("receive-message", (msg: Message) => {
      if (!msg || !msg.senderId) return;

      // update the latest message for that user
      const otherUserId = msg.senderId === currentUser?.id ? activeUserId : msg.senderId;

      setLatestMessages((prev) => ({
        ...prev,
        [otherUserId!]: msg,
      }));
    });

    return () => {
      socket.disconnect();
    };
  }, [currentUser, activeUserId]);

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

  return (
    <div className="h-screen bg-black text-white overflow-y-auto w-full max-w-[400px]">
      <h2 className="text-xl text-center font-bold mb-4 mt-4">
        {currentUser?.userName || currentUser?.name}
      </h2>

      {/* 🔍 Search Input */}
      <div className="px-3 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 rounded-lg bg-[#333] text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Show search results if searching */}
      {searchQuery.trim() ? (
        // ... unchanged search UI
        <></>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-4 px-3">Chats</h2>
          {loading ? (
            <div className="px-3">Loading...</div>
          ) : (
            <ul>
              {uniqueUsers.map((user) => {
                const latest = latestMessages[user.id];
                const isUnseen =
                  latest && latest.senderId !== currentUser?.id && !latest.seen;

                return (
                  <li
                    key={user.id}
                    className={`mb-2 cursor-pointer p-2 rounded flex items-center gap-3 ${
                      user.id === activeUserId ? "bg-[#333]" : "hover:bg-[#554f4f]"
                    }`}
                    onClick={() => handleUserClick(user.id, user)}
                  >
                    <img
                      src={user.image || "/images/profile.webp"}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-700"
                    />
                    <div className="flex flex-col">
                      <span className="text-gray-300">{user.name}</span>
                      {latest ? (
                        <span
                          className={
                            isUnseen ? "font-bold text-white" : "font-normal text-gray-400"
                          }
                        >
                          {latest.body}
                        </span>
                      ) : (
                        <span className="text-gray-500 text-sm italic">
                          No messages yet
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default MessageUsersList;
