"use client";

import React from "react";
import { Phone, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CallType } from "@/lib/agora";

interface IncomingCallModalProps {
  call: {
    callType: CallType;
    fromName: string;
    fromImage?: string;
  };
  onAccept: () => void;
  onReject: () => void;
}

export default function IncomingCallModal({
  call,
  onAccept,
  onReject,
}: IncomingCallModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] bg-black/90 flex flex-col items-center justify-center p-6"
    >
      <p className="text-white/80 text-sm mb-2">
        {call.callType === "video" ? "Incoming video call" : "Incoming voice call"}
      </p>
      <div className="w-24 h-24 rounded-full overflow-hidden bg-muted flex items-center justify-center mb-4">
        <img
          src={call.fromImage || "/images/profile.webp"}
          alt={call.fromName}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <p className="text-white text-xl font-semibold mb-8">{call.fromName}</p>
      <div className="flex items-center gap-6">
        <Button
          size="lg"
          className="h-16 w-16 rounded-full bg-red-500 hover:bg-red-600 text-white p-0"
          onClick={onReject}
          aria-label="Decline call"
        >
          <PhoneOff className="h-7 w-7" />
        </Button>
        <Button
          size="lg"
          className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 text-white p-0"
          onClick={onAccept}
          aria-label="Accept call"
        >
          <Phone className="h-7 w-7" />
        </Button>
      </div>
    </motion.div>
  );
}
