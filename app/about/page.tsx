import type { Metadata } from "next"
import Image from "next/image"
import { Building2, Users, Award, Globe, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - RURASH Aviation Parts & Services",
  description:
    "Learn about RURASH, established in 2010, specializing in commercial, business, and military aircraft parts with global expertise and OEM relationships.",
}

export default function AboutPage() {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "RURASH established with a vision to provide superior aviation parts and services globally.",
      icon: Building2,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Opened offices in UAE and expanded our international network significantly.",
      icon: Globe,
      gradient: "from-green-600 to-emerald-600",
    },
    {
      year: "2018",
      title: "Military Contracts",
      description: "Secured major government contracts for military aircraft support and maintenance.",
      icon: Shield,
      gradient: "from-red-600 to-orange-600",
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Recognized as a leading provider of aviation parts with comprehensive support capabilities.",
      icon: Award,
      gradient: "from-purple-600 to-pink-600",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining the highest standards in every component and service we provide.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting partnerships through exceptional service and reliability.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Extensive worldwide network ensuring parts availability across all continents.",
    },
    {
      icon: Building2,
      title: "Industry Expertise",
      description: "Deep knowledge of commercial, business, and military aviation requirements.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/military-aircraft-tarmac.jpg" alt="About RURASH" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                About <span className="text-gradient">RURASH</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8 drop-shadow-md">
                Since 2010, RURASH has been at the forefront of aviation parts and services, specializing in commercial,
                business, and military aircraft fleets worldwide. Our commitment to excellence and global reach has made
                us a trusted partner in the aviation industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">13+</div>
                  <div className="text-gray-300">Years of Excellence</div>
                </div>
                <div className="bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">3</div>
                  <div className="text-gray-300">Global Offices</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/cockpit-interior.webp"
                  alt="Aviation Technology"
                  width={300}
                  height={250}
                  className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/images/engine-maintenance.webp"
                  alt="Quality Control"
                  width={300}
                  height={250}
                  className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story with Icons */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to global leadership in aviation parts and services
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:col-span-2">
                  <div className="text-4xl font-bold text-blue-400">{milestone.year}</div>
                </div>
                <div className="lg:col-span-7">
                  <div className="card-gradient p-6 rounded-xl hover-lift">
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div
                    className={`relative p-8 rounded-xl bg-gradient-to-br ${milestone.gradient} shadow-xl hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                    <milestone.icon size={80} className="text-white relative z-10 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Focus Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized expertise across all major aviation sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/commercial-flight.jpg"
                  alt="Commercial Aviation"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Commercial Aviation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Supporting major airlines and commercial operators with comprehensive parts inventory and maintenance
                  solutions for passenger and cargo aircraft.
                </p>
              </div>
            </div>

            <div
              className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/cockpit-interior.webp"
                  alt="Business Aviation"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Business Aviation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Dedicated support for business jets and corporate fleets with personalized service and rapid response
                  capabilities.
                </p>
              </div>
            </div>

            <div
              className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/fighter-jet.jpg"
                  alt="Military Aviation"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Military Aviation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Specialized support for military aircraft and helicopters with security clearance and government
                  contract expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-gradient p-8 rounded-xl hover-lift">
                  <value.icon size={48} className="text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Control */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Facilities & <span className="text-gradient">Control</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              State-of-the-art facilities and precision control systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in">
              <Image
                src="/images/engine-maintenance.webp"
                alt="Maintenance Facilities"
                width={500}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Maintenance Facilities</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our state-of-the-art maintenance facilities are equipped with the latest technology and staffed by
                  certified technicians to ensure the highest quality service for all aircraft types.
                </p>
              </div>
            </div>

            <div
              className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="/images/landing-gear.webp"
                alt="Quality Control"
                width={500}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Precision Quality Control</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every component undergoes rigorous testing and quality control procedures to meet international
                  aviation standards and ensure optimal performance and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
