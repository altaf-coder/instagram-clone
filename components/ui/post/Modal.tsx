"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  MdOutlinePermMedia,
  MdOutlineVideoLibrary,
  MdMovieCreation,
} from "react-icons/md";
import PostModal from "./PostModal";
import ReelModal from "@/components/reel/ReelModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isopen, setIsOpen] = useState(false);
  const [isReelopen, setIsReelOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-start p-8 mb-70"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <motion.div
              className="bg-[#333] text-white rounded-xl w-50 p-6 shadow-lg relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-1 right-2 text-gray-400 hover:text-white"
              >
                <IoMdClose size={22} />
              </button>

              {/* Post */}
              <div
                className="flex items-center justify-between mb-5"
                onClick={() => setIsOpen(true)}
              >
                <span className="text-base font-medium hover:cursor-pointer">
                  Post
                </span>
                <MdOutlinePermMedia className="text-xl text-white" />
              </div>

              <hr className="border-gray-600 mb-5" />

              {/* Reel */}
              <div
                className="flex items-center justify-between hover:cursor-pointer"
                onClick={() => setIsReelOpen(true)}
              >
                <span className="text-base font-medium">Reel</span>
                <MdMovieCreation className="text-xl text-white" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <PostModal isOpen={isopen} onClose={() => setIsOpen(false)} />
      <ReelModal isOpen={isReelopen} onClose={() => setIsReelOpen(false)} />
    </>
  );
};

export default Modal;
