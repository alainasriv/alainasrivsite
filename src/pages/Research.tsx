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
            <h1 className="text-4xl md:text-5xl font-display text-navy mb-4">Research and affiliations</h1>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/3"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <ResearchItem title="Niedenthal Emotions Lab" defaultOpen={true}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4">
                    I was formerly a research assistant at the Niedenthal Emotions Lab and am now an affiliated researcher. My primary responsibilities as an RA included running studies and creating programs for studies through Psychopy. I am currently investigating models that can analyze facial expressions in order to better understand human emotion and synchrony.
                  </p>
                  <a 
                    href="https://www.niedenthalemotionslab.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:text-coral-dark transition-colors inline-block mt-2"
                  >
                    https://www.niedenthalemotionslab.com/
                  </a>
                </div>
              </ResearchItem>
              
              <ResearchItem title="Center for Healthy Minds">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4">
                  I am currently a research assistant at Dr. Richard Davidson's Center for Healthy Minds. I have worked on two projects with graduate student Sin U Lam: a meta-analysis of the effects of mindfulness interventions on couple relationships, and a scoping review of methods to increase the effectiveness of wellbeing practices delivered electronically. Sin U and I will be presenting the latter project at the APS Conference on May 23!                  </p>
                  <a 
                    href="https://centerhealthyminds.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:text-coral-dark transition-colors inline-block mt-2"
                  >
                    https://centerhealthyminds.org/
                  </a>
                </div>
              </ResearchItem>
              
              <ResearchItem title="Healthy Minds on Campus">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg mb-4">

                  I was the co-president of UW-Madison’s student organization Healthy Minds on Campus (HMoC) my last year of college. HMoC is affiliated with the Center for Healthy Minds and aims to improve and spread awareness about well-being on campus.

My passion for the organization’s goal led me to create The Well-being Guide—a resource for exploring holistic and scientific approaches to bettering one’s wellbeing. The guide serves as the club's primary resource to UW-Madison students and is available through the club website.   </p>
                  <a 
                    href="https://www.healthymindsuw.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coral hover:text-coral-dark transition-colors inline-block mt-2"
                  >
                    https://www.healthymindsuw.com/
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