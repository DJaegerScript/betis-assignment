import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Collapsible from './Collapsible';
import menus from './utils/menus';
import NavLink from './NavLink';
import { v4 as uuid } from 'uuid';
import AnchorButton from '../Button/AnchorButton';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const icon = isExpanded ? 'times' : 'bars';

  const menuList = Object.keys(menus);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      !window.scrollY ? setIsScroll(false) : setIsScroll(true)
    );
  }, []);

  return (
    <nav
      className={`fixed grid items-center w-full grid-cols-2 px-30-betis py-3 z-30 ${
        isExpanded || isScroll ? 'bg-green-betis' : 'bg-transparent'
      }`}
    >
      <div className='col-span-1'>
        <Link href={'/'} passHref>
          <a>
            <Image
              alt='betis logo'
              src={
                isExpanded || isScroll
                  ? '/assets/betis_white.svg'
                  : '/assets/betis.svg'
              }
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
                className={` flex justify-end w-1/4 ${
                  !isScroll ? 'text-green-betis' : 'text-white'
                }`}
              />
            );
          })}
          <div className='flex justify-end w-1/4 text-green-betis'>
            <AnchorButton
              url={'/login'}
              label={'LOG IN'}
              className={
                'text-white lg:hover:bg-ground-betis lg:hover:text-white hover:text-black bg-green-betis'
              }
            />
          </div>
        </div>
        <button
          className={`lg:hidden ${
            isExpanded || isScroll ? 'text-white' : 'text-green-betis'
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon icon={['fas', icon]} size={'lg'} />
        </button>
      </div>
      <Collapsible expanded={isExpanded} />
    </nav>
  );
};

export default Navbar;
