// import React from 'react'
// import Banner from '../components/Banner'
// import calenderImg from '../assets/calendar.svg';
// import userImg from '../assets/user.svg';
// import BlogDetails from '../components/BlogDetails';

// const BlogDeatailsPage = ({blog}) => {
//   return (
//     <>
//         <div className="relative lg:pt-[93px]">
//             <Banner 
//                 title='Trueyou.Club Realise Your Potential'
//                 subtitle="" 
//                 primaryButtonLabel=""
//                 primaryButtonLink="" 
//                 image={null}
//                 useBeforeBg={true}
//                 metaInfo={
//                     <>
//                         <div className="flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-[30px] md:gap-[10px]">
//                             <div className="flex items-center gap-2 text-sm text-gray-600">
//                                 <div className='w-[27px] h-[27px] flex items-center justify-center bg-[#D2EFD0] rounded-full p-[6px]'>
//                                     <img
//                                         src={userImg}
//                                         alt="user"
//                                         className="w-[18px] h-[18px]"
//                                     />
//                                 </div>
//                                 <span className="text-[#0A2540] text-[14px] tracking-[0] leading-[16px] font-normal">By : Admin</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-sm  text-[#0A2540]">
//                                 <div className='w-[27px] h-[27px] flex items-center justify-center bg-[#D2EFD0] rounded-full p-[6px]'>
//                                     <img
//                                         src={calenderImg}
//                                         alt="calendar"
//                                         className="w-[18px] h-[18px]"
//                                     />
//                                 </div>
//                                 <span className="text-[#0A2540] text-[14px] tracking-[0] leading-[16px] font-normal">04 - February - 2024</span>
//                             </div>
//                         </div>
//                     </>
//                 }
//             />  
//            <div
//             className="relative h-full">
//             <BlogDetails />
//             </div>
//         </div>
    
//     </>
//   )
// }

// export default BlogDeatailsPage




import React from 'react';
import Banner from '../components/Banner';
import calenderImg from '../assets/calendar.svg';
import userImg from '../assets/user.svg';
import BlogDetails from '../components/BlogDetails';

const BlogDetailsPage = ({ blog }) => {
  return (
    <>
      <div className="relative lg:pt-[93px]">
        <Banner
          title="Trueyou.Club Realise Your Potential"
          subtitle=""
          primaryButtonLabel=""
          primaryButtonLink=""
          image={null}
          useBeforeBg={true}
          metaInfo={
            <div className="flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-[30px] md:gap-[10px]">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-[27px] h-[27px] flex items-center justify-center bg-[#D2EFD0] rounded-full p-[6px]">
                  <img
                    src={userImg}
                    alt="user"
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <span className="text-[var(--text-primary)] text-[14px] tracking-[0] leading-[16px] font-normal">
                  By : Admin
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                <div className="w-[27px] h-[27px] flex items-center justify-center bg-[#D2EFD0] rounded-full p-[6px]">
                  <img
                    src={calenderImg}
                    alt="calendar"
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <span className="text-[14px] tracking-[0] leading-[16px] font-normal">
                  04 - February - 2024
                </span>
              </div>
            </div>
          }
        />

        {/* Blog Detail Section */}
        <div className="relative h-full">
          <BlogDetails />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
