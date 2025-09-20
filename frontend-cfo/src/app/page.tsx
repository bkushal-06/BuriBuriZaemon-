import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection, PricingSection } from "@/components/testimonials-pricing"
import { CTASection, Footer } from "@/components/cta-footer"
import { BgPattern } from "@/components/bgPattern"

export default function Home() {
  return (
    <BgPattern>
      <main>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </BgPattern>
  );
}
