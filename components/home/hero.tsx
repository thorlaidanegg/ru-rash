import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Shield, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/aircraft-sunset.jpg" alt="Aviation Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60"></div>
      </div>

      {/* Floating Aircraft Icons */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-20 left-10 animate-float">
          <Plane size={60} className="text-blue-400 rotate-45" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
          <Plane size={40} className="text-red-400 -rotate-12" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: "4s" }}>
          <Plane size={50} className="text-blue-300 rotate-12" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float" style={{ animationDelay: "6s" }}>
          <Shield size={45} className="text-green-400 rotate-45" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="mb-8">
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-gradient drop-shadow-lg">RURASH</span>
              <br />
              <span className="text-white drop-shadow-md">SPECIALIZES IN</span>
              <br />
              <span className="text-blue-400 drop-shadow-md">BUSINESS, COMMERCIAL</span>
              <br />
              <span className="text-blue-400 drop-shadow-md">AND MILITARY AIRCRAFT</span>
              <br />
              <span className="text-blue-400 drop-shadow-md">AND HELICOPTERS</span>
            </h1>

            <div className="mb-10">
              <p className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-6 drop-shadow-lg">
                PARTS – COMPONENTS – CONSUMABLES - SERVICE
              </p>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                Global aviation solutions with extensive worldwide network and comprehensive supply chain management for
                commercial, business, and military aircraft operations.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 text-center">
                <Globe className="text-blue-400 mx-auto mb-2" size={32} />
                <p className="text-blue-300 font-semibold text-sm">EXTENSIVE WORLD-WIDE NETWORK</p>
              </div>
              <div className="bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-center">
                <Shield className="text-green-400 mx-auto mb-2" size={32} />
                <p className="text-green-300 font-semibold text-sm">GLOBAL SUPPLY CHAIN</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/parts-service">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group shadow-2xl">
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-transparent backdrop-blur-sm shadow-2xl"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/modern-fighter-jets.jpg"
                  alt="Modern Fighter Jets"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/images/engine-components.jpg"
                  alt="Engine Components"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/global-supply-chain.jpg"
                  alt="Global Supply Chain"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/images/team-collaboration.jpg"
                  alt="Team Collaboration"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
