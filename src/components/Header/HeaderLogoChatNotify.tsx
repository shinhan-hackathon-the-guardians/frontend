import { useNavigation } from "@/hooks/useNavigation";
import { HiHome } from "react-icons/hi";
import { GoBellFill } from "react-icons/go";
import { RiLogoutBoxLine } from "react-icons/ri";
import { userAuthService } from "@/services/userAuthService";

function HeaderLogoChatNotify() {
  const { goToHome, goToNotification, goToSplash } = useNavigation();

  return (
    <header className="flex items-center justify-between p-2 bg-Button shadow-md h-[44px]">
      <div
        className="flex items-center px-3 text-white cursor-pointer text-[32px]"
        onClick={goToHome}
      >
        <HiHome />
      </div>
      <div className="flex items-center">
        <GoBellFill
          className="text-white text-[28px] cursor-pointer m-1"
          onClick={goToNotification}
        />
        <RiLogoutBoxLine
          className="text-white text-[28px] cursor-pointer m-1"
          onClick={() => {
            userAuthService.logout();
            goToSplash();
          }}
        />
      </div>
    </header>
  );
}

export default HeaderLogoChatNotify;
