'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Award, HeadphonesIcon, Users, BarChart3, Clock, Shield, Heart, Zap } from 'lucide-react'

/**
 * Benefits Section Component
 * 
 * Three column layout highlighting:
 * 1. Local Expertise - Atlantic Canada focus
 * 2. Proven Results - Documented success
 * 3. Full-Service Support - End-to-end service
 */

const benefits = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Based in Saint John, New Brunswick, we understand Atlantic Canadian business challenges.',
    features: [
      { icon: Users, text: 'Same timezone, same business culture' },
      { icon: Heart, text: 'We understand local challenges' },
      { icon: MapPin, text: 'In-person meetings available' },
    ],
    highlight: 'Saint John, NB',
    color: 'primary',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Real metrics from real businesses across Atlantic Canada.',
    features: [
      { icon: BarChart3, text: 'Case studies with real metrics' },
      { icon: Clock, text: 'Documented time savings' },
      { icon: Zap, text: 'Measurable cost reductions' },
    ],
    highlight: '73% Faster',
    color: 'accent',
  },
  {
    icon: HeadphonesIcon,
    title: 'Full-Service Support',
    description: 'From implementation to optimization, we are with you every step of the way.',
    features: [
      { icon: Shield, text: 'End-to-end implementation' },
      { icon: Users, text: 'Comprehensive training' },
      { icon: HeadphonesIcon, text: 'Dedicated support team' },
    ],
    highlight: '24/7 Support',
    color: 'secondary',
  },
]

const colorMap = {
  primary: {
    bgLight: 'bg-primary-500/10',
    border: 'border-primary-500/20',
    text: 'text-primary-400',
    highlight: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
  },
  accent: {
    bgLight: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    text: 'text-accent-400',
    highlight: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
  },
  secondary: {
    bgLight: 'bg-secondary-500/10',
    border: 'border-secondary-500/20',
    text: 'text-secondary-400',
    highlight: 'bg-secondary-500/20 text-secondary-300 border-secondary-500/30',
  },
}

export default function Benefits() {
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
      id="about"
      className="section relative overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" aria-hidden="true" />
      <div className="glow-orb-secondary w-[500px] h-[500px] top-0 right-0 opacity-10" aria-hidden="true" />
      <div className="glow-orb-primary w-[400px] h-[400px] bottom-0 left-0 opacity-10" aria-hidden="true" />

      <div className="container-lg relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-secondary-500/10 border border-secondary-500/20 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Award className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-medium text-secondary-300">Why Choose Us</span>
          </div>

          <h2
            id="benefits-heading"
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Why Atlantic Canada Businesses{' '}
            <span className="text-gradient-purple">Choose Miroxa AI</span>
          </h2>

          <p
            className={`text-lg text-slate-400 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We combine deep local knowledge with cutting-edge AI expertise to deliver 
            solutions that work for businesses in our region.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const colors = colorMap[benefit.color as keyof typeof colorMap]

            return (
              <div
                key={benefit.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="card h-full hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 flex items-center justify-center ${colors.bgLight} ${colors.border} border rounded-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <benefit.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    
                    <span className={`px-3 py-1 text-xs font-semibold ${colors.highlight} border rounded-full`}>
                      {benefit.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6">
                    {benefit.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-4">
                    {benefit.features.map((feature, featureIndex) => (
                      <li
                        key={feature.text}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-8 h-8 flex items-center justify-center ${colors.bgLight} rounded-lg`}
                        >
                          <feature.icon className={`w-4 h-4 ${colors.text}`} />
                        </div>
                        <span className="text-sm text-slate-300">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Atlantic Canada Map Visual */}
        <div
          className={`mt-16 md:mt-20 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="card bg-gradient-to-br from-slate-900 to-slate-800/50 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Map Placeholder - Replace with actual SVG map */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
                  {/* Simplified Map Representation */}
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  
                  {/* Province Labels */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                    <div className="text-center mb-6">
                      <div className="text-xs text-slate-500 mb-1">Serving all of</div>
                      <div className="text-2xl font-display font-bold text-gradient">Atlantic Canada</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                      {['New Brunswick', 'Nova Scotia', 'Prince Edward Island', 'Newfoundland'].map((province) => (
                        <div
                          key={province}
                          className="flex items-center gap-2 p-2 bg-slate-800/50 rounded-lg border border-slate-700"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary-500" />
                          <span className="text-xs text-slate-300">{province}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                    <circle cx="50%" cy="50%" r="4" fill="rgb(59, 130, 246)" className="animate-pulse" />
                    <circle cx="30%" cy="40%" r="3" fill="rgb(6, 182, 212)" className="animate-pulse animation-delay-200" />
                    <circle cx="70%" cy="35%" r="3" fill="rgb(124, 58, 237)" className="animate-pulse animation-delay-400" />
                    <circle cx="60%" cy="65%" r="3" fill="rgb(59, 130, 246)" className="animate-pulse animation-delay-600" />
                    <line x1="50%" y1="50%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="70%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="60%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Proudly Serving Atlantic Canada
                </h3>
                
                <p className="text-slate-400 mb-6">
                  From our base in Saint John, New Brunswick, we serve businesses across all four 
                  Atlantic provinces. Whether you are in Halifax, Charlottetown, St. John&apos;s, or 
                  Moncton, we understand your market and your challenges.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {['New Brunswick', 'Nova Scotia', 'PEI', 'Newfoundland'].map((province) => (
                    <span
                      key={province}
                      className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-300"
                    >
                      {province}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
