import { Network, Truck } from "lucide-react"
import Image from "next/image"

export function ValuePropositions() {
  const propositions = [
    {
      icon: Network,
      title: "EXTENSIVE WORLD-WIDE NETWORK",
      description:
        "Strategic partnerships and offices across USA, UAE, and India ensuring global coverage and local expertise.",
      image: "/images/global-supply-chain.jpg",
      stats: "3 Global Offices",
    },
    {
      icon: Truck,
      title: "GLOBAL SUPPLY CHAIN",
      description:
        "Streamlined logistics and inventory management with real-time tracking and expedited shipping options.",
      image: "/images/team-collaboration.jpg",
      stats: "Worldwide Logistics",
    },
  ]

  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-gradient">RURASH</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our competitive advantages that set us apart in the aviation industry
          </p>
        </div>

        <div className="space-y-20">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`animate-slide-up ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <prop.icon size={60} className="text-blue-400 mr-4" />
                    <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-4 py-2">
                      <span className="text-blue-300 font-bold text-sm">{prop.stats}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{prop.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{prop.description}</p>
                </div>
              </div>

              <div className={`animate-fade-in ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group">
                  <Image
                    src={prop.image || "/placeholder.svg"}
                    alt={prop.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
