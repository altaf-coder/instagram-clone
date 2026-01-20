"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { X } from "lucide-react";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ Heart icon
import { useRouter } from "next/navigation";
import { getSocket } from "@/lib/socket";
import EmojiPickerComponent from "../EmojiPicker";

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
}

interface Comment {
  id: string;
  body: string;
  createdAt: string;
  parentId: string | null;
  user: {
    userName: string;
    name: string;
    image: string;
    id: string;
  };
  replies?: Comment[];
  commentLikes: { id: string }[];
}

const getTotalReplyCount = (comment: Comment): number => {
  if (!comment.replies || comment.replies.length === 0) return 0;
  return (
    comment.replies.length +
    comment.replies.reduce((sum, reply) => sum + getTotalReplyCount(reply), 0)
  );
};

const CommentItem: React.FC<{
  comment: Comment;
  onReplyClick: (id: string, username: string) => void;
  level?: number;
  postId: string;
}> = ({ comment, onReplyClick, level = 0, postId }) => {
  const [showReplies, setShowReplies] = useState(false);
  const hasReplies = comment.replies && comment.replies.length > 0;
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const [likesCount, setLikesCount] = useState(
    comment.commentLikes.length || 0
  );
  const { data: currentUser } = useCurrentUser();
  const likedBy = comment.commentLikes.map((like) => like?.id);
  const totalReplies = getTotalReplyCount(comment);
  const toogleLike = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/comment/likebyid", { id: comment.id });

      if (res.data.message === "Post liked") {
        setLiked(true);
        setLikesCount((prev) => prev + 1);
      } else {
        setLiked(false);
        setLikesCount((prev) => Math.max(prev - 1, 0));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (likedBy?.includes(currentUser?.id)) setLiked(true);
  }, [likedBy, currentUser?.id, setLiked]);

  return (
    <div className={`ml-${Math.min(level * 4, 20)} mb-4`}>
      <div className="flex items-center gap-2 mb-1">
        <Avatar
          className="w-6 h-6"
          onClick={() => router.push(`/profile/${comment?.user?.id}`)}
        >
          <AvatarImage
            className="w-full h-full object-cover rounded-full"
            src={comment.user.image || "/images/profile.webp"}
          />
        </Avatar>
        <div
          className="font-semibold text-white text-sm"
          onClick={() => router.push(`/profile/${comment?.user?.id}`)}
        >
          {comment.user.userName || comment.user.name || "Unknown"}
        </div>
        <div className="text-xs text-gray-300">
          • {formatDistanceToNow(new Date(comment.createdAt))}
        </div>
      </div>

      {/* ❤️ Heart icon fixed at start of comment line */}
      <div className="flex items-start gap-2 ml-8 mt-1">
        <div className="text-white text-sm">{comment.body}</div>
        <button onClick={toogleLike} disabled={loading}>
          {liked ? (
            <FaHeart className="text-red-500 text-sm mt-1" />
          ) : (
            <FaRegHeart className="text-white text-sm mt-1" />
          )}
        </button>
      </div>

      {/* Like and Reply in same line */}
      <div className="ml-8 flex items-center gap-4 mt-1 text-xs text-gray-300">
        <p className="cursor-pointer hover:underline">
          {" "}
          {likesCount} {likesCount === 1 || likesCount === 0 ? "Like" : "Likes"}
        </p>

        <p
          className="text-blue-300 cursor-pointer hover:underline"
          onClick={() =>
            onReplyClick(
              comment.id,
              comment.user.userName || comment.user.name || "Unknown"
            )
          }
        >
          Reply
        </p>

        {hasReplies && (
          <p
            className="cursor-pointer hover:underline"
            onClick={() => setShowReplies((prev) => !prev)}
          >
            {showReplies
              ? `Hide all ${totalReplies} ${
                  totalReplies === 1 ? "reply" : "replies"
                }`
              : `View all ${totalReplies} ${
                  totalReplies === 1 ? "reply" : "replies"
                }`}
          </p>
        )}
      </div>

      {hasReplies && showReplies && (
        <div className="ml-4 mt-2">
          {comment.replies!.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onReplyClick={onReplyClick}
              level={(level || 0) + 1}
              postId={postId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentModal: React.FC<CommentModalProps> = ({
  isOpen,
  onClose,
  postId,
}) => {
  const { data: currentUser } = useCurrentUser();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [parentId, setParentId] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  // Setup socket for real-time comment updates
  useEffect(() => {
    if (!isOpen || !postId) return;

    const socket = getSocket();

    // Listen for new comments
    const handlePostCommented = (data: { postId: string }) => {
      if (data.postId === postId) {
        fetchComments();
      }
    };

    socket.on("post-commented", handlePostCommented);

    return () => {
      socket.off("post-commented", handlePostCommented);
    };
  }, [isOpen, postId]);

  const emitCommentUpdate = (postId: string) => {
    const socket = getSocket();
    
    if (socket.connected) {
      socket.emit("post-comment-update", { postId });
    } else {
      socket.once("connect", () => {
        socket.emit("post-comment-update", { postId });
      });
    }
  };

  const handleSend = async () => {
    if (!comment.trim()) return;

    try {
      await axios.post("/api/comment/createcomment", {
        body: comment,
        postId,
        userId: currentUser?.id,
        parentId,
      });

      setComment("");
      setParentId(null);
      setReplyingTo(null);
      
      // Emit socket event for real-time update
      emitCommentUpdate(postId);
      
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReplyClick = (id: string, username: string) => {
    setParentId(id);
    setReplyingTo(username);
  };

  const fetchComments = async () => {
    try {
      const res = await axios.post("/api/comment/commentbypostid", {
        postId,
      });
      setComments(res.data);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };

  useEffect(() => {
    if (isOpen) fetchComments();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 lg:pr-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-[#333] w-full h-[60vh] max-h-[600px] lg:w-[350px] lg:h-[50vh] lg:rounded-xl p-4 flex flex-col justify-between"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 left-3 text-white hover:text-gray-300 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center flex-shrink-0">
            Comments
          </div>

          <div className="overflow-y-auto flex-1 pr-2 min-h-0">
            {comments.length === 0 ? (
              <div className="text-center text-gray-400 mt-1">
                No comments yet
              </div>
            ) : (
              comments.map((c) => (
                <CommentItem
                  key={c.id}
                  comment={c}
                  onReplyClick={handleReplyClick}
                  postId={postId}
                />
              ))
            )}
          </div>

          {/* Input box */}
          <div className="flex items-center gap-2 bg-black p-2 sm:p-3 rounded-md mt-2 flex-shrink-0">
            <Avatar className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
              <AvatarImage
                className="w-full h-full object-cover rounded-full"
                src={currentUser?.image || "/images/profile.webp"}
              />
            </Avatar>

            <div className="flex-1 relative flex items-center gap-2">
              <input
                type="text"
                placeholder={
                  replyingTo
                    ? `Replying to @${replyingTo}...`
                    : "Add a comment..."
                }
                className="bg-transparent w-full text-white outline-none placeholder:text-gray-400 pr-6 text-sm sm:text-base"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              {replyingTo && (
                <button
                  onClick={() => {
                    setReplyingTo(null);
                    setParentId(null);
                  }}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                  title="Cancel reply"
                >
                  ✖
                </button>
              )}
            </div>

            <EmojiPickerComponent
              onEmojiClick={(emoji: string) => {
                setComment((prev) => prev + emoji);
              }}
            />

            <button
              className="text-blue-400 font-medium hover:underline text-sm sm:text-base flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSend}
              disabled={!comment.trim()}
            >
              Post
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommentModal;
