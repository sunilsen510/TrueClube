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
      <section className={`relative min-h-[300px] pt-[120px] px-4 bg-cover bg-center text-white 
        ${isBlogPage ? 'before-bg' : 'bg-gray-100'}`} style={{ backgroundImage: `url(${bgImage})` }} >
        <div className="container mx-auto max-w-9xl px-4">
          <div className='flex flex-col md:flex-row items-center'>
            {/* Text Content */}
            <div className={`w-full ${image ? 'lg:w-1/2 text-left' : 'max-w-7xl mx-auto text-center'}`}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
                {title}
              </h2>
              
              {metaInfo && (
                <div className="flex items-center gap-4 justify-center mb-4">
                  {metaInfo}
                </div>
              )}

              {subtitle && (
                <p className="text-lg md:text-xl mb-8 text-black w-[570px]">{subtitle}</p>
              )}

              {primaryButtonLabel && primaryButtonLink && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            <div className="w-full lg:w-1/2 flex justify-end">
              <img
                src={image}
                alt="Hero"
                className="max-w-full h-auto object-contain md:max-w-md lg:max-w-lg"
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


