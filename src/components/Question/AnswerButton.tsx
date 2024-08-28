import React from "react";

interface AnswerButtonProps {
  answer: "correct" | "incorrect";
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onClick: () => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  answer,
  isSelected,
  isCorrect,
  showResult,
  onClick,
}) => {
  const getButtonStyle = () => {
    if (!showResult) {
      return "border-2 border-gray-300";
    }
    if (isSelected) {
      return isCorrect ? "border-4 border-green" : "border-4 border-red-500";
    }
    if (isCorrect) {
      return "border-4 border-green";
    }
    return "border-2 border-gray-300";
  };

  return (
    <button
      onClick={onClick}
      disabled={showResult}
      className={`w-24 h-24 rounded-full text-3xl bg-white text-gray-600 ${getButtonStyle()}`}
    >
      {answer === "correct" ? "O" : "X"}
    </button>
  );
};

export default AnswerButton;
