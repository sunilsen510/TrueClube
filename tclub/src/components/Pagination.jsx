import React from 'react';
import leftArrow from '../assets/leftarrow.svg';
import rightArrow from '../assets/rightarrow.svg';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
       <div className=" relative flex justify-center cursor-pointer">
            <div className="flex items-center gap-2 rounded-full border border-gray-300 w-fit px-4 lg: mt-[60px] py-1">
                {/* Previous Button */}
                <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-[15px] font-normal text-[#0A2540] disabled:opacity-50 cursor-pointer"
                >
                <img src={leftArrow} alt={leftArrow} className="hover:text-blue-600 hover:brightness-0 cursor-pointer transition duration-200 w-[13px] h-[12px]" />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, idx) => {
                const pageNumber = idx + 1;
                const formatted = pageNumber < 10 ? `0${pageNumber}` : pageNumber;

                return (
                    <div className="flex flex-col items-center">
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-3 py-1 rounded text-[15px] font-normal border transition cursor-pointer ${
                          currentPage === pageNumber
                            ? 'bg-transparent text-[#0A2540] border-transparent'
                            : 'bg-white text-[#40658B] border-transparent'
                        }`}
                      >
                        {formatted}
                      </button>

                      {currentPage === pageNumber && (
                        <span className="w-[31px] h-[2px] bg-[#006AF2] rounded-full"></span>
                      )}
                    </div>
                  );
                })}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 cursor-pointer py-1 text-[15px] font-normal text-[#0A2540] disabled:opacity-50 "
                    >
                    <img src={rightArrow} alt="Right Arrow" className="w-[13px] h-[12px] hover:text-blue-600 hover:brightness-0 cursor-pointer transition duration-200" />
                </button>
            </div>
        </div>
    </>
  );
};

export default Pagination;