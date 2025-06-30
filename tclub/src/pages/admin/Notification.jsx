import React, { useState } from 'react';
import trashImg from '../../assets/delete.svg';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  ]);

  const handleDelete = (indexToDelete) => {
    const updated = notifications.filter((_, i) => i !== indexToDelete);
    setNotifications(updated);
  };

  return (
    <>
      <div className="bg-white mt-[50px] mb-[40px] rounded-[20px] px-[26px]">
        <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
          Notification
        </h2>
        <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>
      </div>

      <div className="lg:max-w-[1479px] w-full space-y-6">
        {notifications.map((message, index) => (
          <div key={index} className="relative">
            <div className="hover:bg-[#F5F7F9] hover:border-transparent transition duration-200 ml-[26px] flex items-center justify-between border border-[#DDDDE9] rounded-[10px] py-[34px]">
              <p className="relative pl-[37px] pr-2 before:content-[''] before:absolute before:top-1/2 before:left-[15px] before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-blue-500">
                {message}
              </p>
              <span className="pr-[10px] text-sm font-normal text-[#40658B]">10 Min ago</span>
            </div>

            <div
              className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => handleDelete(index)}
            >
              <img src={trashImg} alt="Trash Icon" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notification;
