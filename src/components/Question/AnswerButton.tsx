import React from "react";

interface AnswerButtonProps {
  answer: "correct" | "incorrect";
  isSelected: boolean;
  onClick: () => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  answer,
  isSelected,
  onClick,
}) => {
  const borderColor = isSelected
    ? answer === "correct"
      ? "green"
      : "red"
    : "black";

  return (
    <button
      onClick={onClick}
      style={{
        border: `2px solid ${borderColor}`,
        padding: "10px",
        margin: "5px",
      }}
    >
      {answer === "correct" ? "O" : "X"}
    </button>
  );
};

export default AnswerButton;
