"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, X, Play, File, Volume2 } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";

interface MediaMessageProps {
  mediaUrl: string;
  mediaType: "image" | "video" | "document" | "audio";
  fileName?: string;
  isOwn: boolean;
  messageId?: string;
}

const MediaMessage: React.FC<MediaMessageProps> = ({
  mediaUrl,
  mediaType,
  fileName,
  isOwn,
  messageId,
}) => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<"slow" | "fast" | "unknown">("unknown");
  const audioRef = useRef<HTMLAudioElement>(null);

  // Check internet connection speed
  useEffect(() => {
    const checkConnectionSpeed = async () => {
      if ("connection" in navigator) {
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        if (connection) {
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink;
          
          // Consider connection fast if effectiveType is 4g or downlink > 1.5 Mbps
          if (effectiveType === "4g" || (downlink && downlink > 1.5)) {
            setConnectionSpeed("fast");
          } else {
            setConnectionSpeed("slow");
          }
        } else {
          // Fallback: assume fast connection if we can't detect
          setConnectionSpeed("fast");
        }
      } else {
        // No connection API, assume fast
        setConnectionSpeed("fast");
      }
    };

    checkConnectionSpeed();
  }, []);

  // Check if file has been downloaded
  useEffect(() => {
    if (messageId && !isOwn) {
      const downloaded = localStorage.getItem(`downloaded-${messageId}`);
      setIsDownloaded(downloaded === "true");
    }
  }, [messageId, isOwn]);

  // Auto-play voice messages if internet is good
  useEffect(() => {
    if (mediaType === "audio" && !isOwn && connectionSpeed === "fast" && !isDownloaded && audioRef.current) {
      // Try to preload and auto-play if connection is good
      audioRef.current.load();
      // Don't auto-play, but enable controls so user can play easily
    }
  }, [mediaType, isOwn, connectionSpeed, isDownloaded]);

  const handleDownload = async () => {
    try {
      // Fetch the file as blob
      const response = await fetch(mediaUrl);
      const blob = await response.blob();
      
      // Create object URL
      const url = window.URL.createObjectURL(blob);
      
      // Create download link with proper attributes
      const link = document.createElement("a");
      link.href = url;
      
      // Set download attribute with proper filename
      const filename = fileName || (mediaType === "audio" ? `voice-${Date.now()}.webm` : `file-${Date.now()}`);
      link.download = filename;
      
      // Set style to hide the link
      link.style.display = "none";
      
      // Append to body, click, and remove immediately
      document.body.appendChild(link);
      link.click();
      
      // Remove link immediately
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
      
      // Mark as downloaded
      if (messageId) {
        localStorage.setItem(`downloaded-${messageId}`, "true");
        setIsDownloaded(true);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      // Fallback: try direct download with download attribute
      const link = document.createElement("a");
      link.href = mediaUrl;
      link.download = fileName || (mediaType === "audio" ? `voice-${Date.now()}.webm` : "download");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      
      if (messageId) {
        localStorage.setItem(`downloaded-${messageId}`, "true");
        setIsDownloaded(true);
      }
    }
  };

  const handleOpenFile = () => {
    if (mediaType === "audio" || mediaType === "video" || mediaType === "document") {
      window.open(mediaUrl, "_blank");
    }
  };

  if (mediaType === "image") {
    return (
      <>
        <div className="relative group">
          <img
            src={mediaUrl}
            alt="Shared image"
            className="max-w-[300px] sm:max-w-[400px] rounded-lg cursor-pointer"
            onClick={() => setShowFullscreen(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white bg-black/50 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                setShowFullscreen(true);
              }}
            >
              <X className="h-4 w-4 rotate-45" />
            </Button>
          </div>
        </div>

        {showFullscreen && (
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={mediaUrl}
                alt="Fullscreen"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70"
                onClick={() => setShowFullscreen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        )}
      </>
    );
  }

  if (mediaType === "video") {
    return (
      <div className="relative group max-w-[300px] sm:max-w-[400px]">
        <video
          src={mediaUrl}
          controls={isDownloaded || isOwn}
          className={`w-full rounded-lg ${isDownloaded && !isOwn ? "cursor-pointer" : ""}`}
          onPlay={() => setVideoPlaying(true)}
          onPause={() => setVideoPlaying(false)}
          onClick={isDownloaded && !isOwn ? handleOpenFile : undefined}
        />
        {!isOwn && (
          <div className="absolute top-2 right-2">
            {!isDownloaded ? (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white bg-black/50 hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
              >
                <Download className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white bg-black/50 hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenFile();
                }}
                title="Open file"
              >
                <Play className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }

  if (mediaType === "audio") {
    // For voice messages, if internet is good, allow streaming (no download required)
    const canStream = connectionSpeed === "fast" && !isOwn;
    const showControls = isDownloaded || isOwn || canStream;

    return (
      <div 
        className={`flex items-center gap-3 p-3 bg-muted rounded-lg max-w-[300px] sm:max-w-[400px] ${isDownloaded && !isOwn ? "cursor-pointer hover:bg-muted/80" : ""}`}
        onClick={isDownloaded && !isOwn ? handleOpenFile : undefined}
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Volume2 className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <audio 
            ref={audioRef}
            src={mediaUrl} 
            controls={showControls} 
            preload={canStream ? "auto" : "none"}
            className="w-full"
          />
          {fileName && (
            <p className="text-xs text-muted-foreground mt-1 truncate">{fileName}</p>
          )}
          {!isOwn && !isDownloaded && connectionSpeed === "slow" && (
            <p className="text-xs text-muted-foreground mt-1">Download to play</p>
          )}
        </div>
        {!isOwn && (
          <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            {!isDownloaded ? (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleDownload}
                title="Download voice note"
              >
                <Download className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleOpenFile}
                title="Open file"
              >
                <Play className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }

  // Document
  return (
    <div 
      className={`flex items-center gap-3 p-3 bg-muted rounded-lg max-w-[300px] sm:max-w-[400px] ${isDownloaded && !isOwn ? "cursor-pointer hover:bg-muted/80" : ""}`}
      onClick={isDownloaded && !isOwn ? handleOpenFile : undefined}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <File className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{fileName || "Document"}</p>
        <p className="text-xs text-muted-foreground">
          {isOwn ? "Sent" : isDownloaded ? "Click to open" : "Click to download"}
        </p>
      </div>
      {!isOwn && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            if (!isDownloaded) {
              handleDownload();
            } else {
              handleOpenFile();
            }
          }}
        >
          {!isDownloaded ? (
            <Download className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
};

export default MediaMessage;
