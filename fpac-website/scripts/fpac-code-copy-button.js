/*
  _    _  _____ _____            ______ _____        _____ 
 | |  | |/ ____|  __ \   /\     |  ____|  __ \ /\   / ____|
 | |  | | (___ | |  | | /  \    | |__  | |__) /  \ | |     
 | |  | |\___ \| |  | |/ /\ \   |  __| |  ___/ /\ \| |     
 | |__| |____) | |__| / ____ \  | |    | |  / ____ \ |____ 
  \____/|_____/|_____/_/    \_\ |_|    |_| /_/    \_\_____|

------------------------------------------------------------------------------------------------------
fpac-code-copy-button.js
This is the JS for the copy button that shows up in code blocks.
From: https://www.roboleary.net/2022/01/13/copy-code-to-clipboard-blog
------------------------------------------------------------------------------------------------------
Description:
It looks for all <pre><code> blocks and adds a button to copy the code text to clipboard.

Include the following stylesheet in the CSS Links section of your HTML:
    <link rel="stylesheet" href="/fpac-website/styles/fpac-code-copy-button.css">

Include this script at the bottom in the Scripts section of your HTML:
  <script src="/fpac-website/scripts/fpac-code-copy-button.js"></script>
*/

const copyButtonLabel = "Copy Code";

// Run after DOM is ready to ensure <pre><code> blocks exist
window.addEventListener('DOMContentLoaded', () => {

  // Select all <pre> elements that contain a <code> child (avoid :has for broader support)
  const blocks = Array.from(document.querySelectorAll('pre')).filter(pre => pre.querySelector('code'));

  blocks.forEach((block) => {
    // reuse existing button if present (by class) otherwise create one
    let button = block.querySelector('button.fpac-code-copy-button');
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'fpac-code-copy-button';
      button.textContent = copyButtonLabel;
      button.setAttribute('aria-label', 'Copy code to clipboard');

      // Insert button at the start of the <pre> so it appears inside the block
      block.insertBefore(button, block.firstChild);
    }

    // attach click handler (avoid attaching multiple handlers if script runs twice)
    if (!button.__fpac_handler_attached) {
      button.addEventListener('click', async () => {
        try {
          const code = block.querySelector('code');
          const text = code ? code.innerText : '';

          await navigator.clipboard.writeText(text);

          // visual feedback that task is completed
          const prev = button.innerText;
          button.innerText = 'Code Copied';

          setTimeout(() => {
            button.innerText = copyButtonLabel;
          }, 700);
        } catch (err) {
          console.error('fpac-code-copy: copy failed', err);
        }
      });
      button.__fpac_handler_attached = true;
    }
  });
});

