import { useScrollReveal } from '../../hooks/useScrollReveal'
import { DefinitionSection } from './DefinitionSection'
import { FacilitatorSection } from './FacilitatorSection'
import { FAQSection } from './FAQSection'
import { Footer } from './Footer'
import { HeroSection } from './HeroSection'
import { OutcomesSection } from './OutcomesSection'
import { PhilosophySection } from './PhilosophySection'
import { PillarsSection } from './PillarsSection'
import { PricingSection } from './PricingSection'
import { PropositionSection } from './PropositionSection'
import { TopNavBar } from './TopNavBar'

export function LandingPage() {
  useScrollReveal()

  return (
    <div className="bg-surface text-charcoal selection:bg-primary-container selection:text-on-primary-container">
      <TopNavBar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <PropositionSection />
        <DefinitionSection />
        <PillarsSection />
        <OutcomesSection />
        <FacilitatorSection />
        <FAQSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
