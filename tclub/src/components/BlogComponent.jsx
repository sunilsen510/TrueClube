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
                className="border border-[#D4DEEB] p-4 rounded-xl bg-white text-left flex gap-4 w-full items-center justify-between"
                >
                    <div className="flex gap-4 w-full flex-1 items-center">
                        <img
                        src={item.image}
                        alt="blog"
                        className="w-[156px] h-[110px] object-contain rounded-xl"
                        />
                            <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-800 mb-[15px]">
                                {item.title}
                            </h3>
                            <div className="mb-[15px] text-sm text-gray-600 flex items-center gap-2">
                                <img
                                src={locationImg}
                                alt="location"
                                className="w-[18px] h-[18px]"
                                />
                                <span className="text-[#DA7821] font-semibold">
                                {item.location || 'Not specified'}
                                </span>
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-2">
                                <img
                                src={calenderImg}
                                alt="calendar"
                                className="w-[18px] h-[18px]"
                                />
                                <span className="font-semibold text-black">{item.date}</span>
                            </div>
                            
                            </div>
                            <div className="">
                                {item.id === 1 ? (
                                <CustomButton label="Book Seat" to="/" variant="outline" />
                                ) : (
                                <CustomButton label="Read More" to="/" variant="primary" />
                                )}
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default BlogComponent;
