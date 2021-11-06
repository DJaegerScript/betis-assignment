import React from 'react';
import Link from 'next/link';

const AnchorButton = ({ url, className, label }) => {
  return (
    <Link href={url} passHref>
      <a className={`rounded font-semibold lg:px-4 lg:py-2 ${className}`}>
        {label}
      </a>
    </Link>
  );
};

export default AnchorButton;
