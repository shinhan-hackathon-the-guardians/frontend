import React from "react";

interface QuestionInfoProps {
  question: string;
  currentIndex: number;
  totalQuestions: number;
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({
  question,
  currentIndex,
  totalQuestions,
}) => (
  <div className="p-4 overflow-y-auto">
    <p className="text-sm text-gray-500 mb-2">
      {currentIndex + 1} / {totalQuestions}
    </p>
    <h2 className="text-xl font-bold mb-2">문제</h2>
    <p>{question}</p>
  </div>
);

export default QuestionInfo;
