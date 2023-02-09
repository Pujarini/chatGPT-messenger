"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center">
      <Image
        src={"https://openai.com/content/images/2022/05/openai-avatar.png"}
        alt={"ChatGPT Logo"}
        width={300}
        height={300}
      />
      <button
        className="text-gray-200 border border-slate-200 p-2 rounded-sm hover:bg-slate-700 font-bold cursor-pointer"
        onClick={() => signIn("google")}
      >
        Sign In to chat with ChatGPT
      </button>
    </div>
  );
};

export default Login;
