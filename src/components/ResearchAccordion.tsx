import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface ResearchItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const ResearchItem = ({ title, children, defaultOpen = false }: ResearchItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="research-item">
      <div 
        className="research-item-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl md:text-3xl font-display">{title}</h3>
        <span className="transition-transform duration-300">
          {isOpen ? (
            <ChevronUp className="text-coral h-6 w-6" />
          ) : (
            <ChevronDown className="text-coral h-6 w-6" />
          )}
        </span>
      </div>
      
      <div 
        className={cn(
          "research-item-content",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ResearchItem;