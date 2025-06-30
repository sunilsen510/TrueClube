import React from 'react';
import smileBoy from '../assets/boysmile.svg';
import crownImg from '../assets/crown.svg';
import timerImg from '../assets/boyss.svg';
import locationImg from '../assets/location.svg';
import calenderImg from '../assets/calendar.svg';
import cClose from '../assets/closeCount.svg';
import SidebarNav from '../components/SidebarNav';
import CustomButton from '../components/CustomButton';
import CountdownTimer from '../components/CountDown';
import { useLocation } from 'react-router-dom';

const AdminSidebar = ({ buttonClass }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/dashboard');

  return (
    <aside className="w-[300px] bg-white text-white p-[20px] border-r border-[var(--img-border-color)] h-full">
      <div className='flex items-center justify-center gap-[20px] flex-col rounded-[11px] mt-[40px] bg-[#F5F7F9]'>
        <div className="w-[82px] h-[82px] rounded-full border-4 border-white mt-[-40px]">
          <img src={smileBoy} alt="smileBoy" className="w-full h-full rounded-full object-cover" />
        </div>
        <div className='flex items-center justify-center flex-col'>
          <h3 className='mb-[15px] font-semibold text-[20px] leading-[23px] text-[#0A2540]'>Welcome Back!</h3>
          <p className='mb-[27px] text-[#40658B] text-[16px]'>Jane Cooper</p>
          <div className="w-[62px] mb-[-10px] flex items-center justify-center gap-2 bg-[var(--vip-bg)] text-white text-xs font-bold py-[6px] px-[10px] rounded-2xl">
            <img src={crownImg} alt="Crown" className="w-4 h-4 object-contain" />
            <span>VIP</span>
          </div>
        </div>
      </div>

      <SidebarNav />
      {isAdminPage && (
        <div className='mt-[100px] relative'>
          <div className='bg-[#FFF9EE] p-[10px] rounded-[10px] border-[#FFE7BD] border-2'>
            <CountdownTimer />
            <img src={timerImg} alt="timer" className="w-full md:w-[156px] lg:w-[254px] xl:w-[254px] object-contain rounded-xl" />
            <div className="mt-[10px] md:mt-0 flex flex-col justify-center">
              <h3 className="font-semibold text-[14px] text-[var(--text-primary)] my-[15px]">
                Trueyou.Club Realise Your Potential.
              </h3>
              <div className="flex items-center gap-[6px] text-[12px] text-[var(--highlight-color)] mb-[15px]">
                <img src={locationImg} alt="location" className="w-[18px] h-[18px]" />
                <span>Gotham Hall, 1356 Broadway, USA</span>
              </div>
              <div className="flex items-center gap-[6px] text-[12px] text-[var(--text-primary)] mb-[20px]">
                <img src={calenderImg} alt="calendar" className="w-[18px] h-[18px]" />
                <span className="font-semibold">10 February 2024</span>
              </div>
            </div>
            <CustomButton
              label="Upcoming Seminar"
              to="/seminarpage"
              variant="outline"
              className={`w-auto !py-[20px] !px-btn-x !text-[16px] !font-semibold shadow-[var(--btn-shadow)] mb-[10px] ${buttonClass}`}
            />
          </div>
          <img src={cClose} alt='Close count' className="absolute top-[-20px] right-[0px] -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
        </div>
      )}
    </aside>
  );
};

export default AdminSidebar;
