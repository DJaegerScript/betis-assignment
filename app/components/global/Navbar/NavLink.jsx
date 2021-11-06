import React from 'react';
import Link from 'next/link';

const NavLink = ({ url, label, className = null }) => {
  return (
    <Link href={url} passHref>
      <a className={`font-semibold  hover:text-black ${className}`}>{label}</a>
    </Link>
  );
};

export default NavLink;
