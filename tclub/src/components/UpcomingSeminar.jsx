// import React from 'react';
// import BlogComponent from './BlogComponent';
// import fullBlogData from './../Api/blogdata.json';

// const UpcomingSeminar = ({ showHeading = true, blogData }) => {
//   // Fallback to default 3 items if no blogData is passed
//   const dataToShow = blogData && blogData.length > 0 ? blogData : fullBlogData.slice(0, 3);

//   return (
//     <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center my-[30px] 2xl:my-[100px] lg:my-[100px] md:my-[30px]">
//       {showHeading && (
//         <>
//           <h2 className="text-[30px] font-medium tracking-[0] text-[#0A2540] line-height text-center">Upcoming Seminars</h2>
//           <div className="w-20 h-1 bg-[#006AF2] rounded-full tracking-[0]  mt-[16px]  mb-4 mx-auto" />
//           <p className="text-[#40658B] text-[16px] font-normal lg:mb-[50px] mb-[20px]   text-center">
//             Lorem distracted by the readable content of a page when looking at.
//           </p>
//         </>
//       )}

//       {/* Blog items */}
//       <div className="w-full flex flex-wrap gap-6 justify-center h-full">
//         <BlogComponent blogData={dataToShow} />
//       </div>
//     </div>
//   );
// };

// export default UpcomingSeminar;



import React from 'react';
import BlogComponent from './BlogComponent';
import fullBlogData from './../Api/blogdata.json';

const UpcomingSeminar = ({ showHeading = true, blogData }) => {
  const dataToShow = blogData && blogData.length > 0 ? blogData : fullBlogData.slice(0, 3);

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center my-[30px] 2xl:my-[100px] lg:my-[100px] md:my-[30px]">
      {showHeading && (
        <>
          <h2 className="text-[30px] font-medium tracking-[0] text-[var(--text-primary)] leading-[1.2] text-center">
            Upcoming Seminars
          </h2>
          <div className="w-20 h-1 bg-[var(--primary-color)] rounded-full tracking-[0] mt-[16px] mb-4 mx-auto" />
          <p className="text-[var(--text-secondary)] text-[16px] font-normal lg:mb-[50px] mb-[20px] text-center">
            Lorem distracted by the readable content of a page when looking at.
          </p>
        </>
      )}

      {/* Blog Items */}
      <div className="w-full flex flex-wrap gap-6 justify-center h-full">
        <BlogComponent blogData={dataToShow} />
      </div>
    </div>
  );
};

export default UpcomingSeminar;

