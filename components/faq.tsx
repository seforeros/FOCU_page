"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "¿Cuánto tiempo dura la instalación?",
    answer:
      "El proceso de instalación típicamente toma entre 1 y 3 días dependiendo del tamaño del sistema. Para sistemas residenciales pequeños (3-5 kWp), generalmente completamos la instalación en 1-2 días.",
  },
  {
    question: "¿Qué pasa si un panel se daña?",
    answer:
      "Todos nuestros paneles cuentan con garantías del fabricante de hasta 25 años. En caso de daño o defecto, gestionamos directamente el reemplazo sin costo adicional para ti durante el período de garantía.",
  },
  {
    question: "¿Necesito cambiar mi contador de energía?",
    answer:
      "En la mayoría de casos, sí. Necesitarás un contador bidireccional que registre tanto la energía que consumes como la que produces. Nosotros gestionamos todo el proceso de cambio con tu empresa de energía.",
  },
  {
    question: "¿Qué pasa en días nublados?",
    answer:
      "Los paneles solares funcionan incluso en días nublados, aunque con menor eficiencia. Tu sistema seguirá generando energía, y cuando no sea suficiente, automáticamente tomas energía de la red eléctrica.",
  },
  {
    question: "¿Ofrecen financiación?",
    answer:
      "Sí, trabajamos con varias entidades financieras para ofrecer opciones de financiación flexibles. Te ayudamos a encontrar el plan que mejor se ajuste a tu presupuesto y necesidades.",
  },
  {
    question: "¿Puedo instalar energía solar en mi apartamento?",
    answer:
      "Depende de varios factores como el acceso al techo del edificio y el reglamento de propiedad horizontal. Te ayudamos a evaluar la viabilidad y gestionar los permisos necesarios con tu administración.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 text-pretty">Resolvemos tus dudas sobre energía solar</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-300 bg-transparent">
            Ver más preguntas →
          </Button>
        </div>
      </div>
    </section>
  )
}
