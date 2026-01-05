// fpac-color-chips.js
// Moves USDA chip generation and interaction out of color.html
//
// This script finds rows in the color utility tables on the documentation
// pages and creates a small interactive "USDA" chip for each text color row.
// The chip shows how the text color will appear on either a light (white)
// or dark (ink) background; clicking or pressing Enter/Space toggles that
// background so you can quickly check contrast. The script reads the hex
// and/or RGB values from the table and uses them to determine legible
// backgrounds and to set the chip text color.

(function () {
  'use strict';

  // --- Helper: Convert hex string to RGB object ---
  // hex may be in formats like: "#RRGGBB", "#RGB", or 8-char with alpha "#RRGGBBAA".
  // Returns an object with numeric r,g,b fields (0..255). If input is invalid,
  // returns { r:0, g:0, b:0 } to avoid runtime errors elsewhere.
  function hexToRgb(hex) {
    var h = (hex || '').replace('#', '').trim();
    // support 8-char hex (RRGGBBAA) by trimming alpha if present
    if (h.length === 8) h = h.slice(0, 6);
    // support short form like 'abc' -> 'aabbcc'
    if (h.length === 3) {
      h = h.split('').map(function (c) { return c + c; }).join('');
    }
    // If it's not 6 chars at this point, bail with a safe default
    if (h.length !== 6) return { r: 0, g: 0, b: 0 };
    var int = parseInt(h, 16);
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
  }

  // --- Helper: Parse an RGB cell string into numbers ---
  // Accepts strings like: "27, 27, 27" or "0, 0, 0, 0" (with alpha).
  // Returns { r, g, b, a } where a defaults to 1 if not provided.
  // Returns null if parsing fails so callers can fallback to hex parsing.
  function parseRgbCell(rgbText) {
    if (!rgbText) return null;
    // split comma-separated values and trim whitespace
    var parts = rgbText.split(',').map(function (p) { return p.trim(); }).filter(Boolean);
    if (parts.length < 3) return null;
    var r = parseInt(parts[0], 10);
    var g = parseInt(parts[1], 10);
    var b = parseInt(parts[2], 10);
    // optional alpha value if present (e.g. "0" for fully transparent)
    var a = parts.length >= 4 ? parseFloat(parts[3]) : 1;
    if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
    return { r: r, g: g, b: b, a: isNaN(a) ? 1 : a };
  }

  // --- Helper: Compute relative luminance for an RGB color ---
  // This uses the standard sRGB luminance formula. The result is a number
  // roughly between 0 (black) and 1 (white). We use this to decide whether
  // a text color is "light" or "dark" so we can choose a contrasting chip
  // background (white or ink) for previewing.
  function relativeLuminance(rgb) {
    var srgb = [rgb.r / 255, rgb.g / 255, rgb.b / 255].map(function (c) {
      // linearize sRGB channel
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    // luminance formula using coefficients for human perception of each channel
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  }

  // --- Main: Find table rows and attach chips ---
  function initColorChips() {
    // Select all table rows in tables using the usa-table class.
    // The documentation tables are structured with <th> containing the
    // CSS class name (like ".text-primary") and <td>s for hex, RGB, example.
    var rows = document.querySelectorAll('table.usa-table tbody tr');

    rows.forEach(function (row) {
      // Each relevant row should have a <th scope="row"> with the class label
      var th = row.querySelector('th[scope="row"]');
      if (!th) return; // skip rows that don't follow the expected structure

      // Only handle rows that describe text utilities (class names starting with ".text-")
      var classLabel = th.textContent.trim();
      if (!classLabel || !classLabel.startsWith('.text-')) return; // only .text- rows

      // Find the table cells. Typical order in the markup is:
      //  - first <td> = Hex Code column
      //  - second <td> = RGB column (optional)
      //  - last <td> = Example (where we will place the chip)
      var tds = row.querySelectorAll('td');
      if (!tds || tds.length < 2) return; // must have at least hex + example
      var hexCell = tds[0];
      var rgbCell = tds.length >= 3 ? tds[1] : null; // optional RGB column
      var exampleCell = tds[tds.length - 1];

      // Read the hex string from the table (the cell text) and normalize it.
      var hex = (hexCell.textContent || '').trim();
      if (!hex) return; // nothing we can do without a color value

      // Try to read RGB from the RGB cell (preferred, because it may include alpha).
      // If that fails, fall back to parsing the hex value.
      var rgb = null;
      if (rgbCell) {
        rgb = parseRgbCell((rgbCell.textContent || '').trim());
      }
      if (!rgb) {
        rgb = hexToRgb(hex);
      }

      // Compute how 'light' the text color is so we can pick an initial chip background
      var luminance = relativeLuminance(rgb);

      // --- Create the chip element ---
      // We build a small <div> that looks like a button and shows the word "USDA".
      // The script will set the chip's CSS color to the text color from the table so
      // you can preview how that text would appear on light/dark backgrounds.
      var chip = document.createElement('div');
      chip.className = 'utility-value-color-chip usda-chip';
      chip.textContent = 'USDA';
      // Inline styles to match the existing visual size/shape used in the docs
      chip.style.display = 'inline-flex';
      chip.style.alignItems = 'center';
      chip.style.justifyContent = 'center';
      chip.style.width = '84px';
      chip.style.height = '28px';
      chip.style.borderRadius = '3px';
      chip.style.padding = '0 8px';
      chip.style.fontWeight = '600';
      chip.style.boxSizing = 'border-box';
      chip.style.cursor = 'pointer';

      // Accessibility: make it behave like a button for keyboard users and screen readers
      chip.setAttribute('role', 'button');
      chip.tabIndex = 0; // allow focus via Tab key

      // Set the chip's text color from the hex value in the table (authoritative).
      // If setting via hex fails (very unlikely), fall back to rgb(...) string.
      try {
        chip.style.color = hex;
      } catch (e) {
        if (rgb) chip.style.color = 'rgb(' + [rgb.r, rgb.g, rgb.b].join(',') + ')';
      }

      // Choose an initial background color so the chip text is readable.
      // If the text color is light (high luminance), start on a dark background (ink).
      // Otherwise, start on white.
      if (luminance > 0.5) {
        chip.style.backgroundColor = '#1b1b1b';
        chip.dataset.bg = 'ink';
        chip.setAttribute('aria-pressed', 'true');
      } else {
        chip.style.backgroundColor = '#ffffff';
        chip.dataset.bg = 'white';
        chip.setAttribute('aria-pressed', 'false');
      }
      chip.style.border = '1px solid #ddd'; // keep chip visually separated from table

      // --- Interaction: toggling the chip background ---
      // When toggled we flip between white and ink backgrounds so users can quickly
      // check how the chosen text color looks on both light and dark surfaces.
      function toggleBackground() {
        if (chip.dataset.bg === 'white') {
          chip.style.backgroundColor = '#1b1b1b';
          chip.dataset.bg = 'ink';
          chip.setAttribute('aria-pressed', 'true');
        } else {
          chip.style.backgroundColor = '#ffffff';
          chip.dataset.bg = 'white';
          chip.setAttribute('aria-pressed', 'false');
        }
        // ensure the border remains for visibility
        chip.style.border = '1px solid #ddd';
      }

      // Click handler for mouse users
      chip.addEventListener('click', function () {
        toggleBackground();
      });
      // Keyboard handler for Enter and Space keys so the chip is operable without a mouse
      chip.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBackground();
        }
      });

      // Replace whatever was in the example cell with our chip and center it
      exampleCell.innerHTML = '';
      exampleCell.style.textAlign = 'center';
      exampleCell.appendChild(chip);
    });
  }

  // Run the initializer once the DOM is ready. If the page is still loading,
  // wait for DOMContentLoaded; otherwise run immediately.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initColorChips);
  } else {
    initColorChips();
  }
})();
