import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calculator, Calendar, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-techo-solar.jpg"
          alt="Techo de una casa con paneles solares, vista aérea"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-balance">
              Energía solar para tu casa, sin complicaciones
            </h1>
            <p className="mt-6 text-lg text-gray-200 text-pretty max-w-2xl">
              Asesoría gratis, diseño de tu sistema, ofertas de instaladores verificados y ayuda con la financiación.
              Todo en un solo lugar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendar.app.google/o31C57dknBHuzXCK7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-solar-yellow text-gray-900 hover:bg-solar-yellow/90 font-semibold">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agenda tu asesoría gratis
                </Button>
              </a>
              <a
                href="https://wa.me/573114721514?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20energ%C3%ADa%20solar%20para%20mi%20casa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Escríbenos por WhatsApp
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-solar-green" />
                <span>Asesoría y diseño sin costo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-solar-green" />
                <span>Instaladores verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-solar-green" />
                <span>Bogotá y Sabana</span>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <Card className="bg-white p-8 shadow-2xl lg:ml-auto max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-solar-yellow/20 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-solar-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">¿Cuánto podrías ahorrar?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Calcula en menos de 1 minuto tu ahorro estimado, la inversión y el tiempo de retorno.
            </p>
            <a
              href="https://studio.seosenergy.co/solar-simulator?customerId=765e6908-a1e9-4c59-9a65-8b79523fd8cd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-solar-yellow hover:bg-solar-yellow/90 text-gray-900 font-semibold">
                <Calculator className="h-5 w-5 mr-2" />
                Calcula tu ahorro
              </Button>
            </a>
            <p className="text-xs text-gray-500 mt-3">
              Estimación de referencia. El ahorro real suele estar entre 60% y 85% de tu factura, porque el cargo fijo
              de comercialización no desaparece.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
