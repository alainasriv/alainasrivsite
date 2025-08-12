import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { posts } from '../content/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug as keyof typeof posts] : null;
  
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl">Post not found</h1>
        </div>
      </Layout>
    );
  }
  
  const { component: MDXContent, title, date } = post;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <header className="mb-8">
            <h1 className="text-4xl font-display text-navy mb-4">{title}</h1>
            <p className="text-gray-600">{date}</p>
          </header>
          <MDXContent />
        </motion.article>
      </div>
    </Layout>
  );
};

export default BlogPost;