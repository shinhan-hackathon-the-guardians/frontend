import React from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="w-full py-3 bg-Button text-white rounded hover:bg-blue-600 mt-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
