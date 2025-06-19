// import React from 'react';
// import detailImg from '../assets/detailImgone.svg';
// import iconImg from '../assets/rightIcon.svg';

// const blogData = [
//   {
//     id: 1,
//     image: iconImg,
//     title: 'The talent at runs wide and deep. Across many markets, geographies & typologies.',
    
//   },
//   {
//     id: 2,
//     image: iconImg,
//     title: 'Our team members are some of the finest professionals in the industry.',
    
//   },
//   {
//     id: 3,
//     image: iconImg,
//     title: 'Organized to deliver the most specialized service possible and enriched by the depth.',
    
//   },
// ];

// const BlogDetails = () => {
//   return (
//     <div className="container mx-auto px-4 lg:px-0 max-w-5xl pb-[60px] sm:bg-white">
//       {/* Top Image */}
//       <div className="flex justify-center">
//         <img
//           src={detailImg}
//           alt="Details"
//           className="w-full  object-contain"
//         />
//       </div>

//       {/* First Paragraph */}
//       <p className="text-[16px] font-normal leading-[27px] tracking-[0] text-[#40658B] mt-[50px]">
//         <strong>It is a long established fact that a reader</strong> will be distracted by the readable content of a page
//         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
//         distribution of letters, as opposed to using 'Content here, content here', making it look like
//         readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
//         their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
//         their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
//         purpose.<span className='text-[#006AF2] font-semibold'> (injected humour and the like)</span>.
//       </p>

//       <h3 className="text-[25px] tracking-[0] leading-[29px] font-bold mb-[30px] mt-[40px] text-[#0A2540]">
//         Hire a Wearable App Developer in the USA: What are Wearable Apps?
//       </h3>
//       <span className="text-[#0A2540] text-[16px] font-bold leading-[19px] relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-none">
//         It is a long established fact that a reader will be distracted by the readable.
//       </span>
//       <p className="text-[16px] mt-[20px] leading-[27px] text-[#40658B]">
//         <strong>It is a long established fact that a reader</strong> will be distracted by the readable content of a page
//         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
//         distribution of letters, as opposed to using 'Content here, content here', making it look like
//         readable English.
//       </p>
//       <p className='mt-[30px] text-[16px]  leading-[27px] text-[#40658B]'> Many desktop publishing packages and web page editors now use Lorem Ipsum as
//         their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
//         their infancy. Various versions have evolved over the years, sometimes by <span className='text-blue-700 font-semibold'>accident</span>, sometimes on
//         purpose.
//       </p>
//       <p className='mt-[30px] text-[16px]  leading-[27px] text-[#40658B]'>It is a long established fact that a reader will be distracted by the readable content of a page
//         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
//         distribution of letters, as opposed to using 'Content here, content here', making it look like
//         readable English.</p>
//       <p className='mt-[30px] text-[16px] leading-[27px] text-[#40658B]'> Many desktop publishing packages and web page editors now use Lorem Ipsum as
//         their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
//         their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
//         purpose.
//       </p>

//       <p className="mt-4 text-[16px] py-[18px] leading-[19px] tracking-[0] font-semibold italic text-black relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-[#0EB8FF]">
//         Seemingly flawless integration with daily life distinguishes wearable apps from conventional mobile apps.
//         Considering this scenario, the app relies on hardware integrated.
//       </p>

//       <p className="mt-4 text-[16px] leading-[27px] font-normal tracking-[0] text-[#40658B]">
//         Moreover, many companies have harnessed the potential of personalization within these apps by catering
//         functionalities specifically tailored towards individual needs and preferences. Whether it’s providing
//         personalized fitness goals based on an individual’s age, weight, and medical history or recommending
//         nearby restaurants based on dietary restrictions – wearables offer convenience through customization.
//       </p>

//       {/* Middle Image */}
//       <div className="flex justify-center lg:mt-[40px]">
//         <img
//           src={detailImg}
//           alt="Details"
//           className="w-full  object-contain"
//         />
//       </div>

//       {/* Another Section Heading */}
//       <h3 className="text-[25px] tracking-[0] leading-[29px] font-bold mb-[30px] mt-[40px] text-[#0A2540]">
//         Hire a Wearable App Developer in the USA: What are Wearable Apps?
//       </h3>
//       <span className="text-[#0A2540] text-[16px] font-bold leading-[19px] relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-none">
//         It is a long established fact that a reader will be distracted by the readable.
//       </span>
//       <p className="text-[16px] mt-[20px] leading-[27px] text-[#40658B]">
//         <strong>It is a long established fact that a reader</strong> will be distracted by the readable content of a page
//         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
//         distribution of letters, as opposed to using 'Content here, content here', making it look like
//         readable English.
//       </p>
//       <p className='mt-[30px] text-[16px]  leading-[27px] text-[#40658B]'> Many desktop publishing packages and web page editors now use Lorem Ipsum as
//         their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
//         their infancy. Various versions have evolved over the years, sometimes by <span className='text-blue-700 font-semibold'>accident</span>, sometimes on
//         purpose.
//       </p>
//       <p className='mt-[30px] text-[16px]  leading-[27px] text-[#40658B]'>It is a long established fact that a reader will be distracted by the readable content of a page
//         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
//         distribution of letters, as opposed to using 'Content here, content here', making it look like
//         readable English.</p>
//       <p className='mt-[30px] text-[16px]  leading-[27px] text-[#40658B]'> Many desktop publishing packages and web page editors now use Lorem Ipsum as
//         their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
//         their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
//         purpose.
//       </p>

