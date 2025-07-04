import React from 'react';
import SocialIcons from '../components/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFC]">
      <div className="max-w-screen-9xl mx-auto  sm:px-0 lg:px-0 flex flex-col sm:flex-row items-center justify-center gap-4 py-[20px] border-b border-white">
        
        {/* Copyright */}
        <div className="px-4">
          <p className="text-center text-[#0A2540] font-normal text-[16px]">
           Copyright &copy; {new Date().getFullYear()} Trueyou.Club All Rights Reserved
          </p>
        </div>

        {/* Social Icons */}
        <SocialIcons socialIconClass="flex gap-4 justify-center sm:justify-end" />
      </div>
    </footer>
  );
};

export default Footer;
