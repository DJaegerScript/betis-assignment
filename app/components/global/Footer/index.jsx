import React from 'react';
import SocialMediaContact from './SocialMediaContact';
import EmailContact from './EmailContact';
import LocationAddress from './LocationAddress';
import FooterDecor from './FooterDecor';

const Footer = () => {
  return (
    <footer className='bg-silver-betis'>
      <div className='flex flex-col items-center w-full px-16 py-12 lg:items-start lg:flex-row gap-9'>
        <SocialMediaContact />
        <EmailContact />
        <LocationAddress />
      </div>
      <FooterDecor />
    </footer>
  );
};

export default Footer;
