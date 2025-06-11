import React from 'react'
import Banner from '../components/Banner';
import Contact from '../components/Contact';


const ContactPage = () => {
  return (
    <>
        <Banner title="Contact Us" />
       <section>
        <div className="container mx-auto flex flex-col md:flex-row items-start relative h-full gap-[30px] pt-[100px]">
          {/* Left: Login */}
          <div className="w-full md:w-1/2 px-4 h-[100%]">
            <Contact />
          </div>

          {/* Right: News & Blogs */}
          <div className="w-full md:w-1/2 px-4 h-[100%]">
            
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage