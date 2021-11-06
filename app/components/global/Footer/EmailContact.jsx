import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EmailContact = () => {
  return (
    <div className='flex items-start gap-6 lg:w-1/3'>
      <div className='hidden lg:flex'>
        <FontAwesomeIcon icon={['far', 'envelope']} size={'2x'} />
      </div>
      <div className='flex flex-col items-center gap-6 lg:items-start'>
        <span className='font-semibold lg:font-bold'>EMAIL US AT</span>
        <span className='text-fading-betis lg:text-lg'>
          betisfasilkom@gmail.com
        </span>
      </div>
    </div>
  );
};

export default EmailContact;
