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
      return "bg-white border-2 border-gray-300 text-gray-600";
    }
    if (isSelected) {
      return isCorrect
        ? "bg-white border-4 border-green text-gray-600"
        : "bg-white border-4 border-red-500 text-gray-600";
    }
    if (isCorrect) {
      return "bg-white border-4 border-green text-gray-600";
    }
    return "bg-white border-2 border-gray-300 text-gray-600";
  };

  return (
    <button
      onClick={onClick}
      disabled={showResult}
      className={`w-24 h-24 rounded-full text-3xl ${getButtonStyle()}`}
    >
      {answer === "correct" ? "O" : "X"}
    </button>
  );
};

export default AnswerButton;
