'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' }
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border-2 border-foreground bg-white/60 backdrop-blur-lg backdrop-saturate-150 px-4 py-3 shadow-brutal-sm md:px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="flex size-8 items-center justify-center rounded-md border-2 border-foreground bg-primary overflow-hidden shadow-brutal-sm group-hover:-translate-y-0.5 transition-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/apple-touch-icon.png" alt="AR Logo" className="w-full h-full object-cover" />
          </span>
          <span className="hidden text-sm font-bold tracking-tight sm:block">
            Ayush Ranjane
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm font-semibold hover:bg-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="press-effect hidden rounded-md border-2 border-foreground bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground shadow-brutal-sm md:block"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-md border-2 border-foreground bg-card md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-xl border-2 border-foreground bg-white/60 backdrop-blur-lg backdrop-saturate-150 p-3 shadow-brutal-sm md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-md border-2 border-foreground bg-secondary px-3 py-2 text-center text-sm font-bold text-secondary-foreground"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  )
}
