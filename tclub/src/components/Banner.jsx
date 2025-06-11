import React from 'react';
import heroImage from '../assets/heroGirls.svg';
import CustomButton from '../components/CustomButton';
import bgImage from '../assets/heroBg.svg';

const Banner = ({
  title = "Book your seminar",
  subtitle = "Lorem Empowering individuals to fulfill their full potential and live their dreams.",
  primaryButtonLabel = "Contact Us Now!",
  primaryButtonLink = "/contact",
  image = heroImage 
}) => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[500px] py-12 px-4 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-center md:text-left pt-[36px]">
        {/* Text Content */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black uppercase">{title}</h2>
          <p className="text-lg md:text-xl mb-8 text-black">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <CustomButton
              label={primaryButtonLabel}
              to={primaryButtonLink}
              variant="outline" // Assuming 'solid' is a valid variant
              className="w-full sm:w-auto"
            />
            
          </div>
        </div>

        {/* Image */}
        {image && ( // Conditionally render image if it exists
          <div className="flex-1 flex justify-center md:justify-end">
            <img src={image} alt="Hero" className="max-w-full h-auto object-contain md:max-w-md lg:max-w-lg" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;