/*
  FPAC: Accordion content width helper (generalized)
  --------------------------------------------------
  This version applies the same conservative width/wrapping behavior to any
  accordion button that has an `aria-controls` attribute and a matching
  content element id. It creates a per-button closure so multiple accordions
  on the same page (for example the component library page) are handled.
*/
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // find all accordion buttons that control a content panel
    var buttons = Array.from(document.querySelectorAll('.usa-accordion__button[aria-controls]'));
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      var contentId = btn.getAttribute('aria-controls');
      var content = document.getElementById(contentId);
      if (!content) return; // skip if no matching panel

      // per-instance state
      var preOpenTimer = null;
      var resizeTimer = null;

      function ensureWrapper() {
        if (content._innerWrapper) return content._innerWrapper;
        var wrapper = document.createElement('div');
        wrapper.className = 'fpac-accordion-inner-wrapper';
        // move existing children into wrapper (only runs once)
        while (content.firstChild) wrapper.appendChild(content.firstChild);
        content.appendChild(wrapper);
        content._innerWrapper = wrapper;
        return wrapper;
      }

      function applyWidth() {
        var rect = btn.getBoundingClientRect();
        var wrapper = ensureWrapper();

        // Only constrain the max width so USWDS can continue to animate/hide the panel.
        content.style.boxSizing = 'border-box';
        content.style.maxWidth = rect.width + 'px';

        // Make the wrapper and its pre/code children wrap long lines.
        wrapper.style.boxSizing = 'border-box';
        wrapper.style.width = '100%';
        wrapper.style.maxWidth = '100%';
        wrapper.style.minWidth = '0';
        wrapper.style.overflowX = 'auto';
        wrapper.style.whiteSpace = 'normal';
        wrapper.style.wordBreak = 'break-word';
        wrapper.style.overflowWrap = 'anywhere';

        var pre = wrapper.querySelector('pre');
        if (pre) {
          pre.style.whiteSpace = 'pre-wrap';
          pre.style.wordBreak = 'break-word';
          pre.style.overflowWrap = 'anywhere';
          pre.style.maxWidth = '100%';
          pre.style.minWidth = '0';
        }

        var code = wrapper.querySelector('code');
        if (code) {
          code.style.display = 'block';
          code.style.whiteSpace = 'pre-wrap';
          code.style.wordBreak = 'break-word';
          code.style.overflowWrap = 'anywhere';
          code.style.maxWidth = '100%';
        }
      }

      function clearWidth() {
        var wrapper = content._innerWrapper;
        if (wrapper) {
          wrapper.style.boxSizing = '';
          wrapper.style.display = '';
          wrapper.style.width = '';
          wrapper.style.maxWidth = '';
          wrapper.style.minWidth = '';
          wrapper.style.overflowX = '';
          wrapper.style.verticalAlign = '';
          wrapper.style.overflowWrap = '';
          wrapper.style.wordBreak = '';
          var pre = wrapper.querySelector('pre');
          if (pre) {
            pre.style.boxSizing = '';
            pre.style.width = '';
            pre.style.maxWidth = '';
            pre.style.minWidth = '';
            pre.style.overflowX = '';
            pre.style.whiteSpace = '';
            pre.style.wordBreak = '';
            pre.style.overflowWrap = '';
          }
          var code = wrapper.querySelector('code');
          if (code) {
            code.style.display = '';
            code.style.boxSizing = '';
            code.style.width = '';
            code.style.maxWidth = '';
            code.style.whiteSpace = '';
            code.style.wordBreak = '';
            code.style.overflowWrap = '';
          }
        }
        content.style.boxSizing = '';
        content.style.width = '';
        content.style.maxWidth = '';
        content.style.overflow = '';
        // restore any display override so USWDS can collapse the panel normally
        content.style.display = '';
      }

      // Apply width after the accordion transition finishes; transitionend with fallback
      function scheduleApplyAfterTransition() {
        var called = false;
        function run() {
          if (called) return;
          called = true;
          content.removeEventListener('transitionend', onTransitionEnd);
          clearTimeout(fallbackTimer);
          applyWidth();
        }
        function onTransitionEnd(e) {
          if (e && e.target !== content) return;
          run();
        }
        content.addEventListener('transitionend', onTransitionEnd);
        var fallbackTimer = setTimeout(run, 350);
      }

      // Prep before open to prevent initial wide expansion on first click after refresh.
      function preparePreOpen() {
        if (btn.getAttribute('aria-expanded') === 'true') return;
        var rect = btn.getBoundingClientRect();
        var wrapper = ensureWrapper();
        content.style.boxSizing = 'border-box';
        content.style.maxWidth = rect.width + 'px';
        wrapper.style.boxSizing = 'border-box';
        wrapper.style.overflowX = 'auto';
        wrapper.style.whiteSpace = 'normal';
        wrapper.style.wordBreak = 'break-word';
        wrapper.style.overflowWrap = 'anywhere';
        var pre = wrapper.querySelector('pre');
        if (pre) {
          pre.style.whiteSpace = 'pre-wrap';
          pre.style.wordBreak = 'break-word';
          pre.style.maxWidth = '100%';
          pre.style.minWidth = '0';
        }
        var code = wrapper.querySelector('code');
        if (code) {
          code.style.display = 'block';
          code.style.whiteSpace = 'pre-wrap';
          code.style.maxWidth = '100%';
        }

        if (preOpenTimer) clearTimeout(preOpenTimer);
        preOpenTimer = setTimeout(function () {
          if (btn.getAttribute('aria-expanded') !== 'true') clearWidth();
          preOpenTimer = null;
        }, 600);
      }

      // Observe aria-expanded and apply/clear accordingly
      var mo = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          if (m.type === 'attributes' && m.attributeName === 'aria-expanded') {
            if (btn.getAttribute('aria-expanded') === 'true') {
              scheduleApplyAfterTransition();
            } else {
              requestAnimationFrame(clearWidth);
            }
          }
        });
      });
      mo.observe(btn, { attributes: true });

      // Ensure preOpenTimer cleared when scheduling after transition
      var oldSchedule = scheduleApplyAfterTransition;
      function scheduleApplyAfterTransitionWithClear() {
        if (preOpenTimer) { clearTimeout(preOpenTimer); preOpenTimer = null; }
        oldSchedule();
      }

      // Resize debounce per-instance
      window.addEventListener('resize', function () {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          if (btn.getAttribute('aria-expanded') === 'true') applyWidth();
        }, 120);
      });

      // Initialize if already expanded
      if (btn.getAttribute('aria-expanded') === 'true') requestAnimationFrame(applyWidth);

      // Interaction handlers
      btn.addEventListener('pointerdown', preparePreOpen);
      try { btn.addEventListener('touchstart', preparePreOpen, { passive: true }); } catch (e) {}
      btn.addEventListener('keydown', function (e) {
        var key = e.key || e.keyCode;
        if ((key === 'Enter' || key === ' ' || key === 'Spacebar' || key === 13 || key === 32) && btn.getAttribute('aria-expanded') !== 'true') {
          preparePreOpen();
        }
      });

      btn.addEventListener('click', function () {
        setTimeout(function () {
          if (btn.getAttribute('aria-expanded') === 'true') scheduleApplyAfterTransitionWithClear(); else clearWidth();
        }, 50);
      });
    });
  });
})();