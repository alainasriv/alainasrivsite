// src/components/ui/tooltip.tsx
import React, { createContext, useContext, ReactNode } from 'react';

// Define the context type (could be an empty object or any specific values you need)
interface TooltipContextType {
  // You can define any values you want to store in context, e.g.:
  // showTooltip: boolean;
  // tooltipText: string;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

interface TooltipProviderProps {
  children: ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  // You can define any actual context values here
  const contextValue: TooltipContextType = {
    // Example values (replace with your actual context values):
    // showTooltip: true,
    // tooltipText: "This is a tooltip",
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
};
