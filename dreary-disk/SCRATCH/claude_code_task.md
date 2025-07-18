# Claude-Code Task: Astro Foto Collection Processing

## Kontext
Verarbeitung von Fotografien für eine Astro.js Website mit automatischer Bildanalyse und Metadaten-Generierung. Zielgruppe: Business-Kunden. Fokus: UX + SEO.

## Input-Verzeichnisse
- `/Users/danielkause/Desktop/SILBERBLICK/SCRATCH/businessfotografie/`
- `/Users/danielkause/Desktop/SILBERBLICK/SCRATCH/architekturfotografie/`
- `/Users/danielkause/Desktop/SILBERBLICK/SCRATCH/portraitfotografie/`

## Output-Verzeichnis
- `src/fotos/`

## Workflow pro Batch

### 1. Bildanalyse
- Bild laden und analysieren
- Inhalt, Setting, Personen, Stimmung erkennen
- Automatische Kategorisierung vorschlagen

### 2. Datei-Umbenennung
**Format:** `[kategorie]-[beschreibung]-[details].jpg`
**Länge:** 25-40 Zeichen
**Beispiele:**
- `business-jll-executive-portrait.jpg`
- `architektur-potsdamer-platz-modern.jpg`
- `portrait-professional-headshot-studio.jpg`

### 3. Markdown-Generierung
**Template:**
```markdown
---
name: "[Beschreibender Titel]"
tags: ["[kategorie]", "[zusatz-tags]"]
image:
  src: "./[neuer-dateiname].jpg"
  alt: "[SEO-optimierter Alt-Text - zur Review]"
---

# [Titel]
![Alt-Text](./[dateiname].jpg)

[Kurze Beschreibung für SEO]
```

### 4. Kategorien-Mapping
- `businessfotografie/` → `business`
- `architekturfotografie/` → `architektur` (inkl. Landschaftsbilder)
- `portraitfotografie/` → `portrait`

### 5. Tag-Generierung
**Basis-Tags:** Kategorie + 1-2 beschreibende Tags
**Beispiele:**
- `["business", "corporate", "portrait"]`
- `["architektur", "modern", "exterior"]`
- `["portrait", "professional", "studio"]`

## Technische Details
- Bestehende Astro Content Collection nutzen
- Dateiname = MD-Filename für konsistente Sortierung
- JPG-Format verwenden (Astro optimiert automatisch)
- Alt-Text als Vorschlag für manuellen Review

## Ausführung
**Batch-weise Verarbeitung:**
1. `claude-code process businessfotografie`
2. `claude-code process architekturfotografie`  
3. `claude-code process portraitfotografie`

## Erwartete Ausgabe
- Umbenannte JPG-Dateien in `src/fotos/`
- Entsprechende .md-Dateien mit Metadaten
- Konsistente Namenskonvention
- SEO-optimierte Alt-Texte (zur Review)
- Strukturierte Tags für Filter-Funktionalität

## Qualitätskriterien
- Dateinamen: Beschreibend, SEO-optimiert, 25-40 Zeichen
- Alt-Texte: Präzise, keyword-reich, zur manuellen Review
- Tags: Relevant für Business-Kunden, filterfähig
- Konsistenz: Einheitliche Struktur über alle Kategorien