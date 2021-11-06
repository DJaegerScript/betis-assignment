import React from 'react';
import HeroTitle from './HeroTitle';
import AnchorButton from '../../Button/AnchorButton';
import HeroDecoration from './HeroDecoration';

const HeroSection = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full h-full gap-12 lg:flex-row pt-28 lg:gap-0 lg:p-0'>
      <div className='z-20 flex flex-col items-center gap-12'>
        <HeroTitle />
        <AnchorButton
          url={'/login'}
          className={
            'text-white bg-brown-betis text-lg hover:bg-green-betis px-8 py-2'
          }
          label={'LOG IN'}
        />
      </div>
      <div className='bottom-0 w-full lg:absolute'>
        <HeroDecoration />
      </div>
    </div>
  );
};

export default HeroSection;
