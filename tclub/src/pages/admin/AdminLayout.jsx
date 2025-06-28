import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import smileBoy from '../../assets/boysmile.svg';
import crownImg from '../../assets/crown.svg';
import SidebarNav from '../../components/SidebarNav';
import timerImg from '../../assets/boyss.svg';
import locationImg from '../../assets/location.svg'; 
import calenderImg from '../../assets/calendar.svg'; 
import CustomButton from '../../components/CustomButton'; 
import { useLocation } from 'react-router-dom';
import WebinarPage from './WebinarPage';
import yogaBoy from '../../assets/yogaboy.svg';
import VipBadge from '../../components/vipBadge';

function AdminLayout(buttonClass = '',) {
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/dashboard');
  
      const [width, setWidth] = useState('w-0');
  
      useEffect(() => {
        const timeout = setTimeout(() => {
          setWidth('w-[761px]');
        }, 100); // slight delay for smooth animation
        return () => clearTimeout(timeout);
      }, []);
  
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className='pt-[93px]'>
        <aside className="w-[300px] bg-white text-white p-[20px] border-r border-[var(--img-border-color)] h-full">
        <div className='flex items-center justify-center gap-[20px] flex-col rounded-[11px] mt-[40px] bg-[#F5F7F9]'>
          <div className="w-[82px] h-[82px] rounded-full border-4 border-white mt-[-40px]">
            <img
              src={smileBoy}
              alt="smileBoy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
            <div className='flex items-center justify-center flex-col'>
                <h3 className='mb-[15px] font-semibold text-[20px] leading-[23px] tracking-[0%] text-[#0A2540]'>Welcome Back!</h3>
                <p className='mb-[27px] text-[#40658B] font-normal text-[16px] leading-[19px] tracking-[0%]'>Jane Cooper</p>
                <div className="w-[62px] mb-[-10px] flex items-center justify-center gap-2 bg-[var(--vip-bg)] text-white text-xs font-bold py-[6px] px-[10px] rounded-2xl">
                  <img src={crownImg} alt="Crown" className="w-4 h-4 object-contain" />
                  <span>VIP</span>
                </div>
            </div>
        </div>
        <SidebarNav />
        {isAdminPage && (       
          <div className='mt-[100px]'>
              <div className='bg-[#FFF9EE] p-[10px] rounded-[10px] border-[#FFE7BD] border-2'>
                
              <div className="flex items-center justify-center gap-[4px] md:gap-[4px] mb-[10px]">
              {/* Days */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[10px] p-12px w-[53px] h-[53px]" data-label="days" data-value="0">
                <b className="text-[16px] md:text-[16px] text-[var(--text-primary)] font-semibold">21</b>
                <span className="text-[10px] md:text-[10px] font-normal text-[#40658B]">Days</span>
              </div>

              <span className="text-xl text-[var(--text-primary)] font-semibold">:</span>

              {/* Hours */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[10px] p-12px w-[53px] h-[53px]" data-label="hours" data-value="3">
                <b className="text-[16px] md:text-[16px] text-[var(--text-primary)] font-semibold">08</b>
                <span className="text-[10px] md:text-[10px] font-normal text-[#40658B]">Hours</span>
              </div>

              <span className="text-xl text-[var(--text-primary)] font-semibold">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[10px] p-12px w-[53px] h-[53px]" data-label="minutes" data-value="40">
                <b className="text-[16px] md:text-[16px] text-[var(--text-primary)] font-semibold">35</b>
                <span className="text-[10px] md:text-[10px] font-normal text-[#40658B]">Minutes</span>
              </div>

              <span className="text-xl text-[var(--text-primary)] font-semibold">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center justify-center bg-white rounded-[10px] p-12px w-[53px] h-[53px]" data-label="seconds" data-value="2">
                <b className="text-[16px] md:text-[16px] text-[var(--text-primary)] font-semibold">09</b>
                <span className="text-[10px] md:text-[10px] font-normal text-[#40658B]">Seconds</span>
              </div>
              </div>
                <img
                  src={timerImg}
                  alt="timerImg"
                  className="
                  w-full 
                  xs2:w-full 
                  sm:w-full 
                  md:w-[156px] md:h-[110px] 
                  lg:w-[254px] lg:h-[132px] 
                  xl:w-[254px] xl:h-[132px] 
                  object-contain 
                  rounded-xl
                  "
              />
              <div className="mt-[10px] md:mt-0 flex flex-col justify-center">
                  <h3 className="font-semibold text-[14px] leading-[16px] tracking-[0] text-[var(--text-primary)] my-[15px]">
                  Trueyou.Club Realise Your Potential.
                  </h3>
                  <div className="flex items-center gap-[6px] text-sm mb-[15px]">
                  <img src={locationImg} alt="location" className="w-[18px] h-[18px]" />
                  <span className="text-[var(--highlight-color)] text-[12px] font-normal leading-[17px] tracking-[0]">
                      Gotham Hall, 1356 Broadway, USA
                  </span>
                  </div>
                  <div className="flex items-center gap-[6px] text-sm text-[var(--text-primary)] mb-[20px]">
                  <img src={calenderImg} alt="calendar" className="w-[18px] h-[18px]" />
                  <span className="font-semibold text-[12px] leading-[17px] tracking-[0]">10 February 2024</span>
                  </div>
              </div>
              <CustomButton
                label="Upcoming Seminar"
                to="/seminarpage"
                variant="outline"
                className={`
                  w-auto 
                  xs:w-full sm:w-full lg:w-full 
                  !py-[20px] !px-btn-x 
                  !text-[16px] !font-semibold 
                  shadow-[var(--btn-shadow)] 
                  mb-[10px]
                  ${buttonClass}
                `}
              />
              </div>
          </div>
        )}
        </aside>
      </div>
      {/* Main Content */}
      <main className="flex-1 p-6 pt-[93px]">
        <Outlet />
        <WebinarPage />
        <div className="mt-[30px] mx-[26px]">
          <div className="border border-[#DDDDE9] pt-[30px] pl-[40px] rounded-[10px] flex flex-col lg:flex-row justify-between gap-[30px]">
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
          <div className=" pr-[40px] flex-shrink-0 w-[292px] h-[251px]">
            <img src={yogaBoy} alt="Yoga Boy" className="w-full h-full object-contain" />
          </div>
          </div>
        </div> 
        <div className="bg-white mt-[50px] rounded-[20px] px-[26px]">
          <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
            VIP Board
          </h2>
          <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>
        </div>
          <div className="flex flex-row items-center justify-between p-[30px]  gap-[35px] border border-[#DDDDE9] rounded-[10px] mx-[26px] mt-[40px]">        
          <div className="w-full">
              <VipBadge showBorder={false} />
            </div>
            <div className="w-full">
              <VipBadge showBorder={false} />
            </div>
            <div className="w-full">
              <VipBadge showBorder={false} />
            </div>
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;