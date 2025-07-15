import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded. Starting IsotopeGallery script (from external file).');

  const grid = document.querySelector('.grid');
  const filterButtonGroup = document.querySelector('.filter-button-group');
  const noResultsMessage = document.querySelector('.no-results-message');

  if (!grid || !filterButtonGroup || !noResultsMessage) {
    console.error('Missing required elements for IsotopeGallery. Grid:', grid, 'FilterButtonGroup:', filterButtonGroup, 'NoResultsMessage:', noResultsMessage);
    return;
  }

  // Read options from data attribute
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

  let iso;

  imagesLoaded(grid, () => {
    console.log('All images loaded. Initializing Isotope.');
    iso = new Isotope(grid, finalIsotopeOptions);
    console.log('Isotope instance:', iso);
    updateNoResultsMessage();
    // Initial layout after images are loaded and Isotope is initialized
    iso.layout();
    console.log('Initial Isotope layout triggered.');
  });

  filterButtonGroup.addEventListener('click', (event) => {
    console.log('Filter button clicked.', event.target);
    if (!event.target.matches('button')) {
      console.log('Clicked element is not a button.');
      return;
    }

    const filterValue = event.target.dataset.filter;
    console.log('Filter value:', filterValue);

    if (iso) {
      iso.arrange({ filter: filterValue });
      console.log('Isotope arrange triggered with filter:', filterValue);
      updateNoResultsMessage();
    } else {
      console.error('Isotope instance not available for filtering.');
    }

    // Update active button state for accessibility
    filterButtonGroup.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', 'false');
      button.classList.remove('is-checked');
    });
    event.target.setAttribute('aria-pressed', 'true');
    event.target.classList.add('is-checked');
  });

  function updateNoResultsMessage() {
    if (iso) {
      console.log('Updating no results message. Filtered items count:', iso.filteredItems.length);
      if (iso.filteredItems.length === 0) {
        noResultsMessage.classList.remove('hidden');
        noResultsMessage.setAttribute('aria-hidden', 'false');
        grid.classList.add('hidden'); // Hide the grid when no results
        console.log('No results: message shown, grid hidden.');
      } else {
        noResultsMessage.classList.add('hidden');
        noResultsMessage.setAttribute('aria-hidden', 'true');
        grid.classList.remove('hidden'); // Show the grid when results are present
        console.log('Results found: message hidden, grid shown.');
      }
    } else {
      console.warn('Isotope instance not available for updating no results message.');
    }
  }

  // On window resize, simply re-layout Isotope.
  // The columnWidth will be picked up from .masonry-sizer's CSS-defined width.
  window.addEventListener('resize', () => {
    console.log('Window resized. Triggering Isotope layout.');
    if (iso) {
      iso.layout();
    } else {
      console.warn('Isotope instance not available for resize layout.');
    }
  });
});
