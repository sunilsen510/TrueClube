import React from 'react';
import CustomButton from './CustomButton';

const BlogCard = ({ blog, locationImg, calendarImg, userImg, cardImg, cardTitle}) => {
  return (
    <div className=" p-[15px] gap-[25px] w-full bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-sm">
      {/* Blog Image */}
      <img
        src={cardImg}
        alt="blog"
        className="w-full h-full object-contain"
      />

      {/* Content */}
      <div className=" flex flex-col gap-[16px]">
        {/* Title */}
        <h3 className="font-semibold text-[20px] line-height tracking-[0] text-[#0A2540]">
          {cardTitle}
        </h3>

        {/* Info (Admin & Date) */}
        <div className="flex items-center gap-[14px] text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <img src={userImg} alt="user" className="w-4 h-4" />
            <span className="text-[#0A2540] text-[12px] line-height font-semibold">Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={calendarImg} alt="calendar" className="w-4 h-4" />
            <span className="text-[#0A2540] text-[12px] line-height font-semibold">{blog.date2}</span>
          </div>
        </div>


        {/* Description */}
        {blog.description && (
          <p className="text-[14px] text-[#40658B] line-height font-normal">{blog.description}</p>
        )}

        
        {/* CTA Button */}
        <CustomButton
          label="Read More"
          to={blog.id === 0 ? "/seminarpage" : "/healths"}
          variant={blog.id === 0 ? "outline" : "primary"}
          className="
            w-auto sm:w-full md:w-auto lg:w-full
            hover:shadow-[8px_6px_15px_0px_#0061DE40]
            transition-shadow duration-300
            !px-[22px] sm:!px-[24px] md:!px-[26px] lg:!px-[30px]
            !py-[16px] sm:!py-[18px] md:!py-[20px] lg:!py-[24px]
            !text-[14px] sm:!text-[15px] md:!text-[16px]
            !font-semibold
            leading-[13px]
            mb-[10px]
          "
        />
      </div>
    </div>
  );
};

export default BlogCard;
