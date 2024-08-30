import { useNavigation } from "@/hooks/useNavigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa6";

function HeaderBackChatNotify() {
  const { goToBack, goToNotification, goToChatBot } = useNavigation();

  return (
    <header className="flex items-center justify-between p-2 bg-[#F5F6FA] shadow-md h-[44px]">
      <IoChevronBackOutline
        className="text-[24px] cursor-pointer"
        onClick={goToBack}
      />
      <div className="flex items-center">
        <TbMessageChatbot
          className="text-[24px] cursor-pointer"
          onClick={goToChatBot}
        />
        <FaRegBell
          className="text-[24px] cursor-pointer ml-2"
          onClick={goToNotification}
        />
      </div>
    </header>
  );
}

export default HeaderBackChatNotify;
