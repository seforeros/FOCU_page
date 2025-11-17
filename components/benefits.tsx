import { Card } from "@/components/ui/card"
import { DollarSign, TrendingUp, Home, Leaf } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: "Ahorro en tu factura eléctrica",
    description:
      "Reduce tu consumo de energía de la red hasta en un 90% y protege tu bolsillo de las alzas tarifarias.",
  },
  {
    icon: TrendingUp,
    title: "Protección frente a alzas tarifarias",
    description: "Con energía solar generas tu propia electricidad, independizándote de los incrementos en tarifas.",
  },
  {
    icon: Home,
    title: "Incremento del valor de tu propiedad",
    description: "Las propiedades con sistemas solares tienen mayor valorización en el mercado inmobiliario.",
  },
  {
    icon: Leaf,
    title: "Contribución al medio ambiente",
    description: "Reduce tu huella de carbono y contribuye a un futuro más sostenible para Colombia.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 text-balance">
            Beneficios de la energía solar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Descubre cómo un sistema solar puede transformar tu relación con la energía
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 min-w-max sm:min-w-0">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="p-6 border-gray-200 hover:shadow-lg transition-shadow w-72 sm:w-auto flex-shrink-0 sm:flex-shrink">
                  <div className="mb-4 h-12 w-12 rounded-xl bg-solar-green/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-solar-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
