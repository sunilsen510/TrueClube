import React, {useState} from 'react';
import Banner from '../components/Banner';
import blogData from '../Api/blogdata.json'
import BlogCard from '../components/BlogCard';
import locationImg from '../assets/location.svg';
import calendarImg from '../assets/calendar.svg';
import userImg from '../assets/user.svg';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';

const BlogPage = () => {

  const { currentPage, totalPages, currentItems, handlePageChange } = usePagination(blogData, 5);

  return (
    <>
      <Banner title="BLOGS & NEWS" />
      <div className="container mx-auto max-w-9xl px-4 pt-[60px] pb-[60px] max-w-9xl lg:pt-[80px] md:pt-[60px] lg:container max-w-full md:max-w-9xl md:mx-0 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
          {blogData.slice(0, 9).map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              locationImg={locationImg}
              calendarImg={calendarImg}
              userImg={userImg}
              cardTitle = {blog.title}
              cardImg = {blog.image1}
              
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
  );
};

export default BlogPage;

