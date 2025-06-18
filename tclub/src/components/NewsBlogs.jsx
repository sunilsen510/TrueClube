import React from 'react';
import CustomButton from './CustomButton';
import locationImg from '../assets/location.svg';
import calenderImg from '../assets/calendar.svg';
import userImg from '../assets/user.svg';
import blogData from '../Api/blogdata.json';

const NewsBlogs = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center lg:my-[100px] sm:my-0">
      <h2 className="text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium tracking-[0] text-[#0A2540] line-height text-center">News & Blogs</h2>
      <div className="w-20 h-1 bg-[#006AF2] rounded-full tracking-[0]  mt-[16px]  mb-4 mx-auto" />
      <p className="text-[#40658B] text-[16px] font-normal lg:mb-[50px] mb-[20px]   text-center">
        Lorem distracted by the readable content of a page when looking at.
      </p>

      <div className="w-full flex flex-wrap gap-6 justify-center h-full  md:mb-[40px]">
        {blogData.slice(0, 3).map((blog) => (
          <div
            key={blog.id}
            className="border border-[#D4DEEB] py-[20px] pl-[15px] rounded-xl bg-white text-left flex  xl:flex-row lg:flex-col flex-col md:flex-row   gap-3 sm:gap-4 w-full items-start lg:items-center sm:items-center justify-between"

          >
            <div className="flex flex-col xxl:flex-col lg:flex-col sm:!pr-[15px] pr-[15px]  gap-3 sm:gap-4 w-full flex-1 items-start sm:items-center  md:!flex-row md:gap-[15px] lg:gap-[15px] md:items-center">
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-full sm:w-full sm:h-full md:w-[156px] md:h-[110px] object-contain rounded-xl"
              />
              <div className='sm:mt-[15px] lg:mt-0'>
                <h3 className="font-semibold text-[16px] line-height tracking-[0] text-[#0A2540] mb-[15px]">
                  {blog.title}
                </h3>

                {blog.id === 1 ? (
                  <>
                    <div className="flex items-center gap-[5px] text-sm text-gray-600 mb-[15px]">
                      <img
                        src={locationImg}
                        alt="location"
                        className="w-[18px] h-[18px]"
                      />
                      <span className="text-[#DA7821] text-[12px] font-normal">
                        {blog.location || 'Not specified'}
                      </span>
                    </div>
                    <div className="flex items-center gap-[5px] text-sm text-[#0A2540]">
                      <img
                        src={calenderImg}
                        alt="calendar"
                        className="w-[18px] h-[18px]"
                      />
                      <span className="font-semibold text-[12px] text-[#0A2540]">{blog.date}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col  xl:flex-col 2xl:flex-row gap-[20px] lg:gap-[14px]">

                      <div className="flex items-center gap-[5px] text-sm text-[#0A2540]">
                        <img
                          src={userImg}
                          alt="user"
                          className="w-[18px] h-[18px]"
                        />
                        <span className="text-[#0A2540] text-[12px] font-semibold">Admin</span>
                      </div>
                      <div className="flex items-center gap-[5px] text-sm text-[#0A2540]">
                        <img
                          src={calenderImg}
                          alt="calendar"
                          className="w-[18px] h-[18px]"
                        />
                        <span className="font-semibold text-[12px] text-[#0A2540]">{blog.date}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center flex-none md:self-stretch gap-2 !pr-[20px] md:!w-100%">
              {blog.id === 1 ? (
                <CustomButton
                  label="Read More"
                  to="/seminarpagetwo"
                  variant="outline"
                  className="w-auto  !py-[20px] !px-[22px] !text-[14px] !font-semibold lg:w-[100%] md:w-auto sm:w-[100%] shadow-[8px_6px_15px_0px_#0061DE40]"
                />
              ) : (
                <CustomButton
                  label="Read More"
                  to="/"
                  variant="primary"
                  className="w-auto lg:w-[100%] md:w-auto sm:w-[100%] !py-[20px] !px-[22px] !text-[14px] !font-semibold hover:shadow-[8px_6px_15px_0px_#0061DE40]"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;
