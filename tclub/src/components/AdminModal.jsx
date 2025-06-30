import React from 'react';
import CountdownTimer from '../components/CountDown';
import CustomButton from '../components/CustomButton';

const AdminModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#112B4C54] z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[90%] max-w-[746px] h-[433px] relative shadow-lg">
        <button className="absolute top-3 right-4 text-2xl text-gray-500" onClick={onClose}>
          &times;
        </button>
        <div className='py-[85px] text-center'>
          <h2 className="text-[28px] sm:text-[35px] font-semibold text-[#0A2540]">
            DID YOU COMPLETE YOUR TASK?
          </h2>
          <p className="text-sm text-[#40658B] mt-[25px] mb-[40px]">Get complete your task now and increase your potential</p>
          <CountdownTimer bgColor="#F5F7F9" textSize="text-[28px]" padding="py-[16px] px-[18px]" width="w-[94px]" height="h-[73px]" />
          <div className="mt-[30px]">
            <CustomButton
              label="YES I HAVE COMPLETE MY TASK"
              to="/"
              variant="outline"
              className="!py-[20px] !px-btn-x !text-[16px] !font-medium shadow-[var(--btn-shadow)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
