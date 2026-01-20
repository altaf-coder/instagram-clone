"use client";

import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Instagram } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import NotificationContent from "../notifications/NotificationContent";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "./button";

const MobileHeader = () => {
  const [notifications, setNotifications] = useState([]);
  const [unRead, setUnRead] = useState(false);

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

  const markRead = async () => {
    try {
      await axios.post("/api/user/markreadnotifications");
      // Refresh notifications after marking as read
      await fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-[90] bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3.5 flex items-center justify-between safe-area-inset-top shadow-sm">
      {/* Left Section - Instagram Logo */}
      <div className="flex items-center gap-2">
        <Instagram className="h-7 w-7 sm:h-8 sm:w-8 text-foreground" />
        <span className="text-lg sm:text-xl font-semibold text-foreground hidden sm:block">
          Instagram
        </span>
      </div>

      {/* Right Section - Notification Button */}
      <Sheet onOpenChange={(open) => {
        if (open) {
          fetchNotifications();
        }
      }}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 sm:h-11 sm:w-11 relative hover:bg-muted/50"
            onClick={markRead}
          >
            <Bell className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
            {unRead && (
              <span className="absolute top-2 right-2 bg-red-500 h-2.5 w-2.5 rounded-full border-2 border-background" />
            )}
          </Button>
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
            <div className="mt-4 space-y-2 overflow-y-auto">
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
    </div>
  );
};

export default MobileHeader;
