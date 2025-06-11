import React from 'react';
import CustomButton from './CustomButton';

const BlogCard = ({ blog, locationImg, calendarImg, userImg, cardImg, cardTitle}) => {
  return (
    <div className=" p-4 gap-[25px] w-full bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-sm">
      {/* Blog Image */}
      <img
        src={cardImg}
        alt="blog"
        className="w-full h-full object-contain"
      />

      {/* Content */}
      <div className=" flex flex-col gap-4">
        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-800">
          {cardTitle}
        </h3>

        {/* Description */}
        {blog.description && (
          <p className="text-sm text-gray-700">{blog.description}</p>
        )}

        {/* Info (Admin & Date) */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <img src={userImg} alt="user" className="w-4 h-4" />
            <span className="text-black font-semibold">Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={calendarImg} alt="calendar" className="w-4 h-4" />
            <span className="text-black font-semibold">{blog.date2}</span>
          </div>
        </div>

        {/* CTA Button */}
        <CustomButton
          label="Read More"
          to={blog.id === 1 ? "/seminarpagetwo" : "/"}
          variant={blog.id === 1 ? "outline" : "primary"}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BlogCard;
