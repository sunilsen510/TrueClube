import React from 'react'
import crownImg from '../assets/crown.svg';
import vipOne from '../assets/vipOne.png';
import vipTwo from '../assets/vipTwo.png';
import vipThree from '../assets/vipThree.png';
import vipFour from '../assets/vipFour.png';
import vipFive from '../assets/vipFive.png';

const VipBadge = ({ children, showBorder = true }) => {
    const users = [
        { id: 1, name: 'Cameron Williamson', image: vipOne },
        { id: 2, name: 'Cameron Williamson', image: vipTwo },
        { id: 3, name: 'Cameron Williamson', image: vipThree },
        { id: 4, name: 'Cameron Williamson', image: vipFour },
        { id: 5, name: 'Cameron Williamson', image: vipFive },
    ];

  return (
    <>
       <div
        className={`flex items-center justify-between rounded-[10px] ${
          showBorder ? 'border border-[#DDDDE9]' : ''
        }`}
>
  <div className="w-full">
    <ul className="flex flex-col xl:gap-[35px] lg:gap-[20px] md:gap-[10px]">
      {users.map((user, index) => (
        <li
          key={user.id}
          className={`w-full flex items-center justify-between lg:gap-4 py-[12px] pl-[16px] pr-[26px] rounded-[10px] ${
            index % 2 === 0 ? 'bg-[#F7F8FA]' : ''
          }`}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="lg:text-[14px] text-[12px]   font-semibold">{user.name}</h4>
          </div>

          <div className="w-[62px] flex items-center justify-center gap-2 bg-[var(--vip-bg)] text-white text-xs font-bold py-[6px] px-[10px] rounded-2xl">
            <img
              src={crownImg}
              alt="Crown"
              className="w-4 h-4 object-contain"
            />
            <span>VIP</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

    </>
  )
}

export default VipBadge