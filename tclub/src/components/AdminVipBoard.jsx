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
      <div className="flex items-center justify-between p-[30px] gap-[35px] border border-[#DDDDE9] rounded-[10px] mx-[26px] mt-[40px]">
        <VipBadge showBorder={false} />
        <VipBadge showBorder={false} />
        <VipBadge showBorder={false} />
      </div>
    </>
  );
};

export default AdminVipBoard;
