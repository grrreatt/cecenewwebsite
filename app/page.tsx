"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Clipboard, ClipboardCheck, Calendar, Award, CheckCircle, Phone, Mail, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const ourWorkImages = [
  { src: "/gallery/apao-yashobhumi.jpg", title: "APAO Congress 2024", subtitle: "Yashobhumi, New Delhi" },
  { src: "/gallery/microsoft-purple-team.jpg", title: "Microsoft Event", subtitle: "Corporate Conference" },
  { src: "/gallery/cdri-registration.jpg", title: "CDRI Power Summit", subtitle: "Ministry of External Affairs" },
  { src: "/gallery/siu-world-delhi.jpg", title: "SIU World Congress", subtitle: "New Delhi" },
  { src: "/gallery/glex-2025.jpg", title: "GLEX 2025", subtitle: "Space Exploration Conference" },
  { src: "/gallery/microsoft-blue-registration.jpg", title: "Premium Registration", subtitle: "Microsoft India" },
]

const services = [
  {
    icon: Users,
    title: "Manpower Solutions",
    description: "Professional event staff for registration desks, crowd management, VIP handling, and complete event coordination.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professional-event-staff-team-whqX75fkXfO1kd1YarWQqp.jpg"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "End-to-end event management from concept to successful execution with attention to every detail.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gastech%20Milan%20-nHNDLVeRkRDE2nl29jR0xFUvduQn60.jpeg"
  },
  {
    icon: Award,
    title: "Conferences",
    description: "Seamless conference management including registration, logistics, and attendee coordination.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporate-conference-hall-rna-cR0rqGyyIsTm9mO2Uj.jpg"
  },
  {
    icon: Calendar,
    title: "Exhibitions",
    description: "Complete exhibition setup, booth management, and attendee engagement solutions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.27.15-Y3UkEPH3ooQg8UUZgjhVuMIAw0sE8P.jpeg"
  },
  {
    icon: Users,
    title: "Weddings",
    description: "Premium wedding management delivering your dream celebration with flawless execution.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery/wedding-registration.jpg"
  },
  {
    icon: Award,
    title: "Premium Gifting Solutions",
    description: "Customized corporate gifting and premium gift solutions for memorable client relationships.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.26.45-fglHQJhSCybt14oz0QC46KIjMdmNnd.jpeg"
  },
]

