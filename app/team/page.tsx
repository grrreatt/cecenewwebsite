"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const teamImages = [
  { src: "/gallery/convention-center-team.jpg", title: "Our Core Team", count: "50+ Members" },
  { src: "/gallery/microsoft-purple-team.jpg", title: "Event Specialists", count: "100+ Professionals" },
  { src: "/gallery/apao-yashobhumi.jpg", title: "Conference Experts", count: "Pan India Coverage" },
  { src: "/gallery/siu-world-delhi.jpg", title: "Cultural Events Team", count: "Dedicated Coordinators" },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#1a1520] via-[#2d1f2d] to-[#4a2a42]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#f4a490] text-sm md:text-base mb-4">Our Team</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meet the <span className="text-[#f4a490]">People</span> Behind the Events
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Our dedicated team of professionals brings expertise, passion, and commitment to every event we manage.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#1a2744] italic">Our</span>{" "}
              <span className="text-[#d4a039] italic underline underline-offset-8">Team</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A dedicated workforce committed to making your events successful
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {teamImages.map((item, index) => (
              <div key={index} className="relative h-72 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[#f4a490]">{item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a1520] via-[#2d1f2d] to-[#4a2a42]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experienced leaders guiding our vision and operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f4a490] to-[#e8927d] flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Founder & CEO</h3>
                <p className="text-[#f4a490] text-sm mb-2">15+ Years Experience</p>
                <p className="text-gray-400 text-sm">Leading strategic vision and business development</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d4a039] to-[#c4903a] flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Operations Head</h3>
                <p className="text-[#d4a039] text-sm mb-2">12+ Years Experience</p>
                <p className="text-gray-400 text-sm">Managing day-to-day operations and logistics</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f4a490] to-[#e8927d] flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Creative Director</h3>
                <p className="text-[#f4a490] text-sm mb-2">10+ Years Experience</p>
                <p className="text-gray-400 text-sm">Designing memorable event experiences</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d4a039] to-[#c4903a] flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Client Relations</h3>
                <p className="text-[#d4a039] text-sm mb-2">8+ Years Experience</p>
                <p className="text-gray-400 text-sm">Ensuring 100% client satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-2">200+</p>
              <p className="text-gray-500">Team Members</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-2">15+</p>
              <p className="text-gray-500">Cities Coverage</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-2">500+</p>
              <p className="text-gray-500">Events Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-2">98%</p>
              <p className="text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
