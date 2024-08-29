import { useNavigation } from "@/hooks/useNavigation";
import { IoChevronBackOutline } from "react-icons/io5";

function HeaderBackChatNotify() {
  const { goToBack } = useNavigation();

  return (
    <header className="flex items-center justify-between p-2 bg-[#F5F6FA] shadow-md h-[44px]">
      <IoChevronBackOutline
        className="text-[24px] cursor-pointer"
        onClick={goToBack}
      />
    </header>
  );
}

export default HeaderBackChatNotify;
