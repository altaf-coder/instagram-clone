import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface CommentSectionProps {
  postImage?: string;
  postId?: string;
}

interface Comment {
  id: number;
  body: string;
  user: {
    userName: string;
    name: string;
    image: string;
  };
  replies: string[];
}

const CommentSection: React.FC<CommentSectionProps> = ({
  postImage,
  postId,
}) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const { data: currentUser } = useCurrentUser();

  const handleSend = async () => {
    try {
      await axios.post("/api/comment/createcomment", {
        body: comment,
        postId,
        userId: currentUser?.id,
      });
      setComment("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.post("/api/comment/commentbypostid", {
        postId,
      });
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col bg-black text-white">
      {/* Comments Area */}
      <div className="flex-1 overflow-y-auto bg-[#333] text-black px-4 py-6 space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-300 italic">No comments yet. Be the first!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white shadow-md rounded-xl p-4 space-y-1 border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="w-9 h-9">
                  <AvatarImage
                    src={comment?.user?.image || "/images/profile.webp"}
                  />
                </Avatar>
                <span className="font-semibold text-sm">
                  {comment?.user?.userName || comment?.user?.name}
                </span>
              </div>
              <p className="text-gray-800 text-sm pl-12 -mt-1">
                {comment.body}
              </p>
              <div className="pl-12">
                <p className="text-xs text-blue-500 hover:underline cursor-pointer">
                  Reply
                </p>
                {comment.replies?.map((reply, idx) => (
                  <p key={idx} className="text-sm text-gray-600 mt-1">
                    ↪ {reply}
                  </p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Field */}
      <div className="bg-[#333] px-4 py-3 flex items-center border-t border-gray-700">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 bg-transparent text-white outline-none placeholder-gray-400 border-b border-gray-500 pb-1"
        />
        <button
          onClick={handleSend}
          disabled={!comment}
          className="ml-3 text-blue-400 font-semibold hover:underline disabled:text-blue-200 disabled:cursor-not-allowed"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
