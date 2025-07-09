# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SILBERBLICK is a static HTML photography portfolio website for photographer Daniel Kause in Berlin. The site features:

- Portfolio page with filterable masonry grid layout using Isotope.js
- Image categories: portraits, stillleben (still life), landschaften (landscapes)
- Responsive design using Pico CSS framework
- German language content

## Architecture

- **Frontend**: Vanilla HTML/CSS/JS with Pico CSS framework
- **Layout**: Masonry grid using Isotope.js for portfolio filtering
- **Images**: Organized in `/res/img/` with subdirectories by category
- **Styling**: Custom CSS in `/res/css/styles.css` with IBM Plex fonts
- **No build process**: Direct static HTML files

## Image Management System

The project uses a structured metadata system for organizing photography assets. All images have corresponding markdown files with frontmatter metadata.

### Frontmatter Schema für Bilddateien

Für jede Bilddatei (.jpg, .jpeg, .png) soll eine entsprechende .md-Datei erstellt werden mit folgendem Schema:

```yaml
---
name: "Beschreibender Name des Bildes"
image:
  src: "/images/kategorie/dateiname.webp"
  alt: "Beschreibender Alt-Text für Barrierefreiheit"
---
Professionelle Beschreibung des Bildes in 1-2 Sätzen...
```

### Kategorien

- **stillleben** - für Wellness/Spa-Fotos, Produktfotografie, Arrangements
- **portraits** - für Personen-Portraits, Business-Fotos, Charakterstudien
- **landschaften** - für Architektur, Stadtansichten, Naturaufnahmen

### Genre-Beispiele

- Werbefotografie
- Portraitfotografie
- Business Fotografie
- Marketing Fotografie
- Architekturfotografie
- Landschaftsfotografie

### Slug-Erstellung

- Kurz und prägnant (max. 4-5 Wörter)
- SEO-optimiert mit relevanten Keywords
- Bindestriche statt Leerzeichen
- Kleinschreibung
- Beschreibt Inhalt und Zweck des Bildes

### Alt-Text

- Beschreibt das Bild für Barrierefreiheit
- Konkret und aussagekräftig
- Erwähnt wichtige visuelle Elemente
- Kontextbezogen

### Bildpfade

- Webp-Format in den Pfaden verwenden
- Struktur: `/images/kategorie/dateiname.webp`
- Kategorien: stillleben, portraits, landschaften

### Beschreibungstext

- 1-2 professionelle Sätze
- Fokus auf Zweck und Atmosphäre
- Erwähnung des Kunden/Kontexts wenn relevant
- Professioneller, kreativer Stil

## MVP Projekt Status (November 2024)

### Ziel

- MVP in 2 Tagen für silberblick.berlin
- Astro-basierte Neuentwicklung im Branch `mvp-astro`
- Business-Fokus (80% der Kunden sind Unternehmen)
- SEO-optimiert für "Businessfotografie Berlin"

### Daniel's Profil

- Fotograf seit 1995, Meister seit 2003
- Ehemalige Studios in Berlin, Kunden: JLL, Argusdata, kleine Unternehmer
- Stil: Irving Penn-inspiriert, "Weniger ist mehr", Anti-Marketing
- Authentizität statt Pose, Qualität durch Erfahrung

### Geplante Struktur

```
SILBERBLICK
"Weniger ist mehr. Seit 1995."
━ Menschen
━ Produkte
━ Räume
━ Daniel
━ Kontakt
```

### Design-Philosophie

- Viel Weißraum, große Bilder, minimaler Text
- Keine Marketing-Sprache, ehrlich und direkt
- Bauhaus-inspiriert, funktional
- Zeitlose Qualität statt Trends

## Aktueller Entwicklungsstand (Juni 2025)

### ✅ Abgeschlosssen

- **Astro Projekt Setup**: Grundlegendes Astro-Projekt mit TypeScript konfiguriert
- **Branch mvp-astro**: Entwicklung im separaten Branch
- **Minimal Layout System**: CSS mit stack, grid, frame Primitives
- **Vollständige Routing-Struktur**:
  - `/` - Homepage "Einfach gute Fotos" mit Daniel's Branding
  - `/businessfotografie/` - Business-/Unternehmensportraits
  - `/architekturfotografie/` - Architektur-/Raumfotografie
  - `/portraitfotografie/` - Authentische Portraits
  - `/daniel/` - About-Seite mit Fotograf-Profil
  - `/kontakt/` - Kontaktformular und Informationen
