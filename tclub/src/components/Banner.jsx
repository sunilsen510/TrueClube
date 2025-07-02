// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import heroImage from '../assets/heroGirls.svg';
// import CustomButton from '../components/CustomButton';
// import bgImage from '../assets/heroBg.svg';


// const Banner = ({
//   title = "BOOK YOUR SEMINAR",
//   subtitle = "Lorem Empowering individuals to fulfill their full potential and live their dreams.",
//   primaryButtonLabel = "Contact Us Now!",
//   primaryButtonLink = "/contact",
//   image = heroImage,
//   bannerImage = "",
//   width,
//   height,
//   metaInfo = null 
// }) => {
//   const location = useLocation();
//   const isBlogPage = location.pathname.includes('/details');
  
//   return (
//     <>
//       <section className={`relative lg:min-h-[300px] bg-cover bg-center text-white pt-[93px] 
//         ${isBlogPage ? 'before-bg' : 'bg-gray-100'}`} style={{ backgroundImage: `url(${bgImage})` }} >
//         <div className="xl:container lg:container-fluid  mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-6 md:gap-6">
//           <div className="flex flex-col gap-5 md:flex-col lg:flex-row xl:flex-row items-end w-full mx-auto md:px-0 sm:px-6 lg:px-4 sm:gap-[30px]">
//             {/* Text Content */}
//             <div
//                 className={`w-full ${
//                   image
//                     ? 'lg:w-full md:w-full text-left justify-center lg:text-left  sm:text-center px-4 sm:px-0 max-w-screen-lg mx-auto lg:!mb-0  py-[30px] lg:py-[90px] xl:py-[90px] md:py-[50px] sm:!py-[90px] md:text-center'
//                     : 'max-w-7xl mx-auto text-center mb-2 px-4 sm:px-6 pt-[50px] lg:pt-0 md:pt-[50px]'
//                 }`}
//               >
//               <h2 className="
//                 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[45px]
//                 tracking-[0]
//                 font-semibold
//                 text-[#0A2540]
//                 lg:leading-[53px] md:leading-[30px]
//                 mb-[20px] lg:mb-[30px]
//               ">
//                 {title}
//               </h2>

              
//               {metaInfo && (
//                 <div className="flex items-center gap-4 justify-center mb-4">
//                   {metaInfo}
//                 </div>
//               )}

//               {subtitle && (
//                 <p className="lg:text-[20px] sm:text-[16px] md:text-[16px] tracking-[0] leading-[27px] line-heighted  font-normal sm:text-base md:text-lg text-[#0A2540] mb-[20px] lg:mb-[40px] lg:max-w-[470px] w-full">{subtitle}</p>
//               )}

//               {primaryButtonLabel && primaryButtonLink && (
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center lg:justify-start">
//                   <CustomButton
//                     label={primaryButtonLabel}
//                     to={primaryButtonLink}
//                     variant="outline"
//                     className="
//                       shadow-[8px_6px_15px_0px_#0061DE40]
//                       !px-[22px] sm:!px-[24px] md:!px-[26px] lg:!px-[30px]
//                       !py-[16px] sm:!py-[18px] md:!py-[20px] lg:!py-[24px]
//                       !text-[14px] sm:!text-[15px] md:!text-[16px]
//                       leading-[13px]"
//                   />
//                 </div>
//               )}
//             </div>

//               {/* Image */}
//               {image && (
//                 <div className="w-full flex justify-center sm:px-4 md:justify-center lg:justify-end xl:justify-end  sm:justify-center ">
//                   <img
//                     src={image}
//                     alt="Hero"
//                     style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto" }}
//                     className={`object-contain max-w-[381px] max-h-[387px] ${bannerImage}`}
//                   />
//                 </div>
//               )}
//               </div>
//         </div>
//       </section>
//     </> 
//   );
// };

// export default Banner;




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
  bannerImage = "",
  paddingTop = 'pt-[93px]', // default
  roundedBr = 'rounded-[20px]',
  titleSize="lg:text-[45px]",
  paddingY = "!py-[90px]", // default vertical padding
  minHeight = "lg:min-h-[300px]", //  default height
  objectFit = "object-contain",           // default fit
  objectPosition = "object-center",       // default position
  lineHeight = "leading-[53px]",
  gapClass = "gap-[20px]",
  padleft = "pl-[24px]",
  width,
  height,
  metaInfo = null
}) => {
  const location = useLocation();
  const isBlogPage = location.pathname.includes('/details');

  return (
    <>
      <section
        className={`relative lg:${minHeight} bg-cover bg-center ${roundedBr} ${paddingTop} pt-0 ${isBlogPage ? 'before-bg' : 'bg-gray-100'}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="xl:container lg:container-fluid mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-6 md:gap-6">
          <div className={`flex flex-col ${gapClass} ${padleft} md:flex-col lg:flex-row xl:flex-row items-end w-full mx-auto md:px-0 sm:px-6 lg:px-4 sm:gap-[30px]`}>
            
            {/* Text Section */}
            <div
              className={`w-full ${
                image
                  ? `lg:w-full md:w-full sm:w-auto text-left justify-center lg:text-left sm:text-center px-4 sm:px-0 max-w-screen-lg mx-auto lg:!mb-0 py-[30px] lg:py-[90px] xl:py-[90px] md:py-[50px] sm:!py-[90px] ${paddingY}  md:text-center`
                  : 'max-w-7xl mx-auto text-center mb-2 px-4 sm:px-6 pt-[50px] lg:pt-0 md:pt-[50px]'
              }`}
            >

              <h2 className={`text-[24px] sm:text-[30px] md:text-[36px] tracking-[0] font-semibold text-[var(--text-primary)] lg:${lineHeight} md:leading-[30px] mb-[20px] lg:mb-[30px] ${titleSize}`}>
                {title}
              </h2>

              {metaInfo && (
                <div className="flex items-center gap-4 justify-center mb-4">
                  {metaInfo}
                </div>
              )}

              {subtitle && (
                <p className="lg:text-[20px] sm:text-[16px] md:text-[16px] tracking-[0] leading-[27px] font-normal sm:text-base md:text-lg text-[var(--text-primary)] mb-[20px] lg:mb-[40px] lg:max-w-[470px] w-full">
                  {subtitle}
                </p>
              )}

              {primaryButtonLabel && primaryButtonLink && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center lg:justify-start">
                  <CustomButton
                    label={primaryButtonLabel}
                    to={primaryButtonLink}
                    variant="outline"
                    className=" sm:w-[300px]
                      shadow-[var(--btn-shadow)]
                      !px-[22px] sm:!px-[24px] md:!px-[26px] lg:!px-[30px]
                      !py-[16px] sm:!py-[18px] md:!py-[20px] lg:!py-[24px]
                      !text-[14px] sm:!text-[15px] md:!text-[16px]
                      leading-[13px] hover:!text-[#0A2540]"
                  />
                </div>
              )}
            </div>

            {/* Image Section */}
            {image && (
              <div className="w-full flex justify-center sm:px-4 md:justify-center lg:justify-end xl:justify-end sm:justify-center">
                <img
                  src={image}
                  alt="Hero"
                  style={{
                    width: width ? `${width}px` : '100%',
                    height: height ? `${height}px` : 'auto'
                  }}
                  className={`max-w-[381px] max-h-[387px] ${bannerImage} ${objectFit} ${objectPosition}`}
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

