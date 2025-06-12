import React from 'react'
import errImg from '../assets/errorOne.svg';
import arrowImg from '../assets/whitearrow.svg';
import CustomButton from './CustomButton';

const ErrorPageOne = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
            <img src={errImg} alt="Error" className="w-72 mb-6" />
            <h2 className="text-3xl font-bold text-black mb-6 uppercase">Page Not Found</h2>
                <div className="w-[227px]">
                    <CustomButton
                        icon={arrowImg}
                        label="Back To Home"
                        to="/"
                        variant="outline"
                    />
                </div>
        </div>
    </>
  )
}

export default ErrorPageOne