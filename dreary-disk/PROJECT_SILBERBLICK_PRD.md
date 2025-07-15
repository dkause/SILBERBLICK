# PRD: SILBERBLICK Fotografie-Portfolio

**Version: 1.0**
**Date: 2025-07-15**
**Autor: Gemini (basierend auf dem Briefing von Daniel Kause)**

---

## 1. Vision & Ziele

### 1.1. Projektvision
"Silberblick" ist ein modernes, hochperformantes und ästhetisch ansprechendes Online-Portfolio für den Fotografen Daniel Kause. Die Seite dient als primärer Kanal zur Präsentation von hochwertiger Fotografie in den Bereichen Architektur, Business, Portrait und Werbung. Sie soll potenzielle Kunden durch visuelle Exzellenz und eine klare, professionelle User Experience überzeugen und zur Kontaktaufnahme anregen.

### 1.2. Projektziele
*   **80% Ästhetik:** Ein klares, minimalistisches und modernes Design, das die Bilder in den Vordergrund stellt. Die Seite muss auf allen Endgeräten (Desktop, Tablet, Mobile) "gut aussehen".
*   **100% Funktionalität:** Alle Features, von der Bildergalerie über die Navigation bis zum Kontaktformular, müssen fehlerfrei funktionieren. Die Seite muss schnell laden und technisch robust sein.
*   **SEO-Exzellenz:** Die Seite soll für relevante Keywords (z.B. "Architekturfotograf Berlin", "Businessfotograf Potsdam") gut ranken und durch strukturierte Daten Rich Snippets in den Suchergebnissen erzielen.
*   **Conversion-Optimierung:** Besucher sollen einfach durch das Portfolio navigieren und unkompliziert Kontakt aufnehmen können.

---

## 2. Zielgruppe

*   **Primär:** Unternehmen und Agenturen aus den Bereichen Immobilien, Architektur, Marketing und Unternehmensberatung, die professionelle Fotografen für Corporate- und Architekturprojekte suchen.
*   **Sekundär:** Privatpersonen, die hochwertige Portraitfotografie suchen.
*   **Tertiär:** Redaktionen und Verlage.

---

## 3. Funktionsumfang (Scope für 80% Fertigstellung)

### 3.1. Seitenstruktur & Komponenten
*   **Homepage (`/`):**
    *   **Konzept:** Eine dichte, mehrspaltige (z.B. 7 Spalten auf Desktop) Bilderwand, die sofort das gesamte Spektrum des Portfolios zeigt.
    *   **Filterung:** Die Hauptnavigation (`Architektur`, `Business`, `Portrait`, `Werbung`) dient als direkter Filter für die Homepage-Galerie. Ein Klick auf "Architektur" filtert die Ansicht, anstatt auf eine neue Seite zu leiten.
    *   **SEO-Vorteil:** Dieses "Single Page App"-ähnliche Verhalten für die Galerie ist modern und schnell. Die URLs für die Filter (z.B. `/?filter=architektur`) können für SEO genutzt werden.
*   **Über Mich (`/ueber-mich`):**
    *   Eine statische Seite mit dem "Über Mich"-Text und einem professionellen Portrait des Fotografen.
*   **Kontakt (`/kontakt`):**
    *   Eine statische Seite mit Kontaktinformationen und einem Kontaktformular.
*   **Wiederverwendbare Komponenten:**
    *   **Header:** Enthält das Silberblick-Logo und die Hauptnavigation.
    *   **Footer:** Enthält Links zu Impressum, Datenschutz und ggf. Social-Media-Profilen.
    *   **Head-Meta-Komponente:** Eine zentrale Astro-Komponente, die alle wichtigen SEO-Meta-Tags (title, description, canonical, OpenGraph, Twitter Cards) verwaltet und auf jeder Seite eingebunden wird.

