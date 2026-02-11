"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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

type IncomingOffer = {
  fromUserId: string;
  from: string;
  offer: RTCSessionDescriptionInit;
  callType: "audio" | "video";
};

const CallButton: React.FC<CallButtonProps> = ({ userId, userName, userImage, callType }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [incomingOffer, setIncomingOffer] = useState<IncomingOffer | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(callType === "audio");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const remoteUserIdRef = useRef<string>(userId);
  const socket = getSocket();

  const createPeerConnection = useCallback((targetId: string) => {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("call-ice-candidate", {
          targetUserId: targetId,
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
  }, [socket]);

  const endCall = useCallback(() => {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
      setLocalStream(null);
    }
    setRemoteStream(null);
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    socket.emit("call-end", { targetUserId: remoteUserIdRef.current });
    setIsCalling(false);
    setInCall(false);
    setIncomingOffer(null);
    setIsMuted(false);
    setIsVideoOff(callType === "audio");
  }, [socket, callType]);

  const acceptCall = useCallback(async () => {
    const data = incomingOffer;
    if (!data) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: data.callType === "video",
      });

      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      remoteUserIdRef.current = data.fromUserId || userId;
      const pc = createPeerConnection(remoteUserIdRef.current);
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
        callType: data.callType,
      });

      setIncomingOffer(null);
      setInCall(true);
    } catch (error) {
      console.error("Error accepting call:", error);
      setIncomingOffer(null);
      socket.emit("call-reject", { targetUserId: data.fromUserId || userId });
    }
  }, [incomingOffer, userId, createPeerConnection, socket]);

  const rejectCall = useCallback(() => {
    if (incomingOffer) {
      socket.emit("call-reject", { targetUserId: incomingOffer.fromUserId || userId });
      setIncomingOffer(null);
    }
  }, [incomingOffer, userId, socket]);

  const handleCallOffer = useCallback((data: IncomingOffer) => {
    if (data.callType !== callType) return;
    if (data.fromUserId !== userId) return;
    setIncomingOffer(data);
  }, [callType, userId]);

  const handleCallAnswer = useCallback(async (data: { fromUserId?: string; from: string; answer: RTCSessionDescriptionInit; callType?: "audio" | "video" }) => {
    if (!peerConnectionRef.current) return;
    try {
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
      setInCall(true);
      setIsCalling(false);
    } catch (e) {
      console.error("Error setting remote description:", e);
    }
  }, []);

  const handleIceCandidate = useCallback(async (data: { fromUserId?: string; from: string; candidate: RTCIceCandidateInit }) => {
    if (!peerConnectionRef.current) return;
    try {
      await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(data.candidate));
    } catch (error) {
      console.error("Error adding ICE candidate:", error);
    }
  }, []);

  const handleCallEnd = useCallback((_data: { fromUserId?: string; from: string }) => {
    endCall();
  }, [endCall]);

  const handleCallReject = useCallback(() => {
    setIsCalling(false);
  }, []);

  useEffect(() => {
    socket.on("call-offer", handleCallOffer);
    socket.on("call-answer", handleCallAnswer);
    socket.on("call-ice-candidate", handleIceCandidate);
    socket.on("call-end", handleCallEnd);
    socket.on("call-reject", handleCallReject);
    return () => {
      socket.off("call-offer", handleCallOffer);
      socket.off("call-answer", handleCallAnswer);
      socket.off("call-ice-candidate", handleIceCandidate);
      socket.off("call-end", handleCallEnd);
      socket.off("call-reject", handleCallReject);
    };
  }, [handleCallOffer, handleCallAnswer, handleIceCandidate, handleCallEnd, handleCallReject, socket]);

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

      remoteUserIdRef.current = userId;
      const pc = createPeerConnection(userId);
      peerConnectionRef.current = pc;

      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream);
      });

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      socket.emit("call-offer", {
        targetUserId: userId,
        offer,
        callType,
      });

      setIsCalling(true);
    } catch (error) {
      console.error("Error starting call:", error);
      alert("Failed to start call. Please check your permissions.");
    }
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

  const showIncoming = !!incomingOffer;
  const showCallUI = isCalling || inCall;

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={startCall}
        disabled={isCalling || inCall || showIncoming}
      >
        {callType === "audio" ? (
          <Phone className="h-5 w-5" />
        ) : (
          <Video className="h-5 w-5" />
        )}
      </Button>

      {/* Incoming call overlay */}
      <AnimatePresence>
        {showIncoming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-6"
          >
            <p className="text-white/80 text-sm mb-2">
              {incomingOffer?.callType === "video" ? "Incoming video call" : "Incoming voice call"}
            </p>
            <div className="w-24 h-24 rounded-full overflow-hidden bg-muted flex items-center justify-center mb-4">
              <img
                src={userImage || "/images/profile.webp"}
                alt={userName}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <p className="text-white text-xl font-semibold mb-8">{userName}</p>
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white"
                onClick={rejectCall}
              >
                <PhoneOff className="h-7 w-7" />
              </Button>
              <Button
                size="lg"
                className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white"
                onClick={acceptCall}
              >
                <Phone className="h-7 w-7" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active call overlay */}
      <AnimatePresence>
        {showCallUI && !showIncoming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col"
          >
            <div className="flex-1 relative min-h-0">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CallButton;
