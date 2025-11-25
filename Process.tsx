'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, Compass, Rocket, TrendingUp, CheckCircle2, Clock } from 'lucide-react'

/**
 * Process Section Component
 * 
 * Displays the 4-step implementation process:
 * 1. Discovery - Week 1
 * 2. Strategy - Week 1-2
 * 3. Implementation - Week 2-6
 * 4. Support & Scale - Ongoing
 */

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    timeline: 'Week 1',
    description: 'We start with a comprehensive assessment of your business needs, challenges, and goals.',
    bullets: [
      'Free consultation and business audit',
      'Identify automation opportunities',
      'Define success metrics',
    ],
    color: 'primary',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Strategy',
    timeline: 'Week 1-2',
    description: 'We design a custom AI solution tailored specifically to your business requirements.',
    bullets: [
      'Custom AI solution design',
      'Technology stack recommendation',
      'ROI projection',
    ],
    color: 'accent',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementation',
    timeline: 'Week 2-6',
    description: 'Our team builds and deploys your AI solution using agile methodologies.',
    bullets: [
      'Agile development and integration',
      'Testing and optimization',
      'Team training',
    ],
    color: 'secondary',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Support & Scale',
    timeline: 'Ongoing',
    description: 'We continue to optimize and scale your AI systems as your business grows.',
    bullets: [
      'Ongoing monitoring and optimization',
      'Performance reporting',
      'Continuous improvement',
    ],
    color: 'primary',
  },
]

const colorMap = {
  primary: {
    bg: 'bg-primary-500',
    bgLight: 'bg-primary-500/10',
    border: 'border-primary-500/30',
    text: 'text-primary-400',
    gradient: 'from-primary-500 to-primary-600',
  },
  accent: {
    bg: 'bg-accent-500',
    bgLight: 'bg-accent-500/10',
    border: 'border-accent-500/30',
    text: 'text-accent-400',
    gradient: 'from-accent-500 to-accent-600',
  },
  secondary: {
    bg: 'bg-secondary-500',
    bgLight: 'bg-secondary-500/10',
    border: 'border-secondary-500/30',
    text: 'text-secondary-400',
    gradient: 'from-secondary-500 to-secondary-600',
  },
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-cycle through steps when visible
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section relative overflow-hidden bg-slate-900/50"
      aria-labelledby="process-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="glow-orb-primary w-[600px] h-[600px] -top-64 -left-64 opacity-10" aria-hidden="true" />
      <div className="glow-orb-accent w-[500px] h-[500px] -bottom-32 -right-32 opacity-10" aria-hidden="true" />

      <div className="container-lg relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent-500/10 border border-accent-500/20 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Clock className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-accent-300">Our Process</span>
          </div>

          <h2
            id="process-heading"
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Proven{' '}
            <span className="text-gradient-blue">4-Step Process</span>
          </h2>

          <p
            className={`text-lg text-slate-400 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            From initial consultation to ongoing optimization, we follow a systematic 
            approach to ensure your AI implementation delivers measurable results.
          </p>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block">
          {/* Progress Line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 rounded-full -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full -translate-y-1/2 transition-all duration-700"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />

            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const colors = colorMap[step.color as keyof typeof colorMap]
                const isActive = index <= activeStep
                const isCurrent = index === activeStep

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className={`group relative flex flex-col items-center transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    {/* Icon Circle */}
                    <div
                      className={`relative w-16 h-16 flex items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                        isCurrent
                          ? `${colors.bg} border-transparent shadow-lg shadow-${step.color}-500/30`
                          : isActive
                          ? `${colors.bgLight} ${colors.border}`
                          : 'bg-slate-800/50 border-slate-700'
                      }`}
                    >
                      <step.icon
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isCurrent ? 'text-white' : isActive ? colors.text : 'text-slate-500'
                        }`}
                      />

                      {/* Pulse Animation */}
                      {isCurrent && (
                        <div className={`absolute inset-0 rounded-2xl ${colors.bg} animate-ping opacity-30`} />
                      )}
                    </div>

                    {/* Step Number & Title */}
                    <div className="mt-4 text-center">
                      <span
                        className={`block text-xs font-mono font-bold mb-1 transition-colors ${
                          isCurrent ? colors.text : 'text-slate-500'
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`block text-sm font-display font-semibold transition-colors ${
                          isCurrent ? 'text-white' : 'text-slate-400'
                        }`}
                      >
                        {step.title}
                      </span>
                      <span
                        className={`block text-xs mt-1 transition-colors ${
                          isCurrent ? colors.text : 'text-slate-500'
                        }`}
                      >
                        {step.timeline}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="max-w-2xl mx-auto">
            {steps.map((step, index) => {
              const colors = colorMap[step.color as keyof typeof colorMap]

              return (
                <div
                  key={step.number}
                  className={`card transition-all duration-500 ${
                    index === activeStep
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 absolute'
                  }`}
                  style={{ display: index === activeStep ? 'block' : 'none' }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${colors.bgLight} ${colors.border} border rounded-xl`}
                    >
                      <step.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-display font-bold text-white">
                          {step.title}
                        </h3>
                        <span className={`badge ${colors.bgLight} ${colors.text} ${colors.border} border`}>
                          {step.timeline}
                        </span>
                      </div>

                      <p className="text-slate-400 mb-4">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2 className={`w-4 h-4 ${colors.text}`} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Process Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const colors = colorMap[step.color as keyof typeof colorMap]

            return (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-gradient-to-b from-slate-700 to-slate-800" />
                )}

                <div className="card">
                  <div className="flex gap-5">
                    {/* Step Number Circle */}
                    <div
                      className={`relative flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br ${colors.gradient} rounded-xl shadow-lg`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                      <span className="absolute -bottom-2 -right-2 w-6 h-6 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-full text-xs font-mono font-bold text-slate-400">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-display font-bold text-white">
                          {step.title}
                        </h3>
                        <span className={`text-xs font-medium ${colors.text}`}>
                          {step.timeline}
                        </span>
                      </div>

                      <p className="text-sm text-slate-400 mb-4">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
