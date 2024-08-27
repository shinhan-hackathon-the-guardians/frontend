import React from "react";

interface QuestionInfoProps {
  question: string;
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({ question }) => {
  return (
    <div>
      <p>
        <strong>Question:</strong> {question}
      </p>
    </div>
  );
};

export default QuestionInfo;
