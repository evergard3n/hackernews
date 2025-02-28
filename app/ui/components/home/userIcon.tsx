'use client'
import { useUser } from "@/app/lib/currentUserContext";
import Image from "next/image";
export default function UserIcon() {
    const user = useUser().user;
    return (
        <div className="w-12 h-10 rounded-full overflow-hidden bg-amber-400">
            <Image src={user?.avatar || '/ganyu.jpeg'} alt="userAvt" height={2400} width={2400} className="scale-150"></Image>
        </div>
    )
}