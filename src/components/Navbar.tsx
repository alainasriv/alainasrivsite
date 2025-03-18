import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import React from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 bg-transparent",
        isScrolled && "bg-beige/95 backdrop-blur-sm shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink 
          to="/" 
          className="text-2xl md:text-2xl font-display text-navy hover:text-navy-light transition-colors duration-300"
        >
          Alaina Srivastav
        </NavLink>
      
        <nav className="flex space-x-5 md:space-x-8 items-center">
          <a 
            href="/Alaina Srivastav Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-1 text-sm md:text-base transition-colors duration-300 text-navy hover:text-coral"
          >
            Resume
          </a>
          <NavLink 
            to="/research" 
            className={({ isActive }) => 
              cn("py-1 text-sm md:text-base transition-colors duration-300", 
                 isActive ? "text-coral font-medium" : "text-navy hover:text-coral")
            }
          >
            Research
          </NavLink>
          
          <NavLink 
            to="/writing" 
            className={({ isActive }) => 
              cn("py-1 text-sm md:text-base transition-colors duration-300", 
                 isActive ? "text-coral font-medium" : "text-navy hover:text-coral")
            }
          >
            Writing
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              cn("py-1 text-sm md:text-base transition-colors duration-300", 
                 isActive ? "text-coral font-medium" : "text-navy hover:text-coral")
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;