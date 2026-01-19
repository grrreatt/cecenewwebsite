'use client';

import React from "react"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, CheckCircle, Mail, MessageCircle } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formElement = e.currentTarget;
    
    try {
      const response = await fetch('https://formspree.io/f/xyzaabjy', {
        method: 'POST',
        body: new FormData(formElement),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        formElement.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-6">
              Join Our <span className="text-[#d4a039]">Team</span>
            </h1>
            <p className="text-lg text-gray-600">
              We're looking for talented professionals to join us in creating outstanding event experiences. 
              Share your passion and expertise with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-xs mb-1 font-semibold">Email</p>
                  <a href="mailto:info@cecevents.in" className="text-lg font-bold text-[#d4a039] hover:text-[#b8862e] transition-colors">
                    Info@cecevents.in
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1 font-semibold">Phone</p>
                  <a href="tel:+919654513231" className="text-lg font-bold text-[#1a2744] hover:text-[#d4a039] transition-colors">
                    +91 9654513231
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-500 text-xs font-semibold uppercase mb-4 tracking-wide">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/cecevents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#d4a039]/10 flex items-center justify-center hover:bg-[#d4a039] text-[#d4a039] hover:text-white transition-all shadow-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/chronicleeventsandconferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#d4a039]/10 flex items-center justify-center hover:bg-[#d4a039] text-[#d4a039] hover:text-white transition-all shadow-sm"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/919654513231?text=Hello%20Cecevents%2C%20I%20have%20career%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-2">Application Form</h3>
              <p className="text-gray-600 mb-8">Tell us about yourself and why you'd be a great fit for our team.</p>

              {submitted && (
                <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-6 flex items-center gap-3 animate-in fade-in slide-in-from-top">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 text-sm">Application Submitted!</p>
                    <p className="text-green-800 text-xs">Thank you! We'll review your application shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Position Interested In
                    </label>
                    <input
                      type="text"
                      name="position"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                      placeholder="e.g., Event Coordinator"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Current Company
                    </label>
                    <input
                      type="text"
                      name="current_company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                      placeholder="Your current employer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      name="experience"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Tell Us About Yourself *
                  </label>
                  <textarea
                    name="about_yourself"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all resize-none"
                    placeholder="Share your background, skills, and what excites you about joining our team..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4a039] text-white hover:bg-[#b8862e] font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  All submissions are confidential and reviewed carefully.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
