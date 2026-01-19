"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
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
      <div className="hidden md:block bg-[#1a2744] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span>Info@cecevents.in</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91 96545 13231
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Cecevents"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-[#1a2744]">CECEVENTS</span>
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
            <Button className="hidden sm:flex bg-[#d4a039] text-white hover:bg-[#b8862e] text-sm px-6 shadow-md">
              Get Quote
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1a2744] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#d4a039]"
                    : "text-[#1a2744] hover:text-[#d4a039]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="w-full">
              <Button className="bg-[#d4a039] text-white hover:bg-[#b8862e] mt-4 w-full shadow-md">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
