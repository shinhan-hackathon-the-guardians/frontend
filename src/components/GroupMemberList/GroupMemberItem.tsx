import React from "react";
import GroupMemberOptions from "./GroupMemberOptions";
import { Member } from "@/types/Member";
import { FcBookmark } from "react-icons/fc";

interface Props {
  member: Member;
  onPinToggle: (isPinned: boolean) => void;
}

const GroupMemberItem: React.FC<Props> = ({ member, onPinToggle }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <img
          src={`https://via.placeholder.com/48`}
          alt={member.name}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm mb-1">
            {member.relationship}
          </span>
          <div className="flex items-center">
            <h3 className="text-lg font-medium">{member.name}</h3>
            {member.isPinned && <FcBookmark />}
          </div>
          <p className="text-gray-500">{member.phone_number}</p>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex flex-col items-end">
        <GroupMemberOptions
          isPinned={member.isPinned}
          onPinToggle={() => onPinToggle(!member.isPinned)}
        />
        <span className="text-xs text-gray-500 mt-10">{member.level}</span>
      </div>
    </div>
  );
};

export default GroupMemberItem;
