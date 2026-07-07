import { useScrollReveal } from '../../hooks/useScrollReveal'
import { BeforeSection } from './BeforeSection'
import { DefinitionSection } from './DefinitionSection'
import { ExistMoreSection } from './ExistMoreSection'
import { ExperienceSection } from './ExperienceSection'
import { FacilitatorSection } from './FacilitatorSection'
import { FAQSection } from './FAQSection'
import { Footer } from './Footer'
import { HeroSection } from './HeroSection'
import { OutcomesSection } from './OutcomesSection'
import { PhilosophySection } from './PhilosophySection'
import { PillarsSection } from './PillarsSection'
import { PricingSection } from './PricingSection'
import { PropositionSection } from './PropositionSection'
import { ScienceSection } from './ScienceSection'
import { TopNavBar } from './TopNavBar'

export function LandingPage() {
  useScrollReveal()

  return (
    <div className="bg-surface text-charcoal selection:bg-primary-container selection:text-on-primary-container">
      <TopNavBar />
      <main>
        <HeroSection />
        <DefinitionSection />
        <PhilosophySection />
        <PropositionSection />
        <ExistMoreSection />
        <ExperienceSection />
        <PillarsSection />
        <ScienceSection />
        <OutcomesSection />
        <FacilitatorSection />
        <BeforeSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
