import React from "react";

interface FamilyInviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  familyId: number;
  name: string;
  description: string;
  ownerName: string;
  onAccept?: () => void; // 초대 수락 시 호출되는 함수
  onReject?: () => void; // 초대 거절 시 호출되는 함수
}

const FamilyInviteModal: React.FC<FamilyInviteModalProps> = ({
  isOpen,
  onClose,
  //   familyId,
  name,
  description,
  ownerName,
  onAccept,
  onReject,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm text-center z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-md font-bold mb-2">가족 초대</h2>
        <p className="text-lg font-medium text-gray-800">가족 이름: {name}</p>
        <p className="text-sm text-gray-600 mt-2">설명: {description}</p>
        <p className="text-sm text-gray-600 mt-2">소유자: {ownerName}</p>
        <div className="flex justify-around mt-6">
          <button
            onClick={onAccept}
            className="bg-blue-500 text-white px-4 py-2 rounded w-24 font-medium"
          >
            수락
          </button>
          <button
            onClick={onReject}
            className="bg-red-500 text-white px-4 py-2 rounded w-24 font-medium"
          >
            거절
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyInviteModal;
