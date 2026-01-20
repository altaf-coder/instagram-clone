import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./button";
import { motion } from "framer-motion";

interface GoogleLoginButtonProps {
  label?: string;
  onClick?: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  label = "Continue with Google",
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Button
        type="button"
        onClick={onClick}
        variant="outline"
        className="w-full h-11 sm:h-12 flex items-center justify-center gap-3 bg-background hover:bg-muted border-border text-foreground font-medium"
      >
        <FcGoogle className="text-xl" />
        <span className="text-sm sm:text-base">{label}</span>
      </Button>
    </motion.div>
  );
};

export default GoogleLoginButton;
