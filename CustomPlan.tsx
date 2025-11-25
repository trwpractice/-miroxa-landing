'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles, Clock, FileText, DollarSign, Calendar, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'

/**
 * CustomPlan Section Component
 * 
 * Lead capture section with:
 * - Value proposition messaging
 * - Process preview
 * - Lead capture form with industry/challenge dropdowns
 */

const processPoints = [
  { icon: Calendar, text: 'Free 30-minute discovery call' },
  { icon: FileText, text: 'Custom proposal within 48 hours' },
  { icon: DollarSign, text: 'Transparent pricing, no hidden fees' },
  { icon: Clock, text: 'Flexible implementation timelines' },
]

const industries = [
  'Restaurant & Hospitality',
  'Retail & E-commerce',
  'Professional Services',
  'Real Estate',
  'Manufacturing',
  'Healthcare',
  'Construction',
  'Financial Services',
  'Other',
]

const challenges = [
  'Customer Support Automation',
  'Lead Generation & Qualification',
  'Data Analysis & Reporting',
  'Social Media Management',
  'Operations & Workflow',
  'Appointment Scheduling',
  'Sales Process Optimization',
  'Other',
]

export default function CustomPlan() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    challenge: '',
    email: '',
    phone: '',
    contactMethod: 'email',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="section relative overflow-hidden bg-slate-900/50"
      aria-labelledby="custom-plan-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" aria-hidden="true" />
      <div className="glow-orb-accent w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-10" aria-hidden="true" />

      <div className="container-lg relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent-500/10 border border-accent-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">Custom Solutions</span>
            </div>

            <h2
              id="custom-plan-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Your Business is Unique.{' '}
              <span className="text-gradient-blue">Your AI Solution Should Be Too.</span>
            </h2>

            <p className="text-lg text-slate-400 mb-8">
              We do not believe in one-size-fits-all packages. Every Atlantic Canada business 
              has different needs, workflows, and goals. That is why we create custom AI 
              automation strategies tailored specifically to your business.
            </p>

            {/* Process Points */}
            <div className="space-y-4 mb-8">
              {processPoints.map((point, index) => (
                <div
                  key={point.text}
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-500/10 border border-primary-500/20 rounded-lg">
                    <point.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="text-slate-300">{point.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-800">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-900 flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-slate-400">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-white">50+ businesses automated</div>
                <div className="text-xs text-slate-500">Across Atlantic Canada</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="card bg-slate-900/80 border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Schedule Your Free AI Audit
                </h3>
                <p className="text-sm text-slate-400">
                  Get a custom proposal tailored to your business needs
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-success/10 border border-success/20 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    Thank You!
                  </h4>
                  <p className="text-slate-400">
                    We will be in touch within 24 hours to schedule your free AI audit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="label">
                      Business Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label htmlFor="industry" className="label">
                      Industry <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="select"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Primary Challenge */}
                  <div>
                    <label htmlFor="challenge" className="label">
                      Primary Challenge <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      required
                      className="select"
                    >
                      <option value="">What would you like to automate?</option>
                      {challenges.map((challenge) => (
                        <option key={challenge} value={challenge}>
                          {challenge}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="label">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Phone (Optional) */}
                  <div>
                    <label htmlFor="phone" className="label">
                      Phone Number <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder="(506) 555-1234"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="label">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-500 bg-slate-800 border-slate-600 focus:ring-primary-500 focus:ring-offset-slate-900"
                        />
                        <span className="text-sm text-slate-300">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-500 bg-slate-800 border-slate-600 focus:ring-primary-500 focus:ring-offset-slate-900"
                        />
                        <span className="text-sm text-slate-300">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center btn-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Free AI Audit
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-500">
                    No commitment required. We will reach out within 24 hours.
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
