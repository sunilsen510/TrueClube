import React from 'react'
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import ContactInfo from '../components/ContactInfo';


const ContactPage = () => {
  return (
    <>
        <Banner title="CONTACT US" />
       <section className='pb-[100px]'>
        <div className="container mx-auto flex flex-col md:flex-row items-start relative h-full gap-[24px] pt-[100px]">
          {/* Left: Login */}
          <div className="w-full md:w-1/2 px-0 h-[100%]">
            <Contact />
          </div>

          {/* Right: News & Blogs */}
          <div className="w-full md:w-1/2 px-0 h-[100%]">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage