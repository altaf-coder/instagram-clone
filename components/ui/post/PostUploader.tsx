"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../button";
import VideoPlayer from "@/components/reel/VideoPlayer";
import { Upload, Image as ImageIcon, Video, X } from "lucide-react";
import { motion } from "framer-motion";

interface UploadProps {
  onChange: (media: { images: string[]; video?: string }) => void;
  value?: { images: string[]; video?: string };
  label?: string;
  disabled?: boolean;
}

  const PostUpload: React.FC<UploadProps> = ({
  onChange,
  value = { images: [], video: undefined },
  label,
  disabled,
}) => {
  const [base64Images, setBase64Images] = useState<string[]>(
    value.images || []
  );
  const [videoBase64, setVideoBase64] = useState<string | undefined>(
    value.video
  );

  const handleChange = useCallback(
    (images: string[], video?: string) => {
      onChange({ images, video });
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const hasVideo = acceptedFiles.some((file) =>
        file.type.startsWith("video/")
      );
      const allImages = acceptedFiles.every((file) =>
        file.type.startsWith("image/")
      );

      if (hasVideo && base64Images.length > 0) {
        alert("You can't upload a video when images are already selected.");
        return;
      }

      if (allImages && videoBase64) {
        alert("You can't upload images when a video is already selected.");
        return;
      }

      // Handle video upload
      if (hasVideo) {
        const videoFile = acceptedFiles.find((f) =>
          f.type.startsWith("video/")
        );
        if (videoFile) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const result = event.target?.result;
            if (typeof result === "string") {
              setVideoBase64(result);
              setBase64Images([]);
              handleChange([], result);
            }
          };
          reader.readAsDataURL(videoFile);
        }
      }

      // Handle multiple image uploads
      if (allImages) {
        const maxAllowed = 5 - base64Images.length;
        const filesToRead = acceptedFiles.slice(0, maxAllowed);

        Promise.all(
          filesToRead.map(
            (file) =>
              new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                  if (typeof event.target?.result === "string") {
                    resolve(event.target.result);
                  }
                };
                reader.readAsDataURL(file);
              })
          )
        ).then((base64Results) => {
          const updatedImages = [...base64Images, ...base64Results].slice(0, 5);
          setBase64Images(updatedImages);
          handleChange(updatedImages);
        });
      }
    },
    [base64Images, videoBase64, handleChange]
  );

  const removeImage = (index: number) => {
    const updated = base64Images.filter((_, i) => i !== index);
    setBase64Images(updated);
    handleChange(updated);
  };

  const removeVideo = () => {
    setVideoBase64(undefined);
    handleChange(base64Images, undefined);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    maxFiles: videoBase64 ? 0 : 5 - base64Images.length,
    disabled: disabled || (videoBase64 ? true : base64Images.length >= 5),
    onDrop: handleDrop,
    accept: videoBase64
      ? { "video/mp4": [] }
      : base64Images.length > 0
      ? { "image/jpeg": [], "image/png": [], "image/webp": [] }
      : {
          "image/jpeg": [],
          "image/png": [],
          "image/webp": [],
          "video/mp4": [],
        },
  });

  // If media is already selected, show change button
  const hasMedia = base64Images.length > 0 || !!videoBase64;
  
  if (hasMedia && (base64Images.length > 0 || videoBase64)) {
    return (
      <div className="w-full">
        <div
          {...getRootProps({
            className: `w-full p-2 sm:p-3 text-center rounded-lg cursor-pointer transition-all ${
              isDragActive
                ? "bg-primary/20 border-2 border-primary border-dashed"
                : "bg-muted/50 hover:bg-muted border border-border"
            }`,
          })}
        >
          <input {...getInputProps()} />
          <div className="flex items-center justify-center gap-2">
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs sm:text-sm text-foreground font-medium">
              Change {videoBase64 ? "video" : "photos"}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        {...getRootProps({
          className: `w-full p-6 sm:p-8 text-center rounded-lg cursor-pointer transition-all ${
            isDragActive
              ? "bg-primary/10 border-2 border-primary border-dashed"
              : "bg-muted/30 hover:bg-muted/50 border-2 border-dashed border-border"
          }`,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <div>
            <Button
              size="sm"
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8"
              disabled={disabled || base64Images.length >= 5 || !!videoBase64}
              type="button"
            >
              {label || "Select from computer"}
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Supports JPG, PNG, WEBP, MP4
            </p>
            {base64Images.length >= 5 && (
              <p className="text-xs text-destructive mt-1">
                Maximum 5 images allowed
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Image preview */}
      {base64Images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-4"
        >
          {base64Images.map((img, index) => (
            <div
              key={index}
              className="relative group w-full aspect-square overflow-hidden rounded-lg shadow-md border border-border"
            >
              <img
                src={img}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(index);
                }}
                className="absolute top-1 right-1 bg-black/70 hover:bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors z-10"
                aria-label="Remove image"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </motion.div>
      )}

      {/* Video preview */}
      {videoBase64 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mt-4 w-full rounded-lg overflow-hidden border border-border"
        >
          <VideoPlayer src={videoBase64} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeVideo();
            }}
            className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors z-10"
            aria-label="Remove video"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </div>
  );
};
export default PostUpload;