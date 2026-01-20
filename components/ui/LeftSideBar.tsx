"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Modal from "./post/Modal";
import { Avatar, AvatarImage } from "./avatar";
import {
  Home,
  Heart,
  PlusSquare,
  LogOut,
  Send,
  Film,
  User,
  Bell,
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

const LeftSideBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: currentUser } = useCurrentUser();
  const [notifications, setNotifications] = React.useState([]);
  const [unRead, setunRead] = React.useState(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = React.useState(0);

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

  // Fetch unread messages count
  useEffect(() => {
    if (!currentUser?.id) return;

    const fetchUnreadCount = async () => {
      try {
        const res = await axios.get("/api/messages/unread-count");
        setUnreadMessagesCount(res.data.count || 0);
      } catch (error) {
        console.error("Error fetching unread count:", error);
      }
    };

    fetchUnreadCount();
    // Refresh every 30 seconds
    const interval = setInterval(fetchUnreadCount, 30000);
    return () => clearInterval(interval);
  }, [currentUser?.id]);

  
  const fetchNotifications = async () => {
    try {
      const res = await axios.post("/api/user/getallnotifications");
      setNotifications(res.data);
      const unread = res.data.some((n: any) => !n.markRead);
      setunRead(unread);
    } catch (error) {
      console.log(error);
    }
  };

  const markRead = async () => {
    try {
      await axios.post("/api/user/markreadnotifications");
      // Refresh notifications after marking as read
      await fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };
  const baseClass =
    "flex items-center gap-4 text-foreground hover:opacity-80 transition-all duration-200 cursor-pointer";
  const iconSize = 26;

  const NavItem = ({
    href,
    icon: Icon,
    activeIcon: ActiveIcon,
    label,
    isActive,
    onClick,
    badge,
  }: {
    href?: string;
    icon: React.ElementType;
    activeIcon?: React.ElementType;
    label: string;
    isActive: boolean;
    onClick?: () => void;
    badge?: boolean;
  }) => {
    const content = (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClass} ${isActive ? "font-bold" : "font-normal"}`}
        onClick={onClick}
      >
        {isActive && ActiveIcon ? (
          <ActiveIcon size={iconSize} className="text-foreground" />
        ) : (
          <Icon size={iconSize} className="text-foreground" />
        )}
        <span className="hidden xl:inline">{label}</span>
        {badge && (
          <span className="absolute top-0 left-5 bg-red-500 h-2 w-2 rounded-full" />
        )}
      </motion.div>
    );

    if (href) {
      return <Link href={href}>{content}</Link>;
    }
    return content;
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:flex flex-col p-4 xl:p-6 w-16 xl:w-64 h-screen bg-background border-r border-border fixed top-0 left-0 z-40"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 xl:mb-10"
        >
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="w-8 xl:w-32 object-contain"
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 xl:gap-4 flex-grow">
          <NavItem
            href="/"
            icon={Home}
            activeIcon={Home}
            label="Home"
            isActive={isActive("/")}
          />
          <NavItem
            href="/reels"
            icon={Film}
            activeIcon={Film}
            label="Reels"
            isActive={isActive("/reels")}
          />
          <div className="relative">
            <NavItem
              href="/messages"
              icon={Send}
              activeIcon={Send}
              label="Messages"
              isActive={isActive("/messages")}
            />
            {unreadMessagesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-background z-10">
                {unreadMessagesCount > 9 ? "9+" : unreadMessagesCount}
              </span>
            )}
          </div>

          <Sheet onOpenChange={(open) => {
            if (open) {
              fetchNotifications();
            }
          }}>
            <SheetTrigger asChild>
              <div className="relative">
                <NavItem
                  icon={Bell}
                  activeIcon={Bell}
                  label="Notifications"
                  isActive={false}
                  onClick={markRead}
                  badge={unRead}
                />
              </div>
            </SheetTrigger>

            <SheetContent side="left" className="overflow-y-auto bg-background border-border">
              <SheetHeader>
                <SheetTitle className="text-foreground text-2xl xl:text-3xl font-bold">
                  Notifications
                </SheetTitle>

                {notifications?.length === 0 && (
                  <span className="text-foreground text-lg xl:text-xl font-semibold text-center block mt-4">
                    No notifications
                  </span>
                )}

                <div className="mt-4 space-y-2">
                  {notifications?.map((notification: any) => (
                    <NotificationContent
                      key={notification?.id}
                      src={notification?.sender?.image || "/images/profile.webp"}
                      username={notification?.sender?.userName || notification?.sender?.name || "User"}
                      body={notification?.body}
                      createdAt={notification?.createdAt}
                      id={notification?.sender?.id}
                      postId={notification?.post?.id}
                      comment={notification?.comment?.body}
                      commentId={notification?.comment?.id}
                      type={notification?.type}
                    />
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <NavItem
            icon={PlusSquare}
            activeIcon={PlusSquare}
            label="Create"
            isActive={false}
            onClick={() => setIsOpen(true)}
          />

          <NavItem
            href={`/profile/${currentUser?.id}`}
            icon={User}
            activeIcon={User}
            label="Profile"
            isActive={isActive(`/profile/${currentUser?.id}`)}
          />
        </div>

        {/* Bottom Section */}
        <div className="mt-auto space-y-2">
          <ThemeToggle />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseClass} cursor-pointer text-destructive`}
            onClick={() => signOut()}
          >
            <LogOut size={iconSize} />
            <span className="hidden xl:inline font-semibold">Logout</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border flex justify-around items-center py-3 px-4"
      >
        <Link href="/">
          <motion.div whileTap={{ scale: 0.9 }}>
            {isActive("/") ? (
              <Home size={iconSize} className="text-foreground fill-foreground" />
            ) : (
              <Home size={iconSize} className="text-foreground" />
            )}
          </motion.div>
        </Link>
        <Sheet onOpenChange={(open) => {
          if (open) {
            fetchNotifications();
          }
        }}>
          <SheetTrigger asChild>
            <div className="relative">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Bell size={iconSize} className="text-foreground" />
              </motion.div>
              {unRead && (
                <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full" />
              )}
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] bg-background border-border">
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
                {notifications?.map((notification: any) => (
                  <NotificationContent
                    key={notification?.id}
                    src={notification?.sender?.image || "/images/profile.webp"}
                    username={notification?.sender?.userName || notification?.sender?.name || "User"}
                    body={notification?.body}
                    createdAt={notification?.createdAt}
                    id={notification?.sender?.id}
                    postId={notification?.post?.id}
                    comment={notification?.comment?.body}
                    commentId={notification?.comment?.id}
                    type={notification?.type}
                  />
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <motion.div whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)}>
          <PlusSquare size={iconSize} className="text-foreground" />
        </motion.div>
        <Link href={`/profile/${currentUser?.id}`}>
          <motion.div whileTap={{ scale: 0.9 }}>
            {isActive(`/profile/${currentUser?.id}`) ? (
              <User size={iconSize} className="text-foreground fill-foreground" />
            ) : (
              <User size={iconSize} className="text-foreground" />
            )}
          </motion.div>
        </Link>
      </motion.div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LeftSideBar;
