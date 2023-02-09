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
    console.log("clicked");

    const docRef = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        createdAt: serverTimestamp(),
        useeId: session?.user?.email!,
      }
    );
    console.log("Document written with ID: ", docRef.id);
    router.push(`/chat/${docRef.id}`);
  };

  return (
    <div className="flex-1" onClick={() => console.log("hello")}>
      <button className="newChatBtn" onClick={createNewChat}>
        <PlusSmallIcon className="h-4 w-4" />
        New Chat
      </button>
    </div>
  );
};

export default NewChat;