const clients = [
  { name: "Microsoft", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nTi3Nvl6kAOpoI1qWPd2HuSefSsPMZ.png" },
  { name: "Hitachi", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G0nuvgpj4r2O0OqRIwIiRpbDXEah9W.png" },
  { name: "APAO", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qyDKbtDU6fk0mPbkEgPwtLBXC5sJ8Y.png" },
  { name: "Ministry of External Affairs", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S1FKuoc1uEm5oRYq6CoXxo5wfDCQGJ.png" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - White background with premium styling */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#d4a039]/10 text-[#d4a039] text-sm font-medium px-4 py-2 rounded-full mb-6">
                Trusted Event Partner Since 2015
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2744] mb-6 leading-tight">
                Turning Ideas Into <span className="text-[#d4a039]">Extraordinary Events</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                We are a trusted event and business solutions company delivering end-to-end services for organizations across India and globally. Our expertise includes corporate events, conferences, exhibitions, skilled event manpower, corporate travel management, and premium gifting solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#d4a039] text-white hover:bg-[#b8862e] shadow-lg shadow-[#d4a039]/25 px-8 w-full sm:w-auto"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white px-8 bg-transparent w-full sm:w-auto"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#1a2744] border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-[#d4a039] border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-[#1a2744] border-2 border-white" />
                  </div>
                  <span className="text-sm text-gray-600">500+ Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a039] text-[#d4a039]" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Hero Images Grid */}
            <div className="relative group">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl image-hover-container left-stack transition-transform duration-300">
                    <Image
                      src="/gallery/asian-travel-expo.jpg"
                      alt="Asian Travel Expo Registration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl image-hover-container left-stack transition-transform duration-300">
                    <Image
                      src="/gallery/hitachi-event.jpg"
                      alt="Hitachi Event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl image-hover-container right-stack transition-transform duration-300">
                    <Image
                      src="/gallery/microsoft-blue-registration.jpg"
                      alt="Microsoft Registration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl image-hover-container right-stack transition-transform duration-300">
                    <Image
                      src="/gallery/cfore-team.jpg"
                      alt="Cfore Event Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d4a039]/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#d4a039]" />
                </div>
                <div>
                  <p className="font-bold text-[#1a2744]">100,000+</p>
                  <p className="text-sm text-gray-500">Attendees Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#d4a039] font-medium mb-2">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2744] mb-4">
              Our Core <span className="text-[#d4a039]">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive event solutions tailored to your needs, delivered by experienced professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden">
                <div className="relative h-56 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2744] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a039] text-center mb-12">Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Manpower Solutions Card */}
            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#d4a039]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#d4a039]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">Manpower Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Professional event staff including registration executives, ushers, coordinators, and hospitality personnel for seamless event execution.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>Trained Professionals</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>Formal Attire</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>Multilingual Staff</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>24/7 Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fabrication Card */}
            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#d4a039]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clipboard className="w-8 h-8 text-[#d4a039]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">Fabrication and Brand Management</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">We manage the entire process—from concept to completion—delivering precision fabrication with consistent brand execution.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>Concept to Completion</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>Consistent Brand Execution</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>Precision Fabrication</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#d4a039] flex-shrink-0" />
                    <span>Quality Assurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manpower Highlight Section */}
      <section className="py-20 bg-[#1a2744]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/gallery/convention-center-team.jpg"
                  alt="Professional Event Staff"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#d4a039] text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm">Trained Staff</p>
              </div>
            </div>
            <div className="text-white">
              <p className="text-[#d4a039] font-medium mb-2">MANPOWER SOLUTIONS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Event Staff You Can Trust
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our team of trained professionals ensures your event runs smoothly from start to finish. 
                We provide skilled personnel for registration desks, crowd management, VIP handling, 
                and complete event coordination.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#d4a039]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#d4a039]" />
                  </div>
                  <div>
                    <p className="font-semibold">Background Verified</p>
                    <p className="text-sm text-gray-400">All staff thoroughly vetted</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#d4a039]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#d4a039]" />
                  </div>
                  <div>
                    <p className="font-semibold">Professionally Trained</p>
                    <p className="text-sm text-gray-400">Event management certified</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#d4a039]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#d4a039]" />
                  </div>
                  <div>
                    <p className="font-semibold">Formal Attire</p>
                    <p className="text-sm text-gray-400">Suited & groomed professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#d4a039]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#d4a039]" />
                  </div>
                  <div>
                    <p className="font-semibold">Multilingual</p>
                    <p className="text-sm text-gray-400">Hindi, English & more</p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-[#d4a039] text-white hover:bg-[#b8862e]">
                  Hire Our Team <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Services Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#d4a039] font-medium mb-2">REGISTRATION SERVICES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-6">
                Seamless Registration & Check-in Solutions
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Transform your event experience with our advanced registration technology. 
                From online pre-registration to on-site badge printing, we handle every detail 
                to ensure smooth delegate management.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#d4a039]/10 rounded-xl flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-[#d4a039]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2744]">On-Site Registration</p>
                    <p className="text-sm text-gray-500">Quick check-in with instant badge printing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#d4a039]/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#d4a039]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2744]">Pre-Event Management</p>
                    <p className="text-sm text-gray-500">Online registration and delegate communication</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#d4a039]/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#d4a039]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2744]">Delegate Management</p>
                    <p className="text-sm text-gray-500">Efficient delegate coordination and support</p>
                  </div>
                </div>
              </div>
              <Link href="/services">
                <Button size="lg" className="bg-[#d4a039] text-white hover:bg-[#b8862e]">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/gallery/cdri-registration.jpg"
                  alt="CDRI Registration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="/gallery/wedding-registration.jpg"
                  alt="Wedding Registration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/gallery/training-session.jpg"
                  alt="Training Session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="/gallery/glex-2025.jpg"
                  alt="GLEX 2025"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work - Auto-scrolling Marquee Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-[#1a2744] italic">Our</span>{" "}
              <span className="text-[#d4a039] italic underline underline-offset-8 decoration-2">Gallery</span>
            </h2>
            <p className="text-gray-500 text-lg">A glimpse into our successful events and memorable moments</p>
          </div>
        </div>

        {/* Auto-scrolling marquee */}
        <div className="relative w-full">
          <div className="flex animate-marquee">
            {/* First set of images */}
            {ourWorkImages.map((item, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-[350px] md:w-[450px] px-3">
                <div className="group cursor-pointer">
                  <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2744] mt-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {ourWorkImages.map((item, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-[350px] md:w-[450px] px-3">
                <div className="group cursor-pointer">
                  <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2744] mt-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="border-[#d4a039] text-[#d4a039] hover:bg-[#d4a039] hover:text-white bg-transparent">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#d4a039]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">500+</p>
              <p className="text-white/80">Events Managed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
              <p className="text-white/80">Corporate Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">100K+</p>
              <p className="text-white/80">Attendees Served</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">15+</p>
              <p className="text-white/80">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#d4a039] font-medium mb-2">TRUSTED BY</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744]">Our Esteemed Clients</h2>
          </div>
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll-left">
              {clients.map((client, index) => (
                <div key={index} className="h-20 md:h-24 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-default">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              ))}
              {clients.map((client, index) => (
                <div key={`repeat-${index}`} className="h-20 md:h-24 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-default">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2744]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create an Unforgettable Event?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let us handle every detail while you focus on what matters most. From medical conferences
              to corporate gatherings, we deliver excellence with professional staff and seamless execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#d4a039] text-white hover:bg-[#b8862e] px-8">
                Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a2744] px-8 bg-transparent">
                Call Us: +91 96545 13231
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#d4a039]/10 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#d4a039]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-semibold text-[#1a2744]">+91 96545 13231</p>
                <p className="font-semibold text-[#1a2744]">+91 82850 44061</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#d4a039]/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#d4a039]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-semibold text-[#1a2744]">Info@cecevents.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#d4a039]/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#d4a039]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-[#1a2744]">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
