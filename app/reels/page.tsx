"use client";
import ReelCard from "@/components/reel/ReelCard";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const page = () => {
  const [reels, setReels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: currentUser } = useCurrentUser();
  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.post("/api/post/getreel", { type: "REEL" });
        setReels(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (reels.length === 0) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, reels.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [reels.length]);

  // Scroll to current reel when index changes
  useEffect(() => {
    if (containerRef.current && reels.length > 0) {
      const reelElement = containerRef.current.children[currentIndex] as HTMLElement;
      if (reelElement) {
        reelElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentIndex, reels.length]);

  // Handle scroll to update current index
  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    const reelHeight = window.innerHeight;
    const newIndex = Math.round(scrollPosition / reelHeight);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < reels.length) {
      setCurrentIndex(newIndex);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </motion.div>
      </div>
    );
  }

  if (reels.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[100dvh] px-4"
      >
        <p className="text-muted-foreground text-lg">No reels yet</p>
        <p className="text-muted-foreground text-sm mt-2">
          Create your first reel to get started
        </p>
      </motion.div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory scrollbar-hide pb-16 lg:pb-0"
      onScroll={handleScroll}
      style={{
        scrollBehavior: "smooth",
      }}
    >
      {reels?.map((post: any, index: number) => (
        <div
          key={post.id}
          className="w-full h-[100dvh] snap-start snap-always flex-shrink-0"
        >
          <ReelCard
            id={post?.id}
            image={post?.user?.image}
            userName={post?.user?.userName || post?.user?.name}
            postImage={post?.postImage}
            postImageId={post?.postImage?.id}
            caption={post?.caption}
            createdAt={post?.createdAt}
            userId={post?.user?.id}
            likesLength={post?.likes?.length}
            likedBy={post?.likes?.map((like: any) => like?.id)}
            savedBy={post?.savedBy?.map((user: any) => user?.id)}
            currentUser={currentUser?.id}
            isActive={index === currentIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default page;
