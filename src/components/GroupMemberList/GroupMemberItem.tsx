import React from "react";
import GroupMemberOptions from "./GroupMemberOptions";
import { Member } from "@/types/Member";
import { FcBookmark } from "react-icons/fc";
import { useNavigation } from "@/hooks/useNavigation";
import { useAuthStore } from "@/stores/userAuthStore";

// 개별적으로 이미지 임포트
import fatherImage from "@/assets/images/groupList/아버지.svg";
import motherImage from "@/assets/images/groupList/어머니.svg";
import sonImage from "@/assets/images/groupList/아들.svg";
import daughterImage from "@/assets/images/groupList/딸.svg";
import grandfatherImage from "@/assets/images/groupList/할아버지.svg";
import grandmotherImage from "@/assets/images/groupList/할머니.svg";
import brotherImage from "@/assets/images/groupList/형제.svg";
import sisterImage from "@/assets/images/groupList/자매.svg";
import etcImage from "@/assets/images/groupList/기타.svg";
import guardianBadgeRe from "@/assets/images/guardianBadgeRe.png";

interface Props {
  member: Member;
  onPinToggle: (isPinned: boolean) => void;
}

const relationshipImageMap: Record<string, string> = {
  아버지: fatherImage,
  어머니: motherImage,
  아들: sonImage,
  딸: daughterImage,
  할아버지: grandfatherImage,
  할머니: grandmotherImage,
  형제: brotherImage,
  자매: sisterImage,
  기타: etcImage,
};

const roleMap = {
  MEMBER: "Member",
  MANAGER: "Manager",
  OWNER: "Owner",
};

const GroupMemberItem: React.FC<Props> = ({ member, onPinToggle }) => {
  const imageSrc = relationshipImageMap[member.relationship] || etcImage;
  const { goToMemberSettings } = useNavigation();
  const { user } = useAuthStore();
  const isClickable = user?.role !== "MEMBER";

  const handleItemClick = (e: React.MouseEvent, target_user_id: number) => {
    // 옵션 버튼이나 그 하위 요소를 클릭한 경우 이벤트 전파를 막음
    if (
      !e.currentTarget.contains(e.target as Node) ||
      (e.target as HTMLElement).closest(".member-options")
    ) {
      return;
    }
    goToMemberSettings(String(target_user_id));
  };

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md p-4 flex items-center ${
        isClickable ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      onClick={(e) => isClickable && handleItemClick(e, member.id)}
    >
      <div className="flex-shrink-0 mr-4">
        <img src={imageSrc} alt={member.name} className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm mb-1">{member.relationship}</span>
          <div className="flex items-center">
            <h3 className="text-lg font-medium">{member.name}</h3>
            {member.isPinned && <FcBookmark />}
          </div>
          <p className="text-gray-500 text-sm">{member.birthdate}</p>
        </div>
      </div>
      <div className="absolute top-0 right-2 flex flex-col items-end">
        <GroupMemberOptions
          isPinned={member.isPinned}
          onPinToggle={() => onPinToggle(!member.isPinned)}
        />
        <span className="me-2">
          {member.level === "GUARDIAN" ? (
            <img src={guardianBadgeRe} alt="Guardian BadgeRe" className="h-4 w-4" />
          ) : (
            <div className="h-4 w-4" />
          )}
        </span>
        <span className="text-xs text-gray-500 mt-7 me-2">{roleMap[member.role]}</span>
      </div>
    </div>
  );
};

export default GroupMemberItem;
