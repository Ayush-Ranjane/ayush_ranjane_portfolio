"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const certificates = [
  {
    file: "Applied Data Science Capstone.pdf",
    issuer: "Coursera | IBM",
    date: "Dec 2023",
    learned: "Built an end-to-end predictive model using real-world SpaceX data."
  },
  {
    file: "Collaborate Effectively for Professional Success.pdf",
    issuer: "Coursera | IBM",
    date: "Dec 2023",
    learned: "Mastered agile collaboration, communication, and team dynamics."
  },
  {
    file: "Data Analysis with Python.pdf",
    issuer: "Coursera | IBM",
    date: "Oct 2023",
    learned: "Wrangled datasets and performed deep statistical analysis using Pandas."
  },
  {
    file: "Data Science Methodology.pdf",
    issuer: "Coursera | IBM",
    date: "Sep 2023",
    learned: "Learned the foundational lifecycle of translating business problems to ML solutions."
  },
  {
    file: "Data Scientist Career Guide and Interview Preparation.pdf",
    issuer: "Coursera | IBM",
    date: "Jan 2024",
    learned: "Prepared for technical interviews and mapped out a data science career path."
  },
  {
    file: "Data Visualization with Python.pdf",
    issuer: "Coursera | IBM",
    date: "Oct 2023",
    learned: "Created interactive charts and dashboards using Matplotlib, Seaborn, and Dash."
  },
  {
    file: "Databases and SQL for Data Science with Python.pdf",
    issuer: "Coursera | IBM",
    date: "Aug 2023",
    learned: "Wrote complex SQL queries to extract and manipulate large relational datasets."
  },
  {
    file: "Deep Learning and Reinforcement Learning.pdf",
    issuer: "Coursera | IBM",
    date: "Feb 2024",
    learned: "Implemented neural networks and Q-learning algorithms using TensorFlow/Keras."
  },
  {
    file: "Exploratory Data Analysis for Machine Learning.pdf",
    issuer: "Coursera | IBM",
    date: "Nov 2023",
    learned: "Extracted feature importance and detected anomalies in messy real-world data."
  },
  {
    file: "Generative AI Elevate Your Data Science Career.pdf",
    issuer: "Coursera | IBM",
    date: "Mar 2024",
    learned: "Leveraged LLMs and prompt engineering to accelerate data science workflows."
  },
  {
    file: "IBM Data Science.pdf",
    issuer: "Coursera | IBM",
    date: "Jan 2024",
    learned: "Completed the comprehensive 10-course professional certification track."
  },
  {
    file: "IBM Machine Learning.pdf",
    issuer: "Coursera | IBM",
    date: "Mar 2024",
    learned: "Mastered the complete ML pipeline, from regression to deep learning."
  },
  {
    file: "Machine Learning Capstone.pdf",
    issuer: "Coursera | IBM",
    date: "Mar 2024",
    learned: "Deployed a full-stack recommender system into production using Flask."
  },
  {
    file: "Machine Learning with Python.pdf",
    issuer: "Coursera | IBM",
    date: "Nov 2023",
    learned: "Built and tuned robust classification and clustering models using Scikit-Learn."
  },
  {
    file: "Python for Data Science, AI & Development.pdf",
    issuer: "Coursera | IBM",
    date: "Jul 2023",
    learned: "Mastered core Python programming, data structures, and foundational AI libraries."
  },
  {
    file: "Supervised Machine Learning Classification.pdf",
    issuer: "Coursera | IBM",
    date: "Jan 2024",
    learned: "Trained advanced classification models including SVMs and Random Forests."
  },
  {
    file: "Supervised Machine Learning Regression.pdf",
    issuer: "Coursera | IBM",
    date: "Dec 2023",
    learned: "Implemented highly accurate continuous prediction models to forecast trends."
  },
  {
    file: "Tools for Data Science.pdf",
    issuer: "Coursera | IBM",
    date: "Aug 2023",
    learned: "Gained proficiency in Jupyter, RStudio, GitHub, and IBM Watson Studio."
  },
  {
    file: "Unsupervised Machine Learning.pdf",
    issuer: "Coursera | IBM",
    date: "Feb 2024",
    learned: "Discovered hidden patterns using K-Means clustering and PCA dimensionality reduction."
  },
  {
    file: "What is Data Science.pdf",
    issuer: "Coursera | IBM",
    date: "Jun 2023",
    learned: "Understood the vast applications of data science and AI in modern industries."
  }
];

