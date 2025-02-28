"use client";
import UserIcon from "./userIcon";
import { useState } from "react";
import NewPostBig from "./newPostBig";
export default function NewPost() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-white p-4 rounded-lg w-1/2 flex flex-row items-center gap-4">
      <UserIcon />
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-50 bg-opacity-50 z-10"
          onClick={handleClick}
        ></div>
      )}
      <input
        type="text"
        disabled={open}
        className="bg-zinc-100 h-10 rounded-full focus:border-0 w-full px-4"
        placeholder="What's on your mind?"
        onClick={handleClick}
      />
      {open && <NewPostBig hide={handleClick} />}
    </div>
  );
}
