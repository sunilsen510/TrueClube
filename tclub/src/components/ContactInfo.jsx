import React from 'react';
import locationIcon from '../assets/maps.svg';
import phoneIcon from '../assets/phones.svg';
import emailIcon from '../assets/mails.svg';

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
    <div className="p-[30px] bg-[#F9FEF5] rounded-lg  md:!mb-[40px] mt-[40px] md:mt-0">
      <div className="mb-6">
        <h3 className=" text-[22px] leading-[30px]
            sm:text-[26px] sm:leading-[34px] 
            md:text-[30px] md:leading-[38px] 
            lg:text-[35px] lg:leading-[41px] 
            font-semibold 
            mb-[15px] 
          text-[#0A2540]">Contact Info</h3>
        <p className="text-[#40658B] font-normal text-[16px] line-height w-full max-w-[566px]">
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
                  className="w-[32px] h-[32px] object-contain"
                />
              </div>
              <div className="flex-1 w-full">
                <p className="text-[16px] leading-[22px] 
                    sm:text-[18px] sm:leading-[24px]
                    md:text-[20px] md:leading-[26px]
                    lg:text-[25px] lg:leading-[27px]
                    font-bold text-[#0A2540] tracking-[0] mb-2">
                  {item.title}
                </p>
                <span className="text-[#40658B] font-normal text-[18px] leading-[27px] tracking-[0] break-words block">
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
