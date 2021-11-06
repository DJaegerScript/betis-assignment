import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaContact = () => {
  return (
    <div className='flex flex-col items-center gap-6 lg:items-start lg:w-1/3 '>
      <span className='font-semibold lg:font-bold'>
        FOLLOW US ON SOCIAL MEDIA
      </span>
      <div className='flex gap-6 text-gray-400 lg:text-black'>
        <a href='https://www.instagram.com/'>
          <FontAwesomeIcon icon={['fab', 'instagram']} size={'3x'} />
        </a>
        <a href='https://www.youtube.com/'>
          <FontAwesomeIcon icon={['fab', 'youtube']} size={'3x'} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaContact;
