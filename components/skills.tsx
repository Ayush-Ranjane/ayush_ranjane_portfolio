const groups = [
  {
    title: 'Machine Learning',
    accent: 'bg-primary',
    skills: ['Scikit-learn', 'Prophet', 'Isolation Forest', 'XGBoost', 'Pandas', 'NumPy'],
  },
  {
    title: 'Backend & APIs',
    accent: 'bg-secondary text-secondary-foreground',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'SQL'],
  },
  {
    title: 'Frontend & Viz',
    accent: 'bg-foreground text-background',
    skills: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Dashboards'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-dots border-y-2 border-foreground px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Skills &amp; Tools<span className="text-secondary">.</span>
          </h2>
          <span className="hidden font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:block">
            02 / Core competencies
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map((group, i) => (
            <div
              key={group.title}
              className={`glass rounded-xl border-2 border-foreground p-6 shadow-brutal ${
                i === 1 ? 'md:translate-y-6' : ''
              }`}
            >
              <span
                className={`inline-block rounded-md border-2 border-foreground px-3 py-1 text-sm font-bold ${group.accent}`}
              >
                {group.title}
              </span>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border-2 border-foreground bg-card px-3 py-1 font-mono text-xs font-semibold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
