'use client'

import { Brain, LineChart, MapPin, GraduationCap, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const facts = [
  { icon: MapPin, label: 'Pune, India' },
  { icon: Code, label: 'AI/ML Engineer' },
  { icon: GraduationCap, label: 'CGPA 8.53 / 10' },
]

const workflowSteps = [
  { step: '01', title: 'Data', desc: 'Collect & understand' },
  { step: '02', title: 'Understand', desc: 'EDA & feature analysis' },
  { step: '03', title: 'Model', desc: 'Train & tune' },
  { step: '04', title: 'Evaluate', desc: 'Metrics & validation' },
  { step: '05', title: 'Deploy', desc: 'API & integration' },
  { step: '06', title: 'Monitor', desc: 'Alerts & retraining' },
]

const focusAreas = [
  'Machine Learning', 'Predictive Analytics', 'Time-Series Forecasting', 
  'Anomaly Detection', 'Feature Engineering', 'Backend APIs', 'Data Engineering'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
}

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-4"
        >
          <h2 className="text-5xl font-black tracking-tighter sm:text-6xl hover:-translate-y-1 transition-transform cursor-default">
            About<span className="text-secondary inline-block hover:rotate-12 transition-transform duration-300">.</span>
          </h2>
          <span className="hidden font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground sm:block bg-white px-3 py-1 border-2 border-foreground shadow-brutal-sm">
            01 / WHO I AM
          </span>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 flex flex-col gap-6"
        >
          
          {/* Row 1: Bio and What I Build */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Bio Card */}
            <motion.div variants={itemVariants} className="rounded-xl border-2 border-foreground bg-white p-6 md:p-8 shadow-brutal lg:col-span-7 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-300">
              <div>
                <p className="text-[17px] leading-relaxed text-foreground relative z-10">
                  I am an Artificial Intelligence & Data Science engineering student interested in building <span className="font-black bg-primary/30 px-1 py-0.5 rounded-sm">machine learning systems</span> that solve practical problems. My work spans <span className="font-black bg-secondary/30 px-1 py-0.5 rounded-sm">predictive modeling</span>, <span className="font-black bg-primary/30 px-1 py-0.5 rounded-sm">anomaly detection</span>, <span className="font-black bg-secondary/30 px-1 py-0.5 rounded-sm">time-series forecasting</span>, and end-to-end AI application development from raw data to deployed APIs.
                </p>
                <p className="mt-6 text-[15px] font-medium text-muted-foreground">
                  Currently learning, building, testing, and shipping.
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-3">
                {facts.map((fact) => (
                  <motion.li
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    key={fact.label}
                    className="inline-flex items-center gap-2 rounded-md border-2 border-foreground bg-white px-3 py-1.5 text-sm font-bold shadow-brutal-sm cursor-default"
                  >
                    <fact.icon className="size-4" aria-hidden="true" />
                    {fact.label}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* What I Build Card */}
            <motion.div variants={itemVariants} className="rounded-xl border-2 border-foreground bg-primary p-6 md:p-8 shadow-brutal lg:col-span-5 group hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md border-2 border-foreground bg-white group-hover:rotate-12 transition-transform duration-300">
                  <Brain className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold">What I build</h3>
              </div>
              <ul className="mt-6 space-y-4 text-[15px] font-bold text-foreground">
                <li className="flex gap-2 group/item hover:translate-x-1 transition-transform"><span className="text-foreground font-black group-hover/item:text-secondary">→</span> Machine learning model development & evaluation</li>
                <li className="flex gap-2 group/item hover:translate-x-1 transition-transform"><span className="text-foreground font-black group-hover/item:text-secondary">→</span> Time-series forecasting (Prophet, XGBoost)</li>
                <li className="flex gap-2 group/item hover:translate-x-1 transition-transform"><span className="text-foreground font-black group-hover/item:text-secondary">→</span> Anomaly detection using Isolation Forest</li>
                <li className="flex gap-2 group/item hover:translate-x-1 transition-transform"><span className="text-foreground font-black group-hover/item:text-secondary">→</span> REST API backends with Flask & FastAPI</li>
                <li className="flex gap-2 group/item hover:translate-x-1 transition-transform"><span className="text-foreground font-black group-hover/item:text-secondary">→</span> Data pipelines: preprocessing to model inference</li>
              </ul>
            </motion.div>
          </div>

          {/* Row 2: How I Work (Engineering Workflow) */}
          <motion.div variants={itemVariants} className="rounded-xl border-2 border-foreground bg-[#1A1A1A] p-6 md:p-8 shadow-brutal text-white overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10 flex items-center gap-4 mb-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md border-2 border-foreground bg-secondary group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                <LineChart className="size-6 text-white" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold">How I work</h3>
                <p className="text-sm font-mono text-[#888]">Engineering workflow</p>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex flex-col md:flex-row gap-4">
              {/* Dotted connector line (desktop only) */}
              <div className="hidden md:block absolute top-[9px] left-0 w-full h-[1px] border-t border-dashed border-[#555] z-0"></div>
              
              {workflowSteps.map((w, idx) => (
                <motion.div 
                  key={w.step} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="relative z-10 flex-1 flex flex-col gap-2 group/step cursor-default"
                >
                  <span className="text-[10px] font-mono font-bold text-[#888] bg-[#1A1A1A] pr-3 w-fit group-hover/step:text-primary transition-colors">{w.step}</span>
                  <div className="rounded-md border border-[#444] bg-[#2A2A2A] p-3 shadow-sm h-full group-hover/step:border-primary group-hover/step:-translate-y-1 transition-all duration-300">
                    <h4 className="text-primary font-bold text-[14px] group-hover/step:scale-105 origin-left transition-transform">{w.title}</h4>
                    <p className="text-[#999] text-[12px] mt-1 font-mono">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Row 3: Currently Focused On */}
          <motion.div variants={itemVariants} className="rounded-xl border-2 border-foreground bg-white p-6 md:p-8 shadow-brutal group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-transform group-hover:scale-150 duration-700"></div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4 relative z-10">
              CURRENTLY FOCUSED ON
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {focusAreas.map((area) => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary)' }}
                  key={area}
                  className="rounded-md border-2 border-foreground bg-white px-3 py-1.5 text-xs font-mono font-bold cursor-default transition-colors"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
