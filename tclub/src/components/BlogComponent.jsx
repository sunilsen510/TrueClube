import React from 'react';
import CustomButton from './CustomButton'; 
import locationImg from '../assets/location.svg'; 
import calenderImg from '../assets/calendar.svg'; 

const BlogComponent = ({ blogData, extraContent = null, buttonClass = '', width = '', maxWidth = '',  }) => {
  return (
    <>
<div className="w-full flex flex-wrap gap-6 justify-center">
  {blogData.map((item, index) => (
    <div
      key={index}
      className="
        w-full 
        flex 
        flex-col 
        xs:flex-col 
        xs2:flex-col 
        sm:flex-col 
        md:flex-row 
        lg:flex-row 
        lg2:flex-row 
        xl:flex-row 
        xl2:flex-row 
        xxl:flex-row 
        xxl2:flex-row 
        fhd:flex-row 
        gap-3 sm:gap-4 
        items-start 
        sm:items-center 
        lg:items-center 
        justify-between 
        border border-[var(--divider-color)] 
        bg-[var(--text-light)] 
        rounded-xl 
        p-[15px]
      "
    >
      {/* LEFT SIDE */}
      <div
        className="
          flex 
          flex-col 
          xs2:flex-col 
          sm:flex-col 
          md:flex-row 
          lg:flex-row 
          xl:flex-row 
          gap-3 sm:gap-4 
          flex-1 
          items-start 
          sm:items-center 
          md:items-center 
          lg:items-center 
          xl:items-center
          w-[100%]
        "
      >
        <img
          src={item.image}
          alt="blog"
          className="
            w-full 
            xs2:w-full 
            sm:w-full 
            md:w-[156px] md:h-[110px] 
            lg:w-[156px] lg:h-[110px] 
            xl:w-[156px] xl:h-[110px] 
            object-contain 
            rounded-xl
          "
        />
        <div className="mt-[10px] md:mt-0 flex flex-col justify-center">
          <h3 className="font-semibold text-[16px] tracking-[0] text-[var(--text-primary)] mb-[15px]">
            {item.title}
          </h3>
          <div className="flex items-center gap-[6px] text-sm mb-[10px]">
            <img src={locationImg} alt="location" className="w-[18px] h-[18px]" />
            <span className="text-[var(--highlight-color)] text-[12px] font-normal">
              {item.location || 'Not specified'}
            </span>
          </div>
          <div className="flex items-center gap-[6px] text-sm text-[var(--text-primary)]">
            <img src={calenderImg} alt="calendar" className="w-[18px] h-[18px]" />
            <span className="font-semibold text-[12px]">{item.date}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`
           flex flex-col justify-center items-start gap-2
          mt-4 md:mt-0 xl:mt-0 
          w-full
          xs:w-full xs2:w-full sm:w-full 
          md:w-auto lg:w-auto xl:w-auto
          md:self-stretch 
          ${width} ${maxWidth}
          `}
      >
        {item.id === 1 ? (
          <>
            <CustomButton
              label="Book Seats"
              to="/seminarpage"
              variant="outline"
              className={`
                w-auto 
                xs:w-full sm:w-full lg:w-full 
                !py-btn-y !px-btn-x 
                !text-[14px] !font-semibold 
                shadow-[var(--btn-shadow)] hover:!text-[#0A2540]
                ${buttonClass}
              `}
            />
            {extraContent && (
              <span className="text-[16px] sm:hidden md:hidden xs:hidden xs2:hidden text-[var(--highlight-color)] font-semibold leading-[17px] tracking-[0] mt-[8px]">
                {extraContent}
              </span>
            )}
          </>
        ) : (
          <CustomButton
            label="Read More"
            to="/seminarpage"
            variant="primary"
            className={`
              w-auto 
              xs:w-full sm:w-full lg:w-full 
              !py-btn-y !px-btn-x 
              !text-[14px] !font-semibold 
              hover:shadow-[var(--btn-shadow)] 
              ${buttonClass}
            `}
          />
        )}
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default BlogComponent;