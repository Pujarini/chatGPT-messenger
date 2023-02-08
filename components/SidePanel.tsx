import { PlusSmallIcon } from "@heroicons/react/24/outline";

const SidePanel = () => {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <button className="newChatBtn">
          <PlusSmallIcon className="h-4 w-4" />
          New Chat
        </button>
      </div>
      {/** New chat button */}
      {/** conversation history */}
      {/** Action history */}
    </div>
  );
};

export default SidePanel;
