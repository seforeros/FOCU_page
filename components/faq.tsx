"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto me cuesta usar SOL?",
    answer:
      "La asesoría, el diseño preliminar y la comparación de ofertas son gratis para ti. Solo pagas el sistema que decidas instalar, directamente con el instalador que elijas.",
  },
  {
    question: "¿Cuánto puedo ahorrar?",
    answer:
      "Entre 60% y 85% de tu factura, según tu consumo y tu techo. Nunca el 100%: el cargo fijo de comercialización sigue llegando. En tu diseño preliminar te mostramos la cifra para tu caso.",
  },
  {
    question: "¿Quién instala los paneles?",
    answer:
      "El instalador que tú elijas de nuestra red. Todos pasan por una verificación: cumplimiento RETIE, experiencia comprobada, equipos Tier 1 y garantías claras. Nosotros te acompañamos de principio a fin.",
  },
  {
    question: "¿Por qué debería creerle a SOL?",
    answer:
      "Porque no te vendemos un equipo: todos los instaladores cotizan sobre el mismo diseño y tú comparas con los mismos números.",
  },
  {
    question: "¿Ofrecen financiación?",
    answer: "Te ayudamos a encontrar opciones de financiación según tu perfil y el tamaño de tu proyecto.",
  },
  {
    question: "¿Dónde están?",
    answer:
      "Hoy trabajamos en Bogotá y la Sabana. Si estás en otra ciudad, escríbenos y te contamos cuándo llegamos.",
  },
  {
    question: "¿Cuánto tiempo dura la instalación?",
    answer:
      "Para una casa (3 a 5 kWp), normalmente de 1 a 2 días. Los trámites con el operador de red toman más tiempo, y te acompañamos en ellos.",
  },
  {
    question: "¿Necesito cambiar mi contador de energía?",
    answer:
      "En la mayoría de casos, sí. Se necesita un contador bidireccional, que mide la energía que consumes y la que entregas a la red. El instalador hace el cambio y nosotros te acompañamos en el proceso.",
  },
  {
    question: "¿Qué pasa en días nublados?",
    answer:
      "Los paneles solares funcionan incluso en días nublados, aunque con menor eficiencia. Tu sistema seguirá generando energía, y cuando no sea suficiente, automáticamente tomas energía de la red eléctrica.",
  },
  {
    question: "¿Puedo instalar energía solar en mi apartamento?",
    answer:
      "Depende del acceso al techo del edificio y del reglamento de propiedad horizontal. Te ayudamos a evaluar si es viable.",
  },
]

export function FAQ() {
  return (
    <section id="preguntas" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 text-pretty">Lo que más nos preguntan</p>
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
      </div>
    </section>
  )
}
