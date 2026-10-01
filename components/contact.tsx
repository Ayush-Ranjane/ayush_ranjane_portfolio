'use client'

import { useState } from 'react'
import { Copy, Check, Send, ExternalLink, Database } from 'lucide-react'

const EMAIL = 'ayushranjane@gmail.com'

const topics = ['Internship', 'Research', 'Project collab', 'Just saying hi']

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [activeTopic, setActiveTopic] = useState('Internship')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: 'a4bc68cf-db76-4639-80e4-cc08eb79d9c3',
          name: form.name,
          email: form.email,
          subject: `Portfolio inquiry: ${activeTopic} from ${form.name}`,
          message: form.message,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setIsSuccess(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[#F6F5F0] bg-[radial-gradient(#d1d1d1_2px,transparent_2px)] [background-size:24px_24px] px-4 py-20 md:py-28 font-sans">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left CTA block */}
          <div className="flex flex-col justify-between rounded-[24px] border-[3px] border-foreground bg-[#b8ff5a] p-8 md:p-12 shadow-[8px_8px_0_0_#111] lg:col-span-5 relative">
            <div>
              <span className="inline-block bg-foreground text-[#b8ff5a] font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-6">
                05 / Contact
              </span>
              <h2 className="text-[3.5rem] md:text-[4rem] font-black leading-[0.95] tracking-tight text-foreground text-balance">
                Let&apos;s build<br/>something<br/>impactful<span className="text-[#FF90E8]">.</span>
              </h2>
              <div className="mt-6">
                <p className="text-foreground/90 font-medium text-[16px] leading-relaxed max-w-[280px]">
                  Open to AI/ML internships, research opportunities, and real-world problem solving.
                </p>
                
                <div className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] font-bold bg-white text-foreground px-4 py-2 border-[2.5px] border-foreground shadow-[3px_3px_0_0_#111] rounded-full">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#b8ff5a] border-[1.5px] border-foreground"></span>
                  </span>
                  Usually replies within 24 hours
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl border-[3px] border-foreground bg-white p-2 shadow-[4px_4px_0_0_#111]">
                <span className="pl-3 font-mono text-[14px] font-bold text-foreground">
                  {EMAIL}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="press-effect inline-flex items-center justify-center gap-2 rounded-[8px] bg-foreground text-white px-5 py-2.5 text-xs font-bold transition-transform hover:-translate-y-0.5"
                >
                  {copied ? (
                    <Check className="size-4 text-[#b8ff5a]" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <a
                  href="https://github.com/Ayush-Ranjane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border-[3px] border-foreground bg-white px-4 py-3 text-sm font-bold text-foreground shadow-[4px_4px_0_0_#111] hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </div>
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ayush-ranjane-61051b303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border-[3px] border-foreground bg-[#0077b5] px-4 py-3 text-sm font-bold text-white shadow-[4px_4px_0_0_#111] hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                  </div>
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>

                <a
                  href="https://x.com/AyushRanjane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border-[3px] border-foreground bg-foreground px-4 py-3 text-sm font-bold text-background shadow-[4px_4px_0_0_#111] hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    Twitter / X
                  </div>
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>

                <a
                  href="https://www.kaggle.com/ayushranjane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border-[3px] border-foreground bg-[#20BEFF] px-4 py-3 text-sm font-bold text-foreground shadow-[4px_4px_0_0_#111] hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Database className="size-5" />
                    Kaggle
                  </div>
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col rounded-[24px] border-[3px] border-foreground bg-white p-8 md:p-12 shadow-[8px_8px_0_0_#111] lg:col-span-7"
          >
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-2">Send a message</h3>
              <p className="font-mono text-sm font-bold text-[#888]">Tell me what you&apos;re working on. I&apos;ll reply by email.</p>
            </div>

            <div className="mb-6">
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground mb-3">
                I&apos;M REACHING OUT ABOUT
              </p>
              <div className="flex flex-wrap gap-2">
                {topics.map(topic => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setActiveTopic(topic)}
                    className={`px-4 py-1.5 rounded-full border-[2.5px] border-foreground text-[13px] font-bold transition-all ${
                      activeTopic === topic 
                      ? 'bg-foreground text-white shadow-[2.5px_2.5px_0_0_#FF90E8]' 
                      : 'bg-white text-foreground hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_#111]'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mb-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border-[2.5px] border-foreground bg-white px-4 py-3 text-[15px] font-medium outline-none focus:shadow-[4px_4px_0_0_#111] transition-shadow placeholder:text-[#888]"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border-[2.5px] border-foreground bg-white px-4 py-3 text-[15px] font-medium outline-none focus:shadow-[4px_4px_0_0_#111] transition-shadow placeholder:text-[#888]"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8 relative">
              <label htmlFor="message" className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                maxLength={500}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none rounded-xl border-[2.5px] border-foreground bg-white px-4 py-3 text-[15px] font-medium leading-relaxed outline-none focus:shadow-[4px_4px_0_0_#111] transition-shadow pb-8 placeholder:text-[#888]"
                placeholder="What's the project or role, and how can I help?"
              />
              <div className="absolute bottom-3 right-4 font-mono text-[10px] font-bold text-[#888]">
                {form.message.length} / 500
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto">
              <p className="font-mono text-[11px] font-bold text-[#888] max-w-[200px] leading-relaxed">
                Sends a direct email straight to my inbox.
              </p>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`press-effect inline-flex items-center gap-2 rounded-xl border-[3px] border-foreground px-6 py-3 font-bold shadow-[4px_4px_0_0_#111] transition-all ${
                  isSuccess 
                    ? 'bg-[#b8ff5a] text-foreground' 
                    : isSubmitting
                    ? 'bg-muted text-muted-foreground'
                    : 'bg-[#FF90E8] text-foreground hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSuccess ? (
                  <>Sent Successfully <Check className="size-4" /></>
                ) : (
                  <>Send message <Send className="size-4" /></>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
