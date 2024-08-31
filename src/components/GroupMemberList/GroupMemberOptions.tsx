import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

interface Props {
  isPinned: boolean;
  onPinToggle: () => void;
}

const GroupMemberOptions: React.FC<Props> = ({ isPinned, onPinToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };
  const handlePinClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    Z;
    onPinToggle();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={handleToggle} className="p-2 text-gray-400">
        <BiDotsVerticalRounded />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={handlePinClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {isPinned ? "고정 해제하기" : "고정하기"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupMemberOptions;
