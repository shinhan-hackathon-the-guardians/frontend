import React from "react";
import { FcIdea } from "react-icons/fc";

interface ExplanationProps {
  explanation: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation }) => (
  <div className="p-4 overflow-y-auto">
    <div className="bg-Point rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2 flex">
        <FcIdea className="mt-1 pb-1" />
        해설
      </h3>
      <p>{explanation}</p>
    </div>
  </div>
);

export default Explanation;
