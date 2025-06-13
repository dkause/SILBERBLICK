# SILBERBLICK MVP - Project Scope

## Vision
Minimalist, high-performance photography portfolio website for Daniel Kause, emphasizing quality through simplicity and authentic business photography in Berlin.

## Core Objectives
- **Business Focus**: 80% emphasis on business/corporate photography
- **Local SEO**: Optimize for "Businessfotografie Berlin"
- **Performance**: Fast, responsive, accessible website
- **Design Philosophy**: "Weniger ist mehr" - Irving Penn inspired minimalism

## Technical Requirements

### Framework & Performance
- **Astro** for static site generation and optimal performance
- **Domain**: silberblick.berlin (with 301 redirect from silberblick.net)
- **Hosting**: GitHub Pages or Netlify
- **Build Target**: Static HTML with islands architecture

### Design System

#### Typography (IBM Plex Family)
- **Headings**: IBM Plex Sans (clean, modern)
- **Body Text**: IBM Plex Serif (readable, elegant)
- **Hierarchy**: Clear typographic scale

#### Layout Framework
Implement **every-layout.dev** principles:
- **Intrinsic Web Design**: Content-driven layouts
- **Algorithmic Layout**: CSS logic over fixed dimensions

#### Responsive Images
- **Astro Image Component**: Automatic optimization and responsive variants
- **WebP/AVIF**: Modern format support with fallbacks
- **Lazy Loading**: Performance optimization
- **Art Direction**: Different crops for different viewports

## Content Architecture

### URL Structure
```
silberblick.berlin/                     → Landing/Home
silberblick.berlin/businessfotografie/  → Business photography
silberblick.berlin/architekturfotografie/ → Architectural photography  
silberblick.berlin/portraitfotografie/  → Portrait photography
silberblick.berlin/daniel/              → About page
silberblick.berlin/kontakt/             → Contact form
```

### Content Categories
1. **Businessfotografie** (Primary - 80%)
   - Corporate portraits
   - Team photography
   - Company branding images

2. **Architekturfotografie** (Premium)
   - Architecture
   - Interior design
   - Commercial spaces

3. **Portraitfotografie** (Personal)
   - Individual portraits
   - Personal branding
   - Artistic portraits

## Image Management

### Source Organization
- Import from `/Alle Bilder/` folder
- Categorize by filename prefixes
- Maintain aspect ratios and quality

### Optimization Pipeline
- Convert to WebP/AVIF
- Generate responsive variants
- Optimize alt text for accessibility
- Implement progressive loading

## Performance Targets
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Timeline
- **Day 1**: Astro setup, layout system, typography
- **Day 2**: Content integration, image optimization, deployment