"use client";

import { useState } from "react";
import { Image, Film, Sparkles } from "lucide-react";
import PostModal from "./PostModal";
import ReelModal from "@/components/reel/ReelModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isopen, setIsOpen] = useState(false);
  const [isReelopen, setIsReelOpen] = useState(false);
  
  const handlePostClick = () => {
    setIsOpen(true);
    onClose();
  };

  const handleReelClick = () => {
    setIsReelOpen(true);
    onClose();
  };
  
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-background border-border sm:max-w-md p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-4">
            <DialogTitle className="text-xl font-semibold text-foreground text-center">
              Create new
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-center">
              Choose what you want to create
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-6 space-y-2">
            {/* Post Option */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handlePostClick}
              className="w-full flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image className="text-white" size={24} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-base font-semibold text-foreground">Post</p>
                <p className="text-sm text-muted-foreground">Share photos and videos</p>
              </div>
            </motion.button>

            {/* Reel Option */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleReelClick}
              className="w-full flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Film className="text-white" size={24} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-base font-semibold text-foreground">Reel</p>
                <p className="text-sm text-muted-foreground">Create a short video</p>
              </div>
            </motion.button>
          </div>
        </DialogContent>
      </Dialog>
      <PostModal isOpen={isopen} onClose={() => setIsOpen(false)} />
      <ReelModal isOpen={isReelopen} onClose={() => setIsReelOpen(false)} />
    </>
  );
};

export default Modal;
