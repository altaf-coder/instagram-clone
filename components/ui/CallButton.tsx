"use client";

import React from "react";
import { Phone, Video } from "lucide-react";
import { Button } from "./button";
import { useAgoraCall } from "@/components/call/AgoraCallProvider";

interface CallButtonProps {
  userId: string;
  userName: string;
  userImage?: string;
  callType: "audio" | "video";
}

const CallButton: React.FC<CallButtonProps> = ({
  userId,
  userName,
  userImage,
  callType,
}) => {
  const { startCall, isInCall, isCalling } = useAgoraCall();

  const handleClick = () => {
    if (!userId) return;
    startCall({
      targetUserId: userId,
      targetName: userName,
      targetImage: userImage,
      callType,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={handleClick}
      disabled={isInCall || isCalling}
      title={callType === "audio" ? "Voice call" : "Video call"}
    >
      {callType === "audio" ? (
        <Phone className="h-5 w-5" />
      ) : (
        <Video className="h-5 w-5" />
      )}
    </Button>
  );
};

export default CallButton;
