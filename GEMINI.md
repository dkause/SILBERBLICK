# Gemini Project Notes: SILBERBLICK

This file contains notes, decisions, and solutions implemented by the Gemini agent for this project.

## Problem: Inconsistent Image Heights and Mobile Cropping

**File:** `docs/index.html`

### Issue Description
The three main portfolio images on the homepage had different intrinsic aspect ratios. The initial solution used `height: 100%` on the containing `<figure>` element and `object-fit: cover` on the `<img>` to force them to the same height, determined by the grid row.

This caused a problem on mobile devices: because the grid columns stack vertically, the containers became taller than they were wide. For landscape-oriented images, `object-fit: cover` resulted in significant and undesirable cropping on the left and right sides to fill the container's height.

### Analysis of Options

1.  **Force all photos to the same height (original approach):** Simple but not robust. It disrespects the content's intrinsic aspect ratio and leads to unpredictable cropping on different viewport sizes.
2.  **Make the container of the wider photo wider:** This is a fragile, non-scalable solution. It violates the DRY principle and creates a "magic number" in the layout that needs to be updated if the content changes. It's the opposite of a composable, robust layout.

### Chosen Solution: Composition with `aspect-ratio`

This solution aligns with modern CSS principles (Every Layout, Utopia) by defining a consistent shape for the image containers, rather than a fixed height.

1.  **Create a composable utility class:** A new class, `.aspect-ratio-container-4-3`, will be added to `docs/styles/layout.css`.

    ```css
    .aspect-ratio-container-4-3 {
      aspect-ratio: 4 / 3;
    }
    ```

2.  **Apply the class to the containers:** The `<figure>` elements in `docs/index.html` will use this class. The old `.full-height` class will be removed.

    ```html
    <figure class="aspect-ratio-container-4-3">
      <a href="...">
        <img class="object-fit-cover" ... />
      </a>
      ...
    </figure>
    ```
3. **Keep `object-fit: cover`:** The `<img>` element retains `.object-fit-cover`. Its `height: 100%` rule now correctly fills the parent `<figure>`, which has a stable, defined aspect ratio.

### Benefits of this Approach

*   **Robust & Fluid:** The layout becomes truly liquid. The image height is derived intrinsically from the grid-defined width and the CSS-defined aspect ratio.
*   **Composable & DRY:** The `.aspect-ratio-container-4-3` utility can be reused anywhere in the project.
*   **Predictable Cropping:** The cropping from `object-fit: cover` is now consistent and predictable across all screen sizes because the container's shape is maintained.
---
## New Working Agreement (2025-07-16)

To better support the user's learning process, we have established the following workflow:

1.  **Act as a Mentor:** My primary role is to guide and explain, fostering the user's own coding skills.
2.  **Propose, Don't Apply:** I will only *propose* code changes. The user will be responsible for reviewing, confirming, and applying the code themselves.
3.  **Commit After Success:** After each successfully resolved task, I will suggest a `git commit` command with a clear and descriptive message.