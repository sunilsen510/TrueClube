import React from 'react'
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import ContactInfo from '../components/ContactInfo';


const ContactPage = () => {
  return (
    <>
        <Banner title="CONTACT US" />
        <section className='lg:pb-[100px] pt-[80px]'>
        <div className="lg:container max-w-7xl px-4 sm:px-2 md:px-4  mx-auto flex flex-col lg:flex-row items-start lg:gap-[10px] sm:gap-10 relative md:flex-col">
          {/* Left: Login */}
          <div className="w-full lg:w-1/2 md:w-full lg:px-0 sm:px-0 md:px-0">
            <Contact />
          </div>

          {/* Right: News & Blogs */}
         <div className="w-full lg:w-1/2 md:w-full px-0 sm:px-4 md:px-4">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage


 