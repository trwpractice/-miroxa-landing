import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Benefits from './components/Benefits'
import CustomPlan from './components/CustomPlan'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Miroxa AI Landing Page
 * 
 * This is the main landing page for Miroxa AI, an AI automation agency
 * serving small and medium businesses across Atlantic Canada.
 * 
 * Page Structure:
 * 1. Navigation - Sticky header with links and CTA
 * 2. Hero - Main value proposition and stats
 * 3. Services - Six core service offerings
 * 4. Process - 4-step implementation process
 * 5. Benefits - Why choose Miroxa AI
 * 6. CustomPlan - Lead capture for custom solutions
 * 7. Testimonials - Client success stories
 * 8. Contact - Contact form and information
 * 9. Footer - Site links and legal
 */

// Service Schema for each main service (for SEO)
const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Chatbot Development',
    provider: {
      '@type': 'Organization',
      name: 'Miroxa AI',
    },
    areaServed: [
      { '@type': 'State', name: 'New Brunswick' },
      { '@type': 'State', name: 'Nova Scotia' },
      { '@type': 'State', name: 'Prince Edward Island' },
      { '@type': 'State', name: 'Newfoundland and Labrador' },
    ],
    description: '24/7 AI chatbot and receptionist services for customer support, lead qualification, and system integration.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lead Generation Systems',
    provider: {
      '@type': 'Organization',
      name: 'Miroxa AI',
    },
    areaServed: [
      { '@type': 'State', name: 'New Brunswick' },
      { '@type': 'State', name: 'Nova Scotia' },
      { '@type': 'State', name: 'Prince Edward Island' },
      { '@type': 'State', name: 'Newfoundland and Labrador' },
    ],
    description: 'Automated lead qualification workflows with LinkedIn Sales Navigator strategies and CRM integration.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Voice Agent Development',
    provider: {
      '@type': 'Organization',
      name: 'Miroxa AI',
    },
    areaServed: [
      { '@type': 'State', name: 'New Brunswick' },
      { '@type': 'State', name: 'Nova Scotia' },
      { '@type': 'State', name: 'Prince Edward Island' },
      { '@type': 'State', name: 'Newfoundland and Labrador' },
    ],
    description: 'AI phone receptionists for 24/7 appointment booking and customer inquiry handling.',
  },
]

// FAQ Schema for common questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI automation and how can it help my Atlantic Canada business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI automation uses artificial intelligence to handle repetitive tasks like customer support, lead qualification, and data analysis. For Atlantic Canada SMBs, this means 24/7 availability, reduced operational costs, and more time to focus on growing your business. Our clients typically see a 73% reduction in response times and achieve full ROI within 6 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Miroxa AI serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miroxa AI is based in Saint John, New Brunswick and serves businesses across all four Atlantic Canadian provinces: New Brunswick, Nova Scotia, Prince Edward Island, and Newfoundland and Labrador. We offer both remote and in-person consultation services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to implement an AI solution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our typical implementation timeline is 2-6 weeks, depending on the complexity of the solution. We start with a discovery week, followed by strategy development, then agile implementation with testing and training. Ongoing support and optimization continue after launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of ROI can I expect from AI automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clients typically achieve 100% ROI within 6 months. Results vary by solution type, but common outcomes include 73% faster response times, 40% increase in closed deals through better lead qualification, and significant cost savings from automated customer support.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      {/* Service and FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Process Section */}
        <Process />

        {/* Benefits Section */}
        <Benefits />

        {/* Custom Plan / Lead Capture Section */}
        <CustomPlan />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
