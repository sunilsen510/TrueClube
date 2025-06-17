import React from 'react';
import Facebook from '../assets/facebook1.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';

const SocialIcons = ({ socialIconClass = 'flex items-center gap-4', linkdetails = [] }) => {
  const defaultSocialLinks = [
    {
      link: 'https://Youtube.com',
      linkImg: Youtube,
      alt: 'Youtube',
      svg: (
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-[#0A2540] group-hover:text-blue-500">
          <path d="M13.728 2.56533C13.6579 2.25835 13.5149 1.97708 13.3136 1.74994C13.1124 1.52279 12.8599 1.35782 12.5817 1.27167C11.5654 1 7.50018 1 7.50018 1C7.50018 1 3.43494 1 2.41863 1.29754C2.14047 1.38369 1.88801 1.54867 1.68674 1.77581C1.48546 2.00296 1.34251 2.28422 1.27232 2.5912C1.08633 3.72028 0.995342 4.86566 1.00052 6.01294C0.993891 7.16885 1.08488 8.32296 1.27232 9.46054C1.34971 9.75799 1.49586 10.0286 1.69666 10.2461C1.89746 10.4637 2.14613 10.6208 2.41863 10.7025C3.43494 11 7.50018 11 7.50018 11C7.50018 11 11.5654 11 12.5817 10.7025C12.8599 10.6163 13.1124 10.4513 13.3136 10.2242C13.5149 9.99704 13.6579 9.71578 13.728 9.4088C13.9126 8.28822 14.0036 7.15157 13.9998 6.01294C14.0065 4.85702 13.9155 3.70291 13.728 2.56533Z"
            strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.17059 8.12798L9.56814 6.01284L6.17059 3.89771V8.12798Z"
            strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      link: 'https://instagram.com',
      linkImg: Instagram,
      alt: 'Instagram',
      svg: (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current text-[#0A2540] group-hover:text-blue-500">
          <path d="M10.75 1H4.25C2.45507 1 1 2.45507 1 4.25V10.75C1 12.5449 2.45507 14 4.25 14H10.75C12.5449 14 14 12.5449 14 10.75V4.25C14 2.45507 12.5449 1 10.75 1Z"
            strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.0995 7.09045C10.1797 7.63141 10.0873 8.18389 9.83543 8.66931C9.58356 9.15473 9.18504 9.54837 8.69655 9.79424C8.20806 10.0401 7.65448 10.1257 7.11455 10.0388C6.57462 9.95192 6.07584 9.697 5.68914 9.3103C5.30244 8.92361 5.04752 8.42482 4.96064 7.88489C4.87375 7.34496 4.95933 6.79138 5.2052 6.30289C5.45107 5.81441 5.84471 5.41588 6.33013 5.16401C6.81555 4.91213 7.36803 4.81973 7.90899 4.89995C8.46079 4.98178 8.97164 5.2389 9.36609 5.63335C9.76054 6.0278 10.0177 6.53865 10.0995 7.09045Z"
            strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.0758 3.92505H11.0858"
            strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      link: 'https://twitter.com',
      alt: 'Twitter',
      svg: (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-[#0A2540] group-hover:text-blue-500 transition-colors duration-300"
        >
          <path d="M7.30792 5.24789L11.7752 0.166748H10.7166L6.83773 4.5787L3.73965 0.166748H0.166382L4.85124 6.83834L0.166382 12.1667H1.22507L5.32134 7.50763L8.59311 12.1667H12.1664L7.30782 5.24789H7.30812H7.30792ZM5.85793 6.89705L5.38324 6.23275L1.60647 0.946513H3.23246L6.28043 5.21266L6.75513 5.87697L10.7171 11.4223H9.09111L5.85803 6.89725V6.89695L5.85793 6.89705Z" />
        </svg>
      )
    },

{
  link: 'https://facebook.com',
  alt: 'Facebook',
  svg: (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current text-[#0A2540] group-hover:text-blue-500 transition-colors duration-300"
    >
      <path
        d="M8.3125 1H6.31818C5.43664 1 4.5912 1.34241 3.96786 1.9519C3.34451 2.5614 2.99432 3.38805 2.99432 4.25V6.2H1V8.8H2.99432V14H5.65341V8.8H7.64773L8.3125 6.2H5.65341V4.25C5.65341 4.07761 5.72345 3.91228 5.84812 3.79038C5.97279 3.66848 6.14187 3.6 6.31818 3.6H8.3125V1Z"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

    
  ];

  return (
    <ul className={socialIconClass}>
      {defaultSocialLinks.map((val, i) => (
        <li
          key={i}
          className="group flex items-center w-[30px] h-[30px] rounded-full bg-transparent border justify-center text-[#0A2540] hover:text-blue-500 cursor-pointer transition-all duration-300"
        >
          <a
            href={val.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={val.alt}
            className="w-5 h-5 flex items-center justify-center text-[#0A2540] hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            {val.svg}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
