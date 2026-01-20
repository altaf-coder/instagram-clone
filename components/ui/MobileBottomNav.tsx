"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";
import Modal from "./post/Modal";
import {
  Home,
  Film,
  Send,
  PlusSquare,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";

const MobileBottomNav = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  const { data: currentUser } = useCurrentUser();
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);
  const iconSize = 24;

  // Fetch unread messages count
  useEffect(() => {
    if (!currentUser?.id) return;

    const fetchUnreadCount = async () => {
      try {
        const res = await axios.get("/api/messages/unread-count");
        setUnreadMessagesCount(res.data.unreadCount || 0);
      } catch (error) {
        console.error("Error fetching unread count:", error);
      }
    };

    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 30000);
    return () => clearInterval(interval);
  }, [currentUser?.id]);


  // Don't show on auth pages
  if (pathname?.startsWith("/auth")) {
    return null;
  }

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-t border-border flex justify-around items-center py-2.5 px-2 safe-area-inset-bottom">
        <Link href="/" className="flex flex-col items-center gap-1">
          <motion.div whileTap={{ scale: 0.9 }}>
            {isActive("/") ? (
              <Home size={iconSize} className="text-foreground fill-foreground" />
            ) : (
              <Home size={iconSize} className="text-foreground" />
            )}
          </motion.div>
        </Link>

        <Link href="/reels" className="flex flex-col items-center gap-1">
          <motion.div whileTap={{ scale: 0.9 }}>
            {isActive("/reels") ? (
              <Film size={iconSize} className="text-foreground fill-foreground" />
            ) : (
              <Film size={iconSize} className="text-foreground" />
            )}
          </motion.div>
        </Link>

        <Link href="/messages" className="flex flex-col items-center gap-1 relative">
          <motion.div whileTap={{ scale: 0.9 }}>
            {isActive("/messages") ? (
              <Send size={iconSize} className="text-foreground fill-foreground" />
            ) : (
              <Send size={iconSize} className="text-foreground" />
            )}
          </motion.div>
          {unreadMessagesCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-background z-10">
              {unreadMessagesCount > 9 ? "9+" : unreadMessagesCount}
            </span>
          )}
        </Link>

        <motion.div whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="flex flex-col items-center gap-1">
          <PlusSquare size={iconSize} className="text-foreground" />
        </motion.div>

        <Link href={`/profile/${currentUser?.id}`} className="flex flex-col items-center gap-1">
          <motion.div whileTap={{ scale: 0.9 }}>
            {isActive(`/profile/${currentUser?.id}`) ? (
              <User size={iconSize} className="text-foreground fill-foreground" />
            ) : (
              <User size={iconSize} className="text-foreground" />
            )}
          </motion.div>
        </Link>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MobileBottomNav;
