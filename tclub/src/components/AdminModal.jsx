import React from 'react';
import CountdownTimer from '../components/CountDown';
import CustomButton from '../components/CustomButton';
import closeCount from '../assets/closeCount.svg';

const AdminModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#112B4C54] z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[90%] max-w-[746px] h-[433px] relative shadow-lg">
        <button className="absolute top-4 right-4  w-[18px] h-[18px] font-normal text-[26px] text-[#0A2540] cursor-pointer" onClick={onClose}>
          <img src={closeCount} alt='Close Count' className='w-full h-full object-cover' />
        </button>
        <div className='py-[85px] text-center'>
          <h2 className="text-[28px] sm:text-[35px] leading-[27px] tracking-[0%] font-semibold text-[#0A2540]">
            DID YOU COMPLETE YOUR TASK?
          </h2>
          <p className="text-sm text-[#40658B] font-normal mt-[25px] mb-[40px]">Get complete your task now and increase your potential</p>
          <CountdownTimer showDays={false} bgColor="#F5F7F9" textSize="text-[28px]" padding="py-[16px] px-[18px]" width="w-[94px]" height="h-[73px]" clockgap="gap-[20px]" />
          <div className="mt-[30px]">
            <CustomButton
              label="Yes I Have Complete My Task"
              to="/"
              variant="outline"
              className="!py-[20px] !px-btn-x !text-[16px] !font-medium shadow-[var(--btn-shadow)] hover:!text-[#0A2540]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
