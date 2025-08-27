"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Button } from "@/components/ui/button";
import MessageUsersList from "@/components/messages/MessageUserList";
import { io, Socket } from "socket.io-client";   // 🆕 import socket client

let socket: Socket; // 🆕 declare socket instance

const Page = () => {
  interface Message {
    id: string;
    body: string;
    createdAt: string;
    senderId: string;
    conversationId : string
  }

  const searchParams = useSearchParams();
  const name = searchParams?.get("name");
  const image = searchParams?.get("image");
  const userId = searchParams?.get("userId");
  const conversationId = searchParams?.get("conversationId");

  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState<Message[]>([]);
  const { data: currentUser } = useCurrentUser();

  // 🆕 Setup socket connection
  useEffect(() => {
    // ensure API socket is started
    fetch("/api/socket");

    socket = io({
      path: "/api/socket_io",
    });

    // 🆕 listen for incoming messages
    socket.on("receive-message", (newMsg: Message) => {
      if (newMsg.conversationId === conversationId) {
        setUserMessage((prev) => {
          if (prev.find((m) => m.id === newMsg.id)) return prev; // already exists
          return [...prev, newMsg];
        });
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [conversationId]);

  const handleSend = async () => {
    if (!message.trim() || !conversationId || !currentUser?.id) return;

    try {
      // save message in DB (so it's persisted)
      const response = await axios.post("/api/messages/sendmessages", {
        conversationId,
        senderId: currentUser.id,
        body: message,
        receiverId: userId,
        media: null,
      });

      const savedMessage = response.data;

      // 🆕 emit to socket server
      socket.emit("send-message", savedMessage);

      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Load old messages once
  useEffect(() => {
    if (!conversationId) return;

    (async () => {
      try {
        const response = await axios.post("/api/messages/getmessages", {
          conversationId,
        });
        setUserMessage(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    })();
  }, [conversationId]);

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen bg-black z-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex bg-black">
      <div className="border-r border-gray-700 bg-gray-900 overflow-y-auto min-w-[280px] max-w-[320px] w-full">
        <MessageUsersList conversationId={conversationId!} />
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="flex-1 flex flex-col bg-black">
        {!conversationId ? (
          <div className="h-full flex flex-col justify-center items-center text-center">
            <Button className="bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold">Select Conversation</Button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-700 bg-black sticky top-0 z-10">
              <img
                src={image || "/images/profile.webp"}
                alt={name || "User"}
                className="w-12 h-12 rounded-full object-cover border border-gray-700"
              />
              <span className="text-white text-lg font-semibold">{name}</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-2 py-4 space-y-2 bg-black">
              {userMessage.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                userMessage.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.senderId === currentUser?.id ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-xs break-words shadow-md ${
                        msg.senderId === currentUser?.id
                          ? "bg-gradient-to-br from-blue-600 to-blue-400 text-white"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {msg.body}
                      <div className="text-xs text-gray-400 mt-1 text-right">
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Message input */}
            <div className="p-4 border-t border-gray-700 bg-black flex items-center gap-2 sticky bottom-0">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-all font-semibold"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
