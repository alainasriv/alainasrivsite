import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import React from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 py-8 md:py-16">
        <motion.div 
          className="w-full md:w-1/2 lg:w-2/5"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="rounded-full overflow-hidden max-w-sm mx-auto">
            <img 
              src="/profile.jpg"  // If it's directly in public folder
              alt="Alaina Srivastav" 
              className="w-full h-auto rounded-full shadow-lg" 
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 lg:w-3/5 space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.h2 
            className="text-coral text-3xl md:text-4xl mb-8"
            variants={fadeIn}
          >
            Hello!
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed mb-4"
            variants={fadeIn}
          >
            I am an undergraduate Computer Science student at the University of Wisconsin-Madison. I will be graduating August of 2025 and plan to pursue a Ph.D. in either cognitive science or computational neuroscience after graduation.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed mb-4"
            variants={fadeIn}
          >
            I am mainly interested in social affective neuroscience, namely the neural mechanisms behind human connection.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed mb-8"
            variants={fadeIn}
          >
            Outside of academia, I am a writer, fitness enthusiast, and lover of the outdoors. Feel free to reach out if you share similar interests or have any questions about my projects!
          </motion.p>
          
          <motion.div
            variants={fadeIn}
          >
            <Link
              to="/contact"
              className="inline-block bg-coral hover:bg-coral-dark text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;