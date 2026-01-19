'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/gallery/apao-yashobhumi.jpg', title: 'APAO Congress 2024', category: 'Medical Conference' },
  { src: '/gallery/microsoft-purple-team.jpg', title: 'Microsoft Event', category: 'Corporate' },
  { src: '/gallery/cdri-registration.jpg', title: 'CDRI Power Summit', category: 'Government' },
  { src: '/gallery/siu-world-delhi.jpg', title: 'SIU World Congress', category: 'Medical Conference' },
  { src: '/gallery/glex-2025.jpg', title: 'GLEX 2025', category: 'Space Conference' },
  { src: '/gallery/microsoft-blue-registration.jpg', title: 'Microsoft Registration', category: 'Corporate' },
  { src: '/gallery/wedding-registration.jpg', title: 'Wedding Event', category: 'Social' },
  { src: '/gallery/cfore-team.jpg', title: 'Cfore Team', category: 'Awards' },
  { src: '/gallery/training-session.jpg', title: 'Training Session', category: 'Corporate' },
  { src: '/gallery/cdri-meeting.jpg', title: 'CDRI Meeting', category: 'Government' },
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-6">
              Our <span className="text-[#d4a039]">Gallery</span>
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
