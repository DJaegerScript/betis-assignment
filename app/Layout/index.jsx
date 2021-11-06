import React from 'react';
import Footer from '../components/global/Footer';
import Header from '../components/global/Header';
import Navbar from '../components/global/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
