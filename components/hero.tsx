import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="bg-dots relative overflow-hidden px-4 pb-16 pt-32 md:pb-24 md:pt-40">
      {/* Solid geometric accents */}
      <div
        aria-hidden="true"
        className="absolute -right-16 top-24 hidden size-64 rotate-12 rounded-2xl border-2 border-foreground bg-primary lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-10 hidden size-48 -rotate-6 rounded-full border-2 border-foreground bg-secondary lg:block"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="glass inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-1.5 shadow-brutal-sm">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-secondary" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider">
            Open for opportunities
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-tighter text-balance sm:text-7xl lg:text-8xl">
          Ayush
          <br />
          Ranjane
          <span className="text-secondary">.</span>
        </h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="glass max-w-2xl rounded-xl border-2 border-foreground p-6 shadow-brutal md:p-8">
            <p className="text-xl font-bold leading-snug text-balance sm:text-2xl">
              I build production-ready AI systems that{' '}
              <span className="bg-primary px-1">think</span>,{' '}
              <span className="bg-primary px-1">predict</span>, and{' '}
              <span className="bg-primary px-1">scale</span>.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              AI &amp; Data Science engineer focused on predictive analytics,
              time-series forecasting, and scalable machine learning systems.
              End-to-end AI solutions with real-world impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:flex-col">
            <a
              href="#projects"
              className="press-effect inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-foreground px-6 py-3 font-bold text-background shadow-brutal"
            >
              View Projects
              <ArrowUpRight className="size-5" />
            </a>
            <a
              href="#contact"
              className="press-effect inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-primary px-6 py-3 font-bold text-primary-foreground shadow-brutal"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="press-effect inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-card px-6 py-3 font-bold shadow-brutal"
            >
              <Download className="size-5" />
              Resume
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mt-14 inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="size-4" />
          Scroll to explore
        </a>
      </div>
    </section>
  )
}
