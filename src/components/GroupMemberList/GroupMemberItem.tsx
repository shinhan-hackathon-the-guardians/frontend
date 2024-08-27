import React from "react";
import GroupMemberOptions from "./GroupMemberOptions";
import { Member } from "@/types/Member";
import { FcBookmark } from "react-icons/fc";

// 개별적으로 이미지 임포트
import fatherImage from "@/assets/images/groupList/아버지.svg";
import motherImage from "@/assets/images/groupList/어머니.svg";
import sonImage from "@/assets/images/groupList/자녀.svg";
import grandfatherImage from "@/assets/images/groupList/할아버지.svg";
import grandmotherImage from "@/assets/images/groupList/할머니.svg";
import siblingImage from "@/assets/images/groupList/형제.svg";
import etcImage from "@/assets/images/groupList/기타.svg"; // 기타

interface Props {
  member: Member;
  onPinToggle: (isPinned: boolean) => void;
}

const relationshipImageMap: Record<string, string> = {
  아버지: fatherImage,
  어머니: motherImage,
  자녀: sonImage,
  할아버지: grandfatherImage,
  할머니: grandmotherImage,
  형제: siblingImage,
  기타: etcImage,
};

const GroupMemberItem: React.FC<Props> = ({ member, onPinToggle }) => {
  const imageSrc = relationshipImageMap[member.relationship] || etcImage;

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <img
          src={imageSrc}
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
