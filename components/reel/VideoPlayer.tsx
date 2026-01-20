"use client";
import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGlobalMuteState, setGlobalMuteState, subscribeToMuteState } from "@/lib/videoMuteState";

interface VideoPlayerProps {
  src: string;
  isActive?: boolean;
}

const VideoPlayer = ({ src, isActive = false }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(getGlobalMuteState());

  // Subscribe to global mute state changes
  useEffect(() => {
    const unsubscribe = subscribeToMuteState((muted) => {
      setIsMuted(muted);
      if (videoRef.current) {
        videoRef.current.muted = muted;
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial mute state from global state
    video.muted = isMuted;

    if (isActive) {
      // Play video when active
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      // Pause video when not active and reset to beginning
      video.pause();
      video.currentTime = 0; // Reset to beginning to stop audio
      setIsPlaying(false);
    }
  }, [isActive, isMuted]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    setGlobalMuteState(newMutedState); // Update global state for all videos
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center group cursor-pointer"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        muted={isMuted}
        className="w-full h-full object-contain"
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
          <div className="text-white text-4xl bg-black/50 p-4 rounded-full backdrop-blur-sm">
            <FaPlay />
          </div>
        </div>
      )}

      <Button
        onClick={toggleMute}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full z-50 h-10 w-10 backdrop-blur-sm pointer-events-auto"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default VideoPlayer;
