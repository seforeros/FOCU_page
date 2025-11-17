import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { TierOneEquipment } from "@/components/tier-one-equipment"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <TierOneEquipment />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
