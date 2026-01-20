"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Modal from "./post/Modal";
import { Avatar, AvatarImage } from "./avatar";
import {
  Home,
  Film,
  Send,
  Bell,
  PlusSquare,
  LogOut,
  User,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import NotificationContent from "../notifications/NotificationContent";
import { ThemeToggle } from "@/components/theme-toggle";
import axios from "axios";

const LeftSideBarMessage = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  const { data: currentUser } = useCurrentUser();

  const [notifications, setNotifications] = useState([]);
  const [unRead, setUnRead] = useState(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0); // 🔹 Track unread chats count

  // Fetch notifications function
  const fetchNotifications = async () => {
    try {
      const res = await axios.post("/api/user/getallnotifications");
      setNotifications(res.data);
      const unread = res.data.some((n: any) => !n.markRead);
      setUnRead(unread);
    } catch (error) {
      console.log(error);
    }
  };

  // Load notifications
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Load unread messages count
  useEffect(() => {
    if (!currentUser?.id) return;

    (async () => {
      try {
        // Fetch all unique users this person has chats with
        const res = await axios.post("/api/user/userbyid", { id: currentUser.id });
        const allUsers = [...(res.data.following || []), ...(res.data.followers || [])];
        const seenSet = new Set();
        const uniqueUsers = allUsers.filter((u: any) => {
          if (seenSet.has(u.id)) return false;
          seenSet.add(u.id);
          return true;
        });

        // For each user, fetch latest message
        let count = 0;
        for (const user of uniqueUsers) {
          const msgRes = await axios.post("/api/messages/getLatestMessage", {
            user1Id: currentUser.id,
            user2Id: user.id,
          });

          const latest = msgRes.data;
          if (latest && latest.senderId !== currentUser.id && !latest.seen) {
            count++;
          }
        }
        setUnreadMessagesCount(count);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentUser]);

  const markRead = async () => {
    try {
      await axios.post("/api/user/markreadnotifications");
      // Refresh notifications after marking as read
      const res = await axios.post("/api/user/getallnotifications");
      setNotifications(res.data);
      const unread = res.data.some((n: any) => !n.markRead);
      setUnRead(unread);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Function to reduce count when a chat is read
  const handleChatRead = () => {
    setUnreadMessagesCount((prev) => Math.max(prev - 1, 0));
  };


  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:flex flex-col items-center p-4 h-screen bg-background fixed top-0 left-0 border-r border-border w-16"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex items-center justify-center"
        >
          <Instagram size={24} className="text-foreground" />
        </motion.div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1 flex-grow w-full">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors">
              <Home
                size={24}
                className={`text-foreground ${isActive("/") ? "fill-foreground" : ""}`}
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/reels" className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors">
              <Film
                size={24}
                className={`text-foreground ${isActive("/reels") ? "fill-foreground" : ""}`}
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <Link href="/messages" className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors relative">
              <Send
                size={24}
                className={`text-foreground ${isActive("/messages") ? "fill-foreground" : ""}`}
              />
              {unreadMessagesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-background z-10">
                  {unreadMessagesCount > 9 ? "9+" : unreadMessagesCount}
                </span>
              )}
            </Link>
          </motion.div>

          {/* Notifications */}
          <Sheet onOpenChange={(open) => {
            if (open) {
              fetchNotifications();
            }
          }}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors cursor-pointer relative"
                onClick={markRead}
              >
                <Bell size={24} className="text-foreground" />
                {unRead && (
                  <span className="absolute top-1 right-1 bg-red-500 h-2 w-2 rounded-full border border-background" />
                )}
              </motion.div>
            </SheetTrigger>

            <SheetContent side="left" className="overflow-y-auto bg-background border-border">
              <SheetHeader>
                <SheetTitle className="text-foreground text-2xl font-bold">
                  Notifications
                </SheetTitle>
                {notifications?.length === 0 && (
                  <span className="text-foreground text-lg font-semibold text-center block mt-4">
                    No notifications
                  </span>
                )}
                <div className="mt-4 space-y-2">
                  {notifications?.map((n: any) => (
                    <NotificationContent
                      key={n?.id}
                      src={n?.sender?.image || "/images/profile.webp"}
                      username={n?.sender?.userName || n?.sender?.name || "User"}
                      body={n?.body}
                      createdAt={n?.createdAt}
                      id={n?.sender?.id}
                      postId={n?.post?.id}
                      comment={n?.comment?.body}
                      commentId={n?.comment?.id}
                      type={n?.type}
                    />
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <PlusSquare size={24} className="text-foreground" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/profile/${currentUser?.id}`}
              className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={currentUser?.image || "/images/profile.webp"}
                  alt="Profile"
                  className="object-cover"
                />
              </Avatar>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto space-y-1 w-full">
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors cursor-pointer text-destructive"
            onClick={() => signOut()}
          >
            <LogOut size={24} />
          </motion.div>
        </div>
      </motion.div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LeftSideBarMessage;
