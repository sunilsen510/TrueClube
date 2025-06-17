import React, { useState } from 'react';
import Banner from '../components/Banner';
import BlogComponent from '../components/BlogComponent';
import Pagination from '../components/Pagination';
import blogData from './../Api/blogdata.json';

const SeminarPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Banner />
      <section className="pt-[100px] pb-[60px]">
        <div className="container max-w-full md:max-w-9xl md:mx-0 lg:mx-auto  px-4 lg:container 4 sm:px-5 md:px-6  relative">
          <BlogComponent blogData={currentPosts} extraContent="Only 10 Seats Left" buttonClass="!px-[40px]"/>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default SeminarPage;
