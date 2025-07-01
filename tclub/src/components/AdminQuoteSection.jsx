import React, { useEffect, useState } from 'react';
import yogaBoy from '../assets/yogaboy.svg';

const AdminQuoteSection = () => {
  const [width, setWidth] = useState('w-0');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth('w-[761px]');
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mt-[30px]">
        <div className="border border-[#DDDDE9] pt-[30px] p-[20px] xl:pl-[40px] lg:p-[30px] md:p-[20px]  rounded-[10px] flex flex-col lg:flex-col xl:flex-row items-center justify-center lg:justify-between gap-[30px]">
          
          {/* Left Content */}
          <div className="flex-1 md:w-full">
            <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
              Quote Of The Day
            </h2>
            <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>

            {/* Quote Box */}
            <div className="max-w-[958px] mb-[50px] mt-[40px]">
              <div className="relative bg-[#006AF2] rounded-[10px] w-full pl-[72px] py-[32px] overflow-hidden">
                {/* Animated Blur Progress Layer */}
                <div
                  className={`absolute z-1 top-0 right-0 h-full ${width}
                    backdrop-blur-[32px]  
                    bg-gradient-to-r from-white/10 to-[#006AF2]/100
                    shadow-lg
                    border border-white/20 
                    rounded-[10px] transition-all duration-1000 ease-in-out`}
                ></div>

                {/* Quote Text */}
                <p className="text-white text-[16px] font-semibold leading-[20px] tracking-[0] w-full h-[37px] relative z-0 bg-transparent">
                  If you change the way you look at things, the things you look at change.
                </p>
              </div>

              {/* Sub Text */}
              <p className="text-[20px] font-normal text-[#0A2540] pt-[19px] text-center">
                25% of people have completed their task — few more to go!
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className=" lg:pr-[40px] pr-[0px] flex items-center justify-center w-[292px] h-[251px] ">
            <img src={yogaBoy} alt="Yoga Boy" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
  );
};

export default AdminQuoteSection;
