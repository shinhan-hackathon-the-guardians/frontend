import React from "react";
import { cn } from "@/utils/cn";
import { ButtonType } from "@/types/AnswerButton";

interface AnswerButtonProps {
  type: ButtonType;
  answer: "correct" | "incorrect";
  onClick: () => void;
  disabled: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  type,
  answer,
  onClick,
  disabled,
}) => {
  const buttonStyle = cn(
    "w-24 h-24 rounded-full text-3xl bg-white text-gray-600",
    {
      "border-2 border-gray-300": type === "default",
      "border-4 border-green": type === "correct",
      "border-4 border-red-500": type === "incorrect",
    }
  );

  return (
    <button onClick={onClick} disabled={disabled} className={buttonStyle}>
      {answer === "correct" ? "O" : "X"}
    </button>
  );
};

export default AnswerButton;
