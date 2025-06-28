import React from 'react';
import heroImage from '../assets/heroImg.svg';
import CustomButton from '../components/CustomButton'; 
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
    <>
      <section
        className="pt-[93px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="xl:container lg:container-fluid  mx-auto px-4 flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-6 md:gap-6">

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left pt-[55px] lg:pt-0">
          <h1 className="text-[25px] sm:text-[32px] md:text-[40px] lg:text-[55px] leading-[36px] sm:leading-[42px] md:leading-[50px] lg:leading-[64px] font-semibold text-[#0A2540] mb-[20px] lg:mb-[50px] tracking-[0]">
            {title}
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#0A2540] mb-[20px] lg:mb-[50px] lg:max-w-[470px] w-full font-normal">
            {subtitle}
          </p>

            <div className="flex flex-col sm:flex-row gap-[14px] md:!gap-[30px] sm:!gap-[30px] h-[100%] lg:max-h-[60px] md:h-[60px] justify-center lg:justify-start">  
              <CustomButton
                label={secondaryButtonLabel}
                to="/upcomingseminar"
                variant="outline"
                className="shadow-[8px_6px_15px_0px_#0061DE40] 
                  !px-[22px] sm:!px-[24px] md:!px-[26px] lg:!px-[30px] 
                  !py-[16px] sm:!py-[18px] md:!py-[20px] lg:!py-[24px]
                  !text-[14px] sm:!text-[15px] md:!text-[16px] leading-[13px]"
              />
              <CustomButton
                  label={primaryButtonLabel}
                  to={primaryButtonLink}
                  variant="primary"
                  className="bg-transparent !px-[30px] hover:shadow-[8px_6px_15px_0px_#0061DE40] ml-[5px]
                  !py-[16px] border-1 !text-[16px]  leading-[13px] font-semibold border-blue-600 !text-[#006AF2] hover:!text-blue-600"
                />
            </div>
              </div>
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end sm:justify-center md:justify-center pt-[55px]">
            <div className="w-full max-w-[450px] max-h-[527px] h-full rounded-t-full border-t-[21px] border-l-[17px] border-r-[17px] border-[#E4F3DD] overflow-hidden">
              <img
                src={image}
                alt="Hero"
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>
          </div>
          
        </div>
    </section>
    </>
  );
};

export default HeroBanner;
