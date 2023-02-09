"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import NewChat from "./NewChat";

const SidePanel = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col h-screen p-2">
      <NewChat />
      {session && (
        <div className="flex items-center justify-center p-2 flex-col ">
          <img
            src={session?.user?.image!}
            alt="user img"
            className="rounded-full w-10 h-10 mb-5"
          />
          <button
            className="newChatBtn items-center justify-center"
            onClick={() => signOut()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Logout
          </button>
        </div>
      )}
      {/** New chat button */}
      {/** conversation history */}
      {/** Action history */}
    </div>
  );
};

export default SidePanel;
