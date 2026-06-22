"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getSocket, initSocketServer } from "@/lib/socket";
import useCurrentUser from "@/hooks/useCurrentUser";
import {
  CallInvitePayload,
  CallType,
  createCallChannelName,
} from "@/lib/agora";
import dynamic from "next/dynamic";

const AgoraCallOverlay = dynamic(() => import("./AgoraCallOverlay"), {
  ssr: false,
});

const IncomingCallModal = dynamic(() => import("./IncomingCallModal"), {
  ssr: false,
});

export type ActiveCall = {
  channelName: string;
  callType: CallType;
  remoteUserId: string;
  remoteName: string;
  remoteImage?: string;
  isOutgoing: boolean;
};

type IncomingCall = {
  channelName: string;
  callType: CallType;
  fromUserId: string;
  fromName: string;
  fromImage?: string;
};

type StartCallParams = {
  targetUserId: string;
  targetName: string;
  targetImage?: string;
  callType: CallType;
};

type CallContextValue = {
  startCall: (params: StartCallParams) => void;
  endCall: () => void;
  isInCall: boolean;
  isCalling: boolean;
};

const CallContext = createContext<CallContextValue | null>(null);

export const useAgoraCall = () => {
  const ctx = useContext(CallContext);
  if (!ctx) throw new Error("useAgoraCall must be used within AgoraCallProvider");
  return ctx;
};

export default function AgoraCallProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: currentUser } = useCurrentUser();
  const [incomingCall, setIncomingCall] = useState<IncomingCall | null>(null);
  const [activeCall, setActiveCall] = useState<ActiveCall | null>(null);
  /** Caller waiting for answer */
  const [isRinging, setIsRinging] = useState(false);
  /** Socket accept received — stop showing "Calling..." */
  const [callAnswered, setCallAnswered] = useState(false);
  /** Remote user joined Agora channel — show timer */
  const [callConnected, setCallConnected] = useState(false);
  const [callStartedAt, setCallStartedAt] = useState<number | null>(null);

  const activeCallRef = useRef(activeCall);
  const incomingCallRef = useRef(incomingCall);

  useEffect(() => {
    activeCallRef.current = activeCall;
  }, [activeCall]);
  useEffect(() => {
    incomingCallRef.current = incomingCall;
  }, [incomingCall]);

  const resetCallState = useCallback(() => {
    setActiveCall(null);
    setIncomingCall(null);
    setIsRinging(false);
    setCallAnswered(false);
    setCallConnected(false);
    setCallStartedAt(null);
  }, []);

  const endCall = useCallback(() => {
    const targetId =
      activeCall?.remoteUserId || incomingCall?.fromUserId;
    const channelName =
      activeCall?.channelName || incomingCall?.channelName;

    if (targetId) {
      getSocket().emit("call-end", {
        targetUserId: targetId,
        channelName,
      });
    }

    resetCallState();
  }, [activeCall, incomingCall, resetCallState]);

  const startCall = useCallback(
    (params: StartCallParams) => {
      if (!currentUser?.id || activeCall || incomingCall) return;

      const channelName = createCallChannelName(
        currentUser.id,
        params.targetUserId
      );

      getSocket().emit("call-invite", {
        targetUserId: params.targetUserId,
        channelName,
        callType: params.callType,
        fromUserId: currentUser.id,
        fromName:
          currentUser.userName || currentUser.name || "User",
        fromImage: currentUser.image,
      } satisfies CallInvitePayload);

      setActiveCall({
        channelName,
        callType: params.callType,
        remoteUserId: params.targetUserId,
        remoteName: params.targetName,
        remoteImage: params.targetImage,
        isOutgoing: true,
      });
      setIsRinging(true);
      setCallAnswered(false);
      setCallConnected(false);
      setCallStartedAt(null);
    },
    [currentUser, activeCall, incomingCall]
  );

  const acceptCall = useCallback(() => {
    if (!incomingCall || !currentUser?.id) return;

    getSocket().emit("call-accept", {
      targetUserId: incomingCall.fromUserId,
      channelName: incomingCall.channelName,
      callType: incomingCall.callType,
    });

    setActiveCall({
      channelName: incomingCall.channelName,
      callType: incomingCall.callType,
      remoteUserId: incomingCall.fromUserId,
      remoteName: incomingCall.fromName,
      remoteImage: incomingCall.fromImage,
      isOutgoing: false,
    });
    setIncomingCall(null);
    setIsRinging(false);
    setCallAnswered(true);
  }, [incomingCall, currentUser]);

  const rejectCall = useCallback(() => {
    if (!incomingCall) return;
    getSocket().emit("call-reject", {
      targetUserId: incomingCall.fromUserId,
    });
    setIncomingCall(null);
  }, [incomingCall]);

  const handleMediaConnected = useCallback(() => {
    setIsRinging(false);
    setCallAnswered(true);
    setCallConnected(true);
    setCallStartedAt((prev) => prev ?? Date.now());
  }, []);

  useEffect(() => {
    if (!currentUser?.id) return;

    let cleanup: (() => void) | undefined;

    initSocketServer().then(() => {
      const socket = getSocket();

      const register = () => {
        if (currentUser?.id) socket.emit("register-user", currentUser.id);
      };
      if (socket.connected) register();
      socket.on("connect", register);

      const onInvite = (data: CallInvitePayload) => {
        if (data.fromUserId === currentUser.id) return;
        if (activeCallRef.current || incomingCallRef.current) return;
        setIncomingCall({
          channelName: data.channelName,
          callType: data.callType,
          fromUserId: data.fromUserId,
          fromName: data.fromName || "User",
          fromImage: data.fromImage,
        });
      };

      const onAccept = () => {
        setIsRinging(false);
        setCallAnswered(true);
      };

      const onReject = () => {
        resetCallState();
      };

      const onEnd = () => {
        resetCallState();
      };

      socket.on("call-invite", onInvite);
      socket.on("call-accept", onAccept);
      socket.on("call-reject", onReject);
      socket.on("call-end", onEnd);

      cleanup = () => {
        socket.off("connect", register);
        socket.off("call-invite", onInvite);
        socket.off("call-accept", onAccept);
        socket.off("call-reject", onReject);
        socket.off("call-end", onEnd);
      };
    });

    return () => cleanup?.();
  }, [currentUser?.id, resetCallState]);

  return (
    <CallContext.Provider
      value={{
        startCall,
        endCall,
        isInCall: !!activeCall,
        isCalling: isRinging,
      }}
    >
      {children}

      {incomingCall && !activeCall && (
        <IncomingCallModal
          call={incomingCall}
          onAccept={acceptCall}
          onReject={rejectCall}
        />
      )}

      {activeCall && currentUser?.id && (
        <AgoraCallOverlay
          activeCall={activeCall}
          isRinging={isRinging}
          callAnswered={callAnswered}
          callConnected={callConnected}
          callStartedAt={callStartedAt}
          currentUserId={currentUser.id}
          onMediaConnected={handleMediaConnected}
          onEnd={endCall}
        />
      )}
    </CallContext.Provider>
  );
}
