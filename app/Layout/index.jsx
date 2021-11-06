import React from 'react';
import Header from '../components/global/Header';
import Navbar from '../components/global/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
