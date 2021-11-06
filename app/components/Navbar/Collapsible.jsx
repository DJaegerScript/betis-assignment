import React from 'react';
import { v4 as uuid } from 'uuid';
import NavLink from './NavLink';
import menus from './utils/menus';
import LoginButton from './LoginButton';

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
      <LoginButton />
    </div>
  );
};

export default Collapsible;
