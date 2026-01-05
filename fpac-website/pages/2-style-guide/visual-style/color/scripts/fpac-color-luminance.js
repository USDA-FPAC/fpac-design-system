// fpac-color-luminance.js
// Compute WCAG relative luminance (%) from an RGB triplet and add a single "Luminance" column to each .usa-table

(function () {
  'use strict';

  function srgbToLinear(c) {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  // Detect whether a table contains any RGB-like values before modifying it.
  function tableContainsRgb(table) {
    var cells = table.querySelectorAll('th, td');
    for (var i = 0; i < cells.length; i++) {
      var txt = (cells[i].textContent || cells[i].innerText || '').trim();
      if (!txt) continue;

      // rgb(255, 255, 255) or RGB(...)
      if (/rgb\(/i.test(txt)) return true;

      // Three comma-separated numbers (e.g., "255, 255, 255" or "255,255,255")
      var m = txt.match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
      if (m) {
        var r = parseFloat(m[1]);
        var g = parseFloat(m[2]);
        var b = parseFloat(m[3]);
        if (!isNaN(r) && !isNaN(g) && !isNaN(b) && r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
          return true;
        }
      }

      // Hex colors (#fff or #ffffff)
      if (/#([0-9a-f]{3}|[0-9a-f]{6})\b/i.test(txt)) return true;
    }
    return false;
  }

  function addLuminanceColumn(table) {
    // If the table does not contain any RGB-like values, do not modify it.
    if (!tableContainsRgb(table)) return;
    var theadRow = table.querySelector('thead tr');
    if (theadRow) {
      if (!theadRow.querySelector('th[data-fpac-lum-only]')) {
        var thLum = document.createElement('th');
        thLum.setAttribute('scope', 'col');
        thLum.setAttribute('data-fpac-lum-only', '1');
        thLum.className = 'text-center';
        thLum.style.width = '15%';
        thLum.textContent = 'Luminance';
        theadRow.appendChild(thLum);
      }
    }

    var rows = table.querySelectorAll('tbody tr');
    rows.forEach(function (row) {
      if (row.querySelector('td[data-fpac-lum-only]')) return;
      var cells = Array.prototype.slice.call(row.querySelectorAll('th, td'));
      var rgbCell = cells[2];
      var lumDisplay = '—';

      if (rgbCell) {
        var txt = rgbCell.textContent || rgbCell.innerText || '';
        var parts = txt.split(',').map(function (s) { return s.replace(/[^0-9.]/g, '').trim(); }).filter(function (s) { return s !== ''; });
        if (parts.length >= 3) {
          var r = parseFloat(parts[0]);
          var g = parseFloat(parts[1]);
          var b = parseFloat(parts[2]);
          if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            var rl = srgbToLinear(r);
            var gl = srgbToLinear(g);
            var bl = srgbToLinear(b);
            var lum = 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
            lumDisplay = (lum * 100).toFixed(2) + '%';
          }
        }
      }

      var tdLum = document.createElement('td');
      tdLum.className = 'text-center';
      tdLum.setAttribute('data-fpac-lum-only', '1');
      tdLum.textContent = lumDisplay;
      tdLum.setAttribute('aria-label', 'Luminance ' + (lumDisplay === '—' ? 'unknown' : lumDisplay));
      row.appendChild(tdLum);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('table.usa-table');
    tables.forEach(function (table) {
      try {
        addLuminanceColumn(table);
      } catch (e) {
        console.error('FPAC luminance-only script error for table', table, e);
      }
    });
  });

})();
