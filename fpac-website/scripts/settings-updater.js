// settings-updater.js
// Clean generalized updater for *-settings.responsive and *-settings.state
// This file was extracted from inline scripts used on several documentation pages.
// It fetches the fpac-uswds-styles.scss file to parse the current settings values from
// \fpac-design-system\dist\fpac-uswds-styles.scss

// To use, include this script on a page that has a table with rows for the settings to update.
// Each row should have a first cell with the setting name (e.g. $button-settings.responsive)
// and subsequent cells for the values to update (e.g. true/false spans).
// The script will find rows with "-settings.responsive" and "-settings.state" in the label
// and update the corresponding value cells based on the parsed SCSS settings.

// Include this script in your HTML as follows:
// <script src="/fpac-website/scripts/settings-updater.js"></script>

// Note to self: update this script to include output tables once those exist.


(function () {
  var DEBUG = false; // set true to enable debug logs
  function log() { if (DEBUG) { console.debug.apply(console, arguments); } }

  function safeText(node) { return (node && node.textContent || '').trim().toLowerCase(); }

  function setSpanOnCell(cell, val) {
    if (!cell) return;
    var span = cell.querySelector('span.usa-tag');
    if (!span) {
      span = document.createElement('span');
      span.classList.add('usa-tag');
      cell.textContent = '';
      cell.appendChild(span);
    }
    span.textContent = String(val);
    span.classList.remove('bg-primary', 'bg-disabled');
    if (String(val) === 'true') span.classList.add('bg-primary');
    else span.classList.add('bg-disabled');
    log('[settings-updater] set', cell, '->', val);
  }

  function findRows() {
    var rows = Array.from(document.querySelectorAll('table tr'));
    var responsiveRows = [];
    var stateRows = [];
    rows.forEach(function (row) {
      var cells = Array.from(row.querySelectorAll('td, th'));
      if (cells.length === 0) return;
      var labelText = safeText(cells[0]);
      if (labelText.indexOf('-settings') === -1) return;
      if (labelText.indexOf('responsive') !== -1) responsiveRows.push({ row: row, cells: cells, labelText: labelText });
      if (labelText.indexOf('state') !== -1) stateRows.push({ row: row, cells: cells, labelText: labelText });
    });
    return { responsiveRows: responsiveRows, stateRows: stateRows };
  }

  var found = findRows();
  if (found.responsiveRows.length === 0 && found.stateRows.length === 0) {
    log('[settings-updater] no matching rows found');
    return;
  }

  var possiblePaths = [
    '/dist/fpac-uswds-styles.scss?ts=' + Date.now(),
    '/dist/fpac-uswds-styles.scss',
    '/fpac-design-system/dist/fpac-uswds-styles.scss'
  ];

  function parseAllSettings(text) {
    var result = {};
    if (!text) return result;
    try {
      var re = /\$?([a-z0-9_-]+-settings)\s*:\s*\(([\s\S]*?)\)\s*[,;]?/ig;
      var m;
      while ((m = re.exec(text)) !== null) {
        var key = (m[1] || '').toLowerCase();
        var inner = m[2] || '';
        var entry = { responsive: null, state: null };

        var resMatch = inner.match(/responsive\s*:\s*(?:'|\")?\s*(true|false)\s*(?:'|\")?/i);
        if (resMatch) entry.responsive = resMatch[1].toLowerCase();

        var stateMatch = inner.match(/state\s*:\s*\(([\s\S]*?)\)\s*[,)]?/i);
        if (stateMatch && stateMatch[1]) {
          var si = stateMatch[1];
          var so = {};
          ['active','focus','hover','visited'].forEach(function (n) {
            var mm = si.match(new RegExp(n + "\\s*:\\s*(?:'|\\\")?\\s*(true|false)\\s*(?:'|\\\")?", 'i'));
            so[n] = mm ? mm[1].toLowerCase() : null;
          });
          entry.state = so;
        } else {
          var stateBool = inner.match(/state\s*:\s*(?:'|\")?\s*(true|false)\s*(?:'|\")?/i);
          if (stateBool) {
            var v = stateBool[1].toLowerCase();
            entry.state = { active: v, focus: v, hover: v, visited: v };
          } else {
            var so2 = {};
            var any = false;
            ['active','focus','hover','visited'].forEach(function (n) {
              var mm = inner.match(new RegExp(n + "\\s*:\\s*(?:'|\\\")?\\s*(true|false)\\s*(?:'|\\\")?", 'i'));
              if (mm) { so2[n] = mm[1].toLowerCase(); any = true; }
              else so2[n] = null;
            });
            if (any) entry.state = so2;
          }
        }

        result[key] = entry;
      }

      var globalRes = text.match(/responsive\s*[:=]\s*(?:'|\")?(true|false)(?:'|\")?/i);
      if (globalRes) result.__global_responsive = globalRes[1].toLowerCase();

    } catch (e) {
      log('[settings-updater] parseAllSettings exception', e && e.message);
    }
    return result;
  }

  function normalizeLabelToKey(label) {
    var s = (label || '').replace(/[`"'\$]/g, '').trim().toLowerCase();
    s = s.replace(/\.\s*responsive$|\.\s*state$/i, '');
    var m = s.match(/([a-z0-9_-]+-settings)/i);
    return m ? m[1].toLowerCase() : null;
  }

  function updateResponsiveGroups(parsed) {
    var groups = {};
    found.responsiveRows.forEach(function (r) {
      var key = normalizeLabelToKey(r.labelText) || '__unknown__';
      (groups[key] = groups[key] || []).push(r);
    });

    Object.keys(groups).forEach(function (k) {
      var val = null;
      if (k !== '__unknown__' && parsed[k] && parsed[k].responsive !== null) val = parsed[k].responsive;
      else if (parsed.__global_responsive) val = parsed.__global_responsive;
      if (val === null) { log('[settings-updater] no responsive value for', k); return; }
      groups[k].forEach(function (r) {
        var valCell = (r.cells[1]) ? r.cells[1] : null;
        setSpanOnCell(valCell, val);
      });
    });
  }

  function updateStateRows(parsed) {
    found.stateRows.forEach(function (r) {
      var key = normalizeLabelToKey(r.labelText);
      var stateObj = null;
      if (key && parsed[key] && parsed[key].state) stateObj = parsed[key].state;
      else {
        var keys = Object.keys(parsed).filter(function (x) { return x.indexOf('__') !== 0; });
        if (keys.length === 1 && parsed[keys[0]] && parsed[keys[0]].state) stateObj = parsed[keys[0]].state;
      }
      if (!stateObj) { log('[settings-updater] no state object for row', r); return; }
      var cells = r.cells;
      var map = ['active','focus','hover','visited'];
      for (var i = 0; i < map.length; i++) {
        var cell = cells[i + 1];
        if (!cell) continue;
        var v = stateObj[map[i]];
        setSpanOnCell(cell, (v === null || typeof v === 'undefined') ? 'false' : String(v));
      }
    });
  }

  (function tryFetch(index) {
    if (index >= possiblePaths.length) { log('[settings-updater] no more paths to try'); return; }
    var url = possiblePaths[index];
    log('[settings-updater] trying', url);
    fetch(url, { cache: 'no-store' }).then(function (resp) {
      if (!resp.ok) throw new Error('not found ' + resp.status);
      return resp.text();
    }).then(function (text) {
      try {
        var parsed = parseAllSettings(text);
        updateResponsiveGroups(parsed);
        updateStateRows(parsed);
      } catch (e) {
        log('[settings-updater] processing failed', e && e.message);
      }
    }).catch(function (err) {
      log('[settings-updater] fetch failed for', url, err && err.message);
      tryFetch(index + 1);
    });
  })(0);

})();
