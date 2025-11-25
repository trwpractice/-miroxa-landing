'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, MapPin, Trophy, Target, Sparkles, Bot, Zap, TrendingUp } from 'lucide-react'

/**
 * Hero Section Component
 * 
 * The main above-the-fold section featuring:
 * - Compelling headline and subheadline
 * - Primary and secondary CTAs
 * - Trust badges
 * - Animated visual elements
 * - Stats bar
 */

const trustBadges = [
  { icon: MapPin, label: 'Atlantic Canada Based' },
  { icon: Trophy, label: 'Proven Results' },
  { icon: Target, label: 'SMB Focused' },
]

const stats = [
  { value: '50+', label: 'Businesses Automated' },
  { value: '73%', label: 'Avg Response Time Reduction' },
  { value: '100%', label: 'ROI Within 6 Months' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated background particles effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = particle.x - p2.x
          const dy = particle.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-labelledby="hero-heading">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Gradient Orbs */}
      <div className="glow-orb-primary w-[600px] h-[600px] -top-48 -right-48" aria-hidden="true" />
      <div className="glow-orb-accent w-[500px] h-[500px] top-1/3 -left-64" aria-hidden="true" />
      <div className="glow-orb-secondary w-[400px] h-[400px] bottom-0 right-1/4" aria-hidden="true" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative flex-1 flex items-center pt-20 md:pt-24">
        <div className="container-lg py-12 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary-500/10 border border-primary-500/20 rounded-full animate-fade-in-down">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">
                Now serving all of Atlantic Canada
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in-up"
            >
              <span className="text-white">Transform Your Atlantic Canada Business With </span>
              <span className="text-gradient">AI Automation That Actually Works</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Proven AI solutions delivering measurable ROI. From chatbots to lead generation, 
              we help SMBs across New Brunswick, Nova Scotia, PEI, and Newfoundland automate 
              smarter, not harder.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-300">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full"
                >
                  <badge.icon className="w-4 h-4 text-accent-400" />
                  <span className="text-sm font-medium text-slate-300">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
              <Link href="#contact" className="btn-primary btn-lg group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="#case-studies" className="btn-secondary btn-lg group">
                <Play className="w-5 h-5" />
                View Case Studies
              </Link>
            </div>

            {/* Floating Feature Icons */}
            <div className="hidden lg:block">
              <div className="absolute left-10 top-1/3 animate-float" style={{ animationDelay: '0s' }}>
                <div className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                  <Bot className="w-8 h-8 text-primary-400" />
                </div>
              </div>
              <div className="absolute right-10 top-1/4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                  <Zap className="w-8 h-8 text-accent-400" />
                </div>
              </div>
              <div className="absolute right-20 bottom-1/3 animate-float" style={{ animationDelay: '4s' }}>
                <div className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-secondary-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
        <div className="container-lg py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center animate-fade-in-up ${
                  index === 1 ? 'md:border-x md:border-slate-800/50' : ''
                }`}
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-slate-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
