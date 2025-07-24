import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RURASH - Aviation Parts & Services | Commercial, Business & Military Aircraft",
  description:
    "RURASH specializes in business, commercial and military aircraft and helicopters. Global supply chain, AOG support, and extensive worldwide network for aircraft parts, components, and services.",
  keywords:
    "aviation, aircraft parts, helicopter parts, AOG support, commercial aviation, military aircraft, business jets, aircraft components",
  authors: [{ name: "RURASH" }],
  openGraph: {
    title: "RURASH - Aviation Parts & Services",
    description: "Global aviation parts and services for commercial, business, and military aircraft",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
