import { useNavigation } from "@/hooks/useNavigation";
import { HiHome } from "react-icons/hi";
import { GoBellFill } from "react-icons/go";

function HeaderLogoChatNotify() {
  const { goToHome, goToPaymentRequest } = useNavigation();

  return (
    <header className="flex items-center justify-between p-2 bg-[#167CFA] shadow-md h-[44px]">
      <div
        className="flex items-center px-3 text-white cursor-pointer text-[32px]"
        onClick={goToHome}
      >
        <HiHome />
      </div>
      <div className="flex items-center">
        <GoBellFill
          className="text-white text-[28px] cursor-pointer m-1"
          onClick={goToPaymentRequest}
        />
      </div>
    </header>
  );
}

export default HeaderLogoChatNotify;
