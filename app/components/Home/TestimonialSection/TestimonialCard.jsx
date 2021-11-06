import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ imageUrl, name, role, review, className }) => {
  return (
    <div
      className={`flex flex-col gap-4 p-8 rounded shadow-2xl w-80 h-80  lg:w-96 lg:h-96 filter ${className}`}
    >
      <div className='grid items-center grid-cols-3 gap-5'>
        <div className='col-span-1 '>
          <Image alt='profile picture' src={imageUrl} width={82} height={82} />
        </div>
        <div className='flex flex-col col-span-2 bg-red'>
          <span className='font-semibold lg:text-xl'>{name}</span>
          <span className='lg:text-lg'>{role}</span>
        </div>
      </div>
      <div className='w-full text-justify'>
        <span className='text-sm leading-5 tracking-wider lg:text-lg'>
          {review}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
