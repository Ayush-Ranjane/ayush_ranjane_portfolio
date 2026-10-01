'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' }
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 pb-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border-2 border-foreground bg-background/70 backdrop-blur-md px-4 py-2.5 shadow-brutal md:px-4">
        
        {/* Left: Logo & Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-foreground bg-primary relative shadow-brutal-sm group-hover:-translate-y-0.5 transition-transform">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1.5px] border-foreground relative">
              <span className="text-[10px] font-black text-foreground uppercase tracking-tighter">AR</span>
              <span className="absolute -top-[1.5px] -right-[1.5px] h-1.5 w-1.5 rounded-full bg-secondary border border-foreground"></span>
            </div>
          </div>
          <span className="hidden text-sm font-bold tracking-tight sm:block text-foreground">
            Ayush Ranjane
          </span>
        </a>

        {/* Center: Nav Links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-[14px] font-bold text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Icons & Resume CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a 
            href="https://github.com/Ayush-Ranjane" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-foreground bg-card transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/ayush-ranjane-61051b303/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-foreground bg-card transition-all hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a
            href="/doc/Ayush_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex h-9 items-center justify-center rounded-lg border-2 border-foreground bg-secondary px-5 text-[14px] font-bold text-secondary-foreground shadow-brutal-sm hover:-translate-y-0.5 transition-transform"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg border-2 border-foreground bg-card md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Nav Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden"
            />
            {/* Slide-out Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-[320px] border-l-[3px] border-foreground bg-[#F6F5F0] bg-[radial-gradient(#d1d1d1_1px,transparent_1px)] [background-size:16px_16px] shadow-[-8px_0_0_0_#111] md:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-5 border-b-[3px] border-foreground bg-white">
                <span className="font-black text-2xl tracking-tight">Navigation</span>
                <button
                  onClick={() => setOpen(false)}
                  className="press-effect flex size-10 items-center justify-center rounded-lg border-[3px] border-foreground bg-[#FF90E8] hover:bg-primary transition-colors shadow-[4px_4px_0_0_#111]"
                >
                  <X className="size-6" />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.a
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border-[3px] border-foreground bg-white px-5 py-4 text-lg font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#111] hover:bg-primary"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t-[3px] border-foreground bg-white flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <a href="https://github.com/Ayush-Ranjane" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-foreground bg-card transition-all hover:-translate-y-1 shadow-[4px_4px_0_0_#111] hover:bg-foreground hover:text-background">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ayush-ranjane-61051b303/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-foreground bg-card transition-all hover:-translate-y-1 shadow-[4px_4px_0_0_#111] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a
                    href="/doc/Ayush_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex-1 flex items-center justify-center rounded-xl border-[3px] border-foreground bg-[#b8ff5a] px-3 h-12 text-center text-sm font-black uppercase tracking-widest text-foreground shadow-[4px_4px_0_0_#111] hover:-translate-y-1 transition-transform"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
