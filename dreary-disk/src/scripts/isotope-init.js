import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded. Starting IsotopeGallery script (from external file).');

  // 1. DOM-Elemente abfragen
  // Wir fragen alle Elemente ab, aber die "filterButtonGroup" ist optional.
  const grid = document.querySelector('.grid');
  const noResultsMessage = document.querySelector('.no-results-message');
  const filterButtonGroup = document.querySelector('.filter-button-group'); // Dieses Element ist jetzt optional

  // 2. Frühzeitiger Abbruch, wenn ESSENTIELLE Elemente fehlen
  // Isotope benötigt das 'grid' und die 'noResultsMessage' immer.
  // Die 'filterButtonGroup' ist für die Kernfunktionalität (Layout, initialer Filter) nicht zwingend.
  if (!grid || !noResultsMessage) {
    console.error('Missing essential elements for IsotopeGallery. Grid:', grid, 'NoResultsMessage:', noResultsMessage);
    return; // Skript hier beenden, da Isotope nicht initialisiert werden kann
  }

  // 3. Isotope-Optionen aus dem data-Attribut lesen
  const optionsString = grid.dataset.isotopeOptions;
  let finalIsotopeOptions = {};
  if (optionsString) {
    try {
      finalIsotopeOptions = JSON.parse(optionsString);
    } catch (e) {
      console.error('Error parsing Isotope options from data attribute:', e);
    }
  }

  console.log('Elements found. Grid offsetWidth:', grid.offsetWidth);
  const masonrySizer = grid.querySelector('.masonry-sizer');
  if (masonrySizer) {
    console.log('Masonry Sizer offsetWidth:', masonrySizer.offsetWidth);
  }

 
       // 4. URL-Parameter für den initialen Filter lesen
  const urlParams = new URLSearchParams(window.location.search);
  const initialFilter = urlParams.get('filter');

  // Ensure transitions are used for filtering
  finalIsotopeOptions.transitionDuration = '0.4s';

  let iso; // Variable für die Isotope-Instanz

  // 5. imagesLoaded Callback: Isotope initialisieren, sobald alle Bilder geladen sind
  imagesLoaded(grid, () => {
    console.log('All images loaded. Initializing Isotope.');
    // Isotope-Instanz erstellen
    iso = new Isotope(grid, finalIsotopeOptions);
    console.log('Isotope instance:', iso);

    // Grid sichtbar machen, indem eine Klasse hinzugefügt wird
    grid.classList.add('isotope-is-ready');

    // Apply initial filter from URL if it exists
    if (initialFilter) {
      const filterValue = `.${initialFilter}`;
      iso.arrange({ filter: filterValue });
      console.log('Applying initial filter from URL:', filterValue);
    }

    // Nachricht für "keine Ergebnisse" aktualisieren
    updateNoResultsMessage();

    console.log('Isotope initialized and grid is ready.');

    // 6. Logik für die Filter-Buttons (NUR, wenn die Buttons im DOM vorhanden sind)
    if (filterButtonGroup) { // <-- NEUE BEDINGUNG: Prüfen, ob filterButtonGroup existiert
      console.log('Filter button group found. Applying button-related logic.');

      // Aktiven Button basierend auf dem initialen Filter aus der URL setzen
      // Wenn kein initialer Filter, wird '*' (alle) als Standard verwendet.
      let activeFilterValue = initialFilter ? `.${initialFilter}` : '*';
      const initialActiveButton = filterButtonGroup.querySelector(`button[data-filter="${activeFilterValue}"]`);

      if (initialActiveButton) {
        // Alle Buttons als inaktiv markieren
        filterButtonGroup.querySelectorAll('button').forEach(button => {
          button.setAttribute('aria-pressed', 'false');
          button.classList.remove('is-checked');
        });
        // Den initialen aktiven Button als aktiv markieren
        initialActiveButton.setAttribute('aria-pressed', 'true');
        initialActiveButton.classList.add('is-checked');
        console.log('Set initial active filter button:', activeFilterValue);
      } else {
        // Fallback: Wenn kein spezifischer Button für den initialen Filter gefunden wurde,
        // sicherstellen, dass der "Alle"-Button aktiv ist.
        const allButton = filterButtonGroup.querySelector('button[data-filter="*"]');
        if (allButton) {
          filterButtonGroup.querySelectorAll('button').forEach(button => {
            button.setAttribute('aria-pressed', 'false');
            button.classList.remove('is-checked');
          });
          allButton.setAttribute('aria-pressed', 'true');
          allButton.classList.add('is-checked');
          console.log('Defaulted to "Alle" button as active.');
        }
      }

      // 7. Event-Listener für Klicks auf die Filter-Buttons (NUR, wenn die Buttons vorhanden sind)
      filterButtonGroup.addEventListener('click', (event) => {
        console.log('Filter button clicked.', event.target);
        // Sicherstellen, dass nur Klicks auf <button>-Elemente verarbeitet werden
        if (!event.target.matches('button')) {
          console.log('Clicked element is not a button.');
          return;
        }

        const filterValue = event.target.dataset.filter; // Den Filterwert aus dem data-Attribut holen
        console.log('Filter value:', filterValue);

        if (iso) {
          // Isotope anweisen, die Elemente basierend auf dem Filterwert anzuordnen
          iso.arrange({ filter: filterValue });
          console.log('Isotope arrange triggered with filter:', filterValue);
          updateNoResultsMessage(); // Nachricht für "keine Ergebnisse" aktualisieren
        } else {
          console.error('Isotope instance not available for filtering.');
        }

        // Aktiven Button-Zustand für Barrierefreiheit aktualisieren
        filterButtonGroup.querySelectorAll('button').forEach(button => {
          button.setAttribute('aria-pressed', 'false');
          button.classList.remove('is-checked');
        });
        event.target.setAttribute('aria-pressed', 'true');
        event.target.classList.add('is-checked');
      });

    } else {
      console.log('Filter button group not found. Skipping button-related logic.');
    }
  });

  // 8. Hilfsfunktion: Nachricht für "keine Ergebnisse" aktualisieren
  function updateNoResultsMessage() {
    if (iso) {
      console.log('Updating no results message. Filtered items count:', iso.filteredItems.length);
      if (iso.filteredItems.length === 0) {
        noResultsMessage.classList.remove('hidden');
        noResultsMessage.setAttribute('aria-hidden', 'false');
        grid.classList.add('hidden'); // Das Raster ausblenden, wenn keine Ergebnisse
        console.log('No results: message shown, grid hidden.');
      } else {
        noResultsMessage.classList.add('hidden');
        noResultsMessage.setAttribute('aria-hidden', 'true');
        grid.classList.remove('hidden'); // Das Raster anzeigen, wenn Ergebnisse vorhanden sind
        console.log('Results found: message hidden, grid shown.');
      }
    } else {
      console.warn('Isotope instance not available for updating no results message.');
    }
  }

  // 9. Event-Listener für Fenstergrößenänderungen
  // Bei Größenänderung einfach Isotope neu anordnen.
  // Die Spaltenbreite wird aus der CSS-definierten Breite von '.masonry-sizer' übernommen.
  window.addEventListener('resize', () => {
    console.log('Window resized. Triggering Isotope layout.');
    if (iso) {
      iso.layout();
    } else {
      console.warn('Isotope instance not available for resize layout.');
    }
  });
});
