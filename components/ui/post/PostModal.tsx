"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { X, Image as ImageIcon, Loader2, Upload } from "lucide-react";
import { Button } from "../button";
import { motion, AnimatePresence } from "framer-motion";
import { Textarea } from "../textarea";
import EmojiPickerComponent from "../EmojiPicker";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Avatar, AvatarImage } from "../avatar";
import PostUploader from "./PostUploader";

interface PostUploadModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const PostModal: React.FC<PostUploadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { data: currentUser } = useCurrentUser();
  const [caption, setCaption] = useState<string>("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [postImage, setImage] = useState<{ images: string[]; video?: string }>({
    images: [],
    video: undefined,
  });

  const handleMediaChange = (newMedia: {
    images: string[];
    video?: string;
  }) => {
    setImage(newMedia);
  };

  const handleEmojiClick = (emoji: string) => {
    setCaption((prev) => prev + emoji);
  };

  const handleShare = async () => {
    if ((!postImage.images.length && !postImage.video)) {
      toast.error("Please add media to your post");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/post/create.post", {
        caption: caption.trim() || "",
        postImage,
        type: "POST",
      });
      toast.success("Post created successfully!");
      router.refresh();
      onClose();
      // Reset form
      setCaption("");
      setImage({ images: [], video: undefined });
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.error || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  const hasMedia = postImage.images.length > 0 || !!postImage.video;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
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
          className="relative z-10 bg-background rounded-lg sm:rounded-xl shadow-2xl w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-border flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-muted rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Create new post
              </h2>
            </div>
            {hasMedia && (
              <Button
                onClick={handleShare}
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 text-sm sm:text-base"
                size="sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <span className="hidden sm:inline">Sharing...</span>
                  </>
                ) : (
                  "Share"
                )}
              </Button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
            {/* Media Preview Section */}
            <div className="w-full lg:w-3/5 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-0 relative flex-shrink-0">
              {!hasMedia ? (
                <div className="flex flex-col items-center justify-center p-6 sm:p-8 text-center w-full">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted/20 flex items-center justify-center mb-4 sm:mb-6">
                    <ImageIcon className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground" />
                  </div>
                  <p className="text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">
                    Drag photos and videos here
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                    or select from your computer
                  </p>
                  <PostUploader
                    onChange={handleMediaChange}
                    disabled={loading}
                    value={postImage}
                  />
                </div>
              ) : (
                <div className="w-full h-full relative flex items-center justify-center">
                  {postImage.video ? (
                    <video
                      src={postImage.video}
                      className="w-full h-full max-h-[70vh] object-contain"
                      controls
                    />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {postImage.images.length === 1 ? (
                        <img
                          src={postImage.images[0]}
                          alt="Preview"
                          className="w-full h-full max-h-[70vh] object-contain"
                        />
                      ) : (
                        <div className="grid grid-cols-2 gap-1 p-1 w-full h-full max-h-[70vh]">
                          {postImage.images.slice(0, 4).map((img, idx) => (
                            <div key={idx} className="relative aspect-square">
                              <img
                                src={img}
                                alt={`Preview ${idx + 1}`}
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Caption Section */}
            {hasMedia && (
              <div className="w-full lg:w-2/5 border-t lg:border-t-0 lg:border-l border-border flex flex-col min-h-0">
                {/* User Info */}
                <div className="p-3 sm:p-4 border-b border-border flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage
                        src={currentUser?.image || "/images/profile.webp"}
                        alt={currentUser?.userName || currentUser?.name || "You"}
                        className="object-cover"
                      />
                    </Avatar>
                    <span className="text-sm sm:text-base font-semibold text-foreground">
                      {currentUser?.userName || currentUser?.name || "You"}
                    </span>
                  </div>
                </div>

                {/* Caption Input */}
                <div className="flex-1 flex flex-col min-h-0 p-3 sm:p-4">
                  <div className="flex-1 relative border border-border rounded-lg bg-background">
                    <Textarea
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="Write a caption..."
                      className="min-h-[150px] sm:min-h-[200px] resize-none border-0 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground text-sm sm:text-base pr-12 pb-8"
                      disabled={loading}
                      maxLength={2200}
                    />
                    {/* Emoji Picker Button */}
                    <div className="absolute bottom-3 right-3">
                      <EmojiPickerComponent onEmojiClick={handleEmojiClick} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                    <div className="text-xs text-muted-foreground">
                      {caption.length}/2,200
                    </div>
                    {/* Change Media Button - Mobile only */}
                    <div className="lg:hidden">
                      <PostUploader
                        onChange={handleMediaChange}
                        disabled={loading}
                        value={postImage}
                      />
                    </div>
                  </div>
                </div>

                {/* Upload Button for Desktop - Hidden on mobile since it's in caption area */}
                <div className="hidden lg:block p-4 border-t border-border flex-shrink-0">
                  <PostUploader
                    onChange={handleMediaChange}
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

export default PostModal;
