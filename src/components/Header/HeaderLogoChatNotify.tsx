import { TbMessageChatbot } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa6";

function HeaderLogoChatNotify() {
  return (
    <header className="flex items-center justify-between p-2 bg-[#F5F6FA] shadow-md h-[44px]">
      <div className="flex items-center p-0 px-4 bg-[#e0e0e0] cursor-pointer text-[20px]">
        <h1>Logo</h1>
      </div>
      <div className="flex items-center">
        <TbMessageChatbot className="text-[24px] cursor-pointer" />
        <FaRegBell className="text-[24px] cursor-pointer ml-2" />
      </div>
    </header>
  );
}

export default HeaderLogoChatNotify;
