"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calculator } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/images/logo2.png"
                alt="FOCU Energía Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">FOCU Energía SAS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#inicio" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Inicio
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Cómo funciona
            </Link>
            <Link href="#beneficios" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Beneficios
            </Link>
            <Link href="#equipos" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Equipos
            </Link>
          </div>

          {/* Calculator Button */}
          <a
            href="https://studio.seosenergy.co/solar-simulator?customerId=765e6908-a1e9-4c59-9a65-8b79523fd8cd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-solar-yellow text-gray-900 hover:bg-solar-yellow/90 font-medium">
              <Calculator className="h-4 w-4 mr-2" />
              Calculadora online
            </Button>
          </a>
        </div>
      </nav>
    </header>
  )
}
