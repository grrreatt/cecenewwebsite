'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { sendFormEmail } from '@/app/actions/send-email';
import { CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    numberOfAttendees: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendFormEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          eventType: '',
          eventDate: '',
          numberOfAttendees: '',
          message: '',
        });
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-6">
              Get in <span className="text-[#d4a039]">Touch</span>
            </h1>
            <p className="text-lg text-gray-600">
              Ready to plan your next event? Contact our team today and let's create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-400 text-sm mb-2 font-semibold uppercase">Email</p>
                <a href="mailto:info@cecevents.in" className="text-2xl md:text-3xl font-bold text-[#d4a039] hover:text-[#b8862e] transition-colors">
                  Info@cecevents.in
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2 font-semibold uppercase">Phone</p>
                <a href="tel:+919654513231" className="text-2xl md:text-3xl font-bold text-[#1a2744] hover:text-[#d4a039] transition-colors">
                  +91 96545 13231
                </a>
                <a href="tel:+918285044061" className="text-2xl md:text-3xl font-bold text-[#1a2744] hover:text-[#d4a039] transition-colors block mt-2">
                  +91 82850 44061
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-3 font-semibold uppercase">Locations</p>
                <p className="text-xl font-semibold text-[#1a2744] mb-2">
                  F322/A, Old MB Road, Lado Sarai
                </p>
                <p className="text-gray-600 mb-4">New Delhi, 110030</p>
                
                <p className="text-xl font-semibold text-[#1a2744] mb-2">
                  CRS Tower, Chattarpur
                </p>
                <p className="text-gray-600">New Delhi, 110074</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-4 font-semibold uppercase">Follow Us</p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[#d4a039]/10 flex items-center justify-center hover:bg-[#d4a039]/20 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-[#d4a039]" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[#d4a039]/10 flex items-center justify-center hover:bg-[#d4a039]/20 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-[#d4a039]" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[#d4a039]/10 flex items-center justify-center hover:bg-[#d4a039]/20 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-[#d4a039]" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[#d4a039]/10 flex items-center justify-center hover:bg-[#d4a039]/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-[#d4a039]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-6">We'll get back to you within 24 hours</p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 text-sm">Message Sent!</p>
                    <p className="text-green-800 text-xs">We'll contact you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
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
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
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
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                  >
                    <option value="">Select event type</option>
                    <option value="Conference">Conference</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Exhibition">Exhibition</option>
                    <option value="Summit">Summit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                      Number of Attendees
                    </label>
                    <input
                      type="number"
                      name="numberOfAttendees"
                      value={formData.numberOfAttendees}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                      placeholder="500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent resize-none"
                    placeholder="Tell us about your event requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4a039] text-white hover:bg-[#b8862e] py-3 font-semibold shadow-lg shadow-[#d4a039]/25"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
