import React from 'react';
import Banner from '../components/Banner';
import heroesImage from '../assets/heroesImage.svg';
import Pagination from '../components/Pagination';
import cardData from '../Api/blogDataOne.json';
import crownImg from '../assets/crown.svg';
import usePagination from '../hooks/usePagination';
import { NavLink } from 'react-router-dom';

const HeroesPage = () => {
  const { currentPage, totalPages, currentItems, cardImg, handlePageChange } = usePagination(cardData, 8); 

  return (
    <>
  
      <div>
        <Banner title="OUR HEROES" image={heroesImage} width={315} height={342} />
      </div>
      <div className="flex items-center justify-center w-full">
        <span className="bg-[#E5F5E5] text-[14px] leading-[27px] tracking-[0] font-semibold text-[#0A2540]] py-[10px] px-[20px] w-[230px] text-center rounded-b-2xl">
          Stories Of The Heroes
        </span>
      </div>

      {/* Hero Cards */}  
      <div className="container mx-auto max-w-9xl lg:pt-[80px] md:pt-[60px] pt-[40px] pb-[60px] lg:container max-w-full md:max-w-9xl md:mx-0 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6 p-4">
          {currentItems.map((card) => (
            <div
              key={card.id}
              className=" bg-white p-[30px] rounded-4xl border border-[#DDDDE9] cursor-pointer"
            >
              {/* Rounded Image */}
              <div className='flex items-center gap-[20px]'>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img src={card.image} alt={card.name} className='w-full h-full object-contain' />
                </div>
                <div className="font-semibold text-gray-800 flex flex-col items-baseline gap-2">
                  <div className="lg:text-[25px] text-[18px] font-semibold">{card.name}</div>
                  <div className="flex items-center justify-center gap-2 bg-[#112B4D] text-white text-xs font-bold py-[6px] px-[10px] rounded-2xl">
                    <img src={crownImg} alt="Crown" className="w-4 h-4 object-contain" />
                    <span>VIP</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full my-[30px] relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-1/2 before:h-[1px] before:bg-[#DDDDE9]">
                <span className="bg-[#E5F5E5] text-[14px] font-semibold text-[#0A2540] py-[10px] px-[20px] w-[230px] text-center z-10 rounded-[5px]">
                  Stories Of The Heroes
                </span>
              </div>
              {/* Description */}
                <p className="text-[14px] text-[#40658B] line-height tracking-normal">
                  {card.description.includes('Read More.') ? (
                    <>
                      {card.description.replace('...Read More.', '')}
                      <NavLink to={`/details`} className="text-blue-600 font-medium hover:underline">
                        ...Read More.
                      </NavLink>
                    </>
                  ) : (
                    card.description
                  )}
                </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default HeroesPage;
