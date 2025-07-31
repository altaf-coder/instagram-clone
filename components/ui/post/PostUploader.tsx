"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../button";
import VideoPlayer from "@/components/reel/VideoPlayer";

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

  const { getRootProps, getInputProps } = useDropzone({
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
            disabled={disabled || base64Images.length >= 5 || !!videoBase64}
          >
            {videoBase64 ? "Video selected" : "Select from computer"}
          </Button>
          {base64Images.length >= 5 && (
            <p className="text-xs text-red-400 mt-2">
              You can upload up to 5 images only.
            </p>
          )}
        </div>
      </div>

      {/* Image preview */}
      {base64Images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-4">
          {base64Images.map((img, index) => (
            <div
              key={index}
              className="relative group w-full aspect-square overflow-hidden rounded shadow-md"
            >
              <img
                src={img}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-60 text-white rounded-full px-2 text-xs hidden group-hover:block"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Video preview */}
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

export default PostUpload;
