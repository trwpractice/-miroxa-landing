'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Send,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

/**
 * Contact Section Component
 * 
 * Two-column layout with:
 * - Contact information (left)
 * - Quick contact form (right)
 */

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Saint John, New Brunswick, Canada',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@miroxa.ai',
    href: 'mailto:hello@miroxa.ai',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(506) 555-1234',
    href: 'tel:+15065551234',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri, 9 AM - 5 PM AST',
    href: null,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/miroxa-ai',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    href: 'https://twitter.com/miroxaai',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section relative overflow-hidden bg-slate-900/50"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" aria-hidden="true" />
      <div className="glow-orb-primary w-[500px] h-[500px] top-0 -left-64 opacity-10" aria-hidden="true" />
      <div className="glow-orb-accent w-[400px] h-[400px] bottom-0 -right-32 opacity-10" aria-hidden="true" />

      <div className="container-lg relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-500/10 border border-primary-500/20 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Send className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Get In Touch</span>
          </div>

          <h2
            id="contact-heading"
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ready to{' '}
            <span className="text-gradient-blue">Automate Smarter?</span>
          </h2>

          <p
            className={`text-lg text-slate-400 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Let us start a conversation about how AI can transform your business. 
            Reach out today for a free consultation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-xl font-display font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-500/10 border border-primary-500/20 rounded-xl">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-white hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-10">
              <h4 className="text-sm font-medium text-slate-400 mb-4">
                Connect With Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="card bg-gradient-to-br from-primary-900/50 to-slate-900 border-primary-500/20">
              <h4 className="font-display font-bold text-white mb-2">
                Prefer a quick call?
              </h4>
              <p className="text-sm text-slate-400 mb-4">
                Schedule a free 30-minute discovery call to discuss your AI automation needs.
              </p>
              <Link href="#pricing" className="btn-primary btn-sm">
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="card bg-slate-900/80 border-slate-700">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-success/10 border border-success/20 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-400">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="label">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contactEmail" className="label">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-500">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
