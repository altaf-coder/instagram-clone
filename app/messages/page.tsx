"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Button } from "@/components/ui/button";
import MessageUsersList from "@/components/messages/MessageUserList";
import SharedPostMessage from "@/components/ui/SharedPostMessage";
import EmojiPickerComponent from "@/components/ui/EmojiPicker";
import FileUploadButton from "@/components/ui/FileUploadButton";
import MediaMessage from "@/components/ui/MediaMessage";
import VoiceRecorder from "@/components/ui/VoiceRecorder";
import { io, Socket } from "socket.io-client";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Send, MoreVertical, Check, CheckCheck, ArrowLeft, File, X, Mic } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import CallButton from "@/components/ui/CallButton";

let socket: Socket;

interface Message {
  id: string;
  body: string;
  media?: string;
  createdAt: string;
  senderId: string;
  receiverId?: string;
  conversationId: string;
  seen?: boolean;
  delivered?: boolean;
  sharedPost?: any;
  reactions?: Array<{ emoji: string; user: { id: string; image?: string } }>;
  sender?: {
    id: string;
    name?: string;
    userName?: string;
    image?: string;
  };
}

const MessagesContent = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const searchParams = useSearchParams();
  const name = searchParams?.get("name");
  const image = searchParams?.get("image");
  const userId = searchParams?.get("userId");
  const conversationId = searchParams?.get("conversationId");

  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState<Message[]>([]);
  const [sending, setSending] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ url: string; type: string; name: string } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<{ url: string; type: string; name: string } | null>(null);
  const [showVoiceRecorder, setShowVoiceRecorder] = useState(false);
  const { data: currentUser } = useCurrentUser();

  // 🆕 Setup socket connection
  useEffect(() => {
    // ensure API socket is started
    fetch("/api/socket");

    socket = io({
      path: "/api/socket_io",
    });

    // 🆕 listen for incoming messages
    socket.on("receive-message", async (newMsg: Message) => {
      if (newMsg.conversationId === conversationId) {
        setUserMessage((prev) => {
          if (prev.find((m) => m.id === newMsg.id)) return prev; // already exists
          return [...prev, newMsg];
        });

        // Auto-mark as delivered if message is for current user
        if (newMsg.receiverId === currentUser?.id && !newMsg.delivered) {
          try {
            await axios.post("/api/messages/delivered", {
              messageIds: [newMsg.id],
              conversationId,
            });
            socket.emit("message-delivered", {
              messageIds: [newMsg.id],
              conversationId,
            });
            // Update local state
            setUserMessage((prev) =>
              prev.map((m) => (m.id === newMsg.id ? { ...m, delivered: true } : m))
            );
          } catch (error) {
            console.error("Error marking message as delivered:", error);
          }
        }

        // Auto-mark as seen if user is actively viewing
        if (newMsg.senderId === userId && newMsg.receiverId === currentUser?.id && !newMsg.seen) {
          setTimeout(async () => {
            try {
              await axios.post("/api/messages/seen", {
                conversationId,
                senderId: userId,
                messageIds: [newMsg.id],
              });
              socket.emit("message-seen", {
                messageIds: [newMsg.id],
                conversationId,
              });
              setUserMessage((prev) =>
                prev.map((m) => (m.id === newMsg.id ? { ...m, seen: true } : m))
              );
            } catch (error) {
              console.error("Error marking message as seen:", error);
            }
          }, 500);
        }
      }
    });

    // Listen for delivered status updates
    socket.on("message-delivered", (data: { messageIds: string[] }) => {
      setUserMessage((prev) =>
        prev.map((m) =>
          data.messageIds.includes(m.id) ? { ...m, delivered: true } : m
        )
      );
    });

    // Listen for seen status updates
    socket.on("message-seen", (data: { messageIds: string[] }) => {
      setUserMessage((prev) =>
        prev.map((m) =>
          data.messageIds.includes(m.id) ? { ...m, seen: true } : m
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [conversationId, currentUser?.id]);

  const handleFileSelected = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      setFilePreview(null);
      return;
    }

    setSelectedFile(file);
    
    // Create preview
    const fileType = file.type.startsWith("image/")
      ? "image"
      : file.type.startsWith("video/")
      ? "video"
      : "document";

    if (fileType === "image" || fileType === "video") {
      const url = URL.createObjectURL(file);
      setFilePreview({ url, type: fileType, name: file.name });
    } else {
      setFilePreview({ url: "", type: "document", name: file.name });
    }
  };

  const handleFileUploaded = (fileUrl: string, fileType: string, fileName: string) => {
    setUploadedFile({ url: fileUrl, type: fileType, name: fileName });
    // Clear preview after upload
    if (filePreview?.url && filePreview.url.startsWith("blob:")) {
      URL.revokeObjectURL(filePreview.url);
    }
    setFilePreview(null);
    setSelectedFile(null);
  };

  const handleVoiceRecordingComplete = async (audioBlob: Blob, duration: number) => {
    try {
      // Create FormData directly with blob
      const formData = new FormData();
      formData.append("file", audioBlob, `voice-${Date.now()}.webm`);

      const uploadResponse = await axios.post("/api/messages/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Send voice message
      if (conversationId && currentUser?.id && userId) {
        const response = await axios.post("/api/messages/sendmessages", {
          conversationId,
          senderId: currentUser.id,
          body: `Voice message (${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, "0")})`,
          receiverId: userId,
          media: uploadResponse.data.url,
        });

        const savedMessage = { ...response.data, delivered: false, seen: false };
        setUserMessage((prev) => [...prev, savedMessage]);
        socket.emit("send-message", savedMessage);

        // Mark as delivered
        setTimeout(async () => {
          try {
            await axios.post("/api/messages/delivered", {
              messageIds: [savedMessage.id],
              conversationId,
            });
            socket.emit("message-delivered", {
              messageIds: [savedMessage.id],
              conversationId,
            });
          } catch (error) {
            console.error("Error marking as delivered:", error);
          }
        }, 500);
      }

      setShowVoiceRecorder(false);
      toast.success("Voice message sent");
    } catch (error: any) {
      console.error("Error sending voice message:", error);
      toast.error("Failed to send voice message");
    }
  };

  const handleSend = async () => {
    // Wait for file upload to complete if file is selected but not yet uploaded
    if (selectedFile && !uploadedFile) {
      toast.loading("Please wait for file to upload...", { id: "upload-wait" });
      return;
    }

    if ((!message.trim() && !uploadedFile) || !conversationId || !currentUser?.id || sending) return;

    setSending(true);
    try {
      const response = await axios.post("/api/messages/sendmessages", {
        conversationId,
        senderId: currentUser.id,
        body: message || null,
        receiverId: userId,
        media: uploadedFile?.url || null,
      });

      const savedMessage = { ...response.data, delivered: false, seen: false };
      setUserMessage((prev) => [...prev, savedMessage]);
      socket.emit("send-message", savedMessage);
      setMessage("");
      setUploadedFile(null);
      if (filePreview?.url && filePreview.url.startsWith("blob:")) {
        URL.revokeObjectURL(filePreview.url);
      }
      setFilePreview(null);
      setSelectedFile(null);

      // Try to mark as delivered immediately (optimistic)
      // The receiver will confirm delivery via socket
      setTimeout(async () => {
        try {
          await axios.post("/api/messages/delivered", {
            messageIds: [savedMessage.id],
            conversationId,
          });
          socket.emit("message-delivered", {
            messageIds: [savedMessage.id],
            conversationId,
          });
        } catch (error) {
          console.error("Error marking as delivered:", error);
        }
      }, 500);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setMessage((prev) => prev + emoji);
  };

  const handleReaction = async (messageId: string, emoji: string) => {
    try {
      await axios.post("/api/messages/react", { messageId, emoji });
      // Refresh messages to get updated reactions
      const response = await axios.post("/api/messages/getmessages", {
        conversationId,
      });
      setUserMessage(response.data);
    } catch (error) {
      console.error("Error reacting to message:", error);
    }
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }, 100);
    });
  }, [userMessage.length, conversationId]);

  // Periodically mark messages as seen when user is actively viewing
  useEffect(() => {
    if (!conversationId || !currentUser?.id || !userId) return;

    const markAsSeen = async () => {
      const unseenMessageIds = userMessage
        .filter(
          (msg) =>
            msg.senderId === userId &&
            !msg.seen &&
            msg.receiverId === currentUser.id
        )
        .map((msg) => msg.id);

      if (unseenMessageIds.length > 0) {
        try {
          await axios.post("/api/messages/seen", {
            conversationId,
            senderId: userId,
            messageIds: unseenMessageIds,
          });
          socket.emit("message-seen", {
            messageIds: unseenMessageIds,
            conversationId,
          });
          setUserMessage((prev) =>
            prev.map((m) =>
              unseenMessageIds.includes(m.id) ? { ...m, seen: true } : m
            )
          );
        } catch (error) {
          console.error("Error marking messages as seen:", error);
        }
      }
    };

    // Mark as seen immediately and then every 2 seconds while viewing
    markAsSeen();
    const interval = setInterval(markAsSeen, 2000);

    return () => clearInterval(interval);
  }, [conversationId, currentUser?.id, userId, userMessage]);

  // Load old messages once and mark as seen
  useEffect(() => {
    if (!conversationId || !currentUser?.id || !userId) return;

    (async () => {
      try {
        const response = await axios.post("/api/messages/getmessages", {
          conversationId,
        });
        setUserMessage(response.data);

        // Mark messages from the other user as seen
        const unseenMessageIds = response.data
          .filter(
            (msg: Message) =>
              msg.senderId === userId && !msg.seen && msg.receiverId === currentUser.id
          )
          .map((msg: Message) => msg.id);

        if (unseenMessageIds.length > 0) {
          try {
            await axios.post("/api/messages/seen", {
              conversationId,
              senderId: userId,
              messageIds: unseenMessageIds,
            });
            // Emit seen status via socket
            socket.emit("message-seen", {
              messageIds: unseenMessageIds,
              conversationId,
            });
            // Update local state
            setUserMessage((prev) =>
              prev.map((m) =>
                unseenMessageIds.includes(m.id) ? { ...m, seen: true } : m
              )
            );
          } catch (error) {
            console.error("Error marking messages as seen:", error);
          }
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    })();
  }, [conversationId, currentUser?.id, userId]);

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh] bg-background z-50">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] flex bg-background flex-col lg:flex-row overflow-hidden">
      {/* LEFT SIDEBAR - User List */}
      <div className={`border-r border-border bg-card overflow-y-auto w-full h-full flex-shrink-0 transition-transform duration-300 ${
        conversationId ? "hidden lg:block lg:min-w-[320px] lg:max-w-[380px]" : "lg:min-w-[320px] lg:max-w-[380px]"
      }`}>
        <MessageUsersList conversationId={conversationId!} />
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="flex-1 flex flex-col bg-background min-w-0 w-full h-full min-h-0">
        {!conversationId ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-background to-muted/20"
          >
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <p className="text-muted-foreground text-lg font-medium">
                Select a conversation to start messaging
              </p>
              <p className="text-muted-foreground text-sm">
                Your messages will appear here
              </p>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border bg-card flex-shrink-0 z-10">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                {/* Mobile Back Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-9 w-9 -ml-2 flex-shrink-0"
                  onClick={() => router.push("/messages")}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Avatar className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0">
                  <AvatarImage
                    src={image || "/images/profile.webp"}
                    alt={name || "User"}
                    className="object-cover"
                  />
                </Avatar>
                <div className="min-w-0 flex-1">
                  <span className="text-foreground text-sm sm:text-base lg:text-lg font-semibold block truncate">
                    {name}
                  </span>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <span className="h-2 w-2 bg-green-500 rounded-full flex-shrink-0"></span>
                    Active now
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CallButton
                  userId={userId || ""}
                  userName={name || "User"}
                  userImage={image || undefined}
                  callType="audio"
                />
                <CallButton
                  userId={userId || ""}
                  userName={name || "User"}
                  userImage={image || undefined}
                  callType="video"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 flex-shrink-0">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Mute</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages - Scrollable Area */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 bg-background min-h-0">
              {userMessage.length === 0 ? (
                <div className="flex justify-center items-center h-full min-h-[200px]">
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-muted-foreground text-sm">Loading messages...</p>
                  </div>
                </div>
              ) : (
                <>
                  {userMessage.map((msg, index) => {
                    const isOwn = msg.senderId === currentUser?.id;
                    const showAvatar = index === 0 || userMessage[index - 1]?.senderId !== msg.senderId;

                    if (msg.sharedPost) {
                      return (
                        <SharedPostMessage
                          key={msg.id}
                          post={msg.sharedPost}
                          senderName={msg.sender?.userName || msg.sender?.name}
                          senderImage={msg.sender?.image}
                          isOwnMessage={isOwn}
                          messageId={msg.id}
                          reactions={msg.reactions}
                          onReaction={(emoji) => handleReaction(msg.id, emoji)}
                        />
                      );
                    }

                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className={`flex items-end gap-2 ${isOwn ? "justify-end" : "justify-start"}`}
                      >
                        {!isOwn && showAvatar && (
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage
                              src={msg.sender?.image || "/images/profile.webp"}
                              alt={msg.sender?.userName || msg.sender?.name}
                            />
                          </Avatar>
                        )}
                        {!isOwn && !showAvatar && <div className="w-8" />}
                        <div className={`flex flex-col max-w-[75%] sm:max-w-[70%] ${isOwn ? "items-end" : "items-start"}`}>
                          <div className="relative group">
                            {/* Media display */}
                          {msg.media && (
                            <div className="mb-2">
                              <MediaMessage
                                mediaUrl={msg.media}
                                mediaType={
                                  msg.media.match(/\.(jpg|jpeg|png|gif|webp)$/i)
                                    ? "image"
                                    : msg.media.match(/\.(mp4|mov|webm|mkv)$/i)
                                    ? "video"
                                    : msg.media.match(/\.(webm|mp3|wav|ogg|m4a)$/i)
                                    ? "audio"
                                    : "document"
                                }
                                fileName={msg.body || "File"}
                                isOwn={isOwn}
                                messageId={msg.id}
                              />
                            </div>
                          )}
                            {/* Text message */}
                            {msg.body && (
                              <div
                                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl break-words shadow-sm ${
                                  isOwn
                                    ? "bg-primary text-primary-foreground rounded-br-md"
                                    : "bg-muted text-foreground rounded-bl-md"
                                }`}
                              >
                                <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{msg.body}</p>
                              </div>
                            )}
                            {/* Reaction picker on hover - Desktop only */}
                            <div className={`hidden lg:block absolute ${isOwn ? "left-0" : "right-0"} bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-10`}>
                              <div className="flex gap-1 bg-card border border-border rounded-full px-2 py-1 shadow-lg">
                                {["❤️", "😂", "😮", "😢", "🙌", "🔥"].map((emoji) => (
                                  <button
                                    key={emoji}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleReaction(msg.id, emoji);
                                    }}
                                    className="text-lg hover:scale-125 transition-transform p-1"
                                  >
                                    {emoji}
                                  </button>
                                ))}
                              </div>
                            </div>
                            {/* Mobile: Long press for reactions */}
                            <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-active:opacity-100 transition-opacity z-10">
                              <div className="flex gap-1 bg-card border border-border rounded-full px-2 py-1 shadow-lg">
                                {["❤️", "😂", "😮"].map((emoji) => (
                                  <button
                                    key={emoji}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleReaction(msg.id, emoji);
                                    }}
                                    className="text-lg active:scale-125 transition-transform p-1"
                                  >
                                    {emoji}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-1 px-1">
                            <span className={`text-xs ${isOwn ? "text-muted-foreground" : "text-muted-foreground"}`}>
                              {new Date(msg.createdAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                            {/* Checkmark indicators for sent messages */}
                            {isOwn && (
                              <span className={`text-xs flex items-center ${
                                msg.seen 
                                  ? "text-blue-500" 
                                  : msg.delivered 
                                  ? "text-muted-foreground" 
                                  : "text-muted-foreground/50"
                              }`}>
                                {msg.seen ? (
                                  <CheckCheck className="h-4 w-4" />
                                ) : msg.delivered ? (
                                  <CheckCheck className="h-4 w-4" />
                                ) : (
                                  <Check className="h-4 w-4" />
                                )}
                              </span>
                            )}
                            {msg.reactions && msg.reactions.length > 0 && (
                              <div className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-full">
                                {msg.reactions.map((reaction, idx) => (
                                  <span key={idx} className="text-sm" title={`Reacted with ${reaction.emoji}`}>
                                    {reaction.emoji}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        {isOwn && showAvatar && (
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage
                              src={currentUser?.image || "/images/profile.webp"}
                              alt={currentUser?.userName || currentUser?.name}
                            />
                          </Avatar>
                        )}
                        {isOwn && !showAvatar && <div className="w-8" />}
                      </motion.div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Message input - Fixed at bottom */}
            <div className="p-3 sm:p-4 border-t border-border bg-card flex-shrink-0 pb-16 lg:pb-3 sm:pb-4 relative">
              {/* File Preview - Show before upload completes */}
              {(filePreview || uploadedFile) && (
                <div className="absolute bottom-full left-0 mb-2 p-3 bg-card border border-border rounded-lg shadow-lg max-w-xs z-10">
                  <div className="flex items-start gap-3">
                    {(filePreview || uploadedFile)?.type === "image" && (
                      <img 
                        src={(filePreview || uploadedFile)?.url} 
                        alt="Preview" 
                        className="w-20 h-20 object-cover rounded flex-shrink-0" 
                      />
                    )}
                    {(filePreview || uploadedFile)?.type === "video" && (
                      <video 
                        src={(filePreview || uploadedFile)?.url} 
                        className="w-20 h-20 object-cover rounded flex-shrink-0"
                        controls={false}
                      />
                    )}
                    {(filePreview || uploadedFile)?.type === "document" && (
                      <div className="w-20 h-20 bg-muted rounded flex items-center justify-center flex-shrink-0">
                        <File className="h-10 w-10 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate mb-1">{(filePreview || uploadedFile)?.name}</p>
                      {filePreview && !uploadedFile && (
                        <p className="text-xs text-muted-foreground">Ready to send</p>
                      )}
                      {uploadedFile && (
                        <p className="text-xs text-green-500">Uploaded</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 flex-shrink-0"
                      onClick={() => {
                        if (filePreview?.url && filePreview.url.startsWith("blob:")) {
                          URL.revokeObjectURL(filePreview.url);
                        }
                        setFilePreview(null);
                        setUploadedFile(null);
                        setSelectedFile(null);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <FileUploadButton 
                  onFileUploaded={handleFileUploaded}
                  onFileSelected={handleFileSelected}
                />
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-20 sm:pr-24 rounded-full bg-background text-foreground border border-border outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    disabled={sending}
                  />
                  {/* EmojiPicker inside input field */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <EmojiPickerComponent onEmojiClick={handleEmojiClick} />
                  </div>
                </div>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex-shrink-0"
                    onClick={() => setShowVoiceRecorder(!showVoiceRecorder)}
                    title="Record voice message"
                  >
                    <Mic className="h-5 w-5" />
                  </Button>
                  {showVoiceRecorder && (
                    <VoiceRecorder
                      onRecordingComplete={handleVoiceRecordingComplete}
                      onCancel={() => setShowVoiceRecorder(false)}
                    />
                  )}
                </div>
                <Button
                  onClick={handleSend}
                  disabled={(!message.trim() && !uploadedFile) || sending || !!(selectedFile && !uploadedFile)}
                  size="icon"
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-primary hover:bg-primary/90 flex-shrink-0 disabled:opacity-50"
                  title={selectedFile && !uploadedFile ? "Uploading file..." : "Send message"}
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[100dvh]">
        <div className="text-muted-foreground">Loading messages...</div>
      </div>
    }>
      <MessagesContent />
    </Suspense>
  );
};

export default Page;
