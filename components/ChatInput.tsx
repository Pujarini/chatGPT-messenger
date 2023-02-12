"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [chat, setChat] = useState("");
  const { data: session } = useSession();

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chat) return;
    const input = chat.trim();
    setChat("");
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
    // toast
    const notify = toast.loading("Loading ....");

    await fetch("/api/askQuery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId,
        query: input,
        session,
      }),
    }).then(() => {
      //toast
      toast.success("ChatGPT responded", {
        id: notify,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-50 rounded-lg text-sm p-2 m-2">
      <form className="p-2 space-x-5 flex" onSubmit={sendMessage}>
        <input
          type="text"
          name="message"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          className="bg-transparent focus:outline-none flex-1"
          placeholder="Type your message..."
        />
        <button
          className="hover:bg-black p-2"
          type="submit"
          disabled={!session || !chat}
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45 text-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
