"use client";

import React, { useEffect, useMemo, useState } from "react";
import AgoraRTC, {
  AgoraRTCProvider,
  LocalUser,
  RemoteUser,
  useIsConnected,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteUsers,
  type ILocalTrack,
} from "agora-rtc-react";
import { Mic, MicOff, PhoneOff, Video, VideoOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  fetchAgoraToken,
  getAgoraAppId,
  userIdToAgoraUid,
} from "@/lib/agora";
import type { ActiveCall } from "./AgoraCallProvider";

interface AgoraCallOverlayProps {
  activeCall: ActiveCall;
  isRinging: boolean;
  callAnswered: boolean;
  callConnected: boolean;
  callStartedAt: number | null;
  currentUserId: string;
  onMediaConnected: () => void;
  onEnd: () => void;
}

function formatCallDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function useCallDuration(startedAt: number | null, active: boolean): number {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!startedAt || !active) {
      setElapsed(0);
      return;
    }
    const tick = () => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startedAt, active]);

  return elapsed;
}

function getStatusLabel(
  activeCall: ActiveCall,
  isRinging: boolean,
  callAnswered: boolean,
  callConnected: boolean
): string {
  if (callConnected) return "";
  if (isRinging && activeCall.isOutgoing) return "Calling...";
  if (callAnswered) return "Connecting...";
  if (activeCall.isOutgoing) return "Calling...";
  return "Connecting...";
}

function CallSession({
  activeCall,
  isRinging,
  callAnswered,
  callConnected,
  callStartedAt,
  currentUserId,
  onMediaConnected,
  onEnd,
}: AgoraCallOverlayProps) {
  const appId = getAgoraAppId();
  const uid = userIdToAgoraUid(currentUserId);
  const isVideo = activeCall.callType === "video";

  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(isVideo);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const t = await fetchAgoraToken(activeCall.channelName, uid);
        if (!cancelled) {
          setToken(t);
          setTokenError(null);
          setReady(true);
        }
      } catch (e) {
        console.error("Agora token error:", e);
        if (!cancelled) {
          setTokenError(
            e instanceof Error
              ? e.message
              : "Failed to get Agora token. Check your .env configuration."
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activeCall.channelName, uid]);

  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(isVideo && cameraOn);

  const tracks = useMemo((): (ILocalTrack | null)[] => {
    const list: (ILocalTrack | null)[] = [localMicrophoneTrack ?? null];
    if (isVideo && localCameraTrack) list.push(localCameraTrack);
    return list.filter((t): t is ILocalTrack => t != null);
  }, [localMicrophoneTrack, localCameraTrack, isVideo]);

  useJoin(
    {
      appid: appId,
      channel: activeCall.channelName,
      token,
      uid,
    },
    ready && !!appId && !tokenError && !!token
  );

  usePublish(tracks);

  const remoteUsers = useRemoteUsers();
  const isConnected = useIsConnected();
  const inCallWithRemote = remoteUsers.length > 0;

  useEffect(() => {
    if (isConnected && inCallWithRemote) {
      onMediaConnected();
    }
  }, [isConnected, inCallWithRemote, onMediaConnected]);

  const duration = useCallDuration(callStartedAt, callConnected);
  const statusLabel = getStatusLabel(
    activeCall,
    isRinging,
    callAnswered,
    callConnected
  );
  const remote = remoteUsers[0];

  const statusDisplay = callConnected
    ? formatCallDuration(duration)
    : statusLabel;

  if (tokenError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6 text-center text-white"
      >
        <div className="max-w-md">
          <p className="text-lg font-semibold mb-2">Cannot connect call</p>
          <p className="text-sm text-white/70 mb-4">{tokenError}</p>
          <Button onClick={onEnd} variant="destructive">
            Close
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] bg-black flex flex-col"
    >
      <div className="flex-1 relative min-h-0">
        {isVideo ? (
          <>
            {remote ? (
              <RemoteUser
                user={remote}
                className="w-full h-full [&_video]:object-cover [&_video]:w-full [&_video]:h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <div className="text-center px-4">
                  <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <img
                      src={activeCall.remoteImage || "/images/profile.webp"}
                      alt={activeCall.remoteName}
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {activeCall.remoteName}
                  </p>
                  <p
                    className={`text-white/70 mt-2 ${
                      callConnected ? "text-2xl font-mono tabular-nums" : "text-sm"
                    }`}
                  >
                    {statusDisplay}
                  </p>
                </div>
              </div>
            )}

            {callConnected && remote && (
              <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none">
                <span className="text-white/90 text-lg font-mono tabular-nums bg-black/40 px-4 py-1.5 rounded-full">
                  {formatCallDuration(duration)}
                </span>
              </div>
            )}

            {localMicrophoneTrack && (
              <div className="absolute top-4 right-4 w-28 h-40 sm:w-32 sm:h-48 rounded-xl overflow-hidden border border-white/20 shadow-lg bg-black">
                <LocalUser
                  audioTrack={localMicrophoneTrack}
                  cameraOn={cameraOn}
                  micOn={micOn}
                  playAudio={false}
                  videoTrack={localCameraTrack}
                  className="w-full h-full [&_video]:object-cover"
                />
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={activeCall.remoteImage || "/images/profile.webp"}
                  alt={activeCall.remoteName}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <p className="text-white text-xl font-semibold">
                {activeCall.remoteName}
              </p>
              <p
                className={`text-white/70 mt-2 ${
                  callConnected ? "text-2xl font-mono tabular-nums" : "text-sm"
                }`}
              >
                {statusDisplay}
              </p>
              {remote && (
                <div className="sr-only">
                  <RemoteUser user={remote} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="bg-black/60 p-4 sm:p-6 pb-20 lg:pb-8 flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white"
          onClick={() => setMicOn((v) => !v)}
          aria-label={micOn ? "Mute" : "Unmute"}
        >
          {micOn ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
        </Button>

        {isVideo && (
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white"
            onClick={() => setCameraOn((v) => !v)}
            aria-label={cameraOn ? "Turn off camera" : "Turn on camera"}
          >
            {cameraOn ? (
              <Video className="h-6 w-6" />
            ) : (
              <VideoOff className="h-6 w-6" />
            )}
          </Button>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white"
          onClick={onEnd}
          aria-label="End call"
        >
          <PhoneOff className="h-7 w-7" />
        </Button>
      </div>
    </motion.div>
  );
}

export default function AgoraCallOverlay(props: AgoraCallOverlayProps) {
  const client = useMemo(
    () => AgoraRTC.createClient({ mode: "rtc", codec: "vp8" }),
    []
  );

  if (!getAgoraAppId()) {
    return (
      <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6 text-center text-white">
        <div>
          <p className="text-lg font-semibold mb-2">Agora not configured</p>
          <p className="text-sm text-white/70 mb-4">
            Add PUBLIC_AGORA_APP_ID to your .env file and restart the dev server.
          </p>
          <Button onClick={props.onEnd} variant="destructive">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <AgoraRTCProvider client={client}>
      <CallSession {...props} />
    </AgoraRTCProvider>
  );
}
