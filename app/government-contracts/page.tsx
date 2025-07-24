import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Shield, FileText, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Government Contracts - RURASH Aviation Defense Solutions",
  description:
    "Expert procurement process support and proposal consulting for government aviation contracts. Specialized in military aircraft and defense sector requirements.",
}

export default function GovernmentContractsPage() {
  const services = [
    {
      icon: FileText,
      title: "Procurement Process Expertise",
      description: "Navigate complex government procurement requirements with our experienced team",
      features: [
        "GSA Schedule compliance",
        "Federal acquisition regulations",
        "Documentation management",
        "Compliance auditing",
      ],
      image: "/images/modern-fighter-jets.jpg",
    },
    {
      icon: Users,
      title: "Proposal Consulting",
      description: "Professional proposal development and strategic consulting services",
      features: ["Proposal writing", "Technical documentation", "Cost analysis", "Competitive positioning"],
      image: "/images/team-collaboration.jpg",
    },
    {
      icon: Award,
      title: "Contract Management",
      description: "Comprehensive support for government contract execution and management",
      features: ["Contract administration", "Performance monitoring", "Compliance management", "Reporting"],
      image: "/images/engine-components.jpg",
    },
  ]

  const capabilities = [
    {
      title: "Security Clearance",
      description: "Authorized personnel with appropriate security clearances for classified projects",
      icon: Shield,
    },
    {
      title: "Compliance Expertise",
      description: "Deep understanding of government regulations and military specifications",
      icon: CheckCircle,
    },
    {
      title: "Defense Experience",
      description: "Extensive experience with defense contractors and military requirements",
      icon: Award,
    },
  ]

  const contractTypes = [
    {
      title: "Defense Contracts",
      description: "Military aircraft parts and maintenance services for defense agencies",
      image: "/images/modern-fighter-jets.jpg",
    },
    {
      title: "Government Fleet Support",
      description: "Comprehensive support for government-owned aircraft fleets",
      image: "/images/global-supply-chain.jpg",
    },
    {
      title: "Specialized Aircraft",
      description: "Parts and services for specialized government and military aircraft",
      image: "/images/military-aircraft-tarmac.jpg",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/modern-fighter-jets.jpg" alt="Government Contracts" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Government <span className="text-gradient">Contracts</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8 drop-shadow-md">
                Expert procurement process support and proposal consulting services for government aviation contracts.
                Specialized in military aircraft and defense sector requirements with security clearance capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Contact Our Team
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

            <div className="animate-fade-in">
              <Image
                src="/images/aircraft-sunset.jpg"
                alt="Military Aviation"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive government contracting support from proposal to delivery
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

      {/* Capabilities */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized expertise for government and defense sector requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="card-gradient p-8 rounded-xl text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <capability.icon size={64} className="text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contract <span className="text-gradient">Types</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized support across various government contract categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contractTypes.map((type, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Streamlined approach to government contract success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis",
                description: "Comprehensive requirement analysis and opportunity assessment",
              },
              { step: "02", title: "Strategy", description: "Development of winning proposal strategy and approach" },
              { step: "03", title: "Execution", description: "Professional proposal preparation and submission" },
              { step: "04", title: "Support", description: "Post-award contract management and ongoing support" },
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-gradient p-8 rounded-xl hover-lift">
                  <div className="text-4xl font-bold text-blue-400 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/engine-components.jpg" alt="Professional Aviation" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/70 to-red-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Partner with Us?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Contact our government contracts team to discuss your requirements and learn how we can support your next
              procurement initiative.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contact Us
                </Button>
              </Link>
              <Link href="/parts-service">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-transparent backdrop-blur-sm"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
