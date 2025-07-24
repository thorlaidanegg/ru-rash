import { Target, Users, Award } from "lucide-react"
import Image from "next/image"

export function Mission() {
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/aircraft-sunset.jpg" alt="Mission Background" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              To minimize aircraft downtime through superior parts availability, exceptional service quality, and
              innovative supply chain solutions. We are committed to keeping the world's aircraft fleets operational
              with unmatched reliability and efficiency.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="text-blue-400 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Precision Focus</h4>
                  <p className="text-gray-400">
                    Targeted solutions for commercial, business, and military aviation needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="text-blue-400 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Customer-Centric</h4>
                  <p className="text-gray-400">
                    Building lasting partnerships through exceptional service and support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Award className="text-blue-400 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Excellence Standard</h4>
                  <p className="text-gray-400">
                    Maintaining the highest quality standards in every aspect of our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/team-collaboration.jpg"
                  alt="Team Collaboration"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/images/engine-components.jpg"
                  alt="Precision Engineering"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/global-supply-chain.jpg"
                  alt="Global Operations"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/images/modern-fighter-jets.jpg"
                  alt="Military Aviation"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-xl blur-xl"></div>
              <div className="relative card-gradient p-8 rounded-xl">
                <blockquote className="text-2xl font-medium text-white italic mb-6">
                  "Excellence in aviation support is not just our goal—it's our commitment to every client, every
                  flight, every day."
                </blockquote>
                <cite className="text-blue-400 font-semibold">RURASH Leadership Team</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
