import React from 'react';
import CustomButton from './CustomButton'; 
import locationImg from '../assets/location.svg'; 
import calenderImg from '../assets/calendar.svg'; 

const BlogComponent = ({ blogData }) => {
  return (
    <>
        <div className="w-full flex flex-wrap gap-6 justify-center">
            {blogData.map((item, index) => (
                <div
                key={index}
                className="border border-[#D4DEEB] p-3 sm:p-4 rounded-xl bg-white text-left flex  xl:flex-row lg:flex-col flex-col md:flex-row sm:flex-row  gap-3 sm:gap-4 w-full items-start lg:items-center sm:items-center justify-between"
                >
                    <div className="flex flex-col xxl:flex-col lg:flex-col sm:!flex-row gap-3 sm:gap-4 w-full flex-1 items-start sm:items-center  md:!flex-row md:gap-5 lg:gap-3 md:items-center">
                        <img
                        src={item.image}
                        alt="blog"
                        className="w-[156px] h-[110px] object-contain rounded-xl"
                        />
                        <div>
                            <h3 className="font-semibold text-[16px] text-gray-800 mb-[15px]">
                                {item.title}
                            </h3>
                            <div className="mb-[15px] text-sm text-gray-600 flex items-center gap-2">
                                <img
                                src={locationImg}
                                alt="location"
                                className="w-[18px] h-[18px]"
                                />
                                <span className="text-[#DA7821] text-[12px] font-semibold">
                                {item.location || 'Not specified'}
                                </span>
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-2">
                                <img
                                src={calenderImg}
                                alt="calendar"
                                className="w-[18px] h-[18px]"
                                />
                                <span className="font-semibold text-[12px] text-black">{item.date}</span>
                            </div>
                            
                            </div>
                        </div>
                            <div className="flex flex-col justify-center items-center flex-none md:self-stretch gap-2">
                                {item.id === 1 ? (
                                <CustomButton label="Book Seat" to="/" variant="outline" className="w-auto lg:!w-[100%] md:!w-auto sm:!w-[100%]" />
                                ) : (
                                <CustomButton label="Read More" to="/" variant="primary"  className="w-auto lg:!w-[100%] md:!w-auto sm:!w-[100%]"/>
                                )}
                            </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default BlogComponent;
