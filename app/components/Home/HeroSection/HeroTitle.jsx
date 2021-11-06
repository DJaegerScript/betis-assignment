import React from 'react';

const HeroTitle = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex flex-col items-center gap-2 lg:flex-row'>
        <span className='text-xl font-bold lg:text-5xl text-red-betis'>
          Find Your Dream,
        </span>
        <span className='text-xl font-bold lg:text-5xl text-red-betis'>
          Explore The Future.
        </span>
      </div>
      <h1 className='font-bold text-5xl-betis text-brown-betis'>BETIS 2022</h1>
    </div>
  );
};

export default HeroTitle;
