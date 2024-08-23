import { IoChevronBackOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

function HeaderBackSetting() {
  return (
    <header className="flex items-center justify-between p-2 bg-[#F5F6FA] shadow-md h-[44px]">
      <IoChevronBackOutline className="text-[24px] cursor-pointer" />
      <CiSettings className="text-[24px] cursor-pointer" />
    </header>
  );
}

export default HeaderBackSetting;
