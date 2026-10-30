import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const perks = [
  "Proyectos validados con el cliente y con diseño preliminar.",
  "Consumo, techo y datos técnicos listos para cotizar.",
  "Clientes que ya decidieron instalar.",
]

export function Installers() {
  return (
    <section id="instaladores" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 items-center rounded-3xl bg-gray-900 text-white p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-solar-yellow bg-solar-yellow/10 text-solar-yellow font-medium text-sm mb-4">
              Para instaladores
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-balance">¿Eres instalador? Únete a la red SOL</h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-pretty">
              Recibe proyectos precalificados en tu zona, con la información técnica completa. Menos tiempo buscando
              clientes, más tiempo instalando.
            </p>
            <ul className="space-y-3 mb-6">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-solar-yellow flex-shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mb-8">
              Para entrar a la red verificamos cumplimiento RETIE, experiencia, equipos Tier 1 y garantías.
            </p>
            <a
              href="https://wa.me/573114721514?text=Hola%2C%20soy%20instalador%20y%20quiero%20unirme%20a%20la%20red%20SOL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-solar-yellow text-gray-900 hover:bg-solar-yellow/90 font-semibold">
                Quiero ser instalador SOL
              </Button>
            </a>
          </div>

          <figure>
            <Image
              src="/images/mockups/mapa-zonas.jpg"
              alt="Ejemplo de mapa de zonas con proyectos priorizados"
              width={1600}
              height={800}
              className="rounded-2xl w-full h-auto"
            />
            <figcaption className="text-xs text-gray-400 mt-2">Imagen ilustrativa.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
