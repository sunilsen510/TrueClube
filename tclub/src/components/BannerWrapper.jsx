import React from 'react';
import Banner from './Banner';

const BannerWrapper = ({ title, image, width, height }) => {
  return (
    <div
      className="overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Banner title={title} image={image} />
    </div>
  );
};

export default BannerWrapper;