- **Design-System**: IBM Plex Fonts, konsistente Navigation, responsive Grid-Layouts
- **SEO-Foto-System**: 39 individuelle Foto-Seiten mit responsive WebP-Optimierung
- **Content Collections**: TypeScript-Schema für alle Fotografie-Metadaten
- **Galerie-System**: 4 Kategorie-Galerien mit anklickbaren Thumbnails
- **Astro Image Optimization**: Automatische WebP-Konvertierung (avg. 70% Größenreduktion)

### Navigation & Branding

- **Headline**: "Einfach gute Fotos" (statt "Weniger ist mehr")
- **Subline**: "Daniel Kause, Fotograf seit 1995"
- **Fokus**: Authentische Fotografie ohne Marketing-Sprache
- **Struktur**: Business → Architektur → Portraits → Daniel → Kontakt

### Tech Stack (aktuell)

- **Framework**: Astro 5.9.2 (läuft auf localhost:4321)
- **Styling**: Custom CSS mit Layout-Primitives (/src/styles/layout.css)
- **Fonts**: IBM Plex Sans/Serif (lokal bevorzugt, CDN Fallback)
- **Images**: Echte Fotos aus "Alle Bilder" mit Astro Image Optimization
- **Content**: Markdown mit Frontmatter-Schema für alle 39 Fotos
- **Branch**: mvp-astro (aktiv)

### 🎯 TODO für Heute (12. Juni 2025)

**Navigation & Branding (Priorität: Hoch):**

1. ~~**Gruppen-Navigation**: [Business, Architektur, Portraits] und [Daniel, Kontakt] visuell stärker von einander abheben~~

   - ~~Portfolio-Links (Business/Architektur/Portraits) als primäre Gruppe~~
   - ~~Info-Links (Daniel/Kontakt) als sekundäre Gruppe~~
   - ~~Visuell durch Spacing, Farbe oder Trenner unterscheiden~~

2. ~~**SILBERBLICK Logo**: Text-Brand durch Logo ersetzen~~

   - ~~Minimalistisches Logo im Bauhaus-Stil entwickeln~~
   - ~~SVG-Format für scharfe Darstellung~~
   - ~~Responsive Größenanpassung~~

3. **Mobile Menu**: Responsive Navigation für Smartphones implementieren
   - Hamburger-Menu für < 768px
   - Slide-out oder Dropdown-Navigation
   - Touch-optimierte Buttons

**Content & Layout (Priorität: Mittel):** 4. **Content Überarbeitung**: Texte und Beschreibungen professioneller gestalten

- Galerie-Beschreibungen erweitern
- Foto-Beschreibungen überarbeiten
- Homepage-Content finalisieren

5. ~~**DRY-Prinzip**: Layout auf Wiederholungen überprüfen und Components auslagern~~
   - ~~Navigation Component erstellen~~
   - ~~Gallery Component für wiederkehrende Layouts~~
   - ~~Font-Loading Component~~
   - ~~Meta Tags Component~~

**Später (Deployment):** 6. **SEO**: Meta Tags, Schema.org Markup finalisieren 7. **Deployment**: GitHub Pages/Netlify Setup  
8. **Kontaktformular**: Netlify Forms Integration

### ✅ Erledigte Aufgaben

- ~~Bildintegration: Echte Bilder aus "Alle Bilder" Ordner einbinden~~
- ~~Image Optimization: Astro Image Component implementieren~~
- ~~Einzelne Fotoseiten als MD Files: Jedes Foto als separate Markdown-Datei mit Frontmatter strukturieren~~
- ~~Content aufgeräumt (13.6.2025): Legacy Files entfernt, Landschaftsfotos nach Architektur verschoben~~
- ~~3-Spalten Foto-Layout für Einzelbilder implementiert~~
- ~~Magazine-Layout Konzept entwickelt: Serie-Cards statt Thumbnail-Grid~~
- ~~SeriesGallery.astro Component mit Editorial Design erstellt~~
- ~~Static Build erfolgreich getestet nach Cleanup~~

### Technical Memories

- **Content Collections**: photo.id.replace('.md', '') für Bild-Mapping verwenden
- **Astro Image**: Bilder müssen in src/assets/ für Optimierung (nicht public/)
- **Dynamic Routes**: [category]/[slug].astro für SEO-URLs
- **Image Import**: import.meta.glob() für dynamisches Laden aller Kategorie-Bilder

