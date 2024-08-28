import React from "react";
import { useNavigation } from "@/hooks/useNavigation";

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ isOpen, onClose }) => {
  const { goToGuardianExam } = useNavigation();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[340px]">
        <h2 className="text-xl font-bold mb-4">시험 안내</h2>
        <p className="mb-4 text-sm">
          시험은 총 20개의 OX 문항으로 구성되며, 18개 이상 맞히면 패스합니다.
          제한 시간 내에 답을 선택해야 하며, 시간 초과 시 자동으로 오답
          처리됩니다. 제한시간 후 해설이 제공됩니다. 이전 문제로 돌아갈 수
          없습니다. 신중히 체크해주시기 바랍니다. 시험은 언제든지 재응시할 수
          있습니다.
        </p>
        <div className="flex justify-center space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            아니오
          </button>
          <button
            onClick={goToGuardianExam}
            className="px-4 py-2 bg-Button text-white rounded hover:bg-blue-600"
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
