import React, {useState} from 'react'
import Banner from '../components/Banner';
import heroesImage from '../assets/heroesImage.svg';
import Pagination from '../components/Pagination';
import blogData from '../Api/blogdata.json'
// import BlogCard from '../components/BlogCard';
// import locationImg from '../assets/location.svg';
// import calendarImg from '../assets/calendar.svg';
import userImg from '../assets/user.svg';
import usePagination from '../hooks/usePagination';


const cardData = [
  { id: 1, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 1.' },
  { id: 2, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 2.' },
  { id: 3, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 3.' },
  { id: 4, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 4.' },
  { id: 5, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 5.' },
  { id: 6, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 6.' },
  { id: 7, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 7.' },
  { id: 8, name: 'Cameron Williamson', description: 'This is a dummy paragraph about user 8.' }
];


const HeroesPage = () => {
    const { currentPage, totalPages, currentItems, handlePageChange } = usePagination(blogData, 5);

  
    
  return (
    <>
      <Banner title='OUR HEROES' image={heroesImage} />

      <div className="container mx-auto max-w-9xl px-4 pt-[100px] pb-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              {/* Rounded Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                <img
                  src={`https://i.pravatar.cc/150?img=${card.id}`} // dynamic image based on ID
                  alt={`User ${card.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content + VIP Badge */}
              <div className="font-semibold text-gray-800">
                {card.name}
                <span className="ml-2 inline-block bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  VIP 👑
                </span>
              </div>

              {/* Paragraph */}
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default HeroesPage




// import React from 'react';
// import Banner from '../components/Banner';
// import heroesImage from '../assets/heroesImage.svg';
// import Pagination from '../components/Pagination';
// import hero1 from '../assets/hero1.jpg';
// import hero2 from '../assets/hero2.jpg';

// const cardData = [
//   { id: 1, name: 'Cameron Williamson', image: hero1, description: 'This is a dummy paragraph about user 1.' },
//   { id: 2, name: 'Cameron Williamson', image: hero2, description: 'This is a dummy paragraph about user 2.' },
//   { id: 3, name: 'Cameron Williamson', image: hero1, description: 'This is a dummy paragraph about user 3.' },
//   { id: 4, name: 'Cameron Williamson', image: hero2, description: 'This is a dummy paragraph about user 4.' },
//   { id: 5, name: 'Cameron Williamson', image: hero1, description: 'This is a dummy paragraph about user 5.' },
//   { id: 6, name: 'Cameron Williamson', image: hero2, description: 'This is a dummy paragraph about user 6.' },
//   { id: 7, name: 'Cameron Williamson', image: hero1, description: 'This is a dummy paragraph about user 7.' },
//   { id: 8, name: 'Cameron Williamson', image: hero2, description: 'This is a dummy paragraph about user 8.' },
// ];

// const HeroesPage = () => {
//   return (
//     <>
//       <Banner title="OUR HEROES" image={heroesImage} />

//       <div className="container mx-auto max-w-7xl px-4 pt-[100px] pb-[60px]">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
//           {cardData.map((card) => (
//             <div
//               key={card.id}
//               className="flex flex-col items-center text-center bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
//             >
//               {/* Rounded Image */}
//               <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
//                 <img
//                   src={card.image}
//                   alt={card.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content + VIP Badge */}
//               <div className="font-semibold text-gray-800">
//                 {card.name}
//                 <span className="ml-2 inline-block bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                   VIP 👑
//                 </span>
//               </div>

//               {/* Paragraph */}
//               <p className="text-sm text-gray-600 mt-2">{card.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Uncomment below only if you use pagination */}
//         {/* <Pagination
//           currentPage={1}
//           totalPages={1}
//           onPageChange={() => {}}
//         /> */}
//       </div>
//     </>
//   );
// };

// export default HeroesPage;
