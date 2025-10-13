import { useState } from 'react';
import Layout from '@/components/Layout';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '@/content/posts'; // ✅ import your posts data

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const Writing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // ✅ Convert posts object into an array for mapping
  const blogPosts: BlogPost[] = Object.entries(posts).map(([slug, post]) => ({
    id: slug,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    slug,
  }));

  return (
    <Layout>
      <div className="bg-coral rounded-b-[50px] pb-32 pt-16 mb-16 relative">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-6xl md:text-7xl font-display text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Writing
          </motion.h1>
          
          {/* Fiction Section */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white text-lg md:text-xl mb-6">
              I have been an avid reader and writer since I was a child. In high school, I published my first novel, <em>Even Gods Die</em>. 
              You can learn more about my fictional writing through my author platform.
            </p>
            
            <a 
              href="https://alainawrites.carrd.co/" 
              className="inline-block bg-white text-coral font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              AUTHOR PLATFORM
            </a>
          </motion.div>
        </div>
        
        {/* Curved edge effect */}
        <div className="absolute -bottom-1 left-0 right-0 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" className="w-full h-full">
            <path fill="#FEF5EA" fillOpacity="1" d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,122.7C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Blog Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-display text-navy mb-8">
            Most of my nonfiction writing is featured in my blog below.
          </h2>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-display text-navy mb-2 hover:text-coral transition-colors duration-300">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-coral hover:text-coral-dark transition-colors duration-300 text-sm font-medium"
                > 
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Writing;
