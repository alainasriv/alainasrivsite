import { Toaster } from "@/components/toaster";
import { Toaster as Sonner } from "@/components/sonner";
import { TooltipProvider } from "@/components/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from 'react';

// Pages
import Index from "./pages/Index";
import Research from "./pages/Research";
//import Resume from "./pages/Resume";
import Writing from "./pages/Writing";
import Contact from "./pages/Contact";
//import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research" element={<Research />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="*" element={<NotFound />} /> */}
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;