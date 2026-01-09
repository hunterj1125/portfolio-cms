# Portfolio CMS

A beautiful portfolio showcase system designed for photographers and artists to display their work elegantly.

## Features

- **Masonry Gallery Grid**: Responsive gallery layout with hover effects
- **Category Filtering**: Filter artworks by Photography, Digital Art, and Painting
- **Lightbox View**: Click any artwork to view in full-screen lightbox with details
- **Large Typography**: Enhanced readability with 7xl+ font sizes
- **Animated Backgrounds**: Dynamic gradient backgrounds with floating elements
- **Glassmorphism Design**: Modern frosted-glass UI elements
- **Statistics Dashboard**: Display total artworks, categories, and artists

## Tech Stack

- **Next.js 16.1.1** with Turbopack for fast development
- **TypeScript** for type safety
- **Tailwind CSS v4** with @tailwindcss/postcss
- **React 19** for UI components

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3005](http://localhost:3005) in your browser.

## Project Structure

```
portfolio-cms/
├── app/
│   ├── components/
│   │   ├── GalleryCard.tsx      # Individual artwork card
│   │   ├── CategoryFilter.tsx   # Category filter buttons
│   │   └── Lightbox.tsx         # Full-screen artwork view
│   ├── types/
│   │   └── artwork.ts           # TypeScript interfaces
│   ├── globals.css              # Tailwind imports
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main gallery page
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind configuration
├── postcss.config.mjs           # PostCSS with Tailwind plugin
└── next.config.ts               # Next.js configuration
```

## Future Enhancements

- Integration with headless CMS (Sanity.io, Contentful)
- Image optimization and lazy loading
- Search functionality
- Artist profile pages
- Admin dashboard for content management
- Social sharing features
- Favorite/like system
