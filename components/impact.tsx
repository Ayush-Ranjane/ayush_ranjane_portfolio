'use client'

import { motion } from 'framer-motion'

const quickProfile = [
  {
    title: 'B.E.',
    subtitle: 'AI & Data Science',
    subtext: 'DYPIEMR, PUNE',
    variant: 'primary',
  },
  {
    title: '8.53',
    subtitle: 'CGPA / 10',
    subtext: 'ONGOING',
    variant: 'dark',
  },
  {
    title: 'Python',
    subtitle: 'Primary language',
    subtext: '+ SQL',
    variant: 'primary',
  },
  {
    title: 'AI/ML',
    subtitle: 'Primary focus',
    subtext: 'DATA SCIENCE',
    variant: 'dark',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 12 }
  }
}

export function Impact() {
  return (
    <section
      id="impact"
      className="border-y-[6px] border-foreground bg-foreground px-4 py-20 md:py-28 font-sans overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative">
        <div className="flex items-end justify-between gap-4 mb-12 relative z-10">
          <h2 className="text-5xl font-black tracking-tighter text-background sm:text-6xl cursor-default hover:skew-x-2 transition-transform">
            Quick Profile<span className="text-primary hover:text-[#FF90E8] transition-colors">.</span>
          </h2>
          <span className="hidden font-mono text-[11px] font-bold uppercase tracking-widest text-background/60 sm:block bg-white/10 px-3 py-1 rounded-full border border-white/20">
            04 / AT A GLANCE
          </span>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10"
        >
          {quickProfile.map((item, i) => (
            <motion.div
              variants={itemVariants}
              key={i}
              className={`rounded-xl border-[3px] border-background p-6 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 group ${
                item.variant === 'primary'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-foreground text-background'
              }`}
              style={{ boxShadow: '6px 6px 0 0 var(--background)' }}
            >
              <p className="text-[38px] font-black tracking-tight leading-none mb-3 group-hover:scale-105 origin-left transition-transform">
                {item.title}
              </p>
              <p className="text-[15px] font-bold leading-tight mb-4 group-hover:text-[#FF90E8] transition-colors">
                {item.subtitle}
              </p>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-70 mt-auto">
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
          className="mt-10 rounded-xl border-[3px] border-background bg-foreground p-6 md:p-8 relative z-10 group hover:bg-[#111] transition-colors"
        >
          <h3 className="text-[18px] font-bold text-background mb-4 group-hover:text-primary transition-colors">How I build AI systems</h3>
          <p className="text-[15px] leading-loose text-background/80 max-w-4xl text-pretty">
            I approach machine learning as a complete engineering system — not just model training. It starts with understanding the real problem and building clean data pipelines, then training models validated for performance and real-world reliability. Production-ready APIs connect AI to applications, and dashboards translate model outputs into actionable insights. The pipeline includes monitoring, threshold alerts, and retraining schedules where appropriate.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
