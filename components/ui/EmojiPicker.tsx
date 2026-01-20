"use client";

import React, { useState, useEffect } from "react";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { Smile } from "lucide-react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface EmojiPickerProps {
  onEmojiClick: (emoji: string) => void;
}

const EmojiPickerComponent: React.FC<EmojiPickerProps> = ({ onEmojiClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 350, height: 400 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimensions = () => {
        const isMobile = window.innerWidth < 640; // sm breakpoint
        if (isMobile) {
          // Full width on mobile (minus padding)
          setDimensions({
            width: window.innerWidth - 32, // 16px padding on each side
            height: Math.min(400, window.innerHeight * 0.6),
          });
        } else {
          // Fixed width on desktop
          setDimensions({
            width: 350,
            height: 400,
          });
        }
      };
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiClick(emojiData.emoji);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-9 sm:w-9 rounded-full hover:bg-muted flex-shrink-0 p-0"
          type="button"
        >
          <Smile className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[calc(100vw-2rem)] sm:w-auto p-0 border-border bg-card max-w-full sm:max-w-[350px]" 
        align="center"
        alignOffset={0}
        side="top"
        sideOffset={8}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          theme="auto"
          width={dimensions.width}
          height={dimensions.height}
        />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPickerComponent;
