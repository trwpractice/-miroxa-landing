# Miroxa AI - Landing Page

A production-ready, SEO-optimized landing page for Miroxa AI, an AI automation agency serving small and medium businesses across Atlantic Canada.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **SEO Optimized**: Comprehensive metadata, Open Graph, Twitter Cards
- **Schema Markup**: Organization, LocalBusiness, Service, FAQ schemas
- **Responsive Design**: Mobile-first approach with smooth animations
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized for Core Web Vitals
- **GEO Ready**: Optimized for AI search engines and generative models

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17.0 or higher
- **npm**: Version 9.0.0 or higher (or yarn/pnpm)
- **Git**: For version control

```bash
# Check your versions
node -v
npm -v
```

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/miroxa-landing.git
cd miroxa-landing
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
miroxa-landing/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Sticky header with mobile menu
│   │   ├── Hero.tsx          # Main hero section with animations
│   │   ├── Services.tsx      # Service cards grid
│   │   ├── Process.tsx       # 4-step process timeline
│   │   ├── Benefits.tsx      # Why choose us section
│   │   ├── CustomPlan.tsx    # Lead capture form
│   │   ├── Testimonials.tsx  # Client testimonials carousel
│   │   ├── Contact.tsx       # Contact form and info
│   │   └── Footer.tsx        # Site footer
│   ├── globals.css           # Global styles and Tailwind
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Main landing page
├── public/
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # Site map for SEO
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: { ... },    // Blue - professional, trustworthy
  secondary: { ... },  // Purple - innovation, AI
  accent: { ... },     // Cyan - technology
}
```

### Typography

The project uses these fonts (loaded via Google Fonts):

- **Display**: Sora (headings)
- **Body**: Outfit (paragraphs)
- **Mono**: JetBrains Mono (code)

### Content

Update content directly in the component files:

- **Hero text**: `app/components/Hero.tsx`
- **Services**: `app/components/Services.tsx`
- **Testimonials**: `app/components/Testimonials.tsx`
- **Contact info**: `app/components/Contact.tsx`

### SEO Metadata

Update SEO settings in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  // ... other metadata
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large |

## 🧪 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**

```bash
npm i -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure settings:
   - Framework Preset: Next.js
   - Root Directory: ./
6. Click "Deploy"

### Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `miroxa.ai`
4. Update DNS records:
   - Add A record: `76.76.21.21`
   - Add CNAME: `cname.vercel-dns.com`

### Environment Variables (if needed)

Add in Vercel dashboard under Settings → Environment Variables:

```
# Example variables (add as needed)
NEXT_PUBLIC_SITE_URL=https://miroxa.ai
CONTACT_FORM_ENDPOINT=https://your-api.com/contact
```

## 📊 Performance Optimization

The site is optimized for Core Web Vitals:

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Techniques Used

- Next.js Image optimization
- Font display swap
- CSS-only animations where possible
- Lazy loading for below-fold content
- Minimal JavaScript bundle

## 🔍 SEO Checklist

- [x] Unique title and meta description
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] robots.txt configuration
- [x] XML sitemap
- [x] Schema.org markup (Organization, LocalBusiness, Service, FAQ)
- [x] Semantic HTML structure
- [x] Alt text placeholders for images
- [x] Mobile-responsive design

## 📝 Post-Launch Checklist

After deployment, complete these steps:

1. **Add actual images**
   - Logo (logo.png, favicon.ico)
   - OG image (og-image.png - 1200x630)
   - Twitter image (twitter-image.png)

2. **Update testimonials**
   - Replace placeholder names
   - Add real company names
   - Include actual photos

3. **Set up analytics**
   - Google Analytics 4
   - Google Search Console
   - Vercel Analytics (optional)

4. **Connect form endpoints**
   - Replace form simulation with actual API
   - Set up email notifications

5. **Verify SEO**
   - Submit sitemap to Google Search Console
   - Test with Google Rich Results Test
   - Check mobile usability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Hosting platform

---

**Built with ❤️ for Atlantic Canadian businesses by Miroxa AI**

For support, contact [hello@miroxa.ai](mailto:hello@miroxa.ai)
