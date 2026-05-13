import { NavBar } from './_components/nav-bar'
import { HeroSection } from './_components/hero-section'
import { ProblemSection } from './_components/problem-section'
import { SolutionSection } from './_components/solution-section'
import { WhatsInsideSection } from './_components/whats-inside-section'
import { PricingSection } from './_components/pricing-section'
import { SocialProofSection } from './_components/social-proof-section'
import { FaqSection } from './_components/faq-section'
import { FinalCtaSection } from './_components/final-cta-section'
import { FooterSection } from './_components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatsInsideSection />
      <PricingSection />
      <SocialProofSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  )
}
