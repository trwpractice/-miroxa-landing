'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  MessageSquare,
  Share2,
  Magnet,
  BarChart3,
  Phone,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

/**
 * Services Section Component
 * 
 * Displays the six main services offered by Miroxa AI:
 * - AI Chatbots & Receptionists
 * - Social Media Automation
 * - Lead Generation
 * - Advanced Analytics
 * - Voice Agents
 * - AI Consulting
 */

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Receptionists',
    description: '24/7 customer support automation with intelligent lead qualification and routing, seamlessly integrated with your existing systems.',
    features: [
      '24/7 customer support',
      'Lead qualification',
      'System integration',
    ],
    color: 'primary',
    href: '/services/chatbots',
  },
  {
    icon: Share2,
    title: 'Social Media Automation',
    description: 'Multi-platform content distribution with AI-powered generation and comprehensive engagement tracking and analytics.',
    features: [
      'Multi-platform posting',
      'AI content generation',
      'Analytics dashboard',
    ],
    color: 'accent',
    href: '/services/social-media',
  },
  {
    icon: Magnet,
    title: 'Lead Generation',
    description: 'LinkedIn Sales Navigator strategies with automated qualification workflows and seamless CRM integration.',
    features: [
      'LinkedIn strategies',
      'Automated workflows',
      'CRM integration',
    ],
    color: 'secondary',
    href: '/services/lead-generation',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Business intelligence dashboards with predictive analytics and comprehensive ROI tracking and reporting.',
    features: [
      'BI dashboards',
      'Predictive analytics',
      'ROI reporting',
    ],
    color: 'primary',
    href: '/services/analytics',
  },
  {
    icon: Phone,
    title: 'Voice Agents',
    description: 'AI phone receptionists handling appointment booking, customer inquiries, and call routing around the clock.',
    features: [
      'Phone receptionist',
      'Appointment booking',
      'Call handling',
    ],
    color: 'accent',
    href: '/services/voice-agents',
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting',
    description: 'Custom AI strategy development with comprehensive process automation audits and detailed implementation roadmaps.',
    features: [
      'Strategy development',
      'Process audits',
      'Implementation plans',
    ],
    color: 'secondary',
    href: '/services/consulting',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/20',
    icon: 'text-primary-400',
    hover: 'group-hover:border-primary-500/40 group-hover:shadow-primary-500/10',
    glow: 'group-hover:bg-primary-500/20',
  },
  accent: {
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    icon: 'text-accent-400',
    hover: 'group-hover:border-accent-500/40 group-hover:shadow-accent-500/10',
    glow: 'group-hover:bg-accent-500/20',
  },
  secondary: {
    bg: 'bg-secondary-500/10',
    border: 'border-secondary-500/20',
    icon: 'text-secondary-400',
    hover: 'group-hover:border-secondary-500/40 group-hover:shadow-secondary-500/10',
    glow: 'group-hover:bg-secondary-500/20',
  },
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" aria-hidden="true" />
      <div className="glow-orb-primary w-[500px] h-[500px] top-0 left-1/4 opacity-10" aria-hidden="true" />
      <div className="glow-orb-accent w-[400px] h-[400px] bottom-0 right-1/4 opacity-10" aria-hidden="true" />

      <div className="container-lg relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-500/10 border border-primary-500/20 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Our Services</span>
          </div>

          <h2
            id="services-heading"
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            AI Solutions Built for{' '}
            <span className="text-gradient">Atlantic Canadian Businesses</span>
          </h2>

          <p
            className={`text-lg text-slate-400 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            From intelligent chatbots to comprehensive analytics, we provide end-to-end 
            AI solutions designed specifically for the unique needs of SMBs in our region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative card card-hover transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 ${colors.glow} transition-opacity duration-300`}
                  aria-hidden="true"
                />

                {/* Card Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center ${colors.bg} ${colors.border} border rounded-xl mb-6 transition-all duration-300 group-hover:scale-110`}
                  >
                    <service.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gradient-blue transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-500"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.border} border`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-sm font-medium ${colors.icon} group-hover:gap-3 transition-all duration-300`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-slate-400 mb-6">
            Not sure which service is right for you?
          </p>
          <Link href="#contact" className="btn-primary">
            Get a Free AI Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
