'use client'

import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    title: 'Joint Technical Head',
    institution: 'Novus Neuron Club (DYPIEMR)',
    period: '2025 – Present',
    description: 'Guided junior members on machine learning projects and data science workflows, fostering a hands-on AI culture.',
    accent: 'bg-[#b8ff5a]',
    textColor: 'text-foreground'
  },
  {
    title: 'B.E. — Artificial Intelligence & Data Science',
    institution: 'Dr. D. Y. Patil Institute of Engineering, Management & Research (DYPIEMR), Pune',
    period: '2023 – 2027',
    description: 'Pursuing a comprehensive engineering degree with a specialized focus on machine learning algorithms, deep learning architectures, and data science workflows.',
    accent: 'bg-primary',
    textColor: 'text-primary-foreground'
  },
  {
    title: 'Higher Secondary (12th Standard) — Computer Science',
    institution: 'Dnyansamwardhini Junior College, Shirwal, Satara',
    period: '2021 – 2023',
    description: 'Graduated in the Bifocal Stream focusing on Computer Science fundamentals.',
    accent: 'bg-secondary',
    textColor: 'text-secondary-foreground'
  },
  {
    title: 'Secondary (10th Standard)',
    institution: 'Dnyansamwardhini Vidyalaya, Shirwal, Satara',
    period: '2021',
    description: 'Completed foundational secondary education.',
    accent: 'bg-foreground',
    textColor: 'text-background'
  }
]

export function Timeline() {
  return (
    <section id="experience" className="px-4 py-20 md:py-32 bg-[#F6F5F0] overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4 mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Experience &amp; Education<span className="text-secondary">.</span>
          </h2>
          <span className="font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground bg-white px-3 py-1 border-2 border-foreground shadow-brutal-sm">
            Milestones Timeline
          </span>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Center Vertical Line */}
          <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-1.5 bg-foreground -translate-x-1/2 rounded" />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`relative flex items-center justify-between mb-16 w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse flex-row'}`}
              >
                {/* Node (Center Dot) */}
                <div 
                  className={`absolute left-[32px] md:left-1/2 w-6 h-6 rounded-full border-4 border-foreground ${item.accent} -translate-x-1/2 z-10 shadow-brutal-sm group-hover:scale-125 transition-transform duration-300`} 
                />

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-[72px] md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <article className="glass p-6 md:p-8 rounded-xl border-2 border-foreground shadow-brutal transition-transform hover:-translate-y-2 hover:shadow-brutal-lg bg-white">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-foreground/70 font-bold uppercase tracking-wide text-xs sm:text-sm font-mono">
                          {item.institution}
                        </p>
                      </div>
                      <div className="shrink-0 mt-2 md:mt-0">
                        <span className={`inline-block rounded-md border-2 border-foreground px-3 py-1.5 font-mono text-xs font-bold shadow-brutal-sm ${item.accent} ${item.textColor}`}>
                          {item.period}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground font-medium text-sm md:text-base">
                      {item.description}
                    </p>
                  </article>
                </div>

                {/* Empty Space for layout balancing on Desktop */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
