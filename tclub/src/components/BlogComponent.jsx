// import React from 'react';
// import CustomButton from './CustomButton'; 
// import locationImg from '../assets/location.svg'; 
// import calenderImg from '../assets/calendar.svg'; 

// const BlogComponent = ({ blogData, extraContent = null, buttonClass = '', width = '', maxWidth = '',  }) => {
//   return (
//     <>
//         <div className="w-full flex flex-wrap gap-6 justify-center">
//             {blogData.map((item, index) => (
//                 <div
//                 key={index}
//                 className="border border-[#D4DEEB] py-[20px] pl-[15px] rounded-xl bg-white text-left flex  xl:flex-row lg:flex-col flex-col md:flex-col   gap-3 sm:gap-4 w-full items-start lg:items-center sm:items-center justify-between"
//                 >
//                      <div className="flex flex-col xxl:flex-col sm:!pr-[15px] pr-[15px]  gap-3 sm:gap-4 w-full flex-1 items-start sm:items-center lg:!flex-row  md:!flex-col md:gap-[15px] lg:gap-[15px] md:items-center">
//                         <img
//                         src={item.image}
//                         alt="blog"
//                         className="w-full h-full sm:w-full sm:h-full md:w-[156px] md:h-[110px] object-contain rounded-xl"
//                         />
//                         <div className='sm:mt-[15px] lg:mt-0'>
//                             <h3 className="font-semibold text-[16px] line-height tracking-[0] text-[#0A2540] mb-[15px]">
//                                 {item.title}
//                             </h3>
//                             <div className="flex items-center gap-[5px] text-sm text-gray-600 mb-[15px]">
//                                 <img
//                                 src={locationImg}
//                                 alt="location"
//                                 className="w-[18px] h-[18px]"
//                                 />
//                                <span className="text-[#DA7821] text-[12px] font-normal">
//                                 {item.location || 'Not specified'}
//                                 </span>
//                             </div>
//                             <div className="flex items-center gap-[5px] text-sm text-[#0A2540]">
//                                 <img
//                                 src={calenderImg}
//                                 alt="calendar"
//                                 className="w-[18px] h-[18px]"
//                                 />
//                                <span className="font-semibold text-[12px] text-[#0A2540]">{item.date}</span>
//                             </div>
                            
//                             </div>
//                         </div>
//                         <div className={`flex flex-col justify-center items-center flex-none md:self-stretch gap-2 !pr-[20px] md:!w-100% ${width} ${maxWidth} `}>
//                             {item.id === 1 ? (
//                                 <>
//                                 <CustomButton
//                                     label="Book Seats"
//                                     to="/seminarpage"
//                                     variant="outline"
//                                     className={`w-auto !py-[20px] !px-[22px] !text-[14px] !font-semibold lg:w-[100%] md:w-auto sm:w-[100%] shadow-[8px_6px_15px_0px_#0061DE40] ${buttonClass}`}
//                                 />
//                                 {extraContent && (
//                                     <span className="text-[16px] text-[#DA7821] font-semibold leading-[17px] tracking-[0] mt-[8px]">{extraContent}</span>
//                                 )}
//                                 </>
//                             ) : (
//                                 <CustomButton
//                                 label="Read More"
//                                 to="/seminarpage"
//                                 variant="primary"
//                                 className={`w-auto lg:w-[100%] md:w-auto sm:w-[100%] !py-[20px] !px-[22px] !text-[14px] hover:shadow-[8px_6px_15px_0px_#0061DE40] !font-semibold ${buttonClass}`}
//                                 />
//                             )}
//                             </div>

//                 </div>
//             ))}
//         </div>
//     </>
//   );
// };

// export default BlogComponent;




import React from 'react';
import CustomButton from './CustomButton'; 
import locationImg from '../assets/location.svg'; 
import calenderImg from '../assets/calendar.svg'; 

const BlogComponent = ({ blogData, extraContent = null, buttonClass = '', width = '', maxWidth = '',  }) => {
  return (
    <>
<div className="w-full flex flex-wrap gap-6 justify-center">
  {blogData.map((item, index) => (
    <div
      key={index}
      className="
        w-full 
        flex 
        flex-col 
        xs:flex-col 
        xs2:flex-col 
        sm:flex-col 
        md:flex-row 
        lg:flex-row 
        lg2:flex-row 
        xl:flex-row 
        xl2:flex-row 
        xxl:flex-row 
        xxl2:flex-row 
        fhd:flex-row 
        gap-3 sm:gap-4 
        items-start 
        sm:items-center 
        lg:items-center 
        justify-between 
        border border-[var(--divider-color)] 
        bg-[var(--text-light)] 
        rounded-xl 
        p-[15px]
      "
    >
      {/* LEFT SIDE */}
      <div
        className="
          flex 
          flex-col 
          xs2:flex-col 
          sm:flex-col 
          md:flex-row 
          lg:flex-row 
          xl:flex-row 
          gap-3 sm:gap-4 
          flex-1 
          items-start 
          sm:items-center 
          md:items-center 
          lg:items-center 
          xl:items-center
          w-[100%]
        "
      >
        <img
          src={item.image}
          alt="blog"
          className="
            w-full 
            xs2:w-full 
            sm:w-full 
            md:w-[156px] md:h-[110px] 
            lg:w-[156px] lg:h-[110px] 
            xl:w-[156px] xl:h-[110px] 
            object-contain 
            rounded-xl
          "
        />
        <div className="mt-[10px] md:mt-0 flex flex-col justify-center">
          <h3 className="font-semibold text-[16px] tracking-[0] text-[var(--text-primary)] mb-[15px]">
            {item.title}
          </h3>
          <div className="flex items-center gap-[6px] text-sm mb-[10px]">
            <img src={locationImg} alt="location" className="w-[18px] h-[18px]" />
            <span className="text-[var(--highlight-color)] text-[12px] font-normal">
              {item.location || 'Not specified'}
            </span>
          </div>
          <div className="flex items-center gap-[6px] text-sm text-[var(--text-primary)]">
            <img src={calenderImg} alt="calendar" className="w-[18px] h-[18px]" />
            <span className="font-semibold text-[12px]">{item.date}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`
           flex flex-col justify-center items-start gap-2
          mt-4 md:mt-0 xl:mt-0 
          w-full
          xs:w-full xs2:w-full sm:w-full 
          md:w-auto lg:w-auto xl:w-auto
          md:self-stretch 
          ${width} ${maxWidth}
          `}
      >
        {item.id === 1 ? (
          <>
            <CustomButton
              label="Book Seats"
              to="/seminarpage"
              variant="outline"
              className={`
                w-auto 
                xs:w-full sm:w-full lg:w-full 
                !py-btn-y !px-btn-x 
                !text-[14px] !font-semibold 
                shadow-[var(--btn-shadow)] 
                ${buttonClass}
              `}
            />
            {extraContent && (
              <span className="text-[16px] sm:hidden md:hidden xs:hidden xs2:hidden text-[var(--highlight-color)] font-semibold leading-[17px] tracking-[0] mt-[8px]">
                {extraContent}
              </span>
            )}
          </>
        ) : (
          <CustomButton
            label="Read More"
            to="/seminarpage"
            variant="primary"
            className={`
              w-auto 
              xs:w-full sm:w-full lg:w-full 
              !py-btn-y !px-btn-x 
              !text-[14px] !font-semibold 
              hover:shadow-[var(--btn-shadow)] 
              ${buttonClass}
            `}
          />
        )}
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default BlogComponent;