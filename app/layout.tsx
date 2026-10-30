import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SOL by FOCU - Sistemas Solares en Colombia",
  description:
    "Diseñamos, instalamos y financiamos proyectos solares residenciales, comerciales e industriales en toda Colombia. Ahorra en tu factura de energía con sistemas solares a la medida.",
  generator: "v0.app",
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
