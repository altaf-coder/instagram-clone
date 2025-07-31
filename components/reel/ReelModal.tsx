"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BsFillImageFill } from "react-icons/bs";
import ReelUploader from "./ReelUploader";
import { set } from "date-fns";
import { Progress } from "../ui/progress";

interface PostUploadModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ReelModal: React.FC<PostUploadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  // const [postImage, setImage] = React.useState<string[]>([]);
  const [caption, setCaption] = React.useState<string>("");
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [postImage, setImage] = useState<{ video?: string }>({});
  const handleShare = async () => {
    try {
      setLoading(true);

      await axios
        .post("/api/post/create.post", { caption, postImage, type: "REEL" })
        .then(() => {
          toast.success("Post created successfully");
          router.refresh();
          onClose();
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in creating post");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      <div className="relative z-10 bg-[#333] text-white rounded-xl h-100 w-90 lg:h-210 lg:w-150 flex flex-col items-center justify-start gap-6 overflow-hidden">
        <div className="w-full relative bg-black py-4 border-b border-gray-700 flex items-center justify-center text-lg font-semibold">
          <span>Create Post</span>
          <button
            disabled={!postImage || !caption}
            className="absolute right-4 text-blue-500 text-sm font-medium hover:underline disabled:text-blue-300 disabled:cursor-not-allowed"
            onClick={handleShare}
          >
            Share
          </button>
        </div>
        <div className="w-full px-6">
          <input
            disabled={loading}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            placeholder="Write a caption..."
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-white text-white placeholder-gray-400"
          />
        </div>
        <div className="w-full flex-1 flex flex-col items-center justify-center">
          <BsFillImageFill className="text-6xl text-white" />
          <p className="text-lg font-semibold text-center mt-2">
            Drag and drop or click to upload
          </p>
          <ReelUploader
            onChange={setImage}
            disabled={loading}
            value={postImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ReelModal;
