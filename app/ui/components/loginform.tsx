'use client'
import { GreenButton, ForgotPasswordButton, BlueButton } from "./buttons";
import AcmeLogo from "../logo";
import Link from "next/link";
import User from "@/app/lib/definitions";
import { use, useContext } from "react";
import { useUser } from "@/app/lib/currentUserContext";
const defaultUser: User = {
  username: "admin",
  email: "a@a.com",
  password: "pswd",
  id: 123,
  avatar: "https://randomuser.me/api/portraits",
};


export default function LoginForm() {
  const setUser = useUser().setUser;
  const handleClick = () => {
    console.log("Button clicked");
    setUser(defaultUser);
  }
  return (
    <div className=" font-extrabold bg-white w-full rounded-lg flex flex-col mx-4 py-8 gap-3 items-center">
      <div>
        <AcmeLogo />
      </div>
      <form className="flex flex-col  gap-3">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border border-zinc-200 rounded-lg px-4 py-2"
        />

        <input
          type="password"
          placeholder="password"
          className="border border-zinc-200 rounded-lg px-4 py-2"
        />
        {/* will be implemented in the next section */}
        <Link href="/home" className="w-full">
          <BlueButton value="Log In" />
        </Link>
        <ForgotPasswordButton />
      </form>
      <div className="mt-4 pt-8 border-t border-zinc-200 w-full h-full flex items-center justify-center">
        <GreenButton value="Create an account" href="/signup" />
      </div>
    </div>
  );
}
