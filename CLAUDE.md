# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Build for production (static export)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Architecture

This is a Next.js marketing website for Placemarks, a place management application. The project uses:

- **Next.js 15.3.4** with TypeScript and Pages Router
- **Tailwind CSS 4** for styling with custom color variables
- **ConvertKit API** integration for email signup functionality
- **Static export** capability for deployment flexibility

### Key Files Structure

- `pages/index.tsx` - Main landing page with inline styles (simplified single-page approach)
- `pages/_app.tsx` - App wrapper with Google Analytics 4 integration
- `pages/api/subscribe.ts` - ConvertKit email subscription API endpoint
- `components/Layout.tsx` - SEO-optimized layout wrapper (currently unused)
- `components/` - Modular components (Hero, Features, etc.) - currently unused in favor of single-page approach

### Current Implementation

The site currently uses a simplified single-page approach with all content in `pages/index.tsx` using inline styles rather than the component-based architecture outlined in the README. This was likely done for rapid prototyping.

### Email Signup Integration

The email signup form connects to ConvertKit API via `/api/subscribe` endpoint. Required environment variables:
- `CONVERTKIT_API_KEY` - ConvertKit API key
- `CONVERTKIT_FORM_ID` - ConvertKit form ID

Optional Supabase backup (currently commented out):
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` 
- `SUPABASE_SERVICE_ROLE_KEY`

### Deployment Configuration

The `next.config.js` has commented out `output: 'export'` line. Uncomment this for static-only deployment without API routes. Current configuration supports API routes for email functionality.

### Theme and Design

- Dark theme with golden yellow accents (`#eab308`)
- Custom Tailwind config with primary colors and dark variants
- Google Analytics 4 tracking implemented
- Responsive design with mobile-first approach

### TypeScript Configuration

- Path mapping configured for `@/*` imports (though not currently used)
- Strict TypeScript settings enabled
- Next.js plugin for enhanced type checking