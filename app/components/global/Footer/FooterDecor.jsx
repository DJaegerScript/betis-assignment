import React from 'react';
import Image from 'next/image';

const FooterDecor = () => {
  return (
    <div className='grid w-full grid-cols-2'>
      <div className='w-1/2 lg:w-1/6'>
        <Image
          alt='footer decoration'
          src='/assets/leaves.svg'
          width={'100%'}
          height={'100%'}
          layout='responsive'
        />
      </div>
      <div className='w-1/2 lg:w-1/6 justify-self-end'>
        <Image
          alt='footer decoration'
          src='/assets/leaves-flipped.svg'
          width={'100%'}
          height={'100%'}
          layout='responsive'
        />
      </div>
    </div>
  );
};

export default FooterDecor;
