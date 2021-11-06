import React from 'react';
import { v4 as uuid } from 'uuid';
import NavLink from './NavLink';
import menus from './utils/menus';
import AnchorButton from '../Button/AnchorButton';

const Collapsible = ({ expanded }) => {
  return (
    <div
      className={` flex-col w-full gap-8 py-6 ${expanded ? 'flex' : 'hidden'}`}
    >
      {Object.keys(menus).map((menu) => {
        return (
          <div key={uuid()}>
            <NavLink
              url={menus[menu]}
              label={menu.toUpperCase()}
              className={'text-white'}
            />
          </div>
        );
      })}
      <AnchorButton
        url={'/login'}
        label={'LOG IN'}
        className={
          'text-white lg:hover:bg-ground-betis lg:hover:text-white hover:text-black bg-green-betis'
        }
      />
    </div>
  );
};

export default Collapsible;
