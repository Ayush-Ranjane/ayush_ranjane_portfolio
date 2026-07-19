import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LifeSaverPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl glass p-6 md:p-12 border-2 border-foreground rounded-2xl shadow-brutal-lg">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-bold mb-8 hover:bg-primary/20 px-3 py-1.5 rounded-md transition-colors">
          <ArrowLeft className="size-5" /> Back to Projects
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-black mb-4">⚡ LifeSaver (Vibe2Ship)</h1>
        <p className="text-xl md:text-2xl font-bold text-muted-foreground mb-8">Your Hyper-Intelligent AI Productivity Co-Pilot</p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-foreground text-background font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Next.js 16</span>
          <span className="bg-secondary text-secondary-foreground font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Gemini AI</span>
          <span className="bg-[#FFCA28] text-black font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Firebase</span>
          <span className="bg-primary text-primary-foreground font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Tailwind CSS</span>
        </div>

        <div className="space-y-8 text-lg">
          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Overview</h2>
            <p className="leading-relaxed">
              <strong>LifeSaver</strong> moves beyond standard to-do lists by integrating a Gemini-powered AI coach, smart calendar slotting, goal alignment, and a seamless "Inbox Zero" task management philosophy. 
            </p>
            <p className="leading-relaxed mt-4">
              It acts as a 24/7 procrastination coach, instantly parses natural language into structured tasks, and intelligently schedules your life based on your energy patterns and goals.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Core Features</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-2">🧠 Deep AI Integration</h3>
            <ul className="list-disc list-inside space-y-2 marker:text-secondary marker:text-xl">
              <li><strong>Natural Language Parsing:</strong> Type or say <em>"dentist Friday 3pm, call Sarah after"</em> and the AI automatically extracts entities, creates tasks, sets reminders, and blocks your calendar.</li>
              <li><strong>Procrastination Coach:</strong> Stuck on a task? The AI diagnoses why you are procrastinating and generates a custom, actionable first step to break the inertia.</li>
              <li><strong>Smart Scheduling:</strong> Analyzes your calendar and energy patterns (Morning Maker vs. Night Owl) to suggest perfect calendar slots.</li>
              <li><strong>Autonomous Agent:</strong> Drafts emails, suggests rescheduling, breaks down massive tasks, and generates calendar events on your behalf.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">🎯 Goals &amp; Focus Engine</h3>
            <ul className="list-disc list-inside space-y-2 marker:text-secondary marker:text-xl">
              <li>Connect everyday tasks to larger, overarching goals and build habit streaks.</li>
              <li>Enter deep work with Pomodoro timers and ambient soundscapes.</li>
              <li>Identify your exact "Peak Hour" and "Peak Day" using predictive analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">System Flow</h2>
            <div className="bg-card p-6 rounded-xl border-2 border-foreground font-mono text-sm shadow-brutal overflow-x-auto">
              <code>
                User ──&gt; "Schedule Dentist at 3pm Friday, call Mom after" <br/>
                &nbsp;&nbsp;│ <br/>
                Client App ──&gt; Gemini AI Agent <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;│ <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Extracts Entities (Dentist, Call Mom) &amp; Time <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Queries User Energy Patterns &amp; Work Hours <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;└── Checks Calendar Availability (Google Auth) <br/>
                &nbsp;&nbsp;│ <br/>
                AI Fits slots perfectly &amp; saves Task/Event <br/>
                &nbsp;&nbsp;│ <br/>
                Client App &lt;── "All set! Dentist blocked at 3pm."
              </code>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
