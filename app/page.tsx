import { SiteHeader } from '@/components/site-header'
import NeoBrutalistHero from '@/components/hero-neo-brutalist'
import Certificates from '@/components/certificates'
import { Reveal } from '@/components/reveal'
import { Marquee } from '@/components/marquee'
import { About } from '@/components/about'
import { Timeline } from '@/components/timeline'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Impact } from '@/components/impact'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="scroll-smooth">
        <NeoBrutalistHero />
        <Marquee />
        <Reveal><About /></Reveal>
        <Reveal><Timeline /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Certificates /></Reveal>
        <Reveal><Impact /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  )
}
