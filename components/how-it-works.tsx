import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Lightbulb, Wrench, Award, Sun } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: "Diagnóstico y simulación",
    description: "Analizamos tu consumo y simulamos tu sistema solar.",
    icon: FileText,
  },
  {
    number: 2,
    title: "Diseño y propuesta económica",
    description: "Diseñamos la solución a la medida y te mostramos ahorros, inversión y opciones de financiación.",
    icon: Lightbulb,
  },
  {
    number: 3,
    title: "Instalación y legalización",
    description: "Instalamos el sistema con personal certificado y gestionamos la conexión con la empresa de energía.",
    icon: Wrench,
  },
  {
    number: 4,
    title: "Certificación del sistema",
    description: "Enviamos documentación y agendamos visita para legalización y certificación.",
    icon: Award,
  },
  {
    number: 5,
    title: "¡Tu primer kilovatio solar!",
    description:
      "Monitoreamos el desempeño y ofrecemos planes de mantenimiento para toda la vida útil del sistema (20-25 años).",
    icon: Sun,
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
            5 pasos para instalar un sistema de energía solar en tu hogar
          </h2>
        </div>

        <div className="mb-12 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-5 min-w-max sm:min-w-0">
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

        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong className="text-gray-900">Vida útil del proyecto:</strong> Los sistemas solares tienen una vida útil
            de 20-25 años con garantías de potencia y desempeño. Ofrecemos monitoreo continuo y planes de mantenimiento
            para asegurar el máximo rendimiento durante toda la vida del sistema.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">Ver si tu techo es apto →</Button>
        </div>
      </div>
    </section>
  )
}
