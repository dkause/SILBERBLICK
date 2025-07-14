# Product Requirements Document (PRD)

## Projektname
Filterbare Masonry Galerie mit Astro

## Zielsetzung
Entwicklung einer statisch generierten Webseite mit Astro, die eine filterbare Masonry-Galerie darstellt. Die Galerie nutzt die `collection-test.astro` Collection und die `<masonry>` Komponente. Die Filterfunktion basiert auf Tags, die aus der Collection generiert werden. Die Seite wird später als wiederverwendbare Komponente weiterentwickelt.

---

## Anforderungen

### Funktionale Anforderungen

1. **Masonry Galerie**
    - Darstellung von Bildern in einer Masonry-Grid-Struktur.
    - Nutzung der `<masonry>` Komponente für das Layout.

2. **Filterfunktion**
    - Filterung der Bilder nach Tags.
    - Tags werden dynamisch aus der Collection generiert.
    - Filter-Buttons werden aus den Tags erstellt und erlauben das Filtern der Galerie.
    - Standard-Button "show all" zeigt alle Bilder.

3. **Datenquelle**
    - Bilder und Tags stammen aus der `collection-test.astro` Collection.

4. **Statische Generierung**
    - Die Seite wird statisch mit Astro generiert und deployed.

5. **Technologie**
    - Techstack: Astro, CSS, minimaler Einsatz von JS/TS.

---

### Nicht-funktionale Anforderungen

- **Performance:** Schnelle Ladezeiten durch statische Generierung.
- **Wartbarkeit:** Klare Trennung von Komponenten und Logik.
- **Barrierefreiheit:** Buttons und Bilder sind zugänglich.
- **Wiederverwendbarkeit:** Die Seite wird später als Komponente nutzbar sein.

---

## Offene Fragen

1. **Design:** Gibt es spezifische Designvorgaben für die Galerie und Filter-Buttons?
   **Entscheidung:** Nein. In Phase 1 konzentrieren wir uns ausschließlich auf die Implementierung der Filter-Logik. Design und Styling sind Teil von Phase 2.
2. **Tag-Struktur:** Können Bilder mehrere Tags haben? Gibt es Einschränkungen bei der Tag-Benennung?
   **Entscheidung:** Ja, Bilder können mehrere Tags haben (definiert als Array im Frontmatter). Für eine problemlose Verarbeitung als CSS-Klassen für den Filter sollten Tags kurz sein, keine Leerzeichen enthalten und klein geschrieben werden (z.B. "produkt", "business", "portrait").
3. **Responsivität:** Soll die Galerie auf allen Bildschirmgrößen funktionieren?
   **Entscheidung:** Ja, die Anforderung an Responsivität besteht. In Phase 1 wird jedoch nur eine Standardkonfiguration der `astro-masonry` Komponente ohne spezifische Breakpoints verwendet. Die detaillierte Ausarbeitung und Konfiguration der Breakpoints für ein optimales Layout auf allen Geräten ist Teil von Phase 2.
4. **Animationen:** Sind Animationen beim Filtern oder Layoutwechsel gewünscht?
   **Entscheidung:** Nein, in Phase 1 werden keine Animationen implementiert. Das Filtern der Galerie erfolgt ohne visuelle Übergangseffekte. Die Implementierung von Animationen ist eine mögliche Optimierung für Phase 2.
5. **Content-Attribute:** Welche Content-Attribute werden pro Bild-Eintrag benötigt (z.B. Titel, Beschreibung)?
   **Entscheidung:** Für Phase 1 werden ausschließlich die im Content-Schema (`src/content/config.ts`) definierten Attribute verwendet: `name`, `image` (`src`, `alt`) und `tags`. Das `tags`-Attribut ist obligatorisch, aber ein leeres Array (`tags: []`) ist eine gültige und beabsichtigte Eingabe, um "Füll-Tags" zu vermeiden. Bilder mit einem leeren `tags`-Array werden nur angezeigt, wenn der "show all"-Filter aktiv ist. Zusätzliche Attribute (z.B. Beschreibung im Markdown-Body) werden in Phase 1 nicht visualisiert.
6. **Barrierefreiheit:** Gibt es spezielle Anforderungen (z.B. Tastatursteuerung)?
   **Entscheidung:** Ja, die grundlegende Barrierefreiheit muss gewährleistet sein. Die Filter-Buttons müssen per Tastatur bedienbar sein. Dies wird durch die Verwendung von semantischen `<button>`-Elementen sichergestellt. Weiterführende Maßnahmen (z.B. ARIA-Live-Regions für die Status-Anzeige des Filters) sind für Phase 2 vorgesehen.
