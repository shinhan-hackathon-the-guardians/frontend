import React from "react";

interface ExplanationProps {
  explanation: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation }) => (
  <div className="p-4 overflow-y-auto">
    <div className="bg-yellow-100 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">해설</h3>
      <p>{explanation}</p>
    </div>
  </div>
);

export default Explanation;
