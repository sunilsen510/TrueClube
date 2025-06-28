import React from 'react';
import Banner from '../components/Banner';
import UpcomingSeminar from '../components/UpcomingSeminar';
import blogData from '../Api/blogdata.json'; // Make sure this path is correct

const SeminarPageTwo = () => {
  return (
    <>
      <Banner roundedBr="rounded-none"/>
      <section className="">
        <div className="container mx-auto flex flex-col xl:flex-row lg:flex-col md:flex-col items-start relative h-full">
          <div className="w-full lg:w-full  px-4 h-full">
            <UpcomingSeminar showHeading={false} blogData={blogData.slice(0, 5)} />
          </div>
          <div className="w-full lg:w-full px-4 h-full">
            <UpcomingSeminar showHeading={false} blogData={blogData.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SeminarPageTwo;


