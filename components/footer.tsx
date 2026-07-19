export function Footer() {
  return (
    <footer className="relative border-t-2 border-foreground bg-foreground text-background mt-auto">
      {/* Outer wrapper for perfect positioning on top of the footer line */}
      <div className="absolute bottom-full right-0 w-full pointer-events-none px-4">
        <div className="mx-auto max-w-6xl relative">
          <img 
            src="/misskalem-cat-13812_128.gif" 
            alt="Cat" 
            className="absolute bottom-0 right-0 w-24 md:w-32 translate-x-4 md:translate-x-0" 
          />
        </div>
      </div>
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md border-2 border-background bg-primary font-mono text-sm font-bold text-primary-foreground">
            AR
          </span>
          <span className="text-sm font-bold">Ayush Ranjane</span>
        </div>
        <p className="font-mono text-xs text-background/60">
          AI &amp; ML Engineer — Pune, India
        </p>
        <a
          href="#top"
          className="rounded-md border-2 border-background px-3 py-1.5 text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Back to top ↑
        </a>
      </div>
      </div>
    </footer>
  )
}
