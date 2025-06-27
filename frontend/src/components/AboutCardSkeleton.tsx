import React from 'react';

export const AboutCardSkeleton = () => {
  return (
    <div className="flex w-full overflow-x-scroll py-10 md:py-20 gap-4 pl-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex-shrink-0 h-80 w-56 md:h-[40rem] md:w-96 bg-neutral-900  animate-pulse"
        >
          {/* Image skeleton */}
          <div className="w-full h-3/5 bg-neutral-900 "></div>
          
          {/* Content skeleton */}
          <div className="p-6 space-y-4">
            {/* Title skeleton */}
            <div className="h-4 bg-neutral-900  w-3/4"></div>
            <div className="h-4 bg-neutral-900  w-1/2"></div>
            
            {/* Body skeleton */}
            <div className="space-y-2">
              <div className="h-3 bg-neutral-900 "></div>
              <div className="h-3 bg-neutral-900  w-5/6"></div>
              <div className="h-3 bg-neutral-900 w-4/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};