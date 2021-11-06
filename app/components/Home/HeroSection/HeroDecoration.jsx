import React from 'react';
import Image from 'next/image';

const HeroDecoration = () => {
  return (
    <div className='relative flex justify-center w-full '>
      <div className='relative lg:w-1/2 lg:px-14'>
        <div className='hidden lg:block'>
          <Image
            alt='hero image'
            src='/assets/child_in_log_lg.svg'
            width={300}
            height={450}
            className='z-10'
          />
        </div>
        <div className='lg:hidden'>
          <Image
            alt='hero image'
            src='/assets/child_in_log.svg'
            width={300}
            height={450}
            className='z-10'
          />
        </div>
      </div>
      <div className='relative lg:w-1/2'>
        <div className='absolute right-28 bottom-10'>
          <Image
            alt='hero image'
            src='/assets/road_sign.svg'
            width={225}
            height={375}
            className='z-10'
          />
        </div>
        <div className='absolute right-2 bottom-10'>
          <Image
            alt='hero image'
            src='/assets/rocks_and_leaves.svg'
            width={150}
            height={150}
            className='z-10'
          />
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-20 bg-ground-betis'></div>
    </div>
  );
};

export default HeroDecoration;
