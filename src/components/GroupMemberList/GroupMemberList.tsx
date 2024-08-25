import React from "react";
import GroupMemberItem from "./GroupMemberItem";
import { Member } from "@/types/Member";

interface Props {
  members: Member[];
  onPinToggle: (id: number) => void;
}

const GroupMemberList: React.FC<Props> = ({ members, onPinToggle }) => {
  const sortedMembers = [...members].sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0;
    return a.isPinned ? -1 : 1;
  });

  return (
    <div className="divide-y divide-gray-200 scrollbar-hide">
      {sortedMembers.map((member) => (
        <GroupMemberItem
          key={member.id}
          member={member}
          onPinToggle={() => onPinToggle(member.id)}
        />
      ))}
    </div>
  );
};

export default GroupMemberList;
