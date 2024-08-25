import React from "react";
import GroupMemberOptions from "./GroupMemberOptions";

interface Member {
  id: number;
  name: string;
  phone: string;
  position: string;
  isPinned: boolean;
}

interface Props {
  member: Member;
  onPinToggle: (id: number) => void;
}

const GroupMemberItem: React.FC<Props> = ({ member, onPinToggle }) => {
  const positionText = member.position === "가디언" ? "가디언" : "서포터";

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <img
          src={`https://via.placeholder.com/48`}
          alt={member.name}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center">
          <h3 className="text-lg font-medium">{member.name}</h3>
          {member.isPinned && (
            <span className="ml-2 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          )}
        </div>
        <p className="text-gray-500">{member.phone}</p>
      </div>
      <div className="flex flex-col items-end">
        <GroupMemberOptions isPinned={member.isPinned} onPinToggle={() => onPinToggle(member.id)} />
        <span className="text-xs text-gray-500 mt-1">{positionText}</span>
      </div>
    </div>
  );
};

export default GroupMemberItem;
