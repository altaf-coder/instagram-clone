"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaInstagram, FaUserCircle } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { BiLogOut, BiMoviePlay } from "react-icons/bi";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Modal from "./post/Modal";
import { MdMovie } from "react-icons/md";
import { Avatar, AvatarImage } from "./avatar";
import { MessageCircleIcon, MessageSquare } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import NotificationContent from "../notifications/NotificationContent";
import axios from "axios";

const LeftSideBarMessage = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  const { data: currentUser } = useCurrentUser();

  const [notifications, setNotifications] = useState([]);
  const [unRead, setUnRead] = useState(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0); // 🔹 Track unread chats count

  // Load notifications
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post("/api/user/getallnotifications");
        setNotifications(res.data);
        const unread = res.data.some((n: any) => !n.markRead);
        setUnRead(unread);
      } catch (error) {
        console.log(error);
      }
    })();
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
      setUnRead(false);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Function to reduce count when a chat is read
  const handleChatRead = () => {
    setUnreadMessagesCount((prev) => Math.max(prev - 1, 0));
  };

  const baseClass =
    "flex items-center gap-4 text-white hover:opacity-90 transition-colors duration-200";
  const iconSize = 26;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col p-6 h-screen bg-black fixed top-0 left-0 border-r border-gray-700">

        {/* Logo */}
        <div className="mb-10 ml-2">
          <FaInstagram size={30} className="text-white" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-8 ml-2 flex-grow">
          <Link href="/" className={baseClass}>
            {isActive("/") ? <AiFillHome size={iconSize} /> : <AiOutlineHome size={iconSize} />}
          </Link>

          <Link href="/reels" className={baseClass}>
            {isActive("/reels") ? <MdMovie size={iconSize} /> : <BiMoviePlay size={iconSize} />}
          </Link>
          <Link href="/messages" className={`${baseClass} relative`}>
            {isActive("/messages/:path*") ? (
              <MessageSquare size={iconSize} />
            ) : (
              <MessageCircleIcon className="fill-white" size={iconSize} />
            )}

            {unreadMessagesCount > 0 && (
              <span className="absolute -top-1 left-4 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                {unreadMessagesCount}
              </span>
            )}
          </Link>

          {/* Notifications */}
          <Sheet>
            <SheetTrigger asChild>
              <div className={`${baseClass} relative`} onClick={markRead}>
                <AiOutlineHeart size={iconSize} />
                {unRead && <span className="absolute top-0.5 right-44 bg-red-500 h-2 w-2 rounded-full" />}
              </div>
            </SheetTrigger>

            <SheetContent side="left" className="overflow-y-scroll">
              <SheetHeader>
                <SheetTitle className="text-white text-3xl font-bold">Notifications</SheetTitle>
                {notifications?.length === 0 && (
                  <span className="text-white text-xl font-semibold text-center">
                    No notifications
                  </span>
                )}
                {notifications?.map((n: any) => (
                  <NotificationContent
                    key={n?.id}
                    src={n?.sender?.image || "/images/profile.webp"}
                    username={n?.sender?.username}
                    body={n?.body}
                    createdAt={n?.createdAt}
                    id={n?.sender?.id}
                    postId={n?.post?.id}
                    comment={n?.comment?.body}
                    commentId={n?.comment?.id}
                  />
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className={baseClass} onClick={() => setIsOpen(true)}>
            <FiPlusSquare size={iconSize} />
          </div>

          <Link href={`/profile/${currentUser?.id}`} className={baseClass}>
            <Avatar className="h-7 w-7">
              <AvatarImage
                src={currentUser?.image || "/images/profile.webp"}
                alt="Profile"
                className="object-cover"
              />
            </Avatar>
          </Link>
        </div>

        {/* Logout */}
        <div className={`${baseClass} mt-auto ml-2 cursor-pointer`} onClick={() => signOut()}>
          <BiLogOut size={iconSize} color="red" />
          <span className="font-semibold">Logout</span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black flex justify-around items-center py-3">
        <Link href="/">{isActive("/") ? <AiFillHome size={iconSize} /> : <AiOutlineHome size={iconSize} />}</Link>
        <AiOutlineHeart size={iconSize} />
        <FiPlusSquare size={iconSize} onClick={() => setIsOpen(true)} />
        <Link href={`/profile/${currentUser?.id}`}>
          {isActive(`/profile/${currentUser?.id}`) ? <FaUserCircle size={iconSize} /> : <CgProfile size={iconSize} />}
        </Link>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LeftSideBarMessage;
