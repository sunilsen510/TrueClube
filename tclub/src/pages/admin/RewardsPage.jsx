import React from 'react';
import Ystar from '../../assets/yStar.svg';
import Bstar from '../../assets/bStar.svg';
import VipBadge from '../../components/VipBadge';


const RewardsPage = () => {
  const stars = [
    { id: 1, img: Ystar, bg: '#FFF9DD', alt: 'Yellow Star' },
    { id: 2, img: Ystar, bg: '#FFF9DD', alt: 'Yellow Star' },
    { id: 3, img: Bstar, bg: '#F5F7F9', alt: 'Blue Star' },
    { id: 4, img: Bstar, bg: '#F5F7F9', alt: 'Blue Star' },
    { id: 5, img: Bstar, bg: '#F5F7F9', alt: 'Blue Star' },
  ];
 

  return (
    <>
      <div className="bg-white mt-[50px] rounded-[20px] px-[26px]">
        <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
          Rewards
        </h2>
        <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>
      </div>

      <div className="mt-[40px] border border-[#DDDDE9] flex flex-col md:flex-col lg:flex-row items-center justify-between gap-4 lg:gap-4 md:gap-4 xl:p-[40px] lg:p-[20px] p-[20px] md:p-[20px] rounded-[10px] mb-[50px] lg:mx-[26px] mx-0">
        <div>
          <h4 className="text-[25px] font-semibold text-[#0A2540] leading-[27px] mb-[25px]">
            Your Rewards As Stars
          </h4>
          <p className="text-[16px] font-normal text-[#0A2540] flex-wrap">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>

        <div>
          <ul className="flex gap-4">
            {stars.map((star) => (
              <li
                key={star.id}
                className="w-[60px] h-[60px] flex items-center justify-center rounded-[15px]"
                style={{ backgroundColor: star.bg }}
              >
                <img
                  src={star.img}
                  alt={star.alt}
                  className="lg:w-[30px] lg:h-[30px] object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="bg-white mt-[50px] rounded-[20px] px-[26px]">
              <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
                  VIP Board
              </h2>
              <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>
        </div>
        <div className="flex xl:flex-row flex-col lg:flex-col md:flex-col  items-center justify-between p-[10px] lg:p-[30px] md:p-[20px] sm:p-[20px]  lg:gap-[35px] md:gap-[20px] border border-[#DDDDE9] rounded-[10px] lg:mx-[26px] mx-0 mt-[40px]">
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
      </div> 
    </>
  );
};

export default RewardsPage;
