"use client";

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pathName) return;
    setActive(pathName.includes(id));
  }, [pathName]);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats")
  );

  const deleteChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow ${active && "bg-gray-700/50"}`}
    >
      <ChatBubbleLeftIcon className="h-4 w-4" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        className="h-4 w-4 text-gray-700 hover:text-red-400"
        onClick={deleteChat}
      />
    </Link>
  );
};

export default ChatRow;
