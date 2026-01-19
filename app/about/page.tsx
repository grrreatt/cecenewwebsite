"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, Users, Globe } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#1a1520] via-[#2d1f2d] to-[#4a2a42]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#f4a490] text-sm md:text-base mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Creating <span className="text-[#f4a490]">Memorable</span> Events Since 2015
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              CECEVENTS is on a mission to become the most reliable event management and manpower solutions provider in India, delivering excellence in every event we manage.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#1a2744] italic">Our</span>{" "}
                <span className="text-[#d4a039] italic underline underline-offset-8">Story</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, CECEVENTS started with a simple vision: to transform how events are managed in India. What began as a small team passionate about creating seamless event experiences has grown into one of the most trusted names in event management.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we serve clients across the country, from prestigious medical conferences and academic summits to grand corporate events and beautiful weddings. Our commitment to excellence and attention to detail has made us the preferred choice for organizations seeking reliable event management partners.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a039] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#1a2744]">500+</p>
                    <p className="text-gray-500 text-sm">Events Managed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a039] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#1a2744]">50+</p>
                    <p className="text-gray-500 text-sm">Corporate Clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a039] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#1a2744]">100K+</p>
                    <p className="text-gray-500 text-sm">Attendees Served</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a039] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#1a2744]">15+</p>
                    <p className="text-gray-500 text-sm">Cities Covered</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/gallery/apao-yashobhumi.jpg"
                  alt="APAO Congress Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/gallery/convention-center-team.jpg"
                  alt="Convention Center Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1a1520] via-[#2d1f2d] to-[#4a2a42]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#f4a490]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#f4a490]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-gray-400 text-sm">
                  We strive for perfection in every detail, ensuring flawless execution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4a039]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#d4a039]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Teamwork</h3>
                <p className="text-gray-400 text-sm">
                  Our strength lies in our dedicated team working together seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#f4a490]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#f4a490]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">
                  We embrace new technologies and creative solutions for modern events.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4a039]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#d4a039]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                <p className="text-gray-400 text-sm">
                  We build trust through transparent communication and honest dealings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-gradient-to-br from-[#1a2744] to-[#2a3754] rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver exceptional event management services that exceed client expectations, creating memorable experiences through meticulous planning, innovative solutions, and dedicated execution. We aim to be the bridge between vision and reality for every event we undertake.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#d4a039] to-[#c4903a] rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To become India&apos;s most trusted and innovative event management company, setting new standards in the industry through technology-driven solutions, sustainable practices, and an unwavering commitment to excellence in every event we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
