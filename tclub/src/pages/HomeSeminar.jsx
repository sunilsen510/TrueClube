import React from 'react'
import HeroBanner from '../components/Hero';
import NewsBlogs from '../components/NewsBlogs';
import UpcomingSeminar from '../components/UpcomingSeminar';

const HomeSeminar = () => {
  return (
    <>
        <HeroBanner />
      <section>
        <div className="container mx-auto flex flex-col md:flex-row items-start relative h-full">
          {/* Left: UpcomingSeminar */}
          <div className="w-full md:w-1/2 px-4 h-[100%]">
            <UpcomingSeminar />
          </div>

          {/* Vertical Divider (Pseudo Element) */}
          <div className="hidden md:block w-px bg-gray-300 h-auto absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

          {/* Right: News & Blogs */}
          <div className="w-full md:w-1/2 px-4 h-[100%]">
            <NewsBlogs />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSeminar