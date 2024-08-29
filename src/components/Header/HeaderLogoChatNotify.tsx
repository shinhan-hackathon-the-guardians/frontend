import { useNavigation } from "@/hooks/useNavigation";
import { FaRegBell } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

function HeaderLogoChatNotify() {
  const { goToHome } = useNavigation();

  return (
    <header className="flex items-center justify-between p-2 bg-[#167CFA] shadow-md h-[44px]">
      <div
        className="flex items-center px-3 text-white cursor-pointer text-[32px]"
        onClick={goToHome}
      >
        <HiHome />
      </div>
      <div className="flex items-center">
        <FaRegBell className="text-[28px] cursor-pointer m-1" />
      </div>
    </header>
  );
}

export default HeaderLogoChatNotify;