export default function Certificates() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative w-full py-24 bg-[#b8ff5a] border-b-8 border-black overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        .pacman {
          width: 0;
          height: 0;
          border-right: 16px solid transparent;
          border-top: 16px solid #000;
          border-left: 16px solid #000;
          border-bottom: 16px solid #000;
          border-radius: 50%;
          animation: chomp 0.3s ease-in-out infinite;
        }
        @keyframes chomp {
          0%, 100% { border-right-color: transparent; }
          50% { border-right-color: #000; }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      
      {/* Background Graphic */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-black/5 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-10" ref={containerRef}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black uppercase tracking-tighter text-black mb-4 leading-none drop-shadow-[4px_4px_0_#000]"
        >
          Certificates
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
          className="text-lg md:text-xl font-bold text-black bg-white inline-block px-5 py-3 border-[4px] border-black shadow-[6px_6px_0_#000] -rotate-1"
        >
          ← Scroll to explore my professional credentials →
        </motion.p>
      </div>

      <div className="relative w-full overflow-x-auto overflow-y-hidden pb-4">
        <motion.div 
          className="flex gap-8 px-6 lg:px-12 pb-16 pt-8 w-max"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
              }
            }
          }}
        >
          {certificates.map((cert, index) => {
            const name = cert.file.replace(".pdf", "");
            
            // Alternate colors for variety
            const headerColor = index % 3 === 0 ? "bg-[#FF90E8]" : index % 3 === 1 ? "bg-[#b8ff5a]" : "bg-[#F6F5F0]";
            const rotate = index % 2 === 0 ? 1 : -1;
            
            return (
              <motion.a
                href={`/doc/${encodeURIComponent(cert.file)}#toolbar=0`}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="group relative flex-shrink-0 w-[300px] h-[400px] md:w-[340px] md:h-[440px] block focus:outline-none"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ y: -10, rotate: rotate * 2, scale: 1.02 }}
                style={{ rotate: rotate }} // Slight initial rotation
              >
                {/* Hard block shadow */}
                <div className="absolute inset-0 bg-black border-[4px] border-black translate-x-[8px] translate-y-[8px] group-hover:translate-x-[12px] group-hover:translate-y-[12px] transition-transform duration-300"></div>
                
                {/* Card Container */}
                <div className="relative h-full bg-white border-[4px] border-black p-5 md:p-6 flex flex-col justify-between transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
                  
                  {/* Top Header Graphic */}
                  <div className={`w-[calc(100%+2.5rem)] md:w-[calc(100%+3rem)] h-20 md:h-24 ${headerColor} border-b-[4px] border-black flex items-center justify-center -mx-5 md:-mx-6 -mt-5 md:-mt-6 mb-4 md:mb-6 px-6 relative overflow-hidden shrink-0`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
                    <span className="text-4xl md:text-5xl drop-shadow-[2px_2px_0_#000]">🎓</span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white bg-black px-2 py-1 border-2 border-black inline-block">
                        {cert.issuer}
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold text-black border-2 border-black px-2 py-1 bg-[#F6F5F0]">
                        {cert.date}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black leading-[1.1] text-black mb-2 line-clamp-3">
                      {name}
                    </h3>
                    <p className="text-xs md:text-sm font-medium leading-snug text-black/70 line-clamp-3 md:line-clamp-4">
                      {cert.learned}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between border-t-[4px] border-black pt-4">
                    <span className="font-bold text-black uppercase tracking-tight">View PDF</span>
                    <div className="w-10 h-10 rounded-full bg-black border-[3px] border-black flex items-center justify-center group-hover:bg-[#FF90E8] group-hover:scale-110 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" className="group-hover:stroke-black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>

    </section>
  );
}
