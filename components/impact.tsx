const metrics = [
  { value: '3+', label: 'AI systems built end-to-end' },
  { value: '8.51', label: 'CGPA in AI & Data Science' },
  { value: '100%', label: 'Projects shipped with real APIs' },
  { value: '24/7', label: 'Real-time monitoring pipelines' },
]

export function Impact() {
  return (
    <section
      id="impact"
      className="border-y-2 border-foreground bg-foreground px-4 py-20 text-background md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Engineering Impact<span className="text-primary">.</span>
          </h2>
          <span className="hidden font-mono text-xs font-semibold uppercase tracking-widest text-background/60 sm:block">
            04 / Evidence-focused
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`rounded-xl border-2 border-background p-6 ${
                i % 2 === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'glass-dark text-background'
              }`}
              style={{ boxShadow: '6px 6px 0 0 var(--background)' }}
            >
              <p className="text-5xl font-bold tracking-tighter">{metric.value}</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed opacity-80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-dark mt-10 rounded-xl border-2 border-background p-6 md:p-8">
          <h3 className="text-xl font-bold">How I build AI systems</h3>
          <p className="mt-3 max-w-4xl leading-relaxed text-background/80 text-pretty">
            I treat machine learning as a complete engineering system rather
            than just model training. It starts with the real business problem
            and clean, scalable data pipelines — then models validated for
            performance, stability, and real-world reliability, not just
            accuracy. Production-ready APIs integrate AI into applications, and
            dashboards turn complex predictions into actionable insights.
          </p>
        </div>
      </div>
    </section>
  )
}
