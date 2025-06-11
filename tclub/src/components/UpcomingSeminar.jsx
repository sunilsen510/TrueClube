import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import blogImg from '../assets/blogImg.svg';
import locationImg from '../assets/location.svg';
import calenderImg from '../assets/calendar.svg';
import blogData from './../Api/blogdata.json'


const UpcomingSeminar = () => {
  return (
    <>
      <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center my-[100px]">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Upcoming Seminars</h2>
        <div className="w-20 h-1 bg-blue-600 rounded-full mb-4"></div>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Lorem distracted by the readable content of a page when looking at.
        </p>
        
        {/* blog Components */}
        <div className="w-full flex flex-wrap gap-6 justify-center h-[100%]">
          {blogData.slice(0, 3).map((item,index) => (
            <div  key={index + 1}   className="border border-[#D4DEEB] p-4 rounded-xl bg-white text-left flex gap-4 w-full items-center justify-between" >
                <div className="flex gap-4 w-full flex-1 items-center">
                    <img src={item.image} alt="blog" className="w-[156px] h-[110px] object-contain rounded-xl" />
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-[15px]">{item.title}</h3>
                        <div className=''>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-[15px]">
                            <img src={locationImg} alt="location" className="w-[18px] h-[18px]" />
                            <span className='text-[#DA7821] font-semibold'>{item.location || 'Not specified'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <img src={calenderImg} alt="calendar" className="w-[18px] h-[18px]" />
                            <span className='font-semibold text-black'>{item.date}</span>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-none md:self-stretch gap-2">
                {item.id === 1 ? (
                <CustomButton
                    label="Book Seat"
                    to="/"
                    variant="outline"
                    className="w-auto"
                />
                ) : (
                // This 'else' part now covers all other IDs (2 and 3 in your current data)
                <CustomButton
                    label="Read More"
                    to="/"
                    variant="primary"
                    className="w-auto"
                />
                )}
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default UpcomingSeminar