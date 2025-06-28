import React, { useState } from "react";
import defaultImage from '../assets/fillGlass.svg';

const FilledDays = ({ justify = 'center', imageSrc = defaultImage }) => {
  const totalDays = 7;
  const cupVolumeML = 250;
  const totalLiters = 2;

  const [filledDays, setFilledDays] = useState(0);

  const handleDayClick = (idx) => {
    if (idx === totalDays - 1 && filledDays === totalDays) {
      setFilledDays(idx);
    } else if (
      filledDays > 0 &&
      idx + 1 === filledDays &&
      idx + 1 !== totalDays
    ) {
      setFilledDays(idx);
    } else {
      setFilledDays(idx + 1);
    }
  };

  const percentage = (filledDays / totalDays) * 100;
  const remainingLiters = totalLiters - (cupVolumeML * filledDays) / 1000;

  return (
    <div className={`flex items-center justify-${justify} gap-[30px] mb-[30px]`}>
      {/* Glass Container */}
      <div className="relative w-[218px] h-[329px]">
            {/* Animated Water Layer */}
            <div
                className="water"
                style={{ height: `${percentage}%` }}
            ></div>

            {/* Glass Image Overlay */}
            <img
              src={imageSrc}
              alt="Glass"
              className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
            />

            {/* Percentage Text */}
            {filledDays > 0 && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-white font-bold z-20 text-lg drop-shadow-md">
                {percentage}%
                </div>
            )}
            </div>
          {/* Days List */}
            <div className="relative">
              <div className="flex flex-col-reverse relative pl-6 gap-[30px]">
                 <div className="
                  after:content-[''] after:absolute after:top-0 after:left-[-8px] after:w-[2px] after:h-full after:bg-[#DDDDE9]
                "></div>
                 {Array.from({ length: totalDays }).map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleDayClick(idx)}
                    className={` relative
                    
                      ${idx < filledDays ? '   font-semibold' : ''}
                    `}
                  >
                    <div className="
                      text-[#44596E] text-[12px] font-medium hover:text-[#50C972] cursor-pointer transition-all 
                      relative mt-[-10px] pl-[30px]
                      before:content-[''] before:absolute before:top-[10px] before:left-[-30px]
                      before:w-[40px] before:h-[2px] before:bg-[#DDDDE9]
                    ">
                      Day {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
        </div>
    </div>
  );
};

export default FilledDays;
