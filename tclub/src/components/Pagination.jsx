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
            <div className="flex items-center mt-8 gap-2 rounded-full border border-gray-300 w-fit px-4 py-2">
                {/* Previous Button */}
                <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm font-medium text-gray-700 disabled:opacity-50 cursor-pointer"
                >
                <img src={leftArrow} alt={leftArrow} className="hover:text-blue-600 hover:brightness-0 cursor-pointer transition duration-200" />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, idx) => {
                const pageNumber = idx + 1;
                const formatted = pageNumber < 10 ? `0${pageNumber}` : pageNumber;

                return (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-3 py-1 text-sm rounded font-semibold border transition cursor-pointer ${
                            currentPage === pageNumber
                            ? 'bg-transparent text-black border-transparent'
                            : 'bg-white text-gray-700 border-transparent '
                        }`}
                        >
                        {formatted}
                    </button>
                );
                })}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 cursor-pointer py-1 text-sm font-medium text-gray-700 disabled:opacity-50 "
                    >
                    <img src={rightArrow} alt="Right Arrow" className="hover:text-blue-600 hover:brightness-0 cursor-pointer transition duration-200" />
                </button>
            </div>
        </div>
    </>
  );
};

export default Pagination;