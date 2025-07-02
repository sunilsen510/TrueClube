import React, { useEffect, useState } from 'react';
import Banner from "../../components/Banner"
import tGirls from "../../assets/tgirls.svg";
import bannerBg from "../../assets/dashboardBg.svg"
import FilledDays from '../../components/FilledDays';
import glassImgs from '../../assets/glasses.svg';
import customGlass from '../../assets/singleGlass.svg';
import yogaBoy from '../../assets/yogaboy.svg';
import cClose from '../../assets/CloseBanner.svg';
import CustomButton from '../../components/CustomButton';

const Dashboard = () => {
    const [width, setWidth] = useState('w-0');

    useEffect(() => {
      const timeout = setTimeout(() => {
        setWidth('w-[761px]');
      }, 100); // slight delay for smooth animation
      return () => clearTimeout(timeout);
    }, []);

  return (
    <>
      <div className='lg:px-[50px] md:px-[15px] sm:px-[15px] px-[15px]'>
        <div className='mt-[34px] rounded-[10px] relative'>
          <div className="flex items-center justify-between flex-col md:flex-col  lg:flex-row  md:gap-5 rounded-[20px] bg-cover bg-center lg:h-[258px] md:h-auto  lg:px-[40px] px-[10px]"
           style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className='md:pt-[40px] py-[20px]'>
              <h2 className='lg:text-[41px] flex-wrap md:text-[32px] text-2xl font-medium text-[#0A2540] lg:leading-[35px] md:leading-[27px] tracking-[0px] uppercase lg:mb-[41px] mb-[30px]'>Did you complete your task?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center lg:justify-start">
                    <CustomButton
                      label="Yes I Have Completed My Task"
                      to="/"
                      variant="outline"
                      className=" sm:w-[300px]
                        shadow-[var(--btn-shadow)]
                        !px-[22px] sm:!px-[24px] md:!px-[26px] lg:!px-[30px]
                        !py-[16px] sm:!py-[18px] md:!py-[20px] lg:!py-[24px]
                        !text-[14px] sm:!text-[15px] md:!text-[16px]
                        leading-[13px] hover:!text-[#0A2540]"
                    />
              </div>
            </div>
            <div className="w-full max-w-[525px] h-auto md:h-[225px]">
              <img
                src={tGirls}
                alt="Talking Girls"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <img src={cClose} alt='Close count' className="absolute top-[25px] right-[15px] -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </div>
        <div className='mt-[30px]'>
          <div className='py-[20px] px-[30px] bg-[#F5F7F9] rounded-[20px]'>
            <div className='bg-white pt-[30px] pl-[40px] rounded-[20px]'>
              <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
                Task Tracking
              </h2>
              <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>
                <div className='mt-[30px] relative'>
                  <div className='flex items-center justify-center gap-[30px] flex-col md:flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 md:w-full'><FilledDays justify='end' /></div>
                    <div className='w-full lg:w-1/2 md:w-full'><FilledDays imageSrc={customGlass} justify='center'/></div>
                  </div>
                  <div className='absolute bottom-[30px] left-[30px] md:hidden lg:hidden xl:hidden 2xl:block'>
                    <img src={glassImgs} alt='glass image' className='' />
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] mb-[40px]">
          <div className="border border-[#DDDDE9] pt-[30px] p-[20px] xl:pl-[40px] lg:p-[30px] md:p-[20px]  rounded-[10px] flex flex-col lg:flex-col xl:flex-row items-center justify-center lg:justify-between gap-[30px]">
            
            {/* Left Content */}
            <div className="flex-1">
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
                      backdrop-blur-[9px]  
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
      </div>
    </>
  )
}

export default Dashboard