"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import VideoPlayer from "./VideoPlayer";

interface UploadProps {
  onChange: (media: { video?: string }) => void;
  value?: { video?: string };
  label?: string;
  disabled?: boolean;
}

const ReelUploader: React.FC<UploadProps> = ({
  onChange,
  value = { video: undefined },
  label,
  disabled,
}) => {
  const [videoBase64, setVideoBase64] = useState<string | undefined>(
    value.video
  );

  const handleChange = useCallback(
    (video?: string) => {
      onChange({ video });
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file || !file.type.startsWith("video/")) {
        alert("Only video files are allowed.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setVideoBase64(result);
          handleChange(result);
        }
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
  );

  const removeVideo = () => {
    setVideoBase64(undefined);
    handleChange(undefined);
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    disabled: disabled || !!videoBase64,
    onDrop: handleDrop,
    accept: {
      "video/mp4": [],
      "video/webm": [],
      "video/quicktime": [],
    },
  });

  return (
    <div>
      <div
        {...getRootProps({
          className:
            "w-full p-4 text-white text-center rounded-md  cursor-pointer",
        })}
      >
        <input {...getInputProps()} />
        <div className="flex items-center justify-center flex-col">
          <Button
            size="sm"
            variant="default"
            className="bg-blue-700 hover:bg-blue-500"
            disabled={disabled || !!videoBase64}
          >
            {videoBase64 ? "Video selected" : label || "Select Video"}
          </Button>
        </div>
      </div>

      {videoBase64 && (
        <div className="relative mt-0 h-full w-full">
          <VideoPlayer src={videoBase64} />
          <button
            onClick={removeVideo}
            className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full px-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ReelUploader;
