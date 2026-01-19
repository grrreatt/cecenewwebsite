'use client';

import React from "react"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Facebook, CheckCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ContactPage() {
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
              Get in <span className="text-[#d4a039]">Touch</span>
            </h1>
            <p className="text-lg text-gray-600">
              Ready to plan your next event? Contact our team today and let's create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase mb-3 tracking-wide">Email</p>
                <a href="mailto:info@cecevents.in" className="text-2xl md:text-3xl font-bold text-[#d4a039] hover:text-[#b8862e] transition-colors">
                  Info@cecevents.in
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase mb-3 tracking-wide">Phone</p>
                <a href="tel:+919654513231" className="text-2xl md:text-3xl font-bold text-[#1a2744] hover:text-[#d4a039] transition-colors block">
                  +91 9654513231
                </a>
                <p className="text-gray-500 text-sm mt-2">Available 9 AM - 6 PM IST</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase mb-4 tracking-wide">Locations</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-bold text-[#1a2744] mb-1">
                      F322/A, Old MB Road, Lado Sarai
                    </p>
                    <p className="text-gray-600">New Delhi, 110030</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-500 font-semibold text-sm">and</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                  
                  <div>
                    <p className="text-lg font-bold text-[#1a2744] mb-1">
                      CRS Tower, Chattarpur
                    </p>
                    <p className="text-gray-600">New Delhi, 110074</p>
                  </div>
                </div>
              </div>

              <div>
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
                    href="https://wa.me/919654513231?text=Hello%20Cecevents%2C%20I%20need%20assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all shadow-sm"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>

              {submitted && (
                <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-6 flex items-center gap-3 animate-in fade-in slide-in-from-top">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 text-sm">Message Sent Successfully!</p>
                    <p className="text-green-800 text-xs">We'll contact you soon.</p>
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
                      name="name"
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
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all"
                  >
                    <option value="">Select event type</option>
                    <option value="Conference">Conference</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Exhibition">Exhibition</option>
                    <option value="Summit">Summit</option>
                    <option value="Manpower Services">Manpower Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your event requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4a039] text-white hover:bg-[#b8862e] font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information is safe with us.
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
