import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";

interface ResultModalProps {
  isOpen: boolean;
  correctAnswers: number;
  totalQuestions: number;
}

const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  correctAnswers,
  totalQuestions,
}) => {
  const navigate = useNavigate();
  const passThreshold = Math.ceil(totalQuestions * 0.7); // 70% 이상 맞추면 합격
  const isPassed = correctAnswers >= passThreshold;

  const handleGoToMain = () => {
    navigate("/"); // 메인 페이지 경로로 이동
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-[340px]">
        <div className="flex justify-around items-center">
          <div className="text-lg font-bold text-grey">
            <p>문제 개수 : {totalQuestions}개</p>
            <p>맞은 개수 : {correctAnswers}개</p>
            <p>틀린 개수 : {totalQuestions - correctAnswers}개</p>
          </div>
          <div className="flex flex-col items-center font-bold mb-2">
            <h1 className="text-black text-md my-2">테스트 결과</h1>
            {isPassed ? (
              <h3 className="text-green text-[32px]">합격</h3>
            ) : (
              <h3 className="text-red-500 text-[32px]">탈락</h3>
            )}
          </div>
        </div>
        <Button text="메인으로" onClick={handleGoToMain} />
      </div>
    </div>
  );
};

export default ResultModal;
