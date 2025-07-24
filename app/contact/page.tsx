import type { Metadata } from "next"
import Image from "next/image"
import { Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Us - RURASH Aviation Global Offices",
  description:
    "Contact RURASH aviation experts worldwide. Offices in USA, UAE, and India. Global Phone: +971.56.162.0326, Email: rurash.global@aol.com",
}

export default function ContactPage() {
  const offices = [
    {
      country: "United States",
      company: "RURASH LLC",
      address: "2882, Tall Oaks CT.\nAuburn Hills, MI 48326\nUSA",
      email: "rurash.global@aol.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM Dubai Time",
      image: "/images/usa-office.jpg",
      type: "Shop",
    },
    {
      country: "United Arab Emirates",
      company: "RURASH INC",
      address: "416, Burlington Tower\nBusiness Bay\nDubai 487644, UAE",
      email: "rurash.global@aol.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM Dubai Time",
      image: "/images/uae-office.jpg",
      type: "Sales Office",
    },
    {
      country: "India",
      company: "C/O CONTRADE INTERNATIONAL LTD",
      address: "18, Bhanot Shopping Centre\nMadangir\nDelhi 10062, INDIA",
      email: "rurash.global@aol.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM Dubai Time",
      image: "/images/india-office.jpg",
      type: "Liaison Office",
    },
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: "Global Email",
      value: "rurash.global@aol.com",
      description: "For general inquiries and quotes",
      href: "mailto:rurash.global@aol.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri",
      description: "9:00 AM - 6:00 PM Dubai Time",
      href: "#offices",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/military-aircraft-tarmac.jpg" alt="Contact RURASH" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md">
              Get in touch with our aviation experts worldwide. We're here to support your aircraft parts and service
              needs with offices in USA, UAE, and India.
            </p>
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 inline-block">
              <p className="text-blue-300 font-semibold text-lg">Global Contact: +971.56.162.0326</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple ways to reach our team for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="card-gradient p-8 rounded-xl text-center hover-lift animate-fade-in block transition-colors hover:bg-slate-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <method.icon size={48} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">{method.value}</div>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card-gradient p-8 rounded-xl animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h3>
              <form className="space-y-6" action="mailto:rurash.global@aol.com" method="post" encType="text/plain">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <Input
                      type="text"
                      name="firstName"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <Input
                      type="text"
                      name="lastName"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <Input
                    type="text"
                    name="subject"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    placeholder="Parts inquiry / Service request / General question"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    placeholder="Please describe your requirements or inquiry in detail..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section id="offices" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Global <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our worldwide presence ensures local support and global reach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Image
                  src={office.image || "/placeholder.svg"}
                  alt={`${office.country} Office`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{office.country}</h3>
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {office.type}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">{office.company}</h4>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                      <div className="text-gray-300 text-sm whitespace-pre-line">{office.address}</div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail size={20} className="text-blue-400" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock size={20} className="text-blue-400" />
                      <div className="text-gray-300 text-sm">{office.hours}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6 inline-block">
              <h3 className="text-xl font-bold text-white mb-2">Global Contact Number</h3>
              <a
                href="tel:+971561620326"
                className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                +971.56.162.0326
              </a>
              <p className="text-gray-300 text-sm mt-2">Available for all locations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
