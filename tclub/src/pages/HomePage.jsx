import React from 'react';
import HeroBanner from '../components/Hero';
import Login from '../components/Login';
import NewsBlogs from '../components/NewsBlogs';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <section className="lg:py-0 md:py-4">
        <div className="xl:container lg:container-fluid  max-w-7xl px-0 mx-auto flex flex-col lg:flex-row items-start gap-10 xl:gap-10 lg:gap-2 md:gap-4  relative md:flex-col">
       
              {/* Left: Login */}
              <div className="w-full lg:w-1/2 md:w-full px-4 lg:px-4 sm:px-4 md:px-4">
                <Login />
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:hidden  xl:block md:hidden absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 transform -translate-x-1/2"></div>

              {/* Right: News & Blogs */}
              <div className="w-full lg:w-1/2 md:w-full px-4  lg:px-4 sm:px-4 md:px-4">
                <NewsBlogs />
              </div>
           
        </div>
      </section>
    </>
  );
};

export default HomePage;
