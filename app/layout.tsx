import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const title = "SOL by FOCU · Energía solar para tu casa, sin complicaciones"
const description =
  "Asesoría gratis, diseño de tu sistema solar, ofertas de instaladores verificados y ayuda con la financiación. Todo en un solo lugar. Bogotá y Sabana."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "es_CO",
    siteName: "SOL by FOCU",
    type: "website",
    images: ["/images/hero/hero-techo-solar.jpg"],
  },
  icons: {
    icon: "/images/logo-sol-icono.png",
    apple: "/images/logo-sol-apple.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
