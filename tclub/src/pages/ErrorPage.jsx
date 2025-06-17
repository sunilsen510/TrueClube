import React from 'react';
import errImg from '../assets/error.svg';
import arrowImg from '../assets/whitearrow.svg';
import CustomButton from '../components/CustomButton';


const ErrorPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white text-center">
        <img
          src={errImg}
          alt="Error"
          className="w-52 sm:w-60 md:w-72 mb-6 object-contain"
        />

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 uppercase">
          Page Not Found
        </h2>

        <div className="">
          <CustomButton
            icon={arrowImg}
            label="Back To Home"
            to="/"
            variant="outline"
            className="w-full font-bold text-[18px] line-height tracking-normal flex items-center justify-center gap-[5px] py-3"
          />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
