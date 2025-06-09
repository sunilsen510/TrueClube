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
    <section className="py-16 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10 pt-[120px]">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0A2540] mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <CustomButton
              label={secondaryButtonLabel}
              to={secondaryButtonLink}
              variant="outline"
            />
            <CustomButton
                label={primaryButtonLabel}
                to={primaryButtonLink}
                variant="primary"
                className="bg-transparent border-1 border-blue-600 text-[#006AF2] hover:bg-[#e6f0ff]"
                />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={image} alt="Hero" className="w-full max-w-md mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
