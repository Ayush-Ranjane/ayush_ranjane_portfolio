"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export default function NeoBrutalistHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F6F5F0] overflow-hidden font-sans flex flex-col">
      {/* Square Grid background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Content Layout */}
      <div className="relative z-20 flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row pt-32 lg:pt-40">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          className="w-full lg:w-[55%] flex flex-col items-start z-30 relative mt-0 lg:mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.4 }
            }
          }}
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1.5 } }
            }}
            className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] font-bold text-black leading-[1.05] tracking-tight relative whitespace-nowrap flex flex-col items-start"
          >
            <div>
              Ayush Ranjane
              <span className="inline-block w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#b8ff5a] ml-2 mb-2 lg:mb-4"></span>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-black bg-primary px-4 py-1.5 mt-2 md:mt-4 border-2 border-black shadow-brutal-sm uppercase tracking-widest inline-flex items-center w-[200px] sm:w-[260px] lg:w-[310px] h-[44px] sm:h-[52px] lg:h-[60px]">
              <TypeAnimation
                sequence={[
                  'ML Engineer',
                  2000,
                  'Data Analyst',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 1.5 } }
            }}
            className="mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl text-black/80 max-w-[22rem] lg:max-w-sm leading-snug"
          >
            Understands prototyping, interaction, and intersecting data for everyone.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 1.5 } }
            }}
            className="flex flex-col gap-3 mt-6 lg:mt-8"
          >
            <a 
              href="#projects"
              className="inline-block bg-black text-white px-8 py-2.5 lg:py-3 rounded-md font-medium w-[200px] text-center border border-black hover:bg-black/90 transition-colors">
              View Projects
            </a>
            <a 
              href="#contact"
              className="inline-block bg-transparent text-black px-8 py-2.5 lg:py-3 rounded-md font-medium w-[200px] text-center border border-black hover:bg-black/5 transition-colors">
              Contact Me
            </a>
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.open("/doc/Ayush_Ranjane_Data_science_resume.pdf", "_blank");
                const link = document.createElement("a");
                link.href = "/doc/Ayush_Ranjane_Data_science_resume.pdf";
                link.download = "Ayush_Ranjane_Data_science_resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-transparent text-black px-8 py-2.5 lg:py-3 rounded-md font-medium w-[200px] text-center border border-black hover:bg-black/5 transition-colors">
              Resume
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Massive Floating Profile Image */}
        <div className="absolute bottom-0 right-0 w-full lg:w-[65%] xl:w-[60%] h-[60vh] lg:h-[85vh] z-10 flex justify-center lg:justify-end items-end pointer-events-none">
          
          <motion.div
            className="relative w-full max-w-[500px] lg:max-w-[750px] xl:max-w-[850px] h-full flex items-end justify-center lg:justify-end origin-bottom"
            style={{ willChange: "transform" }}
            animate={{
              y: [-8, 8, -8],
              rotate: [-0.5, 0.5, -0.5],
            }}
            transition={{
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
              rotate: {
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              },
            }}
          >
            {/* Background Graphic: Pink Circle */}
            <div className="absolute top-[20%] lg:top-[15%] left-[5%] lg:left-[15%] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#FF90E8] -z-20" />

            {/* Background Graphic: Lime Green Rectangle */}
            <div className="absolute top-[30%] lg:top-[25%] right-0 lg:-right-[5%] w-[220px] h-[350px] lg:w-[350px] lg:h-[550px] bg-[#b8ff5a] -z-20" />

            {/* Profile Image Wrapper */}
            <div className="relative w-full h-full flex items-end justify-center lg:justify-end z-10">
              
              <img
                src="/profile-cutout.png"
                alt="Ayush Ranjane"
                className="w-auto h-full object-contain object-bottom z-10"
                style={{
                  willChange: "filter",
                  // Reduced drop shadows to prevent lag and artifacts
                  filter:
                    "drop-shadow(2px 2px 0px #000) drop-shadow(-2px -2px 0px #000) drop-shadow(-2px 2px 0px #000) drop-shadow(2px -2px 0px #000)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
