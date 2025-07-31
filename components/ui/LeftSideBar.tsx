"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { BiLogOut, BiMoviePlay } from "react-icons/bi";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Modal from "./post/Modal";
import { MdMovie } from "react-icons/md";
import { Avatar, AvatarImage } from "./avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import NotificationContent from "../notifications/NotificationContent";
import axios from "axios";

const LeftSideBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: currentUser } = useCurrentUser();
  const [notifications, setNotifications] = React.useState([]);
  const [unRead, setunRead] = React.useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post("/api/user/getallnotifications");
        setNotifications(res.data);
        const unRead = res.data.some(
          (notification: any) => !notification.markRead
        );
        setunRead(unRead);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const markRead = async () => {
    try {
      await axios.post("/api/user/markreadnotifications");
      setunRead(false);
    } catch (error) {
      console.log(error);
    }
  };
  const baseClass =
    "flex items-center gap-4 text-white hover:opacity-90 transition-colors duration-200";
  const iconSize = 26;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col p-6 w-64 h-screen bg-black fixed top-0 left-0">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="w-33 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-8 ml-2 flex-grow">
          <Link href="/" className={baseClass}>
            {isActive("/") ? (
              <AiFillHome size={iconSize} />
            ) : (
              <AiOutlineHome size={iconSize} />
            )}
            <span className={isActive("/") ? "font-bold" : "font-normal"}>
              Home
            </span>
          </Link>
          <Link href="/reels" className={baseClass}>
            {isActive("/reels") ? (
              <MdMovie size={iconSize} />
            ) : (
              <BiMoviePlay size={iconSize} />
            )}
            <span className={isActive("/") ? "font-bold" : "font-normal"}>
              Reels
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <div
                className={`${baseClass} font-normal relative`}
                onClick={markRead}
              >
                <AiOutlineHeart size={iconSize} />
                <span>Notifications</span>

                {unRead && (
                  <span className="absolute top-0.5 right-44 bg-red-500 h-2 w-2 rounded-full" />
                )}
              </div>
            </SheetTrigger>

            <SheetContent side="left" className="overflow-y-scroll">
              <SheetHeader>
                <SheetTitle className="text-white text-3xl font-bold">
                  Notifications
                </SheetTitle>

                {notifications?.length === 0 && (
                  <span className="text-white text-xl font-semibold text-center">
                    No notifications
                  </span>
                )}

                {notifications?.map((notification: any) => (
                  <NotificationContent
                    key={notification?.id}
                    src={notification?.sender?.image || "/images/profile.webp"}
                    username={notification?.sender?.username}
                    body={notification?.body}
                    createdAt={notification?.createdAt}
                    id={notification?.sender?.id}
                    postId={notification?.post?.id}
                    comment={notification?.comment?.body}
                    commentId={notification?.comment?.id}
                  />
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div
            className={`${baseClass} font-normal`}
            onClick={() => setIsOpen(true)}
          >
            <FiPlusSquare size={iconSize} />
            <span>Create</span>
          </div>

          <Link href={`/profile/${currentUser?.id}`} className={baseClass}>
            <Avatar className="h-7 w-7">
              <AvatarImage
                src={currentUser?.image || "/images/profile.webp"}
                alt="Profile"
                className="object-cover"
              />
            </Avatar>

            <span
              className={
                isActive(`/profile/${currentUser?.id}`)
                  ? "font-bold"
                  : "font-normal"
              }
            >
              Profile
            </span>
          </Link>
        </div>

        {/* Logout Button pinned to bottom */}
        <div
          className={`${baseClass} mt-auto ml-2 cursor-pointer`}
          onClick={() => signOut()}
        >
          <BiLogOut size={iconSize} color="red" />
          <span className="font-semibold">Logout</span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black flex justify-around items-center py-3">
        <Link href="/">
          {isActive("/") ? (
            <AiFillHome size={iconSize} />
          ) : (
            <AiOutlineHome size={iconSize} />
          )}
        </Link>
        <AiOutlineHeart size={iconSize} />
        <FiPlusSquare size={iconSize} onClick={() => setIsOpen(true)} />
        <Link href={`/profile/${currentUser?.id}`}>
          {isActive(`/profile/${currentUser?.id}`) ? (
            <FaUserCircle size={iconSize} />
          ) : (
            <CgProfile size={iconSize} />
          )}
        </Link>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LeftSideBar;
