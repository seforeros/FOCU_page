import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhySol } from "@/components/why-sol"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import { Installers } from "@/components/installers"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhySol />
      <HowItWorks />
      <Benefits />
      <Installers />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
