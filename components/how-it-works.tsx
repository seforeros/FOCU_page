import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Lightbulb, Users, Sun } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: "Cuéntanos de tu casa",
    description: "Envíanos tu factura de energía o agenda una asesoría gratis.",
    icon: FileText,
  },
  {
    number: 2,
    title: "Recibe tu diseño preliminar",
    description: "Te mostramos el tamaño de tu sistema, el ahorro estimado, la inversión y el tiempo de retorno.",
    icon: Lightbulb,
  },
  {
    number: 3,
    title: "Compara ofertas",
    description: "Instaladores verificados cotizan sobre el mismo diseño. Tú eliges.",
    icon: Users,
  },
  {
    number: 4,
    title: "Financia e instala",
    description:
      "Te ayudamos con la financiación y te acompañamos en la instalación y los trámites con el operador de red.",
    icon: Sun,
  },
]

const mockups = [
  {
    src: "/images/mockups/diseno-preliminar.jpg",
    alt: "Ejemplo de diseño preliminar de un sistema solar",
    caption: "Paso 2 · Tu diseño preliminar",
  },
  {
    src: "/images/mockups/ofertas-instaladores.jpg",
    alt: "Ejemplo de proyectos recibiendo ofertas de instaladores",
    caption: "Paso 3 · Ofertas de instaladores",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-solar-yellow bg-solar-yellow/10 text-solar-yellow font-medium text-sm mb-4">
            Toma el control de tu energía
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
            Así de fácil: 4 pasos para tener energía solar en tu casa
          </h2>
        </div>

        <div className="mb-12 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 min-w-max sm:min-w-0">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.number} className="p-6 hover:shadow-lg transition-shadow bg-white border-gray-200 w-72 sm:w-auto flex-shrink-0 sm:flex-shrink">
                  <div className="mb-4 h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mockups */}
        <div className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            {mockups.map((mockup) => (
              <figure key={mockup.src}>
                <Image
                  src={mockup.src}
                  alt={mockup.alt}
                  width={1600}
                  height={800}
                  className="rounded-2xl border border-gray-200 shadow-sm w-full h-auto"
                />
                <figcaption className="text-sm text-gray-600 mt-3">
                  <strong className="text-gray-900">{mockup.caption}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-6">Imágenes ilustrativas de la plataforma.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong className="text-gray-900">Un sistema solar dura entre 20 y 25 años.</strong> Por eso no basta con
            instalarlo: te acompañamos para que el instalador que elijas entregue un sistema con garantías y que rinda
            lo que prometió.
          </p>
          <a
            href="https://studio.seosenergy.co/solar-simulator?customerId=765e6908-a1e9-4c59-9a65-8b79523fd8cd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Calcula tu ahorro →</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
