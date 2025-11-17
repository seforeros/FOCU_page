import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sectors/residential-sector2.png"
          alt="Casa con paneles solares"
          fill
          className="object-cover brightness-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
        </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-balance">
              Ahorra en tu factura de energía con sistemas solares a la medida
            </h1>
            <p className="mt-6 text-lg text-gray-200 text-pretty max-w-2xl">
              Diseñamos, instalamos y financiamos proyectos solares residenciales, comerciales e industriales en toda
              Colombia.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendar.app.google/o31C57dknBHuzXCK7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agenda una asesoría gratis
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-solar-green" />
                <span>Equipos Tier 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-solar-green" />
                <span>Garantías de larga duración</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-solar-green" />
                <span>Más de 500+ kW instalados</span>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <Card className="bg-white p-8 shadow-2xl lg:ml-auto max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-solar-yellow/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-solar-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Descubre tu ahorro solar en menos de 1 minuto</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Obtén una estimación de costos, retorno de inversión e impacto ambiental de tu proyecto.
            </p>
            <a
              href="https://studio.seosenergy.co/solar-simulator?customerId=765e6908-a1e9-4c59-9a65-8b79523fd8cd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-solar-yellow hover:bg-solar-yellow/90 text-gray-900 font-semibold">
                <Calendar className="h-5 w-5 mr-2" />
                Calcula tu ahorro en 1 minuto
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}
