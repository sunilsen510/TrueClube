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
    <div className="mt-[30px] mx-[26px]">
      <div className="border border-[#DDDDE9] pt-[30px] pl-[40px] rounded-[10px] flex flex-col lg:flex-row justify-between gap-[30px]">
        <div className="flex-1">
          <h2 className="text-[30px] font-medium text-[var(--text-primary)] text-start">
            Quote Of The Day
          </h2>
          <div className="w-20 h-1 bg-[var(--btn-primary-bg)] rounded-full mt-[20px]"></div>
          <div className="max-w-[958px] mb-[50px] mt-[40px]">
            <div className="relative bg-[#006AF2] rounded-[10px] w-full pl-[72px] py-[32px] overflow-hidden">
              <div className={`absolute top-0 right-0 h-full ${width} backdrop-blur-[32px] bg-gradient-to-r from-white/10 to-[#006AF2]/100 border border-white/20 rounded-[10px] transition-all duration-1000 ease-in-out`}></div>
              <p className="text-white text-[16px] font-semibold z-0">If you change the way you look at things, the things you look at change.</p>
            </div>
            <p className="text-[20px] text-[#0A2540] pt-[19px] text-center">
              25% of people have completed their task — few more to go!
            </p>
          </div>
        </div>
        <div className="pr-[40px] w-[292px] h-[251px]">
          <img src={yogaBoy} alt="Yoga Boy" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AdminQuoteSection;
