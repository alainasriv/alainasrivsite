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
            className="w-full md:w-1/3"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-display text-navy mb-4">Research Interests</h1>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/3"
            variants={fadeIn}
          >
            <div className="space-y-2">
              
              <ResearchItem title="Social Cognition" defaultOpen={true}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4">
                    I am highly interested in how interpersonal interactions influence decision-making and judgment. I believe understanding social thought is key to helping people connect better and be happier in social environments. 
                  </p>
                  <p className="text-base md:text-lg mb-4">
                    One area of specific interest at the moment is Large Language Models' ability to simulate human conversation and connection. How do LLMs present information in an appealing manner, and what does this appeal do to people on a cognitive and affective level?
                  </p>
                  <p>
                    <a 
                      href="https://centerhealthyminds.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-coral hover:text-coral-dark transition-colors inline-block mt-2"
                    >
                    </a>
                  </p>
                </div>
              </ResearchItem>

              <ResearchItem title="Mindfulness and Neuroplasticity">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4">
                    My position as a Research Specialist at the Center for Healthy Minds has provided me with the amazing opportunity to study the psychological and physiological effects of mindfulness. Broadly, I am interested in the potential of 'awareness' to shape cognition and brain function.
                  </p>
                  <a 
                    href="https://www.niedenthalemotionslab.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:text-coral-dark transition-colors inline-block mt-2"
                  >
                  </a>
                </div>
              </ResearchItem>
              
              <ResearchItem title="Affective Neuroscience">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4">
                  I am excited about contributing to research that can reliably associate specific brain regions with distinct emotions and emotional processes. Ultimately, I hope this area of research develops methods of improving human well-being.
                  </p>
                  <a 
                    href="https://www.healthymindsuw.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:text-coral-dark transition-colors inline-block mt-2"
                  >
                  </a>
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