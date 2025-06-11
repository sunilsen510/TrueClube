import React from 'react'
import Banner from '../components/Banner'
import UpcomingSeminar from '../components/UpcomingSeminar'
import blogData from './../Api/blogdata.json'



const SeminarPage = () => {
  return (
    <>
       <Banner />
       <section>
          <div className='container mx-auto max-w-7xl'>
             <UpcomingSeminar />
          </div>
       </section>
    </>
  )
}

export default SeminarPage