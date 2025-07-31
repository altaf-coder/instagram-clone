"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "@/components/ui/post/PostCard";
import ReelCard from "@/components/reel/ReelCard";
import useCurrentUser from "@/hooks/useCurrentUser";

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
        const res = await axios.post("/api/post/postbyid", { id });
        setPost(res.data);
      } catch (error) {
        console.error("Failed to load post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading)
    return (
      <div className="text-white items-center justify-center">Loading...</div>
    );
  if (!post) return <div>Post not found.</div>;

  const postComponent =
    post?.type === "POST" ? (
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
        currentUser={currentUser?.id}
      />
    ) : (
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
        currentUser={currentUser?.id}
      />
    );

  return <div>{postComponent}</div>;
};

export default Page;
