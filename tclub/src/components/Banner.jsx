import React from 'react';
import { useLocation } from 'react-router-dom';
import heroImage from '../assets/heroGirls.svg';
import CustomButton from '../components/CustomButton';
import bgImage from '../assets/heroBg.svg';


const Banner = ({
  title = "BOOK YOUR SEMINAR",
  subtitle = "Lorem Empowering individuals to fulfill their full potential and live their dreams.",
  primaryButtonLabel = "Contact Us Now!",
  primaryButtonLink = "/contact",
  image = heroImage,
  metaInfo = null 
}) => {
  const location = useLocation();
  const isBlogPage = location.pathname.includes('/details');
  
  return (
    <>
      <section className={`relative lg:min-h-[300px]  pt-[120px]  lg:pt-[120px] px-4 bg-cover bg-center text-white 
        ${isBlogPage ? 'before-bg' : 'bg-gray-100'}`} style={{ backgroundImage: `url(${bgImage})` }} >
        <div className="container px-4 sm:px-6 lg:px-4 sm:mx-auto  md:mx-0 lg:mx-auto mx-auto max-w-9xl">
          <div className="flex flex-col gap-5 md:flex-col lg:flex-row items-center w-full mx-auto md:px-0 sm:px-6 lg:px-4 sm:gap-[30px]">
            {/* Text Content */}
            <div
                className={`w-full ${
                  image
                    ? 'lg:w-full md:w-full text-left px-4 sm:px-0 max-w-screen-lg mx-auto sm:!mb-[30px]'
                    : 'max-w-7xl mx-auto text-center mb-2 px-4 sm:px-6'
                }`}
              >
              <h2 className="text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold leading-tight mb-4 text-black">
                {title}
              </h2>

              
              {metaInfo && (
                <div className="flex items-center gap-4 justify-center mb-4">
                  {metaInfo}
                </div>
              )}

              {subtitle && (
                <p className="text-[18px] sm:text-[20px] md:text-xl text-black mb-8  w-full max-w-[570px]">{subtitle}</p>
              )}

              {primaryButtonLabel && primaryButtonLink && (
                <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start">
                  <CustomButton
                    label={primaryButtonLabel}
                    to={primaryButtonLink}
                    variant="outline"
                    className="w-full sm:w-auto"
                  />
                </div>
              )}
            </div>

          {/* Image */}
          {image && (
            <div className="w-full lg:w-full md:w-full flex justify-center md:justify-start lg:justify-end xl:justify-end md:mt-5">

              <img
                src={image}
                alt="Hero"
                className="w-full h-auto object-contain max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
            </div>
          )}
          </div>
          
        </div>
      </section>
    </> 
  );
};

export default Banner;


