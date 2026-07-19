import { Brain, LineChart, MapPin, GraduationCap, FolderGit2, Cpu, Globe2 } from 'lucide-react'

const facts = [
  { icon: MapPin, label: 'Pune, India' },
  { icon: Cpu, label: 'AI/ML Engineer' },
  { icon: GraduationCap, label: 'CGPA 8.51' },
  { icon: FolderGit2, label: '3 Projects' },
]

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            About<span className="text-secondary">.</span>
          </h2>
          <span className="hidden font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:block">
            01 / Who I am
          </span>
        </div>

        {/* Asymmetric grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="glass rounded-xl border-2 border-foreground p-6 shadow-brutal md:p-8 lg:col-span-7">
            <p className="text-lg leading-relaxed text-pretty">
              Aspiring AI &amp; Machine Learning Engineer with hands-on
              experience in building real-world AI systems. I specialize in{' '}
              <span className="font-bold">predictive modeling</span>,{' '}
              <span className="font-bold">anomaly detection</span>, and{' '}
              <span className="font-bold">full-stack AI integration</span>. My
              work focuses on environmental intelligence and industrial-scale
              data systems.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-foreground bg-card px-3 py-1.5 text-sm font-semibold shadow-brutal-sm"
                >
                  <fact.icon className="size-4" aria-hidden="true" />
                  {fact.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border-2 border-foreground bg-primary p-6 shadow-brutal md:p-8 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md border-2 border-foreground bg-card">
                <Brain className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">What I do</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm font-medium leading-relaxed">
              <li>→ Machine Learning model development &amp; optimization</li>
              <li>→ Time-series forecasting (Prophet, ML models)</li>
              <li>→ Anomaly detection using Isolation Forest</li>
              <li>→ Full-stack AI systems (FastAPI + React)</li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-foreground bg-foreground p-6 text-background shadow-brutal-secondary md:p-8 lg:col-span-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md border-2 border-background bg-secondary">
                <LineChart className="size-6 text-secondary-foreground" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold">Focus Areas</h3>
                <p className="mt-1 leading-relaxed text-background/80">
                  Environmental intelligence, industrial CO2 monitoring, air
                  quality prediction, and building AI systems that make a
                  tangible impact on sustainability.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-foreground bg-[#FF90E8] p-6 shadow-brutal md:p-8 lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex size-10 items-center justify-center rounded-md border-2 border-foreground bg-white text-foreground">
                <Globe2 className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b-2 border-foreground/20 pb-2">
                <span className="font-bold">English</span>
                <span className="text-[10px] sm:text-xs font-mono font-semibold bg-white border-2 border-foreground px-2 py-0.5 rounded shadow-brutal-sm">Professional</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-foreground/20 pb-2">
                <span className="font-bold">Hindi &amp; Marathi</span>
                <span className="text-[10px] sm:text-xs font-mono font-semibold bg-[#b8ff5a] border-2 border-foreground px-2 py-0.5 rounded shadow-brutal-sm">Native / Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">German</span>
                <span className="text-[10px] sm:text-xs font-mono font-semibold bg-white border-2 border-foreground px-2 py-0.5 rounded shadow-brutal-sm">A1–A2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
