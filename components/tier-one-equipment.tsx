import { Card } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

const equipment = [
  {
    title: "Paneles solares Tier 1",
    description: "Módulos fotovoltaicos de fabricantes bancables con garantía de potencia a 25 años.",
  },
  {
    title: "Inversores de marcas reconocidas",
    description: "Equipos de conversión de alta eficiencia con garantías extendidas.",
  },
  {
    title: "Estructuras certificadas",
    description: "Sistemas de montaje diseñados para soportar condiciones climáticas extremas.",
  },
  {
    title: "Cableado y protecciones de norma",
    description: "Instalación eléctrica que cumple con todas las normativas colombianas.",
  },
]

const brandLogos = [
  {
    name: "Deye",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deye_LOGO-0keSfsLsCNKnuvNhX6Nwi59Ypagfz5.png"
  },
  {
    name: "MUST",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/must_logo-Bor9e7iYeJaIKHTqn5iSMQiTPIzuO4.png"
  },
  {
    name: "JA Solar",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JA_Solar_Logo-K87QdNf9p5tljGKo1piDsVYLr33Eol.png"
  },
  {
    name: "Growatt",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Growatt-logo-ABpp3Hotbma7maSPSG45Wy65pgu5z5.png"
  },
  {
    name: "Hoymiles",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hoymiles_logo-KLYA1OuPW1sk5pRxJVLp2men82k2DA.png"
  },
  {
    name: "JinKo Solar",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jinko_Solar_logo-Rky243T27UFNDdDDXI1W8447dNElfN.png"
  }
]

export function TierOneEquipment() {
  return (
    <section id="equipos" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6 text-balance">
            Solo trabajamos con equipos Tier 1 en cada instalación
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-pretty">
            <strong className="text-gray-900">¿Qué significa Tier 1?</strong> Son módulos y componentes de fabricantes
            bancables, con garantías de potencia a 25 años y certificaciones internacionales. Esto asegura la máxima
            calidad, durabilidad y rendimiento de tu inversión.
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 min-w-max sm:min-w-0">
            {equipment.map((item) => (
              <Card key={item.title} className="p-6 bg-white border-gray-200 w-72 sm:w-auto flex-shrink-0 sm:flex-shrink">
                <CheckCircle2 className="h-8 w-8 text-solar-green mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-8">Trabajamos con las mejores marcas</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={brand.url || "/placeholder.svg"} 
                  alt={`${brand.name} logo`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
