// fpac-color-luminance-contrast.js
// Compute WCAG relative luminance (%) from an RGB triplet and add Luminance + Contrast columns to each .usa-table
// This script mirrors the previous inline implementation from color-theme.html

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

  var inkR = 27, inkG = 27, inkB = 27;
  var inkL = 0.2126 * srgbToLinear(inkR) + 0.7152 * srgbToLinear(inkG) + 0.0722 * srgbToLinear(inkB);

  function contrastRatio(l1, l2) {
    var light = Math.max(l1, l2);
    var dark = Math.min(l1, l2);
    return (light + 0.05) / (dark + 0.05);
  }

  function addColumnsToTable(table) {
    // If the table does not contain any RGB-like values, do not modify it.
    if (!tableContainsRgb(table)) return;
    var theadRow = table.querySelector('thead tr');
    if (theadRow) {
      var existing = theadRow.querySelector('th[data-fpac-lum]');
      if (!existing) {
        var thLum = document.createElement('th');
        thLum.setAttribute('scope', 'col');
        thLum.setAttribute('data-fpac-lum', '1');
        thLum.className = 'text-center';
        thLum.style.width = '15%';
        thLum.textContent = 'Luminance';

        var thCW = document.createElement('th');
        thCW.setAttribute('scope', 'col');
        thCW.className = 'text-center';
        thCW.style.width = '12%';
        thCW.textContent = 'Contrast vs white';

        var thCI = document.createElement('th');
        thCI.setAttribute('scope', 'col');
        thCI.className = 'text-center';
        thCI.style.width = '12%';
        thCI.textContent = 'Contrast vs ink';

        theadRow.appendChild(thLum);
        theadRow.appendChild(thCW);
        theadRow.appendChild(thCI);
      }
    }

    var rows = table.querySelectorAll('tbody tr');
    rows.forEach(function (row) {
      if (row.querySelector('td[data-fpac-lum]')) return;
      var cells = Array.prototype.slice.call(row.querySelectorAll('th, td'));
      var rgbCell = cells[2];
      var lumDisplay = '—';
      var contrastWhiteDisplay = '—';
      var contrastInkDisplay = '—';

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
            var cw = contrastRatio(lum, 1);
            contrastWhiteDisplay = cw.toFixed(2) + ':1';
            var ci = contrastRatio(lum, inkL);
            contrastInkDisplay = ci.toFixed(2) + ':1';
          }
        }
      }

      var tdLum = document.createElement('td');
      tdLum.className = 'text-center';
      tdLum.setAttribute('data-fpac-lum', '1');
      tdLum.textContent = lumDisplay;
      tdLum.setAttribute('aria-label', 'Luminance ' + (lumDisplay === '—' ? 'unknown' : lumDisplay));

      var tdCW = document.createElement('td');
      tdCW.className = 'text-center';
      tdCW.setAttribute('data-fpac-cw', '1');
      tdCW.textContent = contrastWhiteDisplay;
      tdCW.setAttribute('aria-label', 'Contrast versus white ' + (contrastWhiteDisplay === '—' ? 'unknown' : contrastWhiteDisplay));

      var tdCI = document.createElement('td');
      tdCI.className = 'text-center';
      tdCI.setAttribute('data-fpac-ci', '1');
      tdCI.textContent = contrastInkDisplay;
      tdCI.setAttribute('aria-label', 'Contrast versus ink ' + (contrastInkDisplay === '—' ? 'unknown' : contrastInkDisplay));

      row.appendChild(tdLum);
      row.appendChild(tdCW);
      row.appendChild(tdCI);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('table.usa-table');
    tables.forEach(function (table) {
      try {
        addColumnsToTable(table);
      } catch (e) {
        console.error('FPAC luminance script error for table', table, e);
      }
    });
  });

})();
