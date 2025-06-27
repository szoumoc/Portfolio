import React from 'react';

interface ScrollDownWheelProps {
  className?: string;
}

const ScrollDownWheel: React.FC<ScrollDownWheelProps> = ({ className }) => {
  return (
    <div className={`relative w-24 h-24 mx-auto mt-16 ${className || ''}`}>
      {/* Rotating Circular Text */}
      <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
          </defs>
          <text fontSize="9" fill="white">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ScrollDownWheel;