### Bildkategorien (verfügbar)

- **Business**: JLL, Samakiez, Businessportraits (ca. 15 Bilder)
- **Architektur**: Architektur, Landschaften (ca. 8 Bilder)
- **Portraits**: Freie Arbeit, Portrait-Werbung (ca. 18 Bilder)

### Domain & Hosting

- Domain: silberblick.berlin (lokale Berlin SEO)
- Hosting: GitHub Pages oder Netlify
- Kontaktformular: Netlify Forms (erste Version)

## Technical Memories

- fonts preloader und cdn als componente
- merke dir fließtext und überschriften immer links bündig. zentrierter text ist die ausnahme.
- keine text decoration wie uppercase, bold eigenständig anlegen
- **Design-Workflow (13.6.2025)**: Relative CSS-Werte bevorzugen (rem, %, clamp) statt Pixel-Werte
- **Sketch Integration**: Sketch Cloud nicht kompatibel mit WebFetch → Screenshot-Workflow optimal
- **Magazine-Layout**: Editorial Design mit asymmetrischen Grids statt Shop-Cards für bessere UX/SEO
- **Flexbox Masonry**: Löst Thumbnail-Beschneidung bei Hoch- und Querformaten

### 🎯 TODO für 13.6.2025

**Design & UX (Priorität: Hoch):**

1. **Design-System verfeinern**: Visuelle Hierarchie und Spacing optimieren

   - Typography-Scale überarbeiten (Überschriften, Abstände)
   - Color-Palette erweitern (Akzentfarben, Hover-States)
   - Grid-Layout für Galerien verbessern
   - Bauhaus-inspirierte Design-Elemente verstärken

2. **Mobile Responsiveness**: Navigation und Layout für Smartphones optimieren
   - Hamburger-Menu bei Bedarf implementieren
   - Touch-Optimierung für Galerien (größere Touch-Targets)
   - Mobile Performance und Scrolling testen
   - Responsive Image-Sizing verfeinern

**Magazine-Layout Finalisierung (Priorität: Hoch):** 3. **Businessfotografie Magazine-Layout optimieren**: Editorial Design verfeinern

- Sketch → CSS Workflow mit Screenshots etablieren
- Asymmetrische Grid-Layouts für verschiedene Serie-Präsentationen
- Magazine-Layout auf andere Kategorien (Architektur, Portraits) ausweiten

**Content & Finishing (Priorität: Mittel):** 4. **Content Überarbeitung**: Texte und Beschreibungen professioneller gestalten

- Galerie-Beschreibungen erweitern
- Foto-Beschreibungen überarbeiten
- Homepage-Content finalisieren

5. **Build Optimierung**: Production-Build testen und optimieren
   - Bundle-Größe analysieren
   - Lighthouse-Score verbessern
   - Static Site Generation testen

**Deployment Vorbereitung:** 6. **SEO Finalisierung**: Meta Tags und Schema.org vervollständigen

- Structured Data für Fotograf-Portfolio
- Lokale SEO für Berlin optimieren
- Sitemap und robots.txt

7. **Deployment Setup**: GitHub Pages oder Netlify konfigurieren

   - CI/CD Pipeline einrichten
   - Domain silberblick.berlin verknüpfen
   - SSL-Zertifikat einrichten

8. **Kontaktformular**: Netlify Forms oder alternative Lösung implementieren

### 🔮 V2 Features (Post-MVP)

**Container Queries Implementation:**

- Refactoring von Media Queries zu Container Queries für moderne responsive Design
- Navigation responsive mit `@container (min-width: 600px)` statt Media Queries
- Gallery-Komponenten mit Container-basierter Responsiveness
- Einzelne Foto-Seiten: 2-Spalten Layout mit Container Queries optimieren
- Browser-Support: 94%+ (Stand 2025)

**Editorial Design System:**

- Sketch Component Library für wiederverwendbare SILBERBLICK Design-Elemente
- Dynamische Layout-Varianten basierend auf Content-Typ und Serie-Größe
- Advanced Magazine-Layouts mit variablen Bild-Text-Arrangements
- Sketch.app Integration mit automatisiertem CSS-Export
- Responsive Editorial Grids für komplexe Multi-Serie Layouts

```

```
