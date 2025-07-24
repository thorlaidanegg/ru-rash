import { Hero } from "@/components/home/hero"
import { Services } from "@/components/home/services"
import { ValuePropositions } from "@/components/home/value-propositions"
import { Mission } from "@/components/home/mission"
import { Stats } from "@/components/home/stats"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <ValuePropositions />
      <Mission />
      <Stats />
      <CTA />
    </div>
  )
}
