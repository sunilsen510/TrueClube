import React from 'react'
import HeroBanner from '../components/Hero';
import NewsBlogs from '../components/NewsBlogs';
import UpcomingSeminar from '../components/UpcomingSeminar';

const HomeSeminar = () => {
  return (
    <>
      <HeroBanner />
      <section>
        <div className="lg:container max-w-7xl px-4 sm:px-5 md:px-6  mx-auto flex flex-col lg:flex-row items-start gap-10  relative md:flex-col">
          {/* Left: UpcomingSeminar */}
          <div className="w-full lg:w-1/2 md:w-full lg:px-0 sm:px-0 md:px-0">
            <UpcomingSeminar />
          </div>

          {/* Vertical Divider (Pseudo Element) */}
          <div className="hidden lg:block md:hidden absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Right: News & Blogs */}
          <div className="w-full lg:w-1/2 md:w-full px-0 sm:px-0 md:px-0">
            <NewsBlogs />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSeminar
