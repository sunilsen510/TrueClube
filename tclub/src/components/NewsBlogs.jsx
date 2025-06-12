import React from 'react';
import CustomButton from './CustomButton';
import locationImg from '../assets/location.svg';
import calenderImg from '../assets/calendar.svg';
import userImg from '../assets/user.svg';
import blogData from '../Api/blogdata.json';

const NewsBlogs = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center my-[100px]">
      <h2 className="text-xl font-bold text-gray-800 mb-2">News & Blogs</h2>
      <div className="w-20 h-1 bg-blue-600 rounded-full mb-4"></div>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Lorem distracted by the readable content of a page when looking at.
      </p>

      <div className="w-full flex flex-wrap gap-6 justify-center h-full">
        {blogData.slice(0, 3).map((blog) => (
          <div
            key={blog.id}
            className="border border-[#D4DEEB] p-4 rounded-xl bg-white text-left flex gap-4 w-full items-center justify-between"
          >
            <div className="flex gap-4 w-full flex-1 items-center">
              <img
                src={blog.image}
                alt="blog"
                className="w-[156px] h-[110px] object-contain rounded-xl"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-[15px]">
                  {blog.title}
                </h3>

                {blog.id === 1 ? (
                  <>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-[15px]">
                      <img
                        src={locationImg}
                        alt="location"
                        className="w-[18px] h-[18px]"
                      />
                      <span className="text-[#DA7821] font-semibold">
                        {blog.location || 'Not specified'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <img
                        src={calenderImg}
                        alt="calendar"
                        className="w-[18px] h-[18px]"
                      />
                      <span className="font-semibold text-black">{blog.date}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='flex items-center gap-2 justify-center'>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <img
                          src={userImg}
                          alt="user"
                          className="w-[18px] h-[18px]"
                        />
                        <span className="text-black font-semibold">Admin</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <img
                          src={calenderImg}
                          alt="calendar"
                          className="w-[18px] h-[18px]"
                        />
                        <span className="font-semibold text-black">{blog.date}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center flex-none md:self-stretch gap-2">
              {blog.id === 1 ? (
                <CustomButton
                  label="Book Seats"
                  to="/seminarpagetwo"
                  variant="outline"
                  className="w-auto"
                />
              ) : (
                <CustomButton
                  label="Read More"
                  to="/"
                  variant="primary"
                  className="w-auto"
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
