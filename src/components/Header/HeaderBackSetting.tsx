import { IoChevronBackOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { useAuthStore } from "@/stores/userAuthStore";
import { useNavigation } from "@/hooks/useNavigation";

function HeaderBackSetting() {
  const { goToBack, goToGroupSettings } = useNavigation();
  const { user } = useAuthStore();

  return (
    <header className="flex items-center justify-between p-2 bg-backGround shadow-md h-[44px]">
      <IoChevronBackOutline className="text-[24px] cursor-pointer" onClick={goToBack} />
      {user?.role !== "MEMBER" && (
        <CiSettings className="text-[24px] cursor-pointer" onClick={goToGroupSettings} />
      )}
    </header>
  );
}

export default HeaderBackSetting;
