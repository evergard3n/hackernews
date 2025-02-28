'use client'
import { useRouter } from "next/navigation"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
export default function SendButton({ hide }: { hide: () => void }) {
    const router = useRouter()
    function sendPost() {
        hide();
        router.push('/home');
    }
    return (
        <button onClick={sendPost} className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 w-fit h-10 flex flex-row items-center gap-2 rounded">
            Send
            <PaperAirplaneIcon className="w-4 h-4"/>
        </button>
    )
}