import { XMarkIcon } from "@heroicons/react/24/outline";
import { useUser } from "@/app/lib/currentUserContext";
import SendButton from "../sendPostButton";
function TextArea({ hide }: { hide: () => void }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col border border-zinc-200 h-fit p-2 rounded-lg focus:border-zinc-300">
        <label htmlFor="">
          Title<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className=" h-10 focus:outline-none"
          placeholder="Title..."
        />
      </div>
      <textarea
        name=""
        id=""
        className="resize-none focus:outline-none h-32 w-full border border-zinc-200 p-2 rounded-lg"
        placeholder="Body"
      ></textarea>
      <div className="flex flex-row justify-end">
        <SendButton hide={hide}/>
      </div>
    </div>
  );
}

export default function NewPostBig({ hide }: { hide: () => void }) {
  return (
    <div className="absolute bg-white w-1/2 top-0 left-0 right-0 bottom-0 m-auto h-1/2 rounded-lg shadow-lg flex flex-col z-20">
      <div className="w-full h-16 flex flex-row  items-center p-4 border-b border-zinc-200">
        <h1 className="font-bold grow text-center">Create new post</h1>
        <button
          onClick={hide}
          className="text-black rounded-full hover:bg-zinc-300 transition-colors duration-150 ease-in h-8 w-8 flex items-center justify-center"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
      <div>
        <TextArea hide={hide}/>
      </div>
    </div>
  );
}
