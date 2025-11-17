"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  // TODO: Replace with actual WhatsApp number
  const whatsappLink = "https://wa.me/573114721514"

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Escríbenos por WhatsApp
            <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900" />
          </div>
        )}

        {/* Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>
    </div>
  )
}
