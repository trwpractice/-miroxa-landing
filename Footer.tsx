import Link from 'next/link'
import { Zap, Linkedin, Twitter, Heart } from 'lucide-react'

/**
 * Footer Component
 * 
 * Multi-column footer with:
 * - Logo and tagline
 * - Services links
 * - Company links
 * - Legal links
 * - Social links
 * - Copyright and regional message
 */

const footerLinks = {
  services: [
    { label: 'AI Chatbots', href: '/services/chatbots' },
    { label: 'Social Media Automation', href: '/services/social-media' },
    { label: 'Lead Generation', href: '/services/lead-generation' },
    { label: 'Advanced Analytics', href: '/services/analytics' },
    { label: 'Voice Agents', href: '/services/voice-agents' },
    { label: 'AI Consulting', href: '/services/consulting' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Tutorials & Tips', href: '/tutorials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/miroxa-ai' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/miroxaai' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Main Footer Content */}
      <div className="container-lg py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl rotate-6" />
                <div className="absolute inset-0.5 bg-slate-950 rounded-[10px] rotate-6" />
                <Zap className="relative w-5 h-5 text-primary-400 z-10" />
              </div>
              <span className="font-display font-bold text-xl">
                <span className="text-white">Miroxa</span>
                <span className="text-primary-400"> AI</span>
              </span>
            </Link>

            <p className="text-slate-400 mb-6 max-w-sm">
              AI Automation for Atlantic Canada. We help small and medium businesses 
              across the region transform their operations with proven AI solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup - Optional */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-white mb-3">
                Stay Updated
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Get AI insights delivered to your inbox
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50">
        <div className="container-lg py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} Miroxa AI. All rights reserved.
            </p>

            {/* Regional Message */}
            <p className="text-sm text-slate-500 text-center md:text-right flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Saint John, NB
            </p>
          </div>

          {/* Service Area */}
          <div className="mt-4 pt-4 border-t border-slate-800/30 text-center">
            <p className="text-xs text-slate-600">
              Proudly serving businesses across New Brunswick, Nova Scotia, 
              Prince Edward Island, and Newfoundland and Labrador
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
