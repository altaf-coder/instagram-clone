"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../button";
import { BsFillImageFill } from "react-icons/bs";
interface ImageUploadProps {
  onChange: (base64: string) => void;
  value?: string;
  label?: string;
  disabled?: boolean;
}

const PostUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  label,
  disabled,
}) => {
  const [base64, setBase64] = useState(value);
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
    maxFiles: 1,
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
          className="flex justify-start items-center"
          aria-disabled={disabled}
        >
          <img
            src={base64}
            alt="uploaded image"
            className="w-full h-full object-cover  "
          />
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <BsFillImageFill className="text-6xl text-white" />

          <p className="text-lg font-semibold text-center w-100">
            Drag photos here
          </p>
          <Button size={"sm"}>Select from computer</Button>
        </div>
      )}
    </div>
  );
};

export default PostUpload;
