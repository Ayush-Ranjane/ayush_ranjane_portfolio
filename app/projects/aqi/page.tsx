import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function AqiPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl glass p-6 md:p-12 border-2 border-foreground rounded-2xl shadow-brutal-lg">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-bold mb-8 hover:bg-primary/20 px-3 py-1.5 rounded-md transition-colors">
          <ArrowLeft className="size-5" /> Back to Projects
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-black mb-4">🌬️ AQI Prediction System</h1>
        <p className="text-xl md:text-2xl font-bold text-muted-foreground mb-8">Empowering Environmental Awareness with AI-Driven Air Quality Forecasting</p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-[#F7931E] text-white font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Scikit-Learn</span>
          <span className="bg-foreground text-background font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">XGBoost</span>
          <span className="bg-primary text-primary-foreground font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Flask</span>
          <span className="bg-secondary text-secondary-foreground font-bold px-3 py-1 border-2 border-foreground shadow-brutal-sm rounded-md">Pandas &amp; NumPy</span>
        </div>

        <div className="space-y-8 text-lg">
          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Overview</h2>
            <p className="leading-relaxed">
              In an era of rising urbanization and industrialization, air pollution has become a critical global health concern. This project provides a <strong>comprehensive end-to-end solution</strong> for predicting the Air Quality Index (AQI) using machine learning.
            </p>
            <p className="leading-relaxed mt-4">
              By analyzing the concentration of key pollutants (PM2.5, PM10, NO2, CO, etc.), the system provides high-precision forecasts, helping citizens and authorities make informed decisions. It bridges the gap between raw environmental data and actionable health insights through a modern, high-performance web interface.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Features</h2>
            <ul className="list-disc list-inside space-y-2 marker:text-primary marker:text-xl">
              <li><strong>🚀 Multi-Model Prediction:</strong> Choose between Random Forest, XGBoost, and Linear Regression for tailored accuracy.</li>
              <li><strong>📊 Granular Pollutant Analysis:</strong> Processes 11 distinct parameters including PM2.5, PM10, NOx, CO, O3, and Benzene.</li>
              <li><strong>🎨 Modern UI/UX:</strong> A stunning dark-mode dashboard with real-time feedback and glassmorphic design elements.</li>
              <li><strong>⚡ Fast Inference:</strong> Optimized model serialization using `pickle` for near-instantaneous results.</li>
              <li><strong>📍 City-Specific Insights:</strong> Context-aware forecasting based on localized historical data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4 pb-2 border-b-4 border-foreground w-max">Pipeline &amp; Architecture</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-2">How It Works</h3>
            <ol className="list-decimal list-inside space-y-2 marker:font-bold">
              <li><strong>Data Ingestion:</strong> User inputs pollutant levels through the UI.</li>
              <li><strong>Preprocessing:</strong> Data is converted to a NumPy array; if Linear Regression is chosen, a pre-trained scaler is applied.</li>
              <li><strong>Model Inference:</strong> The selected `.pkl` model predicts the raw AQI value.</li>
              <li><strong>Classification:</strong> The raw value is categorized into status levels (Good, Moderate, Poor, etc.) based on standard environmental benchmarks.</li>
              <li><strong>Visualization:</strong> The UI dynamically updates the AQI scale and color-coded results.</li>
            </ol>
          </section>
          
          <div className="mt-12 flex gap-4">
            <a href="https://aqi-prediction-analysis-system.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 border-2 border-foreground shadow-brutal rounded-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
              Live Demo <ExternalLink className="size-5" />
            </a>
            <a href="https://github.com/Ayush-Ranjane/AQI-Prediction-Analysis-System" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-foreground font-bold px-6 py-3 border-2 border-foreground shadow-brutal rounded-md hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
              Repository <ExternalLink className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
