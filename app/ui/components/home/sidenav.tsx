import Link from "next/link";
import AcmeLogo from "../../logo";
import NavLinks from "./navlinks";



export default function SideNav() {
  return (
    <div className="h-full bg-white flex flex-col items-center">
      <div className="w-11/12 h-24 rounded-lg bg-amber-500 mt-4 text-white flex items-center justify-center">
        <AcmeLogo />
      </div>
      <div className="w-11/12 mt-4 flex flex-col gap-4">
        <NavLinks/>
      </div>
    </div>
  );
}
