import React from "react";

interface ProgressBarProps {
  timeLeft: number;
  totalTime: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ timeLeft, totalTime }) => {
  const progress = (timeLeft / totalTime) * 100;

  return (
    <div className="m-2 mt-4 flex flex-col">
      <h2 className="self-center">남은 시간</h2>
      <div className="bg-gray-300 rounded-md overflow-hidden">
        <div
          className="bg-Button h-5 transition-all duration-1000 ease-linear rounded-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
