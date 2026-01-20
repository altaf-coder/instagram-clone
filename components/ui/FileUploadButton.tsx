"use client";

import React, { useRef, useState } from "react";
import { Paperclip, Image, Video, File, X, Loader2 } from "lucide-react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import axios from "axios";
import toast from "react-hot-toast";

interface FileUploadButtonProps {
  onFileUploaded: (fileUrl: string, fileType: string, fileName: string) => void;
  onFileSelected?: (file: File) => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ onFileUploaded, onFileSelected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (100MB max)
    if (file.size > 100 * 1024 * 1024) {
      toast.error("File size must be less than 100MB");
      return;
    }

    // Store selected file and notify parent
    setSelectedFile(file);
    onFileSelected?.(file);

    // Upload file immediately
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/api/messages/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const fileType = file.type.startsWith("image/")
        ? "image"
        : file.type.startsWith("video/")
        ? "video"
        : "document";

      onFileUploaded(response.data.url, fileType, response.data.filename || file.name);
      setSelectedFile(null);
      toast.success("File uploaded successfully");
    } catch (error: any) {
      console.error("Error uploading file:", error);
      toast.error(error.response?.data?.error || "Failed to upload file");
      setSelectedFile(null);
      onFileSelected?.(null as any);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };


  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*,.pdf,.doc,.docx,.txt,.zip,.rar"
        onChange={handleFileSelect}
        className="hidden"
      />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex-shrink-0"
            disabled={uploading}
          >
            {uploading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Paperclip className="h-5 w-5" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2" align="start" side="top">
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="justify-start w-full"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.accept = "image/*";
                  fileInputRef.current.click();
                }
              }}
            >
              <Image className="h-4 w-4 mr-2" />
              Photo
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start w-full"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.accept = "video/*";
                  fileInputRef.current.click();
                }
              }}
            >
              <Video className="h-4 w-4 mr-2" />
              Video
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start w-full"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.accept = ".pdf,.doc,.docx,.txt,.zip,.rar";
                  fileInputRef.current.click();
                }
              }}
            >
              <File className="h-4 w-4 mr-2" />
              Document
            </Button>
          </div>
        </PopoverContent>
      </Popover>

    </>
  );
};

export default FileUploadButton;
