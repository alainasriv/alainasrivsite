import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { toast } from 'sonner';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <Layout>
      <motion.div 
        className="py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-display text-navy mb-8"
          variants={fadeIn}
        >
          Contact
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeIn}>
            <p className="text-lg mb-6">
              Whether you're interested in collaborating on research, have a question, or just want to connect, I'd love to hear from you! Reach out through through my email, and I'll be in touch soon.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3">Connect With Me!</h3>
              <p className="mb-2">
                <span className="font-medium">Personal Email:</span>{" "}
                <a 
                  href="mailto:alainarui@gmail.com"
                  className="text-coral hover:text-coral-dark transition-colors duration-300"
                >
                  alainarui@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <span className="font-medium">Wisconsin Email:</span>{" "}
                <a 
                  href="mailto:asrivastav2@wisc.edu"
                  className="text-coral hover:text-coral-dark transition-colors duration-300"
                >
                  asrivastav2@wisc.edu
                </a>
              </p>
              <p className="mb-2">
                <span className="font-medium">Location:</span> Madison, Wisconsin
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;