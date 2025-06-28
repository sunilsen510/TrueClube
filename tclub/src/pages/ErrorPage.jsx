import React from 'react';
import errImg from '../assets/error.svg';
import arrowImg from '../assets/whitearrow.svg';
import CustomButton from '../components/CustomButton';

const ErrorPage = () => {
  return (
    <div className="py-[150px] px-4 sm:px-6 lg:px-8 bg-white text-center flex flex-col items-center gap-6">
      
      {/* Image Section */}
      <div className="w-[90%] max-w-[547px] h-auto sm:h-[313px]">
        <img
          src={errImg}
          alt="Error"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-[#0A2540] uppercase">
        Page Not Found
      </h2>

      {/* Button */}
      <div className="w-full max-w-[300px]">
        <CustomButton
          icon={arrowImg}
          label="Back To Home"
          to="/"
          variant="outline"
          className="shadow-[8px_6px_15px_0px_#0061DE40] 
                  !px-[22px] sm:!px-[24px] md:!px-[26px] lg:!px-[30px] 
                  !py-[16px] sm:!py-[18px] md:!py-[20px] lg:!py-[24px]
                  !text-[14px] sm:!text-[15px] md:!text-[16px] leading-[13px]"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
