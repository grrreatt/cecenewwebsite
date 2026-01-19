'use client';

import { Linkedin, Instagram, Facebook, Twitter, ChevronUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1a2744] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d4a039] to-[#b8862e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">CECEVENTS</span>
                <span className="text-[10px] text-gray-400 -mt-1">Event Management</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India&apos;s leading provider of professional event staffing and registration solutions 
              for medical conferences, corporate summits, and exhibitions.
            </p>
            <div className="flex gap-3 mt-6">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#d4a039] transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#d4a039] transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#d4a039] transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#d4a039] transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Gallery
              </Link>
              <Link href="/career" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Career
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Our Services</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/services" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Manpower Solutions
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Registration Services
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Conference Management
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Exhibition Setup
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-[#d4a039] transition-colors">
                Corporate Events
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">Phone</p>
                <p className="text-white">+91 96545 13231</p>
                <p className="text-white">+91 82850 44061</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Email</p>
                <p className="text-white">Info@cecevents.in</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Address</p>
                <p className="text-white leading-relaxed">
                  F322/A, Old MB Road, Lado Sarai,<br />
                  New Delhi, 110030
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-sm">2024 CECEVENTS. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Professional Event Management Solutions</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#d4a039] rounded-full flex items-center justify-center hover:bg-[#b8862e] transition-colors shadow-lg z-50"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  )
}
