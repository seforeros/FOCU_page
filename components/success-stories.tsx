import { Card } from "@/components/ui/card"
import { MapPin, Zap, TrendingUp } from "lucide-react"

const stories = [
  {
    type: "Residencial",
    location: "Medellín, Antioquia",
    power: "5 kWp",
    savings: "65% ahorro mensual",
    testimonial: "Increíble cómo ha bajado nuestra factura. La instalación fue rápida y el equipo muy profesional.",
    client: "Familia Rodríguez",
  },
  {
    type: "Comercial",
    location: "Bogotá, Cundinamarca",
    power: "30 kWp",
    savings: "70% ahorro mensual",
    testimonial: "Una inversión que se paga sola. En menos de 5 años recuperamos la inversión completa.",
    client: "Supermercado El Sol",
  },
  {
    type: "Industrial",
    location: "Cali, Valle del Cauca",
    power: "150 kWp",
    savings: "80% ahorro mensual",
    testimonial: "Excelente servicio desde el diagnóstico hasta la puesta en marcha. Totalmente recomendados.",
    client: "Manufactura TechCo",
  },
]

export function SuccessStories() {
  return (
    <section id="casos" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 text-balance">Casos de éxito</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Conoce cómo hemos ayudado a hogares, negocios e industrias a transformar su energía
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.client} className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-solar-yellow/20 text-solar-yellow">
                  {story.type}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{story.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="h-4 w-4" />
                  <span>Potencia instalada: {story.power}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-solar-green">
                  <TrendingUp className="h-4 w-4" />
                  <span>{story.savings}</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-solar-yellow pl-4 mb-4">
                <p className="text-sm text-gray-700 italic leading-relaxed">"{story.testimonial}"</p>
              </blockquote>

              <p className="text-sm font-medium text-gray-900">— {story.client}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
