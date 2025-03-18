import { Linkedin, Instagram } from 'lucide-react';
import React from 'react';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
  <a 
    href="https://www.linkedin.com/in/alainasriv" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-navy hover:text-coral transition-colors duration-300"
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>
  <a 
    href="https://open.spotify.com/user/7a6mwifhzdkqtfoecl4ws2msp?si=086a2431e4514196" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-navy hover:text-coral transition-colors duration-300"
    aria-label="Spotify"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.75 16.75C16.5 17 16 17 15.75 16.75C13.25 15.25 10 15 6.75 15.75C6.5 15.75 6 15.5 6 15C6 14.75 6.25 14.25 6.75 14.25C10.5 13.5 14 13.75 16.75 15.5C17.25 15.75 17.25 16.5 16.75 16.75ZM18 13.75C17.75 14 17.25 14 17 13.75C14 12 9.75 11.5 6.5 12.5C6.25 12.5 5.75 12.25 5.75 11.75C5.75 11.25 6 11 6.5 10.75C10.25 9.75 14.75 10.25 18.25 12.25C18.5 12.25 18.5 13.25 18 13.75ZM19.25 10.5C15.75 8.5 9.5 8.25 6 9.25C5.5 9.5 5.25 9 5.25 8.5C5.25 8 5.5 7.5 6 7.5C10 6.5 16.5 6.75 20.5 9C21 9.25 21.25 9.75 21 10.25C20.75 10.5 20 10.75 19.25 10.5Z" fill="currentColor"/>
    </svg>
  </a>
  <a 
    href="https://instagram.com/alaina.sriv" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-navy hover:text-coral transition-colors duration-300"
    aria-label="Instagram"
  >
    <Instagram size={20} />
  </a>
</div>
  );
};

export default SocialIcons;