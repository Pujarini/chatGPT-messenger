"use client";

import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const NewChat = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    const docRef = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        createdAt: serverTimestamp(),
        userId: session?.user?.email!,
      }
    );
    router.push(`/chat/${docRef.id}`);
  };

  return (
    <div className="" onClick={() => console.log("hello")}>
      <button className="newChatBtn" onClick={createNewChat}>
        <PlusSmallIcon className="h-4 w-4" />
        New Chat
      </button>
    </div>
  );
};

export default NewChat;
