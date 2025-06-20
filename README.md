# Placemarks Landing Page

A modern, responsive marketing website for Placemarks - a list management tool for saving and sharing favorite places.

## Features

- **Next.js 14+** with TypeScript
- **Tailwind CSS** for styling with dark theme
- **Static export** configuration for Vercel deployment
- **Responsive design** (mobile-first approach)
- **Lucide React** icons for consistency
- **Modern dark theme** with blue/teal accent colors

## Project Structure

```
placemarks-landing/
├── pages/
│   ├── index.tsx          # Main landing page
│   └── _app.tsx           # App wrapper with global styles
├── components/
│   ├── Layout.tsx         # Layout wrapper with SEO meta tags
│   ├── Hero.tsx           # Hero section with CTA buttons
│   ├── Features.tsx       # 3-column features grid
│   ├── HowItWorks.tsx     # 3-step process explanation
│   └── Footer.tsx         # Simple footer with links
├── styles/
│   └── globals.css        # Global styles and Tailwind imports
├── public/                # Static assets
├── next.config.js         # Next.js configuration for static export
└── tailwind.config.ts     # Tailwind CSS configuration
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory that can be deployed to Vercel or any static hosting service.

## Design System

### Colors
- **Background**: `#0f172a` (dark slate)
- **Secondary Background**: `#1e293b` (lighter slate)
- **Primary Accent**: `#0ea5e9` (sky blue)
- **Text**: `#f8fafc` (near white)
- **Secondary Text**: `#cbd5e1` (light gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with good contrast
- **Body**: Regular weight, readable line height

### Components
- **Buttons**: Primary (blue) and secondary (outlined) variants
- **Cards**: Dark background with subtle borders
- **Icons**: Lucide React for consistency
- **Spacing**: Generous whitespace with responsive padding

## Page Sections

1. **Hero Section**
   - Large heading with brand messaging
   - Descriptive subheading
   - Primary and secondary CTA buttons
   - Visual placeholder for map/location graphics

2. **Features Section**
   - 3-column grid (responsive)
   - Save Places, Organize Lists, Share & Discover
   - Icons and descriptions for each feature

3. **How It Works**
   - 3-step process explanation
   - Visual step indicators
   - Clear, actionable descriptions

4. **Footer**
   - Copyright information
   - Placeholder links (Privacy, Terms, Contact)
   - Social media icons

## Deployment

The project is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

The `next.config.js` includes the necessary configuration for static export.

## Notes

This is a marketing placeholder website designed to look professional and credible while being easy to iterate on. The design focuses on:
- Clean, modern aesthetics
- Mobile-first responsive design
- Fast loading times
- SEO-friendly structure
- Accessibility considerations