### 3.2. Kernfunktionen
*   **Isotope-Galerie:** Die bereits implementierte Galerie wird zur zentralen Komponente der Homepage.
*   **Kontaktformular:**
    *   **Felder:** Name, E-Mail, Betreff, Nachricht, DSGVO-Zustimmungs-Checkbox.
    *   **Technologie:** Nutzung eines serverseitigen Endpunkts (Astro API Route oder Cloudflare Function) zum Verarbeiten der Formulardaten.
    *   **Spam-Schutz:** Implementierung eines unsichtbaren Honeypot-Feldes oder eines Dienstes wie Cloudflare Turnstile.
    *   **Benachrichtigung:** Versand einer E-Mail an den Fotografen bei neuer Anfrage.
*   **Content Management:**
    *   Bilder und zugehörige Texte (Titel, Alt-Text, Tags) werden über Astro Content Collections verwaltet, um eine klare Trennung von Inhalt und Darstellung zu gewährleisten.

### 3.3. Design & Layout
*   **Look & Feel:** Minimalistisch, modern, viel Weißraum. Die Typografie ist klar und gut lesbar. Das Design ordnet sich den Bildern unter.
*   **Farbschema:** Primär Schwarz, Weiß und Grautöne. Eine Akzentfarbe ist möglich, falls gewünscht.
*   **Responsive Design:**
    *   **Mobile First:** Das Layout wird primär für mobile Geräte konzipiert und dann für größere Bildschirme erweitert.
    *   **Fluid Typography/Spacing:** Verwendung von CSS `clamp()` für Schriftgrößen, Paddings und Margins, um eine stufenlose Skalierung zu erreichen.

---

## 4. Technische Spezifikationen

### 4.1. Technologie-Stack
*   **Framework:** Astro
*   **Deployment:** Cloudflare Pages
*   **Styling:** CSS (mit `clamp()` für Responsivität)
*   **Galerie:** Isotope.js
*   **Analytics:** Google Analytics 4, Hotjar

### 4.2. SEO & Performance
*   **Lighthouse-Ziele:** Alle vier Kategorien (Performance, Accessibility, Best Practices, SEO) sollen einen Score von >95 anstreben.
*   **Bilder-Optimierung:** Astro's eingebaute `<Image>`-Komponente wird konsequent genutzt, um Bilder automatisch zu komprimieren, zu skalieren und im WebP-Format auszuliefern.
*   **Strukturierte Daten (Schema.org):** Korrekte Implementierung von `ImageObject`, `ItemList`, `BreadcrumbList` und `Person` (für die "Über Mich"-Seite).

### 4.3. Analytics & Tracking
*   **Google Analytics 4 (GA4):**
    *   **Setup:** Erstellung einer neuen GA4-Property.
    *   **Einbindung:** Das GA4-Tracking-Snippet wird über Astro Partytown eingebunden, um den Einfluss auf die Performance zu minimieren.
*   **Hotjar:**
    *   **Setup:** Erstellung eines neuen Hotjar-Projekts.
    *   **Einbindung:** Das Hotjar-Tracking-Snippet wird ebenfalls über Astro Partytown eingebunden.
*   **Cookie-Banner:**
    *   **Notwendigkeit:** **Ja, zwingend erforderlich.** Da GA4 und Hotjar nicht-essentielle Cookies setzen, muss vor deren Aktivierung die explizite Zustimmung des Nutzers eingeholt werden.
    *   **Implementierung:** Nutzung einer leichtgewichtigen Open-Source-Lösung oder einer Astro-Integration.

---

## 5. Projekt-Aufräumarbeiten & Wartung
*   **Code-Struktur:** Logische Organisation von Komponenten, Seiten und Assets.
*   **CSS-Refactoring:** Konsolidierung von Styles in `global.css` und komponenten-spezifischem CSS, um Redundanz zu vermeiden.
*   **Entfernung von Altlasten:** Löschen des `SCRATCH`-Ordners und anderer temporärer Dateien nach Abschluss der Einarbeitung.
