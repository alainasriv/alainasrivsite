import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ResearchItem from '@/components/ResearchAccordion';

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

const Research = () => {
  return (
    <Layout>
      <div className="py-8 md:py-16">
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="w-full md:w-2/5"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-display text-navy mb-4">Research Interests</h1>
            <h2 className="text-lg md:text-xl leading-relaxed mb-8">Currently, I am interested in questions involving the ‘life cycles’ of social interaction.</h2>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5"
            variants={fadeIn}
          >
            <div className="space-y-2">
              
              <ResearchItem title="Pre" defaultOpen={false}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4 italic">
                    Expectations, beliefs, and the choice to interact.
                  </p>

                  <p className="text-base md:text-lg mb-4">
                    What do people believe or expect from an interaction before it starts?
                  </p>
                </div>
              </ResearchItem>

              <ResearchItem title="During">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4 italic">
                    Interpersonal mechanisms of emotional connection.
                  </p>

                  <p className="text-base md:text-lg mb-4">
                    What linguistic or behavioral mechanisms contribute to people feeling connected during an interaction? Also — how does choosing to be empathetic or curious during an interaction affect perceptions of connection?
                  </p>
                </div>
              </ResearchItem>
              
              <ResearchItem title="Post">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4 italic">
                  Emotional and cognitive consequences.
                  </p>

                  <p className="text-base md:text-lg mb-4">
                    What aspects of the interaction were most important in forming post-interaction emotions and judgments?
                  </p>
                </div>
              </ResearchItem>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Research;