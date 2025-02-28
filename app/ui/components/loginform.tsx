import { GreenButton, ForgotPasswordButton, BlueButton } from "./buttons";
import AcmeLogo from "../logo";
import Link from "next/link";

export default function LoginForm() {
    return (
      <div className=" font-extrabold bg-white w-full rounded-lg flex flex-col mx-4 py-8 gap-3 items-center">
        <div>
          <AcmeLogo />
        </div>
        <form className="flex flex-col  gap-3">
          
          <input type="text" placeholder="username" id="username" className="border border-zinc-200 rounded-lg px-4 py-2"/>
          
          <input type="password" placeholder="password" className="border border-zinc-200 rounded-lg px-4 py-2"/>
          {/* will be implemented in the next section */}
          <Link href='/' className="w-full">
          <BlueButton value="Log In"/>
          </Link>
          <ForgotPasswordButton/>
        </form>
        <div className="mt-4 pt-8 border-t border-zinc-200 w-full h-full flex items-center justify-center">
          <GreenButton value="Create an account" href="/signup"/>
        </div>
      </div>
    );
  }