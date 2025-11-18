"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clientType: "casa",
    city: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData)
  }

  const whatsappLink = "https://wa.me/573114721514"

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">¿Listo para comenzar?</h2>
          <p className="text-lg text-gray-600 text-pretty">
            Respondemos en menos de 24 horas. También puedes escribirnos por WhatsApp para atención inmediata.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+57 300 123 4567"
                required
              />
            </div>
            <div>
              <Label htmlFor="clientType">Tipo de cliente</Label>
              <select
                id="clientType"
                value={formData.clientType}
                onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="casa">Casa / Residencial</option>
                <option value="negocio">Negocio / Comercial</option>
                <option value="industria">Industria</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="city">Ciudad</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="Ej: Bogotá, Medellín, Cali..."
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" className="flex-1 bg-gray-900 hover:bg-gray-800">
              Enviar consulta
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-solar-green text-solar-green hover:bg-solar-green/10 bg-transparent"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Escribir por WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
