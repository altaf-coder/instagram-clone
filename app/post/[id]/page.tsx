"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "@/components/ui/post/PostCard";
import ReelCard from "@/components/reel/ReelCard";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const Page = () => {
  type Params = {
    id: string;
  };
  const params = useParams<Params>();
  const id = params?.id;
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await axios.post("/api/post/postbyid", { id });
        setPost(res.data);
      } catch (error) {
        console.error("Failed to load post:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-md space-y-4"
        >
          <div className="flex items-center gap-3 p-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <Skeleton className="h-96 w-full" />
        </motion.div>
      </div>
    );
  }

  if (!post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen px-4"
      >
        <p className="text-muted-foreground text-lg">Post not found</p>
      </motion.div>
    );
  }

  const postComponent =
    post?.type === "POST" ? (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl mx-auto"
      >
        <PostCard
          key={post.id}
          id={post.id}
          image={post.user?.image}
          userName={post.user?.userName || post.user?.name}
          postImage={post.postImage}
          postImageId={post.postImage?.id}
          caption={post.caption}
          createdAt={post.createdAt}
          userId={post.user?.id}
          likesLength={post.likes?.length}
          likedBy={post.likes?.map((like: any) => like.id)}
          savedBy={post.savedBy?.map((user: any) => user?.id)}
          currentUser={currentUser?.id}
        />
      </motion.div>
    ) : (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-[100dvh]"
      >
        <ReelCard
          key={post.id}
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
        />
      </motion.div>
    );

  return <div className="flex flex-col items-center w-full">{postComponent}</div>;
};

export default Page;
