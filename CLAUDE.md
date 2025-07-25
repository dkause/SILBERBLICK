# SILBERBLICK - Entwicklungsdokumentation

**Astro-basierte Portfolio-Website für Fotograf Daniel Kause**

## Aktueller Stand

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

### CSS Layout Solutions

**Problem: Inconsistent Image Heights and Mobile Cropping**

Bei Homepage-Portfolio-Bildern mit unterschiedlichen Seitenverhältnissen führte `object-fit: cover` auf mobilen Geräten zu unerwünschtem Beschnitt.

**Lösung: Composition mit `aspect-ratio`**
```css
.aspect-ratio-container-4-3 {
  aspect-ratio: 4 / 3;
}
```

**Vorteile:**
- Robust & Fluid: Layout wird truly liquid
- Composable & DRY: Utility-Class wiederverwendbar  
- Predictable Cropping: Konsistenter Beschnitt auf allen Bildschirmgrößen

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

**Deployment Vorbereitung:** 
✅ **Deployment abgeschlossen**: Cloudflare Pages mit automatischer CI/CD
✅ **Domain**: silberblick.berlin (live)
✅ **SSL**: Automatisch via Cloudflare
✅ **Build Pipeline**: GitHub → Cloudflare (45 Seiten, 81 optimierte Bilder)

### 🎯 Current TODOs (Post-Deployment)

**SEO & Performance (Priorität: Hoch):**

1. ✅ **PhotoSwipe Modal-Verzerrung** (erledigt)
2. **Schema.org Structured Data**: LocalBusiness + Photographer Schema implementieren
   - JSON-LD für Fotograf-Portfolio
   - Lokale Berlin SEO optimieren
   - Review-Schema für Kundenbewertungen
3. **CSS Cleanup**: Ungenutzte Klassen und tote Styles entfernen
   - Dead CSS Detection
   - Bundle-Größe optimieren
   - Performance-Impact messen

**Content & Analytics (Priorität: Mittel):**

4. **Analytics Setup**: Cloudflare/Google Analytics konfigurieren
5. **Content Ausbau**: Fotografenseite detaillierter ausarbeiten
6. **Legacy Domain**: silberblick.net → silberblick.berlin Redirect

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

## ✅ SEO & Cookie-Consent Setup (24.7.2025)

### Abgeschlossen:
- **Analytics Integration**: GA4 (G-WJK34XRR7F) + Hotjar (3519944)
- **Schema.org Markup**: PersonSchema + ImageObjectSchema komplett implementiert
- **Cookie-Consent**: Cookiebot DSGVO-konform (ID: 8c73c5da-138c-40cc-ae08-91243330399a)
- **Duplicate Content Fix**: trailingSlash: "never" in astro.config.mjs
- **Component Architecture**: Analytics.astro, PersonSchema.astro, ImageObjectSchema.astro, CookieConsent.astro

### Technical Implementation:
- **Person Schema**: Fotograf Daniel Kause, Smart Genossenschaft, Hauptstadtregion Berlin-Brandenburg
- **ImageObject Schema**: Für Portfolio-Detail-Seiten mit Fallback-Description (Markdown Body → Alt-Text)
- **Cookie-Consent Flow**: CookieConsent → Analytics → PersonSchema (korrekte Load-Order)
- **Analytics Blocking**: Scripts mit data-cookieconsent="statistics" warten auf User-Consent

### Erfolgskriterien erreicht:
- ✅ Hotjar läuft (nach Cookie-Consent)
- ✅ GoogleAnalytics läuft (nach Cookie-Consent)  
- ✅ Kein Duplicate Content
- ✅ Google findet Schema.org (Person + ImageObject)
- [ ] Lighthouse Score min. 95 (noch zu testen)

### Claude-Workflow Präferenzen:
- Keine Emojis in Responses
- Code-Änderungen immer VOR Ausführung zeigen
- "Weniger ist mehr" - bestehende Daten nutzen statt neue Felder

### Wichtige Content Collection Erkenntnisse:
- Category-Feld ist nur für interne Astro-Filterung
- URLs kommen aus Route-Parametern, nicht aus Frontmatter
- Inkonsistente Categories brechen nichts
- Schema.org verwendet andere Datenquellen

## ✅ Website Features & UX (Bereits implementiert)

### Navigation & CTAs:
- ✅ Navigation erweitert: "Preise" + "Termine" zwischen "der Fotograf" und "Kontakt"
- ✅ Hero CTA-Bereich: "PREISE & TERMIN" Button implementiert
- ✅ Kontextuelle CTAs nach Galerie-Filter
- ✅ Mobile Navigation für erweiterte Menüpunkte
- ✅ Mobile Floating Action Button "Termin buchen" (sticky)

### Content Completion:
- ✅ Fotografenseite `/der-fotograf` vollständig ausgearbeitet
- ✅ Alle 45 Portfolio-Seiten mit optimierten Bildern
- ✅ Typography & Layout optimiert (zweizeilige Headlines, Weißraum)
- ✅ About-Text Daniel Kause Sektion finalisiert

### Performance & Build Results:
- **Platform**: Cloudflare Pages
- **Build Time**: ~15 Sekunden
- **Pages Generated**: 45 statische Seiten
- **Image Optimization**: 81 Bilder, ~70% Größenreduktion (WebP)
- **Domain**: https://silberblick.berlin (live)
- **CI/CD**: Git Push → GitHub → Cloudflare Build (vollautomatisch)
- ✅ Lazy Loading für Galerie implementiert
- ✅ PhotoSwipe Modal-Verzerrung behoben

### Domain-Strategie (Final):
- **silberblick.berlin**: Fotografie-Portfolio (Hauptprojekt, live)
- **silberblick.net**: UX Web.dev Projekt (separates Projekt, KEIN Redirect)

## 📋 Aktueller Status (24.7.2025)

### ✅ Vollständig abgeschlossen:
- Website-Entwicklung (45 Seiten)
- SEO & Analytics Setup (DSGVO-konform)
- Schema.org Structured Data
- Cookie-Consent Management
- Performance-Optimierung
- Domain-Setup & Deployment
- Navigation & UX Features
- Content-Erstellung komplett

### 🎯 Mögliche Zukunftsprojekte:
- Bildauswahl-System für Kunden
- Erweiterte Analytics-Auswertung
- A/B-Testing für Conversion-Optimierung

```

```
