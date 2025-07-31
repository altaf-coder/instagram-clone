"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../button";
import { BsFillImageFill } from "react-icons/bs";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../avatar";
import useCurrentUser from "@/hooks/useCurrentUser";
interface ImageUploadProps {
  onChange: (base64: string) => void;
  value?: string;
  label?: string;
  disabled?: boolean;
}

const ProfileUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  label,
  disabled,
}) => {
  const [base64, setBase64] = useState(value);
  const { data: currentUser } = useCurrentUser();
  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange]
  );
  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
  );
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 5,
    disabled,
    onDrop: handleDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });
  return (
    <div
      {...getRootProps({
        className:
          "w-full p-4 text-white text-center rounded-md border-neutral-700",
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div
          className="flex justify-center items-center"
          aria-disabled={disabled}
        >
          <Avatar className="w-30 h-30">
            <AvatarImage
              src={base64}
              className="w-full h-full object-cover rounded-full"
            ></AvatarImage>
          </Avatar>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Avatar className="w-30 h-30">
            <AvatarImage
              src={currentUser?.image || "/images/profile.webp"}
              className="w-full h-full object-cover rounded-full"
            ></AvatarImage>
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;
