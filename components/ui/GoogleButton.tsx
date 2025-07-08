interface GoogleLoginButtonProps {
  label?: string;
  onClick?: () => void;
}
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 bg-white text-black mt-4 px-11 py-1.5 rounded-lg shadow-md hover:bg-gray-900 transition"
    >
      <FcGoogle className="text-2xl bg-white rounded-full" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default GoogleLoginButton;
