import { Building2, Globe2, Clock, Users } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Building2,
      number: "3",
      label: "Global Offices",
      description: "USA, UAE, India",
    },
    {
      icon: Globe2,
      number: "50+",
      label: "Countries Served",
      description: "Worldwide Coverage",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "AOG Support",
      description: "Emergency Response",
    },
    {
      icon: Users,
      number: "13+",
      label: "Years Experience",
      description: "Since 2010",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and global reach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-gradient p-8 rounded-xl">
                <stat.icon size={48} className="text-blue-400 mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-300 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
