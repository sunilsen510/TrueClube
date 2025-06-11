import React from 'react';
import Banner from '../components/Banner';
import UpcomingSeminar from '../components/UpcomingSeminar';
import blogData from '../Api/blogdata.json'; // Make sure this path is correct

const SeminarPageTwo = () => {
  return (
    <>
      <Banner />
      <section className="">
        <div className="container mx-auto flex flex-col md:flex-row items-start relative h-full">
          <div className="w-full md:w-1/2 px-4 h-full">
            <UpcomingSeminar showHeading={false} blogData={blogData.slice(0, 5)} />
          </div>
          <div className="w-full md:w-1/2 px-4 h-full">
            <UpcomingSeminar showHeading={false} blogData={blogData.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SeminarPageTwo;
