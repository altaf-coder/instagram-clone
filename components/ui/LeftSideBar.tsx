"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import PostUploadModal from "./post/PostModal";

const LeftSideBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = React.useState(false);

  const baseClass =
    "flex items-center gap-4 text-white hover:opacity-90 transition-colors duration-200";
  const iconSize = 26;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col p-6 w-64 h-screen bg-black fixed top-0 left-0">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="w-33 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-8 ml-2 flex-grow">
          <Link href="/" className={baseClass}>
            {isActive("/") ? (
              <AiFillHome size={iconSize} />
            ) : (
              <AiOutlineHome size={iconSize} />
            )}
            <span className={isActive("/") ? "font-bold" : "font-normal"}>
              Home
            </span>
          </Link>

          <div className={`${baseClass} font-normal`}>
            <AiOutlineHeart size={iconSize} />
            <span>Notifications</span>
          </div>

          <div
            className={`${baseClass} font-normal`}
            onClick={() => setIsOpen(true)}
          >
            <FiPlusSquare size={iconSize} />
            <span>Create</span>
          </div>

          <Link href="/profile" className={baseClass}>
            {isActive("/profile") ? (
              <FaUserCircle size={iconSize} />
            ) : (
              <CgProfile size={iconSize} />
            )}
            <span
              className={isActive("/profile") ? "font-bold" : "font-normal"}
            >
              Profile
            </span>
          </Link>
        </div>

        {/* Logout Button pinned to bottom */}
        <div
          className={`${baseClass} mt-auto ml-2 cursor-pointer`}
          onClick={() => signOut()}
        >
          <BiLogOut size={iconSize} color="red" />
          <span className="font-semibold">Logout</span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black flex justify-around items-center py-3">
        <Link href="/">
          {isActive("/") ? (
            <AiFillHome size={iconSize} />
          ) : (
            <AiOutlineHome size={iconSize} />
          )}
        </Link>
        <AiOutlineHeart size={iconSize} />
        <FiPlusSquare size={iconSize} onClick={() => setIsOpen(true)} />
        <Link href="/profile">
          {isActive("/profile") ? (
            <FaUserCircle size={iconSize} />
          ) : (
            <CgProfile size={iconSize} />
          )}
        </Link>
      </div>
      <PostUploadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LeftSideBar;
