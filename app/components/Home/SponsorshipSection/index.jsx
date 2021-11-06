import React from 'react';
import Image from 'next/image';

const SponsorshipSection = () => {
  return (
    <div className='flex flex-col items-center h-full gap-8 py-12 px-11'>
      <span className='text-xl font-bold text-center text-green-betis lg:text-5xl'>
        Special Thanks <br className='lg:hidden' />
        to Our Sponsor!
      </span>
      <iframe
        className='w-full h-56 lg:w-3/4 lg:h-full'
        src='https://www.youtube.com/embed/srMjEKgPg5Q'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SponsorshipSection;
