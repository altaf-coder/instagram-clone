"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const DeletePostModal: React.FC<ModalProps> = ({ isOpen, onClose, id }) => {
  const router = useRouter();
  const deletePost = async () => {
    try {
      const res = await axios
        .post("/api/post/deletepostbyid", { id })
        .then(() => {
          toast.success("Post deleted successfully");
          router.refresh();
          onClose();
        });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in deleting post");
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 ml-16 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              onClick={deletePost}
              className="text-md  text-center mb-4 text-red-600 hover:cursor-pointer hover:text-red-700"
            >
              Delete Post
            </h2>
            <p
              onClick={onClose}
              className="w-full mt-1 text-center hover:cursor-pointer text-black/80  hover:text-black transition"
            >
              Cancel
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeletePostModal;
