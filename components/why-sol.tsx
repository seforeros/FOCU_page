const today = [
  "Cada instalador cotiza con sus propios números y no hay cómo comparar.",
  "Si no eres experto, no sabes a quién creerle.",
  "La financiación es otro trámite aparte.",
]

const withSol = [
  "Diseñamos tu sistema a partir de tu factura, con apoyo de inteligencia artificial.",
  "Instaladores verificados te hacen ofertas sobre el mismo diseño. Comparas de verdad.",
  "Te ayudamos a encontrar opciones de financiación.",
  "Te acompañamos hasta que tu sistema esté funcionando.",
]

export function WhySol() {
  return (
    <section id="por-que-sol" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-solar-yellow bg-solar-yellow/10 text-solar-yellow font-medium text-sm mb-4">
            Por qué SOL
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
            Instalar energía solar no debería ser tan complicado
          </h2>
        </div>

        <div className="grid rounded-2xl border border-gray-200 shadow-sm md:grid-cols-2 md:divide-x md:divide-gray-200">
          {/* Hoy */}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-3 w-3 rounded-sm bg-gray-400" />
              <h3 className="text-lg font-semibold text-gray-500">Hoy</h3>
            </div>
            <ul>
              {today.map((item, index) => (
                <li
                  key={item}
                  className={`py-4 text-gray-600 leading-relaxed ${
                    index < today.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Con SOL */}
          <div className="p-8 border-t border-gray-200 md:border-t-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-3 w-3 rounded-sm bg-solar-yellow" />
              <h3 className="text-lg font-semibold text-gray-900">Con SOL</h3>
            </div>
            <ul>
              {withSol.map((item, index) => (
                <li
                  key={item}
                  className={`py-4 font-medium text-gray-900 leading-relaxed ${
                    index < withSol.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
