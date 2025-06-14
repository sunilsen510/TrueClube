import React from 'react';
import BlogComponent from './BlogComponent';
import fullBlogData from './../Api/blogdata.json';

const UpcomingSeminar = ({ showHeading = true, blogData }) => {
  // Fallback to default 3 items if no blogData is passed
  const dataToShow = blogData && blogData.length > 0 ? blogData : fullBlogData.slice(0, 3);

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center my-[30px] 2xl:my-[100px] lg:my-[100px] md:my-[30px]">
      {showHeading && (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Upcoming Seminars</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-4"></div>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Lorem distracted by the readable content of a page when looking at.
          </p>
        </>
      )}

      {/* Blog items */}
      <div className="w-full flex flex-wrap gap-6 justify-center h-full">
        <BlogComponent blogData={dataToShow} />
      </div>
    </div>
  );
};

export default UpcomingSeminar;
