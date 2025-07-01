import React from 'react';
import VipBadge from '../components/VipBadge';

const AdminVipBoard = () => {
  return (
    <>
      <div className="bg-white mt-[50px] rounded-[20px] px-[26px]">
        <h2 className="text-[30px] font-medium text-[var(--text-primary)] text-start">
          VIP Board
        </h2>
        <div className="w-20 h-1 bg-[var(--btn-primary-bg)] rounded-full mt-[20px]"></div>
      </div>
      <div className="flex xl:flex-row flex-col lg:flex-col md:flex-col  items-center justify-between p-[10px] lg:p-[30px] md:p-[20px] sm:p-[20px]  lg:gap-[35px] md:gap-[20px] border border-[#DDDDE9] rounded-[10px] mx-[26px] mt-[40px]">
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
    </>
  );
};

export default AdminVipBoard;
