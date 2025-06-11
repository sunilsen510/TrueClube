import React, {useState} from 'react';
import Banner from '../components/Banner';
import blogData from '../Api/blogdata.json'
import BlogCard from '../components/BlogCard';
import locationImg from '../assets/location.svg';
import calendarImg from '../assets/calendar.svg';
import userImg from '../assets/user.svg';
import Pagination from '../components/Pagination';

const BlogPage = () => {

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
      <Banner title="Blogs & News" />
      <div className="container mx-auto max-w-9xl px-4 pt-[100px] pb-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
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