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
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 flex flex-col justify-center text-center items-center">
          <h3 className="text-lg font-bold mb-2">시험 안내</h3>
          <p className="text-sm mb-4">
            시험은 <span className="font-semibold">총 20개의 OX 문항</span>
            으로 구성되며,
            <br />
            <span className="font-semibold">18개 이상</span> 맞히면 패스합니다.
          </p>
          <p className="text-sm mb-4">
            <span className="font-semibold">제한 시간</span> 내에 답을 선택해야
            하며,
            <br />
            시간 초과 시{" "}
            <span className="font-semibold">자동으로 오답 처리</span>
            됩니다.
            <br />
            제한시간 후 해설이 제공됩니다.
          </p>
          <p className="text-sm mb-4">
            이전 문제로 돌아갈 수 없습니다.
            <br />
            신중히 체크해주시기 바랍니다.
          </p>
          <p className="text-sm mb-4">시험은 언제든지 재응시할 수 있습니다.</p>
          <p className="text-base text-red font-semibold mb-4">
            응시하시겠습니까?
          </p>
          <div className="flex justify-end space-x-2">
            <button
              className="w-20 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200"
              onClick={goToGuardianExam}
            >
              예
            </button>
            <button
              onClick={onClose}
              className="w-20 px-4 py-2 text-sm bg-Button text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
              아니오
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
