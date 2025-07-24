import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Shield, Wrench, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Parts & Service - RURASH Aviation Solutions",
  description:
    "FAA & EASA approved aviation parts and services for Airbus, Boeing, Bombardier, Cessna, Gulfstream and more. Professional maintenance and supply chain solutions.",
}

export default function PartsServicePage() {
  const certifications = [
    {
      icon: Shield,
      title: "FAA Approved",
      description: "Federal Aviation Administration certified facilities and processes",
    },
    {
      icon: CheckCircle,
      title: "EASA Certified",
      description: "European Union Aviation Safety Agency compliance and certification",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide supply chain and logistics network for parts availability",
    },
  ]

  const aircraftTypes = [
    {
      category: "Commercial Aircraft",
      manufacturers: ["Airbus", "Boeing"],
      image: "/images/commercial-flight.jpg",
    },
    {
      category: "Business Jets",
      manufacturers: ["Bombardier", "Cessna", "Gulfstream", "Beechcraft"],
      image: "/images/cockpit-interior.webp",
    },
    {
      category: "Military Aircraft",
      manufacturers: ["Lockheed Martin", "Boeing Defense"],
      image: "/images/fighter-jet.jpg",
    },
  ]

  const helicopterTypes = [
    {
      category: "Commercial Helicopters",
      manufacturers: ["Airbus Helicopters", "Bell", "Boeing Rotorcraft"],
      image: "/images/helicopter-maintenance.webp",
    },
    {
      category: "Military Helicopters",
      manufacturers: ["Agusta Westland", "JSC Russian Helicopters"],
      image: "/images/stealth-aircraft.jpg",
    },
    {
      category: "Specialized Rotorcraft",
      manufacturers: ["Bombardier Helicopters"],
      image: "/images/landing-gear.webp",
    },
  ]

  const services = [
    {
      icon: Wrench,
      title: "Parts Supply",
      description: "Comprehensive inventory of OEM and aftermarket parts",
      features: ["Engine Components", "Avionics Systems", "Landing Gear", "Hydraulic Parts"],
      image: "/images/engine-maintenance.webp",
    },
    {
      icon: Globe,
      title: "Maintenance Services",
      description: "Professional maintenance and repair services for aircraft systems",
      features: ["Scheduled Maintenance", "Component Repair", "Technical Support", "Documentation"],
      image: "/images/landing-gear.webp",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and certification processes",
      features: ["Quality Testing", "Certification Management", "Traceability", "Compliance"],
      image: "/images/cockpit-interior.webp",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/commercial-flight.jpg" alt="Aviation Parts & Service" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Parts & <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md">
              FAA & EASA approved facilities providing comprehensive aviation parts and services for commercial,
              business, and military aircraft with global supply chain management.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Certified <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our facilities and processes meet the highest industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-gradient p-8 rounded-xl text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <cert.icon size={64} className="text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{cert.title}</h3>
                <p className="text-gray-400 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive aviation solutions designed to keep your fleet operational
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <service.icon size={48} className="absolute bottom-4 left-4 text-blue-400" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle size={16} className="text-green-400 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Aircraft */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Supported <span className="text-gradient">Aircraft</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive parts and service support for major aircraft manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aircraftTypes.map((type, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.category}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{type.category}</h3>
                  <div className="space-y-2">
                    {type.manufacturers.map((manufacturer, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle size={16} className="text-blue-400 mr-3" />
                        <span className="text-sm">{manufacturer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Helicopters */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Supported <span className="text-gradient">Helicopters</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized helicopter parts and maintenance services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helicopterTypes.map((type, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.category}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{type.category}</h3>
                  <div className="space-y-2">
                    {type.manufacturers.map((manufacturer, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle size={16} className="text-blue-400 mr-3" />
                        <span className="text-sm">{manufacturer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/engine-maintenance.webp" alt="Professional Service" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/70 to-red-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Professional <span className="text-gradient">Aviation Services</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Contact our experienced team to discuss your aircraft parts and service requirements. We provide
              comprehensive solutions for all your aviation needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contact Us
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-transparent backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
