"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { X, Video, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import ReelUploader from "./ReelUploader";
import VideoPlayer from "./VideoPlayer";

interface PostUploadModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ReelModal: React.FC<PostUploadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [caption, setCaption] = useState<string>("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [postImage, setImage] = useState<{ video?: string }>({});

  const handleShare = async () => {
    if (!postImage.video || !caption.trim()) {
      toast.error("Please add a video and caption");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/post/create.post", {
        caption,
        postImage,
        type: "REEL",
      });
      toast.success("Reel created successfully!");
      router.refresh();
      onClose();
      // Reset form
      setCaption("");
      setImage({});
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.error || "Failed to create reel");
    } finally {
      setLoading(false);
    }
  };

  const hasVideo = !!postImage.video;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 bg-background rounded-lg shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
              <h2 className="text-lg font-semibold text-foreground">
                Create new reel
              </h2>
            </div>
            {hasVideo && (
              <Button
                onClick={handleShare}
                disabled={loading || !caption.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                size="sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sharing...
                  </>
                ) : (
                  "Share"
                )}
              </Button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Video Preview Section */}
            <div className="lg:w-3/5 bg-black flex items-center justify-center min-h-[400px] lg:min-h-0 relative">
              {!hasVideo ? (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    Drag video here or select from computer
                  </p>
                  <ReelUploader
                    onChange={setImage}
                    disabled={loading}
                    value={postImage}
                  />
                </div>
              ) : (
                <div className="w-full h-full relative">
                  <VideoPlayer src={postImage.video || "/images/video.mp4"} />
                </div>
              )}
            </div>

            {/* Caption Section */}
            {hasVideo && (
              <div className="lg:w-2/5 border-t lg:border-t-0 lg:border-l border-border flex flex-col">
                {/* User Info */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-foreground">
                        You
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      Your username
                    </span>
                  </div>
                </div>

                {/* Caption Input */}
                <div className="flex-1 p-4">
                  <Textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write a caption..."
                    className="min-h-[200px] resize-none border-0 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
                    disabled={loading}
                  />
                  <div className="mt-2 text-xs text-muted-foreground">
                    {caption.length}/2,200
                  </div>
                </div>

                {/* Upload Button for Mobile */}
                <div className="lg:hidden p-4 border-t border-border">
                  <ReelUploader
                    onChange={setImage}
                    disabled={loading}
                    value={postImage}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ReelModal;
