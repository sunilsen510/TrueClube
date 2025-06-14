import React from 'react';
import locationIcon from '../assets/map.svg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/mail2.svg';

const contactDetails = [
  {
    id: 1,
    icon: phoneIcon,
    title: 'Phone',
    value: '+91-1234567890',
  },
   {
    id: 2,
    icon: emailIcon,
    title: 'Email',
    value: 'Company@mail.com',
  },
  {
    id: 3,
    icon: locationIcon,
    title: 'Location',
    value: '132, My Street,Kingston, New York 12401 United States',
  },
  
];

const ContactInfo = () => {
  return (
    <div className="p-[30px] bg-[#F9FEF5] rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Contact Info</h3>
        <p className="text-gray-600 w-full max-w-[566px]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>

      <ul className="space-y-6 w-full">
  {contactDetails.map((item) => (
    <li
      key={item.id}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full"
    >
      <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] flex items-center justify-center bg-[#CFE8C8] rounded-xl shrink-0">
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      </div>
      <div className="flex-1 w-full">
        <p className="text-sm sm:text-base md:text-md font-semibold text-gray-700 mb-2">
          {item.title}
        </p>
        <span className="text-gray-600 break-words text-sm sm:text-base md:text-sm w-full block">
          {item.value}
        </span>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default ContactInfo;
