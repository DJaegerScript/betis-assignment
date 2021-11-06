import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Collapsible from './Collapsible';
import menus from './utils/menus';
import NavLink from './NavLink';
import { v4 as uuid } from 'uuid';
import LoginButton from './LoginButton';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const icon = isExpanded ? 'times' : 'bars';

  const menuList = Object.keys(menus);

  return (
    <nav
      className={`fixed grid items-center w-full grid-cols-2 px-30-betis py-3 ${
        isExpanded ? 'bg-green-betis' : 'bg-transparent'
      }`}
    >
      <div className='col-span-1'>
        <Link href={'/'} passHref>
          <a>
            <Image
              alt='betis logo'
              src={isExpanded ? '/assets/betis_white.svg' : '/assets/betis.svg'}
              width={38.25}
              height={38.72}
            />
          </a>
        </Link>
      </div>
      <div className='flex justify-end w-full lg:justify-start'>
        <div className='items-center hidden w-full lg:flex'>
          {menuList.map((menu) => {
            return (
              <NavLink
                key={uuid()}
                url={menus[menu]}
                label={menu.toUpperCase()}
                className={`text-green-betis flex justify-center w-1/4`}
              />
            );
          })}
          <div className='flex justify-center w-1/4 text-green-betis'>
            <LoginButton />
          </div>
        </div>
        <button
          className={`lg:hidden ${
            isExpanded ? 'text-white' : 'text-green-betis'
          }`}
          onClick={() => setExpanded(!isExpanded)}
        >
          <FontAwesomeIcon icon={['fas', icon]} size={'lg'} />
        </button>
      </div>
      <Collapsible expanded={isExpanded} />
    </nav>
  );
};

export default Navbar;
