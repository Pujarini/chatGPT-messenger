"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {chats?.docs.map((msg) => {
        return <Message key={msg.id} message={msg.data()} />;
      })}
    </div>
  );
};

export default Chat;
