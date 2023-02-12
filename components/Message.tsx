import { DocumentData } from "firebase/firestore";
import TypingEffect from "./TypingEffect";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const userChatGPT = message?.user?.name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${userChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-2 px-10 max-w-2xl mx-auto">
        <img
          src={message?.user?.avatar}
          className="w-8 h-8"
          alt={`${message?.user?.name}`}
        />
        {userChatGPT ? (
          <TypingEffect text={message.text} />
        ) : (
          <p className="pt-1 text-sm">{message.text}</p>
        )}
      </div>
    </div>
  );
};

export default Message;
