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
        <div className="container mx-auto max-w-9xl px-4">
          <BlogComponent blogData={currentPosts} />
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
