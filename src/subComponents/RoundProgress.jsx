import React from "react";

const CircularProgress = ({ percentage }) => {
  // Calculate the stroke-dashoffset based on the percentage
  const strokeDashoffset = 100 - percentage;

  return (
    <div className="relative size-40">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200"
          strokeWidth="2"
        />
        {/* Progress Circle */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-color1 shadow-[ 2px 2px 4px rgba(30, 30, 30, 0.18)]"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Percentage Text */}
      {percentage !== undefined && (
        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-2xl font-bold text-color1">
            {percentage}%
          </span>
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
