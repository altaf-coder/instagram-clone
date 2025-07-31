"use client";
import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          video.muted = false;
          setIsMuted(false);
          setIsPlaying(true);
        } else {
          video.pause();
          video.muted = true;
          setIsMuted(true);
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.7, // adjust visibility ratio as needed
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

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
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className="relative w-full max-w-[400px] mx-auto rounded-md overflow-hidden group cursor-pointer"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        autoPlay
        className="w-full h-auto object-cover"
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-3xl bg-black/40 p-4 rounded-full">
            <FaPlay />
          </div>
        </div>
      )}

      <button
        onClick={toggleMute}
        className="absolute top-10 right-10 text-white bg-black/50 p-2 rounded-full z-10 text-xl"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default VideoPlayer;
