import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'GreenCO2',
    tag: 'AI Monitoring Platform',
    description: 'AI-Powered CO₂ Emission Monitoring & Compliance Platform. Track emissions, predict trends with Prophet, and stay compliant using automated alerts and anomaly detection.',
    problem: 'Industrial plants struggle with fragmented carbon accounting and regulatory compliance, leading to unexpected penalties.',
    decisions: 'Chose Prophet over ARIMA for its superior handling of missing emission logs and weekly seasonality; used Isolation Forest for robust, high-dimensional anomaly detection without needing labeled outliers.',
    metrics: [
      { label: 'Forecast Accuracy', value: '94%' },
      { label: 'Prediction Window', value: '7-14 Days' },
      { label: 'Compliance', value: '100%' }
    ],
    image: '/greenco2.png',
    liveLink: 'https://green-co-2.vercel.app/', 
    githubLink: 'https://github.com/Ayush-Ranjane/GreenCO2',
    detailLink: '/projects/greenco2',
    stack: ['Python', 'Flask', 'React', 'PostgreSQL', 'Prophet', 'Isolation Forest', 'Docker', 'JWT', 'REST APIs'],
    accent: 'bg-primary text-primary-foreground',
  },
  {
    number: '02',
    title: 'AQI Prediction System',
    tag: 'Time-Series ML',
    description: 'End-to-end Air Quality Index forecasting system. Uses XGBoost and Random Forest to predict AQI from 11 distinct pollutant parameters with high precision.',
    problem: 'Citizens and authorities lack granular, localized air quality forecasts based on high-dimensional environmental sensor data.',
    decisions: 'Deployed XGBoost over Random Forest for gradient-based optimization on non-linear pollutant correlations, ensuring maximum accuracy on messy real-world data.',
    metrics: [
      { label: 'R² Score', value: '0.92' },
      { label: 'RMSE', value: '<2.5' },
      { label: 'Pollutants', value: '11' }
    ],
    image: '/aqi.png',
    liveLink: 'https://aqi-prediction-analysis-system.onrender.com/',
    githubLink: 'https://github.com/Ayush-Ranjane/AQI-Prediction-Analysis-System',
    detailLink: '/projects/aqi',
    stack: ['Python', 'XGBoost', 'Random Forest', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy'],
    accent: 'bg-foreground text-background',
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Featured Projects<span className="text-secondary">.</span>
          </h2>
          <span className="hidden font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:block">
            03 / Case studies
          </span>
        </div>
        <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Applied ML systems, not template demos
        </p>

        <div className="mt-12 flex flex-col gap-12 md:gap-20">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group glass relative flex flex-col lg:flex-row rounded-xl border-2 border-foreground shadow-brutal-lg overflow-hidden hover:shadow-brutal-xl hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              {/* Left Column: Content */}
              <div className="flex flex-col p-6 md:p-10 lg:w-[55%] relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className={`inline-block rounded-md border-2 border-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider transition-transform group-hover:rotate-2 ${project.accent}`}
                  >
                    {project.tag}
                  </span>
                  <span className="font-mono text-3xl font-bold text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">
                    {project.number}
                  </span>
                </div>

                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  {project.description}
                </p>

                <div className="space-y-6 flex-1">
                  <div className="group/problem cursor-default">
                    <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full group-hover/problem:scale-150 transition-transform"></span> The Problem
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-foreground/20 pl-4 ml-1 group-hover/problem:border-secondary group-hover/problem:text-foreground transition-colors">
                      {project.problem}
                    </p>
                  </div>
                  <div className="group/decision cursor-default">
                    <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full group-hover/decision:scale-150 transition-transform"></span> Architecture Decisions
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-foreground/20 pl-4 ml-1 group-hover/decision:border-primary group-hover/decision:text-foreground transition-colors">
                      {project.decisions}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t-2 border-foreground/10">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col group/metric hover:-translate-y-1 transition-transform cursor-default">
                      <span className="text-2xl md:text-3xl font-black text-foreground group-hover/metric:text-primary transition-colors">{metric.value}</span>
                      <span className="font-mono text-[10px] sm:text-xs font-bold text-muted-foreground uppercase">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border-2 border-foreground bg-card px-2.5 py-1 font-mono text-xs font-semibold shadow-brutal-sm hover:bg-foreground hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Image and Links */}
              <div className="lg:w-[45%] flex flex-col bg-foreground border-t-2 lg:border-t-0 lg:border-l-2 border-foreground">
                <div className="flex-1 relative min-h-[300px] bg-black/10 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={`${project.title} Screenshot`} 
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 ring-inset ring-2 ring-foreground pointer-events-none"></div>
                </div>
                
                {/* CTA Links Strip */}
                <div className="flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-foreground bg-card border-t-2 border-foreground">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 press-effect flex items-center justify-center gap-2 py-4 font-bold text-sm bg-[#b8ff5a] hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 press-effect flex items-center justify-center gap-2 py-4 font-bold text-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> View Source
                  </a>
                  <a 
                    href={project.detailLink}
                    className="flex-1 press-effect flex items-center justify-center gap-2 py-4 font-bold text-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    Deep Dive <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
