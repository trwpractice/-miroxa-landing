import type { Metadata, Viewport } from 'next'
import './globals.css'

/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire Miroxa AI website.
 * It includes comprehensive SEO metadata, Open Graph tags, and schema markup
 * for optimal search engine and AI model visibility.
 */

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

// Comprehensive metadata for SEO and GEO optimization
export const metadata: Metadata = {
  // Base URL for canonical links
  metadataBase: new URL('https://miroxa.ai'),
  
  // Primary metadata
  title: {
    default: 'Miroxa AI | AI Automation for Atlantic Canada Businesses',
    template: '%s | Miroxa AI',
  },
  description: 'AI chatbots, automation, and lead generation for SMBs in New Brunswick, Nova Scotia, PEI, and Newfoundland. Proven ROI with 73% faster response times. Book your free consultation today.',
  keywords: [
    'AI automation',
    'chatbot development',
    'lead generation',
    'New Brunswick AI',
    'Atlantic Canada automation',
    'Saint John business automation',
    'AI chatbots',
    'business automation',
    'SMB AI solutions',
    'AI consulting',
    'voice agents',
    'social media automation',
    'Halifax AI',
    'Nova Scotia automation',
    'PEI business technology',
    'Newfoundland AI services',
  ],
  
  // Author and creator information
  authors: [{ name: 'Miroxa AI', url: 'https://miroxa.ai' }],
  creator: 'Miroxa AI',
  publisher: 'Miroxa AI',
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://miroxa.ai',
    siteName: 'Miroxa AI',
    title: 'Miroxa AI - AI Automation That Actually Works',
    description: 'Transform your Atlantic Canada business with proven AI solutions. 73% faster response times. 100% ROI within 6 months.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Miroxa AI - AI Automation for Atlantic Canada Businesses',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@miroxaai',
    creator: '@miroxaai',
    title: 'Miroxa AI | AI Automation for Atlantic Canada',
    description: 'Proven AI solutions for SMBs across New Brunswick, Nova Scotia, PEI, and Newfoundland.',
    images: ['/twitter-image.png'],
  },
  
  // Icons configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  
  // Manifest for PWA
  manifest: '/site.webmanifest',
  
  // Canonical URL
  alternates: {
    canonical: 'https://miroxa.ai',
    languages: {
      'en-CA': 'https://miroxa.ai',
    },
  },
  
  // Category for better classification
  category: 'technology',
  
  // Verification for search consoles (add your verification codes)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

// JSON-LD Schema markup for rich search results
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://miroxa.ai/#organization',
  name: 'Miroxa AI',
  url: 'https://miroxa.ai',
  logo: {
    '@type': 'ImageObject',
    url: 'https://miroxa.ai/logo.png',
    width: 512,
    height: 512,
  },
  description: 'AI automation agency specializing in chatbots, lead generation, and business automation for Atlantic Canada SMBs',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saint John',
    addressRegion: 'NB',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'State', name: 'New Brunswick' },
    { '@type': 'State', name: 'Nova Scotia' },
    { '@type': 'State', name: 'Prince Edward Island' },
    { '@type': 'State', name: 'Newfoundland and Labrador' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/miroxa-ai',
    'https://twitter.com/miroxaai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'French'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://miroxa.ai/#localbusiness',
  name: 'Miroxa AI',
  image: 'https://miroxa.ai/logo.png',
  description: 'AI automation and consulting services for small and medium businesses in Atlantic Canada',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saint John',
    addressRegion: 'NB',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.2733,
    longitude: -66.0633,
  },
  url: 'https://miroxa.ai',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Chatbot Development',
          description: '24/7 AI chatbot and receptionist services for customer support and lead qualification',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lead Generation Systems',
          description: 'Automated lead qualification and CRM integration for increased sales',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Voice Agents',
          description: 'AI phone receptionists for appointment booking and customer inquiries',
        },
      },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://miroxa.ai/#website',
  url: 'https://miroxa.ai',
  name: 'Miroxa AI',
  description: 'AI Automation for Atlantic Canada Businesses',
  publisher: {
    '@id': 'https://miroxa.ai/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://miroxa.ai/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              localBusinessSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-body antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        {children}
      </body>
    </html>
  )
}
