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
            <h2 className="text-2xl md:text-3xl font-display text-coral mb-6">Get in Touch</h2>
            <p className="text-lg mb-6">
              Whether you're interested in collaborating on research, have a question, or just want to say hello, I'd love to hear from you! Fill out the form or reach out directly through my email - I'll be in touch soon.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3">Connect With Me</h3>
              <p className="mb-2">
                <span className="font-medium">Email:</span>{" "}
                <a 
                  href="mailto:alainarui@gmail.com"
                  className="text-coral hover:text-coral-dark transition-colors duration-300"
                >
                  alainarui@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <span className="font-medium">Location:</span> Madison, Wisconsin
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral/50 transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral/50 transition"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral/50 transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral/50 transition"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coral hover:bg-coral-dark text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;