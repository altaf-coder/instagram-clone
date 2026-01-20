"use client";
import PostCard from "@/components/ui/post/PostCard";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.post("/api/post/all-posts");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-5 px-4 space-y-6 w-full max-w-2xl mx-auto">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-full max-w-md mx-auto bg-card rounded-xl overflow-hidden shadow-lg border border-border"
          >
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-96 w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center mt-20 px-4"
      >
        <p className="text-muted-foreground text-lg">No posts yet</p>
        <p className="text-muted-foreground text-sm mt-2">
          Follow users to see their posts here
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-2 sm:mt-5 px-2 sm:px-4 pb-20 lg:pb-5 w-full max-w-2xl mx-auto">
      {posts?.map((post: any, index: number) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="w-full mb-6"
        >
          <PostCard
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
      ))}
    </div>
  );
};

export default Home;
