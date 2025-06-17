import React from 'react';
import CustomButton from './CustomButton'; 
import locationImg from '../assets/location.svg'; 
import calenderImg from '../assets/calendar.svg'; 

const BlogComponent = ({ blogData, extraContent = null, buttonClass = '' }) => {
  return (
    <>
        <div className="w-full flex flex-wrap gap-6 justify-center">
            {blogData.map((item, index) => (
                <div
                key={index}
                className="border border-[#D4DEEB] py-[20px] pl-[15px] rounded-xl bg-white text-left flex  xl:flex-row lg:flex-col flex-col md:flex-col   gap-3 sm:gap-4 w-full items-start lg:items-center sm:items-center justify-between"
                >
                     <div className="flex flex-col xxl:flex-col sm:!pr-[15px] pr-[15px]  gap-3 sm:gap-4 w-full flex-1 items-start sm:items-center lg:!flex-row  md:!flex-col md:gap-[15px] lg:gap-[15px] md:items-center">
                        <img
                        src={item.image}
                        alt="blog"
                        className="w-full h-full sm:w-full sm:h-full md:w-[156px] md:h-[110px] object-contain rounded-xl"
                        />
                        <div className='sm:mt-[15px] lg:mt-0'>
                            <h3 className="font-semibold text-[16px] line-height tracking-[0] text-[#0A2540] mb-[15px]">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-[5px] text-sm text-gray-600 mb-[15px]">
                                <img
                                src={locationImg}
                                alt="location"
                                className="w-[18px] h-[18px]"
                                />
                               <span className="text-[#DA7821] text-[12px] font-normal">
                                {item.location || 'Not specified'}
                                </span>
                            </div>
                            <div className="flex items-center gap-[5px] text-sm text-[#0A2540]">
                                <img
                                src={calenderImg}
                                alt="calendar"
                                className="w-[18px] h-[18px]"
                                />
                               <span className="font-semibold text-[12px] text-[#0A2540]">{item.date}</span>
                            </div>
                            
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center flex-none md:self-stretch gap-2 !pr-[20px] md:!w-100%">
                            {item.id === 1 ? (
                                <>
                                <CustomButton
                                    label="Book Seats"
                                    to="/seminarpage"
                                    variant="outline"
                                    className={`w-auto !py-[20px] !px-[22px] !text-[14px] !font-semibold lg:w-[100%] md:w-auto sm:w-[100%] shadow-[8px_6px_15px_0px_#0061DE40] ${buttonClass}`}
                                />
                                {extraContent && (
                                    <span className="text-[12px] text-[#DA7821] font-medium">{extraContent}</span>
                                )}
                                </>
                            ) : (
                                <CustomButton
                                label="Read More"
                                to="/seminarpage"
                                variant="primary"
                                className={`w-auto lg:w-[100%] md:w-auto sm:w-[100%] !py-[20px] !px-[22px] !text-[14px] !font-semibold ${buttonClass}`}
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
