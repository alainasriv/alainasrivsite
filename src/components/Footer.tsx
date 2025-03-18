import SocialIcons from './SocialIcons';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center">
        <p className="text-coral text-lg md:text-xl mb-4 md:mb-0 font-display">
          Alaina Srivastav
        </p>
        
        <SocialIcons />
        
        <a 
          href="mailto:alainarui@gmail.com" 
          className="text-coral hover:text-coral-dark transition-colors duration-300 mt-4 md:mt-0 text-lg md:text-xl"
        >
          alainarui@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;