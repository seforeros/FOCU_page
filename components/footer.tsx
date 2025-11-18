import Link from "next/link"
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  const whatsappLink = "https://wa.me/573114721514"

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Únete a la revolución energética</h2>
          <p className="text-gray-400 mb-8 text-pretty max-w-2xl mx-auto">
            Transforma tu forma de consumir energía y contribuye a un futuro más sostenible
          </p>
          <Button 
            className="bg-solar-yellow text-gray-900 hover:bg-solar-yellow/90 font-semibold"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            ¡Contáctanos!
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo2.png"
                  alt="FOCU Energía Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">FOCU Energía SAS</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Energía limpia, asequible y digital para Colombia. Diseñamos e instalamos sistemas solares que transforman
              tu relación con la energía.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <strong className="text-white">Email:</strong> info@focuenergia.com
              </p>
              <p>
                <strong className="text-white">Ciudad principal:</strong> Bogotá, Colombia
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="hover:text-white transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#casos" className="hover:text-white transition-colors">
                  Casos de éxito
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-3">
              {/* TODO: Replace with actual social media links */}
              <a
                href="https://www.instagram.com/focuenergia/"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://web.facebook.com/focuenergia"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/focuenergia"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 FOCU Energía. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Política de datos
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
