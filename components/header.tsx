"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
    { href: "/career", label: "Career" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:block bg-[#1a2744] text-white py-2.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <a href="mailto:info@cecevents.in" className="hover:text-[#d4a039] transition-colors">Info@cecevents.in</a>
            <a href="tel:+919654513231" className="flex items-center gap-2 hover:text-[#d4a039] transition-colors">
              <Phone className="w-4 h-4" /> +91 9654513231
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-new.png"
            alt="Cecevents"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <span className="text-xl font-bold text-[#1a2744]">Cecevent</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#d4a039]"
                  : "text-[#1a2744] hover:text-[#d4a039]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button className="hidden sm:flex bg-[#d4a039] text-white hover:bg-[#b8862e] text-sm px-7 py-2 font-semibold shadow-md hover:shadow-lg transition-all">
              Get Quote
            </Button>
          </Link>
          <a
            href="https://wa.me/919654513231?text=Hello%20Cecevents%2C%20I%20need%20assistance"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Chat
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1a2744] p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-6 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 px-3 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#d4a039]/10 text-[#d4a039]"
                    : "text-[#1a2744] hover:bg-gray-100"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-2 pt-3 flex gap-3">
              <Link href="/contact" className="flex-1">
                <Button className="bg-[#d4a039] text-white hover:bg-[#b8862e] w-full font-semibold shadow-md">
                  Get Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/919654513231?text=Hello%20Cecevents%2C%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
