"use client";
import ReelCard from "@/components/reel/ReelCard";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [reels, setReels] = useState([]);
  const { data: currentUser } = useCurrentUser();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post("/api/post/getreel", { type: "REEL" });
        setReels(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="flex flex-col items-center mt-5 px-4">
      {reels?.map((post: any) => (
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
      ))}
    </div>
  );
};

export default page;
