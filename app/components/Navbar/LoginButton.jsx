import React from 'react';
import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link href='/login' passHref>
      <a className='font-semibold text-white lg:px-4 lg:py-2 lg:hover:bg-ground-betis lg:hover:text-white hover:text-black bg-green-betis'>
        LOG IN
      </a>
    </Link>
  );
};

export default LoginButton;
