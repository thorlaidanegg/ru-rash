import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/rurash-logo.png" alt="RURASH Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold">RURASH</span>
            </div>
            <p className="text-gray-400 text-sm">
              Specializing in business, commercial and military aircraft and helicopters. Global supply chain solutions
              with extensive worldwide network.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/parts-service" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Parts & Service
              </Link>
              <Link
                href="/government-contracts"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Government Contracts
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Aircraft Parts</p>
              <p>Components</p>
              <p>Consumables</p>
              <p>Supply Chain Management</p>
              <p>Global Logistics</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail size={16} />
                <a href="mailto:rurash.global@aol.com" className="hover:text-blue-400 transition-colors">
                  rurash.global@aol.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone size={16} />
                <a href="tel:+971561620326" className="hover:text-blue-400 transition-colors">
                  +971.56.162.0326
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5" />
                <span>Global offices in USA, UAE, and India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RURASH. All rights reserved. | Aviation Parts & Services Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
