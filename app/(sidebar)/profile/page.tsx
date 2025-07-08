"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";
import React from "react";

const ProfilePage = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <div className="w-full max-w-md">
        {/* Top Row for sm: Avatar + Username + Button */}
        <div className="flex sm:hidden items-center gap-4 mb-4">
          {/* Avatar */}
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>

          {/* Username and Button */}
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-white">
              {currentUser?.userName}
            </p>
            <Button
              size="sm"
              variant="secondary"
              className="h-[30px] bg-gray-600 text-white hover:bg-gray-700 text-sm px-4"
            >
              Edit Profile
            </Button>
          </div>
        </div>

        {/* lg: Original Layout (unchanged) */}
        <div className="hidden sm:flex flex-row items-start gap-10">
          {/* Avatar */}
          <Avatar className="h-32 w-32">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>

          {/* Right section (username + button + other info) */}
          <div className="flex flex-col gap-4 w-full">
            {/* Username + Button */}
            <div className="flex items-center gap-4">
              <p className="text-xl font-semibold text-white">
                {currentUser?.userName}
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="h-[38px] bg-gray-600 text-white hover:bg-gray-700 text-base px-4"
              >
                Edit Profile
              </Button>
            </div>

            {/* Stats */}
            <div className="flex text-white gap-6 text-sm">
              <p>123 posts</p>
              <p>456 followers</p>
              <p>789 following</p>
            </div>

            {/* Name */}
            <p className="text-white font-semibold text-base">
              {currentUser?.name}
            </p>

            {/* Bio */}
            <p className="text-white text-sm">
              This is the user bio. Passionate developer. Photographer.
              Traveler.
            </p>
          </div>
        </div>

        {/* Bottom Section: Stats + Name + Bio on sm only */}
        <div className="sm:hidden flex flex-col items-center text-center gap-2 text-white text-sm">
          {/* Stats */}
          <div className="flex justify-center gap-4 text-xs">
            <p>123 posts</p>
            <p>456 followers</p>
            <p>789 following</p>
          </div>

          {/* Name */}
          <p className="font-semibold">{currentUser?.name}</p>

          {/* Bio */}
          <p className="text-xs">
            This is the user bio. Passionate developer. Photographer. Traveler.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
