'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  // Fabrication & Booth Design
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.27.16%20%281%29-mqSHob6utDFIredhwFP2G3OMMwEToj.jpeg', title: 'WOG Water Oil Gas Booth', category: 'Fabrication & Booth Design' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.24.22-reJUvcxgB5Jf4gnEbjj0mtyWRmdWBA.jpeg', title: 'Chempolis & AmGreen Exhibition', category: 'Fabrication & Booth Design' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.27.15-Y3UkEPH3ooQg8UUZgjhVuMIAw0sE8P.jpeg', title: 'Trends Exhibition Booth', category: 'Fabrication & Booth Design' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20layouts%20-EItubsNICtT2kT2IBpHY9FarnXwaOi.jpeg', title: 'Continental Solutions Display', category: 'Fabrication & Booth Design' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.27.16-A6ByOjOsezMPfUBXyWJfB2Y9MyF8Gp.jpeg', title: 'Thermax Booth Design', category: 'Fabrication & Booth Design' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.27.16%20%282%29-L58sCEWzfwTDSUroposAckYKCKJFBr.jpeg', title: 'Ratnamamani Metals & Tubes', category: 'Fabrication & Booth Design' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.26.53%20%281%29-P4mT065Mf3EVA6YNU0FrJS79rS7G61.jpeg', title: 'Mascot Dynamics Booth Design', category: 'Fabrication & Booth Design' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2020.31.36%20%281%29-NogfA6LjXYDaO1LfvAOccF7Nmxm6dh.jpeg', title: 'ONGC Exhibition Booth', category: 'Fabrication & Booth Design' },
  
  // Conferences
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2020.30.51-eRguXtfLuBCAv1W2GDI6JSJ0blBEQJ.jpeg', title: 'Explore Our Solutions Conference', category: 'Conferences' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2020.31.18-e7UgCR1dOdxeXCfs5wLyTblWSaCjvg.jpeg', title: 'Professional Conference Hall Setup', category: 'Conferences' },
  
  // Weddings & Events
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2020.30.49-utpDYoE2dVezpBMG15Q6essskmzopV.jpeg', title: 'Premium Gala & Banquet Setup', category: 'Weddings & Events' },
  
  // Large Scale Events
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2020.31.36-FoQiaLpx5sFbE36824y5E7SZwA8l6R.jpeg', title: 'GAIL Gastech Dubai Exhibition', category: 'Large Scale Events' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gastech%20Milan%20-nHNDLVeRkRDE2nl29jR0xFUvduQn60.jpeg', title: 'Gastech Milan - ONEC', category: 'Large Scale Events' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gail-Gastech%20Dubai%20-9zKbSyMwmTq2FDIiOhhh5qHCz749mH.jpeg', title: 'Gail Gastech Dubai', category: 'Large Scale Events' },
  
  // Corporate Events
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-27%20at%2014.26.45-fglHQJhSCybt14oz0QC46KIjMdmNnd.jpeg', title: 'JMS Sales Collaboration Event', category: 'Corporate Events' },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-600">
              A glimpse into our successful events and memorable moments with incredible teams and satisfied clients.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Viewer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Image with Navigation */}
            <div className="relative group">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={galleryImages[currentIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentIndex].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#1a2744] p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#1a2744] p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center">
              <p className="text-[#d4a039] text-sm font-semibold mb-2">
                {galleryImages[currentIndex].category}
              </p>
              <h2 className="text-3xl font-bold text-[#1a2744]">
                {galleryImages[currentIndex].title}
              </h2>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-8 overflow-x-auto pb-2">
              <div className="flex gap-3 justify-center">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? 'border-[#d4a039] shadow-lg shadow-[#d4a039]/30'
                        : 'border-gray-200 hover:border-[#d4a039]'
                    }`}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
              All <span className="text-[#d4a039]">Events</span>
            </h2>
            <p className="text-gray-600">Browse our complete event collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative rounded-lg overflow-hidden group cursor-pointer h-60 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[#d4a039] text-xs font-semibold mb-1">{item.category}</p>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-[#1a2744] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-2">500+</p>
              <p className="text-gray-300">Events Executed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-2">50+</p>
              <p className="text-gray-300">Corporate Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-2">15+</p>
              <p className="text-gray-300">Cities Across India</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#d4a039] mb-2">100K+</p>
              <p className="text-gray-300">Happy Attendees</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
