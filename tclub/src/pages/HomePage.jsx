import React from 'react';
import HeroBanner from '../components/Hero';
import Login from '../components/Login';
import NewsBlogs from '../components/NewsBlogs';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <section className="lg:py-10 md:py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 relative">
    
          {/* Left: Login */}
          <div className="w-full md:w-1/2 px-4">
            <Login />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Right: News & Blogs */}
          <div className="w-full md:w-1/2 px-4">
            <NewsBlogs />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
