"use client";
import LeftSideBar from "@/components/ui/LeftSideBar";
import PostUploadModal from "@/components/ui/post/PostModal";
import { signOut } from "next-auth/react";
import React from "react";

const Home = () => {
  return (
    <div onClick={() => signOut()}>
      jkfhksdhfg
      {/* <PostUploadModal /> */}
    </div>
  );
};

export default Home;
