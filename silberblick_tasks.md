# SILBERBLICK - Tasks

## Website Live ✅
- ✅ Domain: https://silberblick.berlin
- ✅ Cloudflare Pages Deployment erfolgreich
- ✅ 45 Seiten generiert, 81 Bilder optimiert

## Aktuell zu erledigen

### 🐛 Bugfixes
- **FIX: photoswipe modal verzerrt bilder** - Modal-Darstellung der Foto-Lightbox korrigieren

### 📝 Content
- **ADD: Fotografenseite: Content** - Über-Seite `/der-fotograf` mit Daniel's Profil ausarbeiten

### 🧪 Testing & Optimierung
- **Website vollständig testen:**
  - Navigation zwischen den Kategorien
  - Einzelne Foto-Seiten aufrufen
  - Mobile Responsiveness prüfen
  - Kontaktformular testen

### 📈 SEO & Analytics
- **SEO prüfen:**
  - Google "site:silberblick.berlin" (nach ein paar Tagen)
  - Meta-Tags und Descriptions überprüfen
  - Schema.org Markup für Fotograf-Portfolio

- **Analytics einrichten (optional):**
  - Google Analytics oder Cloudflare Analytics
  - Conversion-Tracking für Kontaktanfragen

### 🔄 Domain Migration
- **Legacy-Domain Redirect:**
  - `silberblick.net` → `silberblick.berlin` Redirect einrichten
  - Wichtig für SEO und bestehende Backlinks

## Abgeschlossen ✅
- Repository-Struktur konsolidiert (dreary-disk → root)
- Cloudflare Pages Setup und Deployment
- Custom Domain `silberblick.berlin` konfiguriert
- Automatische Bildoptimierung (WebP, ~70% Größenreduktion)
- 45 statische Seiten generiert (Homepage + Kategorien + Einzelfotos)

---
*Stand: 18.07.2025 - Website erfolgreich live*

## Aufgaben für den 24.7.2025

### SEO einrichten:
**Context**
Bitte alle Schritte gut durchdenken und als Mentor präsentieren. Nür Vorschläge und den Code nur auf Bestätigung ändern.  
Wir haben **zwei** silberblick domains: 
- silberblick.net wird für UX Web.dev verwendet
- silberblick.berlin für lokales Fotobusiness.

**Successcriteria:**

- [ ] Hotjar läuft
- [ ] GoogleAnalytics läuft
- [ ] Kein Duplicate Content
- [ ] Google findest Schema.org
- [ ] Lighthouse (Desktop) Score vom min. 95

**Hotjar und Google Properties und Daten**
 - Hotjar tag:
```
 <!-- Hotjar Tracking Code for https://silberblick.net -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3519944,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```
- Google Analytics 
```
Property-ID: 493089463
```
**Fehlermeldung google search Console**
- Folgendes Problem aus der google search konsole lösen:
Duplikat – vom Nutzer nicht als kanonisch festgelegt
Nicht gefunden (404)
Seite mit Weiterleitung