'use client';

import { Linkedin, Instagram, Facebook, Mail, ChevronUp, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1a2744] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-new.png"
                alt="Cecevents"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">CECEVENTS</span>
                <span className="text-xs text-[#d4a039] font-semibold">Premium Event Services</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India&apos;s leading provider of professional event staffing and registration solutions 
              for medical conferences, corporate summits, and exhibitions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/cecevents"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#d4a039] transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/chronicleeventsandconferences"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#d4a039] transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/919654513231?text=Hello%20Cecevents%2C%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center hover:bg-[#20BA5A] transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
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
            <h4 className="font-semibold text-white mb-5 text-base">Contact Us</h4>
            <div className="flex flex-col gap-5 text-sm">
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase mb-2">Phone</p>
                <a href="tel:+919654513231" className="text-white hover:text-[#d4a039] transition-colors font-medium">
                  +91 9654513231
                </a>
                <p className="text-gray-500 text-xs mt-1">+91 82850 44061</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase mb-2">Email</p>
                <a href="mailto:info@cecevents.in" className="text-white hover:text-[#d4a039] transition-colors font-medium">
                  Info@cecevents.in
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase mb-2">Locations</p>
                <div className="text-gray-300 text-xs leading-relaxed space-y-3">
                  <div>
                    <p className="text-white font-semibold mb-1">F322/A, Old MB Road, Lado Sarai</p>
                    <p>New Delhi, 110030</p>
                  </div>
                  <p className="text-gray-400 font-semibold">and</p>
                  <div>
                    <p className="text-white font-semibold mb-1">CRS Tower, Chattarpur</p>
                    <p>New Delhi, 110074</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-sm">© 2024 CECEVENTS. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-sm">Professional Event Management Solutions</p>
          </div>
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
