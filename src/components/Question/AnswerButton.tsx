import React from "react";
import { cn } from "@/utils/cn";
import { ButtonType } from "@/types/AnswerButton";

interface AnswerButtonProps {
  type: ButtonType;
  answer: "correct" | "incorrect";
  onClick: () => void;
  disabled: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ type, answer, onClick, disabled }) => {
  const buttonStyle = cn(
    "w-36 h-48 rounded-lg text-5xl bg-white text-gray-600 font-bold hover:bg-gray-200",
    {
      "border-2 border-gray-300": type === "default",
      "border-4 border-green": type === "correct",
      "border-4 border-red": type === "incorrect",
    }
  );

  return (
    <button onClick={onClick} disabled={disabled} className={buttonStyle}>
      {answer === "correct" ? (
        <div>
          <p>O</p>
          <span className="text-xl">예</span>
        </div>
      ) : (
        <div>
          <p>X</p>
          <span className="text-xl">아니오 </span>
        </div>
      )}
    </button>
  );
};

export default AnswerButton;
