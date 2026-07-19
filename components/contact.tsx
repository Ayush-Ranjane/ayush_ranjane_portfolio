'use client'

import { useState } from 'react'
import { Copy, Check, Send, ExternalLink, Database } from 'lucide-react'

const EMAIL = 'ayushranjane@gmail.com'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-dots px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* CTA block */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-foreground bg-primary p-6 shadow-brutal-lg md:p-10 lg:col-span-5">
            <div>
              <h2 className="text-4xl font-bold leading-none tracking-tighter text-balance sm:text-5xl">
                Let&apos;s build something impactful
                <span className="text-secondary">.</span>
              </h2>
              <div className="mt-4 flex flex-col gap-5">
                <p className="leading-relaxed text-primary-foreground/90 font-medium">
                  Open to AI/ML internships, research opportunities, and
                  real-world problem solving.
                </p>
                <div className="inline-flex items-center gap-2.5 font-mono text-sm font-bold bg-background text-foreground w-fit px-3 py-1.5 border-2 border-foreground shadow-brutal-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b8ff5a] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#b8ff5a] border border-black"></span>
                  </span>
                  I usually reply within 24 hours
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="press-effect inline-flex items-center justify-between gap-2 rounded-lg border-2 border-foreground bg-card px-4 py-3 font-mono text-sm font-bold shadow-brutal-sm"
              >
                {EMAIL}
                {copied ? (
                  <Check className="size-4 text-secondary" aria-hidden="true" />
                ) : (
                  <Copy className="size-4" aria-hidden="true" />
                )}
                <span className="sr-only">{copied ? 'Email copied' : 'Copy email address'}</span>
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/Ayush-Ranjane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-effect flex items-center justify-between gap-2 rounded-lg border-2 border-foreground bg-card px-4 py-3 text-sm font-bold text-foreground shadow-brutal-sm"
                >
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </div>
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ayush-ranjane-61051b303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-effect flex items-center justify-between gap-2 rounded-lg border-2 border-foreground bg-[#0077b5] px-4 py-3 text-sm font-bold text-white shadow-brutal-sm"
                >
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                  </div>
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>

                <a
                  href="https://x.com/AyushRanjane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-effect flex items-center justify-between gap-2 rounded-lg border-2 border-foreground bg-foreground px-4 py-3 text-sm font-bold text-background shadow-brutal-sm"
                >
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    Twitter / X
                  </div>
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>

                <a
                  href="https://www.kaggle.com/ayushranjane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-effect flex items-center justify-between gap-2 rounded-lg border-2 border-foreground bg-[#20BEFF] px-4 py-3 text-sm font-bold text-white shadow-brutal-sm"
                >
                  <div className="flex items-center gap-2"><Database className="size-4" /> Kaggle</div>
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4 rounded-xl border-2 border-foreground p-6 shadow-brutal md:p-10 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-xs font-bold uppercase tracking-wider">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-lg border-2 border-foreground bg-card px-4 py-3 text-sm font-medium outline-none focus:shadow-brutal-sm"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs font-bold uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-lg border-2 border-foreground bg-card px-4 py-3 text-sm font-medium outline-none focus:shadow-brutal-sm"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs font-bold uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="flex-1 resize-none rounded-lg border-2 border-foreground bg-card px-4 py-3 text-sm font-medium leading-relaxed outline-none focus:shadow-brutal-sm"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs text-muted-foreground">
                Opens your email client via mailto
              </p>
              <button
                type="submit"
                className="press-effect inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-secondary px-6 py-3 font-bold text-secondary-foreground shadow-brutal"
              >
                Send Message
                <Send className="size-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
