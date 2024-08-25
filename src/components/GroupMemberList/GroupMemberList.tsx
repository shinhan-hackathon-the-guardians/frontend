import React from "react";
import GroupMemberItem from "./GroupMemberItem";

interface Member {
  id: number;
  name: string;
  phone: string;
  isPinned: boolean;
}

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
    <div className="divide-y divide-gray-200">
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
