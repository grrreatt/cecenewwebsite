"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Globe,
  MapPinned,
  Clipboard,
  Camera,
  HeartHandshake,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Zap,
    title: "Manpower Solutions",
    description: "Skilled professionals trained in event operations, hospitality, and customer service to ensure smooth event execution from start to finish.",
    color: "#d4a039",
  },
  {
    icon: Globe,
    title: "Exhibition Management",
    description: "End-to-end exhibition planning and execution for trade shows, expos, and corporate displays with booth setup and visitor management.",
    color: "#f4a490",
  },
  {
    icon: MapPinned,
    title: "Tours & Travels",
    description: "Complete travel management for conference attendees and delegates including airport pickups, hotel bookings, and city tours.",
    color: "#d4a039",
  },
  {
    icon: Clipboard,
    title: "Conference Management",
    description: "Full-service conference planning including venue selection, speaker management, agenda planning, and technical support.",
    color: "#f4a490",
  },
  {
    icon: Camera,
    title: "Event Documentation",
    description: "Professional photography and videography services to capture every moment of your event for lasting memories.",
    color: "#d4a039",
  },
  {
    icon: HeartHandshake,
    title: "Wedding & Social Events",
    description: "Beautiful wedding planning and execution with attention to cultural traditions, decor, catering, and guest management.",
    color: "#f4a490",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#1a1520] via-[#2d1f2d] to-[#4a2a42]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#f4a490] text-sm md:text-base mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              End-to-End <span className="text-[#f4a490]">Event Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              From registration to execution, we provide comprehensive services to make your events successful and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#1a2744] italic">Signature</span>{" "}
              <span className="text-[#d4a039] italic underline underline-offset-8">Services</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive event management solutions tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-gray-100">
                <CardContent className="p-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2744] mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Types */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a1520] via-[#2d1f2d] to-[#4a2a42]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Types We Specialize In</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From intimate gatherings to large-scale conferences
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/gallery/apao-yashobhumi.jpg"
                alt="Medical Conferences"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white">Medical Conferences</h3>
                <p className="text-gray-300 text-sm">Professional healthcare events</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/gallery/microsoft-purple-team.jpg"
                alt="Corporate Events"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white">Corporate Events</h3>
                <p className="text-gray-300 text-sm">Business meetings & summits</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/gallery/asian-travel-expo.jpg"
                alt="Trade Shows"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white">Trade Shows & Expos</h3>
                <p className="text-gray-300 text-sm">Exhibition management</p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/gallery/wedding-registration.jpg"
                alt="Weddings"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white">Weddings & Social</h3>
                <p className="text-gray-300 text-sm">Celebrations & ceremonies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-6">
            Ready to plan your next event?
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and let us create something extraordinary together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#f4a490] text-[#1a1520] hover:bg-[#e8927d] rounded-full px-8"
            >
              Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