7. **Deployment:** Gibt es Vorgaben für das Hosting/Deployment?
   **Entscheidung:** Nein. Die Anwendung wird als Standard-Astro-Projekt entwickelt und kann nach dem `astro build` Prozess auf jedem beliebigen Hosting-Dienst für statische Webseiten (z.B. Netlify, Vercel, Cloudflare Pages) bereitgestellt werden.
8. **Teststrategie:** Sollen automatisierte Tests für die Filterfunktion implementiert werden?
   **Entscheidung:** Nein, für Phase 1 werden keine automatisierten Tests implementiert. Die Funktionsfähigkeit wird durch manuelle Tests im Browser sichergestellt. Die Einführung eines Test-Frameworks und das Schreiben von Unit- oder E2E-Tests ist eine Anforderung für Phase 2.

---

## Phasen

1. **Phase 1:** Implementierung der Grundfunktionalität (Masonry-Layout, Filterfunktion, statische Generierung).
2. **Phase 2:** Weiterentwicklung zur wiederverwendbaren Komponente, Optimierung von Design und Usability.

---

## Nächste Schritte

- Klärung der offenen Fragen.
- Erstellung eines technischen Konzepts basierend auf den Anforderungen.
- Gemeinsame Entwicklung der Funktionalität.

---

## Technisches Konzept: Filterbare Masonry-Galerie

**1. Zielsetzung**

Implementierung einer client-seitigen Filterlogik für die Masonry-Galerie auf der Seite `src/pages/collection-test.astro`. Die Filterung soll auf Basis der den Bildern zugeordneten Tags erfolgen, ohne dass die Seite neu geladen werden muss.

**2. Grundlegender Ansatz**

Da die Astro-Seite statisch generiert wird, sind zum Zeitpunkt des Aufrufs alle Galerie-Elemente bereits im HTML vorhanden. Die Filterung wird daher mit client-seitigem JavaScript umgesetzt. Ein kleines, reines JavaScript-Snippet wird die Sichtbarkeit der Galerie-Elemente basierend auf dem ausgewählten Filter-Button steuern.

**3. Implementierungsschritte**

Die gesamte Logik wird in der Datei `src/pages/collection-test.astro` implementiert.

**Schritt 1: HTML-Anpassungen (im Astro-Template)**

1.  **Galerie-Elemente klassifizieren:** Jedes `div`, das ein Bild in der Masonry-Komponente umschließt, erhält eine einheitliche Klasse, z.B. `masonry-item`. Dies ist notwendig, damit das JavaScript alle filterbaren Elemente leicht finden kann.
2.  **Tags als Daten-Attribut:** Das `data-tags`-Attribut, das bereits die Tags enthält, wird beibehalten. Es ist die Grundlage für den Filterabgleich.
3.  **Filter-Buttons:** Die `data-filter`-Attribute auf den Buttons werden ebenfalls beibehalten. Sie definieren, welcher Tag gefiltert werden soll.

*Beispiel für ein Galerie-Element:*
```html
<div class="masonry-item" data-tags="produkt wellness">
  <Image ... />
</div>
```

**Schritt 2: JavaScript-Logik (im `<script>`-Tag)**

Ein `<script>`-Block wird am Ende der `collection-test.astro`-Datei hinzugefügt.

1.  **DOM-Elemente selektieren:** Nach dem Laden der Seite werden alle Filter-Buttons und alle `masonry-item`-Elemente einmalig selektiert.
2.  **Event-Listener hinzufügen:** Ein einziger Klick-Event-Listener wird auf die `.filter-button-group` gesetzt (Event Delegation).
3.  **Filter-Logik bei Klick:**
    *   Wenn ein Button geklickt wird, wird dessen `data-filter`-Wert ausgelesen (z.B. `.produkt` oder `*` für "show all").
    *   Die `is-checked`-Klasse wird vom alten aktiven Button entfernt und dem neu geklickten hinzugefügt.
    *   Alle `masonry-item`-Elemente werden durchlaufen.
    *   Für jedes Element wird geprüft, ob sein `data-tags`-Attribut den ausgewählten Filter-Tag enthält.
    *   Elemente, die dem Filter entsprechen (oder wenn der Filter `*` ist), werden angezeigt.
    *   Elemente, die nicht entsprechen, werden ausgeblendet. Das Ausblenden erfolgt durch Hinzufügen der existierenden CSS-Klasse `.nav-toggle`.

**Schritt 3: CSS-Anpassung (in `src/styles/global.css`)**

Es wird keine neue CSS-Klasse benötigt. Stattdessen wird die bereits existierende Utility-Klasse `.nav-toggle` wiederverwendet, um die nicht passenden Galerie-Elemente auszublenden. Dies vermeidet redundanten Code.

```css
.nav-toggle {
  display: none;
}
```
Dieser Ansatz erfordert keine externen Bibliotheken und hält sich an die Vorgabe, nur minimales JavaScript zu verwenden.