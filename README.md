# Placemarks Landing Page

A modern, responsive marketing website for Placemarks - a list management tool for saving and sharing favorite places.

## Features

- **Next.js 14+** with TypeScript
- **Tailwind CSS** for styling with dark theme
- **Email signup integration** with Kit (ConvertKit) API
- **Client-side email validation** with loading states
- **Optional Supabase backup** for email storage
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

2. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:

```bash
# ConvertKit (Kit) Configuration - Required for email signup
CONVERTKIT_API_KEY=your_convertkit_api_key_here
CONVERTKIT_FORM_ID=your_convertkit_form_id_here

# Optional: Supabase Configuration for backup storage
# SUPABASE_URL=your_supabase_project_url
# SUPABASE_ANON_KEY=your_supabase_anon_key
# SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

To get your ConvertKit credentials:
- Go to your ConvertKit account → Settings → Advanced → API Keys
- Create a new form in ConvertKit and note the form ID from the form settings

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
   - Email signup form with Kit (ConvertKit) integration
   - Email validation and loading states
   - Success/error message handling
   - Secondary CTA button
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

### With Email Signup (Recommended)
For full functionality including the email signup form, deploy to platforms that support API routes:
- **Vercel** (recommended) - Supports API routes out of the box
- **Netlify** - Use Netlify Functions
- **Railway** - Full Node.js support
- Any platform supporting Next.js API routes

Make sure to set the environment variables in your deployment platform:
- `CONVERTKIT_API_KEY`
- `CONVERTKIT_FORM_ID`
- Optional: Supabase variables for backup storage

### Static-Only Deployment
If you prefer static-only deployment without email signup:
1. Uncomment `output: 'export'` in `next.config.js`
2. Remove or comment out the email signup form in `Hero.tsx`
3. Deploy to any static hosting service:
   - GitHub Pages
   - Netlify (static)
   - Vercel (static)
   - Any CDN or static host

## Notes

This is a marketing placeholder website designed to look professional and credible while being easy to iterate on. The design focuses on:
- Clean, modern aesthetics
- Mobile-first responsive design
- Fast loading times
- SEO-friendly structure
- Accessibility considerations
