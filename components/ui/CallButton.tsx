"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone, Video, PhoneOff, Mic, MicOff, VideoOff, VideoIcon } from "lucide-react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import { getSocket } from "@/lib/socket";

interface CallButtonProps {
  userId: string;
  userName: string;
  userImage?: string;
  callType: "audio" | "video";
}

const CallButton: React.FC<CallButtonProps> = ({ userId, userName, userImage, callType }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(callType === "audio");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const socket = getSocket();

  useEffect(() => {
    // Listen for call events
    socket.on("call-offer", handleCallOffer);
    socket.on("call-answer", handleCallAnswer);
    socket.on("call-ice-candidate", handleIceCandidate);
    socket.on("call-end", handleCallEnd);

    return () => {
      socket.off("call-offer", handleCallOffer);
      socket.off("call-answer", handleCallAnswer);
      socket.off("call-ice-candidate", handleIceCandidate);
      socket.off("call-end", handleCallEnd);
    };
  }, [userId]);

  const createPeerConnection = () => {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("call-ice-candidate", {
          targetUserId: userId,
          candidate: event.candidate,
        });
      }
    };

    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    return pc;
  };

  const handleCallOffer = async (data: { fromUserId?: string; from: string; offer: RTCSessionDescriptionInit }) => {
    // Accept call offer
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: callType === "video",
      });

      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const pc = createPeerConnection();
      peerConnectionRef.current = pc;

      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream);
      });

      await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      socket.emit("call-answer", {
        targetUserId: data.fromUserId || userId,
        answer,
      });

      setInCall(true);
      setIsCalling(false);
    } catch (error) {
      console.error("Error accepting call:", error);
      alert("Failed to accept call. Please check your permissions.");
    }
  };

  const handleCallAnswer = async (data: { fromUserId?: string; from: string; answer: RTCSessionDescriptionInit }) => {
    if (!peerConnectionRef.current) return;

    await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
    setInCall(true);
    setIsCalling(false);
  };

  const handleIceCandidate = async (data: { fromUserId?: string; from: string; candidate: RTCIceCandidateInit }) => {
    if (!peerConnectionRef.current) return;
    try {
      await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(data.candidate));
    } catch (error) {
      console.error("Error adding ICE candidate:", error);
    }
  };

  const handleCallEnd = (data: { fromUserId?: string; from: string }) => {
    endCall();
  };

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: callType === "video",
      });

      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const pc = createPeerConnection();
      peerConnectionRef.current = pc;

      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream);
      });

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      socket.emit("call-offer", {
        targetUserId: userId,
        offer,
      });

      setIsCalling(true);
    } catch (error) {
      console.error("Error starting call:", error);
      alert("Failed to start call. Please check your permissions.");
    }
  };

  const endCall = () => {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
      setLocalStream(null);
    }
    if (remoteStream) {
      remoteStream.getTracks().forEach((track) => track.stop());
      setRemoteStream(null);
    }
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }

    socket.emit("call-end", { targetUserId: userId });

    setIsCalling(false);
    setInCall(false);
    setIsMuted(false);
    setIsVideoOff(callType === "audio");
  };

  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = isMuted;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (localStream && callType === "video") {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = isVideoOff;
      });
      setIsVideoOff(!isVideoOff);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={startCall}
        disabled={isCalling || inCall}
      >
        {callType === "audio" ? (
          <Phone className="h-5 w-5" />
        ) : (
          <Video className="h-5 w-5" />
        )}
      </Button>

      <AnimatePresence>
        {(isCalling || inCall) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          >
            <div className="w-full h-full flex flex-col">
              {/* Remote video */}
              <div className="flex-1 relative">
                {callType === "video" && (
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
                {callType === "audio" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <img
                          src={userImage || "/images/profile.webp"}
                          alt={userName}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      </div>
                      <p className="text-white text-xl font-semibold">{userName}</p>
                      <p className="text-white/70 text-sm mt-2">
                        {isCalling ? "Calling..." : "In call"}
                      </p>
                    </div>
                  </div>
                )}

                {/* Local video (picture-in-picture) */}
                {callType === "video" && localStream && (
                  <div className="absolute top-4 right-4 w-32 h-48 bg-black rounded-lg overflow-hidden">
                    <video
                      ref={localVideoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Call controls */}
              <div className="bg-black/50 p-4 sm:p-6 pb-20 lg:pb-6 flex items-center justify-center gap-3 sm:gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex-shrink-0"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <MicOff className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <Mic className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </Button>

                {callType === "video" && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex-shrink-0"
                    onClick={toggleVideo}
                  >
                    {isVideoOff ? (
                      <VideoOff className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : (
                      <VideoIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-red-500 hover:bg-red-600 text-white flex-shrink-0"
                  onClick={endCall}
                >
                  <PhoneOff className="h-6 w-6 sm:h-7 sm:w-7" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CallButton;
