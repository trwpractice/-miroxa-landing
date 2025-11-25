'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Testimonials Section Component
 * 
 * Displays client testimonials with:
 * - Star ratings
 * - Client info and location
 * - Carousel on mobile/tablet
 * - Grid on desktop
 */

const testimonials = [
  {
    quote: 'Miroxa AI helped us reduce response times by 73% while cutting support costs. The ROI was immediate and the implementation was seamless.',
    author: '[Client Name]',
    role: '[Title]',
    company: '[Company Name]',
    location: 'Saint John, NB',
    rating: 5,
    metric: '73% faster responses',
  },
  {
    quote: 'The lead generation system they built has transformed how we find and qualify prospects. We are closing 40% more deals than before.',
    author: '[Client Name]',
    role: '[Title]',
    company: '[Company Name]',
    location: 'Halifax, NS',
    rating: 5,
    metric: '40% more deals closed',
  },
  {
    quote: 'Their voice agent handles appointment booking 24/7. It is like having a full-time receptionist without the overhead.',
    author: '[Client Name]',
    role: '[Title]',
    company: '[Company Name]',
    location: 'Charlottetown, PEI',
    rating: 5,
    metric: '24/7 availability',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

  // Auto-advance carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="section relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div className="glow-orb-primary w-[500px] h-[500px] bottom-0 left-1/4 opacity-10" aria-hidden="true" />

      <div className="container-lg relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-500/10 border border-primary-500/20 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Star className="w-4 h-4 text-primary-400 fill-primary-400" />
            <span className="text-sm font-medium text-primary-300">Client Success Stories</span>
          </div>

          <h2
            id="testimonials-heading"
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Real Results from{' '}
            <span className="text-gradient">Atlantic Canada Businesses</span>
          </h2>

          <p
            className={`text-lg text-slate-400 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Do not just take our word for it. See what our clients across the region have to say 
            about their AI transformation journey with Miroxa AI.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.company}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="card h-full flex flex-col hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary-500/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-slate-300 mb-6 flex-1">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Metric Badge */}
                <div className="mb-6">
                  <span className="inline-flex px-3 py-1 bg-success/10 border border-success/20 rounded-full text-sm font-medium text-success">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {testimonial.author[1]}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.company}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-primary-500/30" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-base text-slate-300 mb-6">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    {/* Metric Badge */}
                    <div className="mb-6">
                      <span className="inline-flex px-3 py-1 bg-success/10 border border-success/20 rounded-full text-sm font-medium text-success">
                        {testimonial.metric}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {testimonial.author[1]}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{testimonial.author}</div>
                        <div className="text-xs text-slate-400">{testimonial.company}</div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-6 bg-primary-500'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-slate-400 mb-2">
            Ready to see similar results for your business?
          </p>
          <p className="text-sm text-slate-500">
            Join 50+ Atlantic Canadian businesses already transforming with AI
          </p>
        </div>
      </div>
    </section>
  )
}
