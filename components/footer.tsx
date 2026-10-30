"use client"

import Link from "next/link"
import { Instagram, Facebook, Linkedin, Calendar, MessageCircle } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  const whatsappLink =
    "https://wa.me/573114721514?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20energ%C3%ADa%20solar%20para%20mi%20casa"

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Tu casa con energía solar, sin complicaciones</h2>
          <p className="text-gray-400 mb-8 text-pretty max-w-2xl mx-auto">
            Agenda tu asesoría gratis o escríbenos. Te respondemos rápido.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://calendar.app.google/o31C57dknBHuzXCK7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto bg-solar-yellow text-gray-900 hover:bg-solar-yellow/90 font-semibold">
                <Calendar className="h-5 w-5 mr-2" />
                Agenda tu asesoría gratis
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Escríbenos por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-sol-by-focu-blanco.png"
                alt="SOL by FOCU"
                width={758}
                height={330}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Tu asesor solar: diseño de tu sistema, instaladores verificados y ayuda con la financiación, en un solo
              lugar.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <strong className="text-white">Email:</strong> info@focuenergia.com
              </p>
              <p>
                <strong className="text-white">Cobertura:</strong> Bogotá y Sabana
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
                <Link href="#instaladores" className="hover:text-white transition-colors">
                  Para instaladores
                </Link>
              </li>
              <li>
                <Link href="#preguntas" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/sol.byfocu/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/focuenergia"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/focuenergia"
                target="_blank"
                rel="noopener noreferrer"
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
          <p>© {new Date().getFullYear()} SOL by FOCU. Todos los derechos reservados.</p>
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
