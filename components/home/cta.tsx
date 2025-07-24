import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Globe } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/rurash-hangar.jpg" alt="CTA Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/70 to-red-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Contact our aviation experts today for immediate assistance with your aircraft parts and service needs.
            We're here to support your fleet operations worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group shadow-2xl">
                Contact Us Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-200">
              <a href="tel:+971561620326" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Phone size={20} className="text-blue-400" />
                <span>+971.56.162.0326</span>
              </a>
              <a
                href="mailto:rurash.global@aol.com"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} className="text-blue-400" />
                <span>rurash.global@aol.com</span>
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Globe className="text-blue-400 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-sm text-gray-300">Global Offices</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="text-green-400 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white">13+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <ArrowRight className="text-yellow-400 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white">Global</div>
              <div className="text-sm text-gray-300">Supply Chain</div>
            </div>
          </div>

          <p className="text-sm text-gray-300 drop-shadow-md">
            Professional aviation parts and services • Global shipping • Quality guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}
