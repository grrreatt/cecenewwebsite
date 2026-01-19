'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { sendFormEmail } from '@/app/actions/send-email';
import { CheckCircle } from 'lucide-react';

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

      <section className="pt-32 md:pt-40 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
                Join Our <span className="text-[#d4a039]">Team</span>
              </h1>
              <p className="text-lg text-gray-600">
                We're always looking for talented individuals to join CECEVENTS. 
                Share your details and we'll get back to you with opportunities.
              </p>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900">Submission Received!</h3>
                  <p className="text-green-800 text-sm">
                    Thank you for your interest. We'll review your details and contact you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Application Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Current Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent"
                    placeholder="Your company name (optional)"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a039] focus:border-transparent resize-none"
                    placeholder="Share your experience, skills, and why you want to join CECEVENTS..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4a039] text-white hover:bg-[#b8862e] py-3 font-semibold text-lg shadow-lg shadow-[#d4a039]/25"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 bg-[#1a2744] text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-gray-300 text-sm mb-2">Email</p>
                  <p className="font-semibold">info@cecevents.in</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-2">Phone</p>
                  <p className="font-semibold">+91 96545 13231</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-2">WhatsApp</p>
                  <p className="font-semibold">+91 93154 24253</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
