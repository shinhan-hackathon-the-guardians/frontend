// UnifiedModal.tsx
import React from "react";

interface UnifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
  notificationId: number;
  transactionType: string;
  senderAccountNumber: string;
  receiver: string;
  transactionBalance: string;
  title: string; // 모달의 제목을 조건에 따라 설정할 수 있도록 추가
}

const UnifiedModal: React.FC<UnifiedModalProps> = ({
  isOpen,
  onClose,
  //   notificationId,
  transactionType,
  senderAccountNumber,
  receiver,
  transactionBalance,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm text-center z-50">
        <h2 className="text-md font-bold mb-2">{title}</h2>
        <p className="text-lg font-medium text-gray-800">
          거래 유형: {transactionType}
        </p>
        {transactionType === "WITHDRAWAL" ? (
          <div></div>
        ) : (
          <div>
            <p className="text-sm text-gray-600 mt-2">
              송신자 계좌: {senderAccountNumber}
            </p>
          </div>
        )}
        <p className="text-sm text-gray-600 mt-2">수신자: {receiver}</p>
        <p className="text-xl font-bold text-blue-600 my-2">
          거래 금액: {parseInt(transactionBalance, 10).toLocaleString()}원
        </p>
        <div className="flex justify-around mt-6">
          <button
            onClick={onClose}
            className=" text-white px-4 py-2 rounded w-24 font-sm bg-Button text-sm"
          >
            승인
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded w-24 font-sm text-sm"
          >
            거절
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnifiedModal;
