import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalLightbox from '../ui/GlobalLightbox';
import TawkToChat from '../ui/TawkToChat';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <TawkToChat />
      <GlobalLightbox />
    </div>
  );
};

export default Layout;
