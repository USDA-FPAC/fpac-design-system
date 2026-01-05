// smoke-test-color.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Paths
const htmlPath = path.resolve(__dirname, 'color-background.html');
const chipScriptPath = path.resolve(__dirname, 'fpac-color-chips.js');

// Candidate CSS locations to make computed styles accurate
const cssCandidates = [
  path.resolve(__dirname, '..', '..', 'fpac-style', 'work', 'fpac-design-system.css'),
  path.resolve(__dirname, '..', '..', 'work', 'fpac-design-system.css'),
  path.resolve(__dirname, '..', 'fpac-documentation-website.css'),
  path.resolve(__dirname, '..', '..', 'fpac-style', 'src', 'styles', 'index.scss') // fallback (not compiled)
];

function hexToRgb(hex) {
  var h = (hex || '').replace('#', '').trim();
  if (h.length === 8) h = h.slice(0, 6);
  if (h.length === 3) {
    h = h.split('').map(function (c) { return c + c; }).join('');
  }
  if (h.length !== 6) return { r: 0, g: 0, b: 0 };
  var int = parseInt(h, 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

(function run() {
  if (!fs.existsSync(htmlPath)) {
    console.error('color-background.html not found at', htmlPath);
    process.exit(2);
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  const chipScript = fs.existsSync(chipScriptPath) ? fs.readFileSync(chipScriptPath, 'utf8') : null;

  // Find first existing CSS candidate
  let cssContent = null;
  let cssUsedPath = null;
  for (const p of cssCandidates) {
    if (fs.existsSync(p)) {
      try {
        cssContent = fs.readFileSync(p, 'utf8');
        cssUsedPath = p;
        break;
      } catch (e) {
        // ignore
      }
    }
  }

  if (!cssContent) {
    console.warn('No compiled site CSS found in expected locations. Computed colors may be inaccurate. Candidates tried:\n', cssCandidates.join('\n'));
  } else {
    console.log('Injecting CSS from:', cssUsedPath);
  }

  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
  const { window } = dom;
  const doc = window.document;

  // Inject CSS into head so getComputedStyle reflects site styles
  if (cssContent) {
    const styleEl = doc.createElement('style');
    styleEl.textContent = cssContent;
    doc.head.appendChild(styleEl);
  }

  // Inject chip script (so DOM manipulation runs)
  if (chipScript) {
    const s = doc.createElement('script');
    s.textContent = chipScript;
    doc.body.appendChild(s);
  } else {
    console.warn('Chip script not found at', chipScriptPath, '\nThe test will still try to locate existing chips in the HTML.');
  }

  // Wait briefly for scripts to execute and styles to apply
  setTimeout(() => {
    const rows = Array.from(doc.querySelectorAll('table.usa-table tbody tr'));
    const results = [];

    rows.forEach((row) => {
      const th = row.querySelector('th[scope="row"]');
      if (!th) return;
      const classLabel = th.textContent.trim();
      if (!classLabel || !classLabel.startsWith('.text-')) return;
      const tds = Array.from(row.querySelectorAll('td'));
      if (!tds || tds.length < 1) return;
      const hexCell = tds[0];
      const exampleCell = tds[tds.length - 1];
      const hex = (hexCell.textContent || '').trim();
      if (!hex) return;

      const chip = exampleCell.querySelector('.usda-chip, .utility-value-color-chip');
      const compColor = chip ? window.getComputedStyle(chip).color : null;
      const inlineStyle = chip ? (chip.getAttribute('style') || '') : '';

      function parseColorString(s) {
        if (!s) return null;
        var m = s.match(/rgba?\(([^)]+)\)/);
        if (!m) return null;
        var parts = m[1].split(',').map(function (p) { return p.trim(); });
        var r = parseInt(parts[0], 10) || 0;
        var g = parseInt(parts[1], 10) || 0;
        var b = parseInt(parts[2], 10) || 0;
        var a = parts.length >= 4 ? parseFloat(parts[3]) : 1;
        return { r: r, g: g, b: b, a: isNaN(a) ? 1 : a };
      }

      var hexRaw = (hex || '').replace('#', '').trim();
      var expectedObj = null;
      if (hexRaw.length === 8) {
        var rgbPart = hexRaw.slice(0, 6);
        var aPart = hexRaw.slice(6, 8);
        var rgbVals = hexToRgb('#' + rgbPart);
        var alpha = parseInt(aPart, 16) / 255;
        expectedObj = { r: rgbVals.r, g: rgbVals.g, b: rgbVals.b, a: alpha };
      } else {
        var rgbVals = hexToRgb(hex);
        expectedObj = { r: rgbVals.r, g: rgbVals.g, b: rgbVals.b, a: 1 };
      }

      var compObj = parseColorString(compColor);
      function colorsMatch(a, b) {
        if (!a || !b) return false;
        var tol = 0.5;
        var alphaTol = 0.01;
        return Math.abs(a.r - b.r) <= tol && Math.abs(a.g - b.g) <= tol && Math.abs(a.b - b.b) <= tol && Math.abs((a.a || 1) - (b.a || 1)) <= alphaTol;
      }

      const inlineMatchesHex = inlineStyle.toLowerCase().indexOf(hex.toLowerCase()) !== -1;
      const inlineMatchesRgb = inlineStyle.indexOf(`rgb(${expectedObj.r}`) !== -1;
      const passes = (compObj && colorsMatch(compObj, expectedObj)) || inlineMatchesHex || inlineMatchesRgb;

      results.push({ classLabel, hex, computed: compColor, inlineStyle, expectedRgb, passes });
    });

    console.log('\nSmoke test results for color example chips:');
    let ok = true;
    if (results.length === 0) {
      console.error('No .text- rows with chips found in the document.');
      process.exit(2);
    }

    results.forEach((r) => {
      console.log(`- ${r.classLabel}: hex=${r.hex}, computed=${r.computed}, inlineStyle=${r.inlineStyle || ''} -> ${r.passes ? 'OK' : 'MISMATCH'}`);
      if (!r.passes) ok = false;
    });

    process.exit(ok ? 0 : 1);
  }, 150);
})();
