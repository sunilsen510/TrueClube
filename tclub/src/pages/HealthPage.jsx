import React, { useState } from 'react';
import Banner from '../components/Banner';
import Pagination from '../components/Pagination';
import blogData from './../Api/blogdata.json';
import BlogCard from '../components/BlogCard';
import locationImg from '../assets/location.svg';
import calendarImg from '../assets/calendar.svg';
import userImg from '../assets/user.svg';
import usePagination from '../hooks/usePagination';


const HealthPage = () => {
 const { currentPage, totalPages, currentItems, handlePageChange } = usePagination(blogData, 5);

  return (
    <>
      <Banner title="HEALTH" />
       <div className="container mx-auto max-w-9xl px-4 pt-[100px] pb-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {blogData.slice(0, 9).map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              locationImg={locationImg}
              calendarImg={calendarImg}
              userImg={userImg}
              cardTitle = {blog.title1}
              cardImg = {blog.image11}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default HealthPage