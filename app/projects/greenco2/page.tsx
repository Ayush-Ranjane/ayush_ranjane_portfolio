

import { ArrowLeft, ExternalLink, Database } from 'lucide-react'
import Link from 'next/link'

export default function GreenCO2Page() {
  return (
    <main className="min-h-screen bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl glass p-6 md:p-12 border-2 border-foreground rounded-2xl shadow-brutal-lg">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-bold mb-8 hover:bg-primary/20 px-3 py-1.5 rounded-md transition-colors">
          <ArrowLeft className="size-5" /> Back to Projects
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-black mb-4">🌿 GreenCO2</h1>
        <p className="text-xl md:text-2xl font-bold text-muted-foreground mb-8">AI-Powered CO₂ Emission Monitoring &amp; Compliance Platform</p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-primary text-primary-foreground font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Python 3.11</span>
          <span className="bg-secondary text-secondary-foreground font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Flask 3.x</span>
          <span className="bg-[#61DAFB] text-black font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">React 19</span>
          <span className="bg-[#336791] text-white font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">PostgreSQL 15</span>
          <span className="bg-[#2496ED] text-white font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Docker Ready</span>
        </div>

        <div className="space-y-8 text-lg">
          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Overview</h2>
            <p className="leading-relaxed">
              <strong>GreenCO2</strong> is a full-stack SaaS platform that helps companies track, analyze, and reduce their CO₂ emissions. It provides real-time dashboards with daily/monthly emission metrics, AI-powered predictions using Facebook Prophet for 7–14 day forecasts, and anomaly detection using Isolation Forest to flag unusual emission spikes.
            </p>
            <p className="leading-relaxed mt-4">
              It also features automated alerts delivered via email when thresholds are breached, and generates PDF compliance reports formatted against CPCB standards.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Features</h2>
            <ul className="list-disc list-inside space-y-2 marker:text-primary marker:text-xl">
              <li><strong>🔐 JWT Auth:</strong> Stateless Bearer token authentication</li>
              <li><strong>📊 Dashboard:</strong> Live KPIs: today total, monthly total, 7-day trend</li>
              <li><strong>📝 Emission Logging:</strong> Multi-source entry (diesel, petrol, natural gas, electricity)</li>
              <li><strong>🔮 ML Predictions:</strong> Prophet-based 7–14 day CO₂ forecasts per company</li>
              <li><strong>🔬 Anomaly Detection:</strong> Isolation Forest flags unusual emission events</li>
              <li><strong>🚨 Smart Alerts:</strong> Threshold / trend / anomaly / prediction alerts</li>
              <li><strong>📧 Email Notifications:</strong> Multi-recipient HTML email alerts via SMTP</li>
              <li><strong>📄 PDF Reports:</strong> Professional compliance reports with ReportLab</li>
              <li><strong>⏰ Auto-Scheduler:</strong> Retrains models daily, sweeps alerts hourly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Architecture &amp; ML Engine</h2>
            <p className="leading-relaxed mb-4">
              The architecture consists of a React SPA browser frontend, communicating via HTTP/REST + JWT Bearer tokens to a Flask Backend running on Gunicorn. Data is persisted in PostgreSQL. 
            </p>
            <div className="bg-card p-6 rounded-xl border-2 border-foreground font-mono text-sm shadow-brutal overflow-x-auto">
              <code>
                Browser (React SPA) <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;HTTP/REST + JWT Bearer <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ <br/>
                Flask Backend (Gunicorn) <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Routes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ thin request/response handlers <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ scheduler, business logic <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── ML Engine&nbsp;&nbsp;&nbsp;&nbsp;→ Prophet + Isolation Forest models <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ <br/>
                PostgreSQL Database
              </code>
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">ML Scheduled Jobs</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Every 24 hours:</strong> `train_all_models()` retrains Prophet for all companies.</li>
              <li><strong>Every 1 hour:</strong> Alert engine runs for all companies, emails new alerts.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
