import { Wrench, Globe, Shield, Truck } from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Aircraft Parts",
      description: "Comprehensive inventory of OEM and aftermarket parts for all major aircraft manufacturers.",
      features: ["OEM Certified", "Quality Assured", "Fast Delivery"],
      image: "/images/engine-maintenance.webp",
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "Professional logistics and supply chain management for efficient parts delivery worldwide.",
      features: ["Global Shipping", "Inventory Management", "Real-time Tracking"],
      image: "/images/landing-gear.webp",
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "Extensive worldwide network ensuring parts availability across all continents.",
      features: ["Worldwide Coverage", "Local Support", "Fast Logistics"],
      image: "/images/commercial-flight.jpg",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "FAA & EASA approved facilities with rigorous quality control processes.",
      features: ["FAA Approved", "EASA Certified", "ISO Standards"],
      image: "/images/cockpit-interior.webp",
    },
  ]

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/images/rurash-hangar.jpg" alt="Background" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive aviation solutions designed to keep your fleet operational with minimal downtime and maximum
            efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <service.icon size={48} className="absolute bottom-4 left-4 text-blue-400" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
