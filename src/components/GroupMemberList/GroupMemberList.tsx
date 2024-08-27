import React from "react";
import GroupMemberItem from "./GroupMemberItem";
import { Member } from "@/types/Member";
import { FaPlus } from "react-icons/fa6";

interface Props {
  members: Member[];
  onPinToggle: (id: number) => void;
  handleAddMember: () => void;
}

const GroupMemberList: React.FC<Props> = ({
  members,
  onPinToggle,
  handleAddMember,
}) => {
  const sortedMembers = [...members].sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0;
    return a.isPinned ? -1 : 1;
  });

  return (
    <div className=" flex-1 overflow-y-auto scrollbar-hide">
      {sortedMembers.map((member) => (
        <div className="m-2" key={member.id}>
          <GroupMemberItem
            member={member}
            onPinToggle={() => onPinToggle(member.id)}
          />
        </div>
      ))}
      <div
        className="bg-white rounded-lg shadow-md p-5 m-2 mb-5 flex justify-center cursor-pointer hover:bg-grey hover:text-white text-grey"
        onClick={handleAddMember}
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default GroupMemberList;
