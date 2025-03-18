import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto animate-fade-in">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;