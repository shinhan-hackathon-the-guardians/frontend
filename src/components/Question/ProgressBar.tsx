import React from "react";

interface ProgressBarProps {
  timeLeft: number;
  totalTime: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ timeLeft, totalTime }) => {
  const progress = (timeLeft / totalTime) * 100;

  return (
    <div className="w-full bg-gray-200 h-2">
      <div
        className="bg-Blue h-2 transition-all duration-1000 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