//       {/* List Section */}
//         <ul className="mt-8 space-y-6">
//           {blogData.map((item) => (
//             <li key={item.id} className="flex items-start gap-4">
//               <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
//                 <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#F5F7F9] rounded">
//                   <img
//                     src={item.image}
//                     alt="icon"
//                     className="w-[16px] h-[16px] object-contain"
//                   />
//                 </div>
//                 <h4 className="text-[16px] font-semibold text-[#0A2540] tracking-[0] leading-[27px]">
//                   {item.title}
//                 </h4>
//               </div>
//             </li>
//           ))}
//         </ul>

//     </div>
//   );
// };

// export default BlogDetails;




import React from 'react';
import detailImg from '../assets/detailImgone.svg';
import iconImg from '../assets/rightIcon.svg';

const blogData = [
  {
    id: 1,
    image: iconImg,
    title: 'The talent at runs wide and deep. Across many markets, geographies & typologies.',
  },
  {
    id: 2,
    image: iconImg,
    title: 'Our team members are some of the finest professionals in the industry.',
  },
  {
    id: 3,
    image: iconImg,
    title: 'Organized to deliver the most specialized service possible and enriched by the depth.',
  },
];

const BlogDetails = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 max-w-5xl pb-[60px] sm:bg-white">
      {/* Top Image */}
      <div className="flex justify-center">
        <img src={detailImg} alt="Details" className="w-full object-contain" />
      </div>

      {/* First Paragraph */}
      <p className="text-[16px] font-normal leading-[27px] tracking-[0] text-[var(--text-secondary)] mt-[50px]">
        <strong>It is a long established fact that a reader</strong> will be distracted by the readable content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content here', making it look like
        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
        purpose.<span className='text-[var(--primary-color)] font-semibold'> (injected humour and the like)</span>.
      </p>

      <h3 className="text-[25px] tracking-[0] leading-[29px] font-bold mb-[30px] mt-[40px] text-[var(--text-primary)]">
        Hire a Wearable App Developer in the USA: What are Wearable Apps?
      </h3>

      <span className="text-[var(--text-primary)] text-[16px] font-bold leading-[19px] relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[var(--primary-color)] before:rounded-none">
        It is a long established fact that a reader will be distracted by the readable.
      </span>

      <p className="text-[16px] mt-[20px] leading-[27px] text-[var(--text-secondary)]">
        <strong>It is a long established fact that a reader</strong> will be distracted by the readable content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content here', making it look like
        readable English.
      </p>

      <p className='mt-[30px] text-[16px] leading-[27px] text-[var(--text-secondary)]'>
        Many desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
        their infancy. Various versions have evolved over the years, sometimes by <span className='text-[var(--accent-color)] font-semibold'>accident</span>, sometimes on
        purpose.
      </p>

      <p className='mt-[30px] text-[16px] leading-[27px] text-[var(--text-secondary)]'>
        It is a long established fact that a reader will be distracted by the readable content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content here', making it look like
        readable English.
      </p>

      <p className='mt-[30px] text-[16px] leading-[27px] text-[var(--text-secondary)]'>
        Many desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
        purpose.
      </p>

      <p className="mt-4 text-[16px] py-[18px] leading-[19px] tracking-[0] font-semibold italic text-black relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-[var(--highlight)]">
        Seemingly flawless integration with daily life distinguishes wearable apps from conventional mobile apps.
        Considering this scenario, the app relies on hardware integrated.
      </p>

      <p className="mt-4 text-[16px] leading-[27px] font-normal tracking-[0] text-[var(--text-secondary)]">
        Moreover, many companies have harnessed the potential of personalization within these apps by catering
        functionalities specifically tailored towards individual needs and preferences. Whether it’s providing
        personalized fitness goals based on an individual’s age, weight, and medical history or recommending
        nearby restaurants based on dietary restrictions – wearables offer convenience through customization.
      </p>

      {/* Middle Image */}
      <div className="flex justify-center lg:mt-[40px]">
        <img src={detailImg} alt="Details" className="w-full object-contain" />
      </div>

      {/* Another Section Heading */}
      <h3 className="text-[25px] tracking-[0] leading-[29px] font-bold mb-[30px] mt-[40px] text-[var(--text-primary)]">
        Hire a Wearable App Developer in the USA: What are Wearable Apps?
      </h3>

      <span className="text-[var(--text-primary)] text-[16px] font-bold leading-[19px] relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[var(--primary-color)] before:rounded-none">
        It is a long established fact that a reader will be distracted by the readable.
      </span>

      <p className="text-[16px] mt-[20px] leading-[27px] text-[var(--text-secondary)]">
        <strong>It is a long established fact that a reader</strong> will be distracted by the readable content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content here', making it look like
        readable English.
      </p>

      <p className='mt-[30px] text-[16px] leading-[27px] text-[var(--text-secondary)]'>
        Many desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
        their infancy. Various versions have evolved over the years, sometimes by <span className='text-[var(--accent-color)] font-semibold'>accident</span>, sometimes on
        purpose.
      </p>

      <p className='mt-[30px] text-[16px] leading-[27px] text-[var(--text-secondary)]'>
        It is a long established fact that a reader will be distracted by the readable content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content here', making it look like
        readable English.
      </p>

      <p className='mt-[30px] text-[16px] leading-[27px] text-[var(--text-secondary)]'>
        Many desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
        purpose.
      </p>

      {/* List Section */}
      <ul className="mt-8 space-y-6">
        {blogData.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
              <div className="w-[30px] h-[30px] flex items-center justify-center bg-[var(--badge-bg)] rounded">
                <img src={item.image} alt="icon" className="w-[16px] h-[16px] object-contain" />
              </div>
              <h4 className="text-[16px] font-semibold text-[var(--text-primary)] tracking-[0] leading-[27px]">
                {item.title}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;

