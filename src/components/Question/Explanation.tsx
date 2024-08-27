import React from "react";

interface ExplanationProps {
  explanation: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation }) => {
  return (
    <div>
      <h3>Explanation:</h3>
      <p>{explanation}</p>
    </div>
  );
};

export default Explanation;
