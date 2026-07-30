import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalLightbox from '../ui/GlobalLightbox';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[88px]">
        {children}
      </main>
      <Footer />
      <GlobalLightbox />
    </div>
  );
};

export default Layout;
