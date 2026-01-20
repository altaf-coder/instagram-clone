"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mic, Square, Play, Pause, Trash2, Send } from "lucide-react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob, duration: number) => void;
  onCancel?: () => void;
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ onRecordingComplete, onCancel }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setIsPaused(false);

      // Start timer
      let time = 0;
      timerRef.current = setInterval(() => {
        time += 1;
        setRecordingTime(time);
      }, 1000);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast.error("Failed to access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording && !isPaused) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isRecording && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      let time = recordingTime;
      timerRef.current = setInterval(() => {
        time += 1;
        setRecordingTime(time);
      }, 1000);
    }
  };

  const playPreview = () => {
    if (audioUrl && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleSend = () => {
    if (audioBlob) {
      onRecordingComplete(audioBlob, recordingTime);
      // Cleanup
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      setAudioBlob(null);
      setAudioUrl(null);
      setRecordingTime(0);
    }
  };

  const handleCancel = () => {
    stopRecording();
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioBlob(null);
    setAudioUrl(null);
    setRecordingTime(0);
    onCancel?.();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="absolute bottom-full left-0 mb-2 p-4 bg-card border border-border rounded-lg shadow-lg min-w-[300px] z-10"
      >
        {!audioBlob ? (
          // Recording state
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isRecording && !isPaused ? "bg-red-500 animate-pulse" : "bg-gray-400"}`} />
                <span className="text-sm font-medium">
                  {isRecording ? (isPaused ? "Paused" : "Recording...") : "Ready to record"}
                </span>
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                {formatTime(recordingTime)}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              {!isRecording ? (
                <Button
                  onClick={startRecording}
                  size="icon"
                  className="h-12 w-12 rounded-full bg-red-500 hover:bg-red-600"
                >
                  <Mic className="h-6 w-6 text-white" />
                </Button>
              ) : (
                <>
                  {isPaused ? (
                    <Button
                      onClick={resumeRecording}
                      size="icon"
                      className="h-10 w-10 rounded-full"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  ) : (
                    <Button
                      onClick={pauseRecording}
                      size="icon"
                      className="h-10 w-10 rounded-full"
                    >
                      <Pause className="h-5 w-5" />
                    </Button>
                  )}
                  <Button
                    onClick={stopRecording}
                    size="icon"
                    className="h-12 w-12 rounded-full bg-red-500 hover:bg-red-600"
                  >
                    <Square className="h-6 w-6 text-white" />
                  </Button>
                </>
              )}
            </div>

            <div className="flex items-center justify-end gap-2">
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          // Preview state
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Voice message preview</span>
              <span className="text-sm text-muted-foreground font-mono">
                {formatTime(recordingTime)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={playPreview}
                size="icon"
                className="h-10 w-10 rounded-full"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              <div className="flex-1">
                <audio
                  ref={audioRef}
                  src={audioUrl || undefined}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full"
                />
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: isPlaying ? "100%" : "0%" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCancel}
                className="text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button onClick={handleSend} size="sm" className="gap-2">
                <Send className="h-4 w-4" />
                Send
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default VoiceRecorder;
