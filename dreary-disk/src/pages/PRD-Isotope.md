**Product Requirements Document (PRD) for Isotope.js Integration**

**1. Introduction**
This document outlines the requirements for integrating Isotope.js into the Astro project to create a dynamic, filterable masonry image gallery. The goal is to replace the current static `astro-masonry` implementation with a solution that supports client-side filtering with proper layout reflow, while maintaining SEO and providing a smooth user experience.

**2. Goals**
*   Implement a dynamic masonry layout that reflows correctly upon filtering.
*   Enable client-side filtering of images based on tags.
*   Ensure images remain in the DOM for SEO purposes.
*   Provide smooth transitions during filtering operations.
*   Display a user-friendly message when no images match the selected filter.
*   Integrate seamlessly with the existing Astro project structure and content collections.
*   Enhance SEO through Schema.org markup for images/gallery.
*   Develop a reusable, responsive, mobile-friendly, DRY, composable, and future-proof Isotope.js component.

**3. Scope**
*   Integration of Isotope.js library.
*   Creation of a reusable `IsotopeGallery.astro` component to encapsulate Isotope.js logic.
*   Modification of `index.astro` (or other relevant pages) to utilize the `IsotopeGallery.astro` component and pass configuration via frontmatter.
*   Adjustment of HTML structure within the component to ensure `data-tags` are correctly placed for Isotope.js.
*   Implementation of "no results" message display.
*   Removal of `hidden` class logic related to filtering.
*   Addition of Schema.org markup for images and/or the gallery.

**4. Functional Requirements**

**4.1. Gallery Initialization**
*   The masonry gallery MUST be initialized using Isotope.js within the `IsotopeGallery.astro` component on page load.
*   The Isotope.js container will be the element currently holding the `astro-masonry` grid.
*   Isotope.js items will be the `<div class="masonry-item">` elements.
*   Isotope.js configuration (specifically `layoutMode`, `columnWidth`, `gutter`) MUST be configurable via props passed to the `IsotopeGallery.astro` component, originating from the page's frontmatter (e.g., `index.astro`).
*   The default `layoutMode` for Isotope.js MUST be `masonry`.

**4.2. Filtering**
*   Users MUST be able to filter images by clicking on filter buttons.
*   Filter buttons will use `data-filter` attributes (e.g., `data-filter=".tag-name"`).
*   A "show all" button (`data-filter="*"`) MUST be present and functional.
*   Filtering MUST trigger Isotope.js's built-in filtering mechanism, which will handle the display/hiding of items and layout reflow.
*   The `data-tags` attribute, currently on the `<img>` element, MUST be moved to the parent `<div class="masonry-item">` to allow Isotope.js to filter based on these attributes. The tags will be space-separated (e.g., `data-tags="tag1 tag2"`).

**4.3. User Experience (UX)**
*   Filtering operations MUST exhibit "sanft und ruhig" (smooth and quiet) transitions. Isotope.js's default animations are expected to fulfill this.
*   If a filter results in no matching images, a clear message MUST be displayed, replacing the gallery content. This message should be hidden when results are present. Styling for this message MUST adhere to `global.css`.

**4.4. SEO Considerations**
*   Isotope.js MUST be configured to keep filtered-out elements in the DOM, using CSS for visibility control (e.g., `opacity` and `transform`), to ensure they are discoverable by search engines.
*   Schema.org markup (e.g., `ImageObject`, `ItemList`) MUST be added to the gallery and individual images to provide structured data for search engines.

**5. Non-Functional Requirements**

**5.1. Performance**
*   The gallery, containing 50-100 images, MUST load and filter efficiently without noticeable lag.
*   Image loading MUST be optimized using Astro image services and lazy loading to ensure the gallery is as fast and smooth as possible, minimizing perceived load times and ensuring a fluid user experience. The `imagesLoaded` library will be used to ensure Isotope.js lays out correctly after images are loaded.

**5.2. Maintainability & Architecture**
*   The Isotope.js integration MUST be encapsulated within a dedicated `IsotopeGallery.astro` component, promoting reusability and separation of concerns.
*   The component's code MUST be clean, well-structured, and follow Astro's best practices for client-side scripting.
*   The component MUST be responsive and mobile-friendly, adapting its layout and item sizing across common breakpoints.
*   The solution MUST adhere to DRY (Don't Repeat Yourself) principles and be composable and future-proof.

**5.3. Accessibility**
*   The filter buttons and gallery structure MUST be accessible, including support for keyboard navigation and appropriate ARIA attributes for screen readers.

**6. Technical Considerations**

**6.1. Dependencies**
*   Isotope.js (via npm).
*   `imagesLoaded` (via npm) to ensure correct layout after images are loaded.

**6.2. HTML Structure Changes**
*   The `data-tags` attribute needs to be moved from the `<img>` element to its parent `<div class="masonry-item">`.
*   Schema.org attributes (e.g., `itemscope`, `itemtype`, `itemprop`) will be added to relevant HTML elements.

**6.3. JavaScript Implementation**
*   Isotope.js will be initialized within a client-side `<script>` tag inside the `IsotopeGallery.astro` component.
*   Event listeners for filter buttons will be set up to trigger Isotope.js's `filter` method.
*   Logic for displaying/hiding the "no results" message will be implemented.

**6.4. Component Architecture**
*   A new Astro component, `IsotopeGallery.astro`, will be created.
*   This component will accept props for Isotope.js configuration (`layoutMode`, `columnWidth`, `gutter`), allowing customization from the consuming page's frontmatter.
*   It will encapsulate the HTML structure for the gallery, the Isotope.js initialization, and the filtering logic.

**6.5. Responsive Design**
*   The `IsotopeGallery.astro` component will implement responsive behavior.
*   Isotope.js's responsive options will be configured to adjust the gallery layout based on common breakpoints.
*   Default column counts for different viewports will be: mobile: 2, tablet: 3, desktop: 5. These will be hardcoded within the component/its associated styles but can be overridden via frontmatter props.
*   All responsive styling will be managed within `src/styles/global.css` or component-specific styles, adhering to existing project conventions.

**7. Future Considerations (Not in current scope)**
*   Dynamic URLs for filter states (e.g., `?filter=tag1`).

**8. Success Metrics**
*   Gallery filters correctly and reflows dynamically.
*   Smooth transitions during filtering.
*   "No results" message displays appropriately.
*   No negative impact on page load performance; gallery loads and filters quickly.
*   Schema.org markup is correctly implemented and verifiable.
*   The `IsotopeGallery.astro` component is reusable, responsive, and easily configurable.
*   Accessibility features are implemented for filter buttons and gallery structure.


gutter in stack overflow: https://stackoverflow.com/questions/15397138/jquery-isotope-masonary-gutter-issue