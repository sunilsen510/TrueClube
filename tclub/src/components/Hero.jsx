import React from 'react';
import heroImage from '../assets/heroImg.svg';
import CustomButton from '../components/CustomButton'; // Capitalize component name to match file
import bgImage from '../assets/heroBg.svg';

const HeroBanner = ({
  title = "TRUEYOU REALISE YOUR POTENTIAL",
  subtitle = "Empowering individuals to fulfill their full potential and live their dreams",
  primaryButtonLabel = "Contact Us Now!",
  primaryButtonLink = "/contact",
  secondaryButtonLabel = "See All The Seminar",
  secondaryButtonLink = "/seminars",
  image = heroImage
}) => {
  return (
    <section className="pt-[55px] bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 pt-20">
        
        {/* Text Section */}
        <div className="w-full h-[100%] lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-[30px] md:text-4xl xl:text-6xl font-bold text-[#0A2540] mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 lg:w-[460px] sm:max-w-full md:max-w-full">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <CustomButton
              label={secondaryButtonLabel}
              to={secondaryButtonLink}
              variant="outline"
              className="shadow-[8px_6px_15px_0px_#0061DE40]"
            />
            <CustomButton
                label={primaryButtonLabel}
                to={primaryButtonLink}
                variant="primary"
                className="bg-transparent border-1 border-blue-600 !text-[#006AF2] hover:!text-blue-600"
                />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-[450px] h-full flex items-center justify-center mx-auto">
          <div className="w-full max-w-[416px] h-full rounded-t-full border-t-[21px] border-l-[17px] border-r-[17px] border-[#E4F3DD] overflow-hidden">
            <img
              src={image}
              alt="Hero"
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
