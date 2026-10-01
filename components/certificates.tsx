'use client';

import React, { useState } from 'react';

const mainCertificates = [
  {
    title: "IBM Machine Learning Professional Certificate",
    date: "IBM via Coursera • Mar 2024",
    color: "bg-[#b8ff5a]",
    desc: "Complete ML pipeline: regression, classification, clustering, deep learning, and reinforcement learning.",
    link: "IBM Machine Learning.pdf"
  },
  {
    title: "IBM Data Science Professional Certificate",
    date: "IBM via Coursera • Jan 2024",
    color: "bg-[#FF90E8]",
    desc: "10-course professional track covering the full data science lifecycle with hands-on projects.",
    link: "IBM Data Science.pdf"
  }
];

const otherCertificates = [
  "Applied Data Science Capstone.pdf",
  "Collaborate Effectively for Professional Success.pdf",
  "Data Analysis with Python.pdf",
  "Data Science Methodology.pdf",
  "Data Scientist Career Guide and Interview Preparation.pdf",
  "Data Visualization with Python.pdf",
  "Databases and SQL for Data Science with Python.pdf",
  "Deep Learning and Reinforcement Learning.pdf",
  "Exploratory Data Analysis for Machine Learning.pdf",
  "Generative AI Elevate Your Data Science Career.pdf",
  "Machine Learning Capstone.pdf",
  "Machine Learning with Python.pdf",
  "Python for Data Science, AI & Development.pdf",
  "Supervised Machine Learning Classification.pdf",
  "Supervised Machine Learning Regression.pdf",
  "Tools for Data Science.pdf",
  "Unsupervised Machine Learning.pdf",
  "What is Data Science.pdf"
];

export default function Certificates() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="certificates" className="w-full py-20 md:py-28 bg-[#b8ff5a] border-y-[6px] border-foreground font-sans">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground mb-4">
            Certifications<span className="text-[#FF90E8]">.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mt-4">
            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/80">
              PROFESSIONAL CREDENTIALS — IBM VIA COURSERA
            </span>
            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/80">
              05 / CREDENTIALS
            </span>
          </div>
        </div>

        {/* Featured Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {mainCertificates.map((cert, i) => (
            <div key={i} className="rounded-xl border-[3px] border-foreground bg-white p-6 md:p-8 shadow-[6px_6px_0px_#000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all">
              <div>
                <span className={`inline-block border-2 border-foreground ${cert.color} px-3 py-1 text-[11px] font-bold text-foreground rounded-full mb-5 shadow-[2px_2px_0px_#000]`}>
                  {cert.date}
                </span>
                <h3 className="text-xl md:text-[22px] font-black leading-tight text-foreground mb-4">
                  {cert.title}
                </h3>
                <p className="text-[13px] md:text-[14px] font-medium text-muted-foreground leading-relaxed">
                  {cert.desc}
                </p>
              </div>
              
              <a 
                href={`/doc/${encodeURIComponent(cert.link)}#toolbar=0`} 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 text-[11px] font-bold text-[#888] uppercase tracking-widest hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                VIEW CERTIFICATE ↗
              </a>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-8">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="bg-foreground text-background px-5 py-3 text-[13px] font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 rounded-sm"
          >
            {expanded ? 'Hide certificates ⌃' : 'View all 18 certificates ⌄'}
          </button>
        </div>
        
        {/* Expanded List */}
        {expanded && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 animate-in fade-in slide-in-from-top-4 duration-300">
            {otherCertificates.map((cert, idx) => (
              <a
                key={idx}
                href={`/doc/${encodeURIComponent(cert)}#toolbar=0`}
                target="_blank"
                rel="noreferrer"
                className="block p-4 border-2 border-foreground bg-white shadow-[2px_2px_0px_#000] hover:-translate-y-0.5 transition-transform"
              >
                <p className="text-xs font-bold text-foreground line-clamp-2">
                  {cert.replace('.pdf', '')}
                </p>
                <span className="text-[10px] font-bold text-[#888] mt-2 block">
                  VIEW ↗
                </span>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
