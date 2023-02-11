"use client";

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props = {
  id: String;
};

const ChatRow = ({ id }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats"),
      orderBy("createdAt", "asc")
    )
  );

  console.log(messages?.docs, id);

  return (
    <Link href={`/chat/${id}`} className={`chatRow`}>
      <ChatBubbleLeftIcon className="h-4 w-4" />
      <p className="flex-1 hidden md:inline-flex truncate">New Chat</p>
      <TrashIcon className="h-4 w-4 text-gray-700 hover:text-red-400" />
    </Link>
  );
};

export default ChatRow;
