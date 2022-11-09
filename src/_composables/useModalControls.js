import { ref } from 'vue';

export function useModalControls() {

  const modalId = ref('');
  const modalFirstTabStop = ref({});
  const modalLastTabStop = ref({});
  
  const showModal = (id) => {
    let modal = document.getElementById(id)

    modal.setAttribute('aria-expanded',true);

    // show the modal by toggling aria attribute
    modal.setAttribute('aria-hidden', 'false');

    // trap tabs inside of modal
    modal.addEventListener('keydown', trapModal);
    // Find all focusable children

    let focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = modal.querySelectorAll(focusableElementsString);

    // Convert NodeList to Array
    focusableElements = Array.prototype.slice.call(focusableElements);

    modalFirstTabStop.value = focusableElements[0];
    modalLastTabStop.value = focusableElements[focusableElements.length - 1];
    modalFirstTabStop.value.focus();

    // Fix double scrollbar issue
    let body = document.getElementsByTagName('body')[0];
    body.className = body.className + ' fds-modal-scroll-fix';

    // gain focus --- needs rewrite
    setTimeout(function() {
      modal.focus();
    },200);

  };

  const hideModal = (id) => {
    let modal = document.getElementById(id)

    // hide the modal by toggling aria attribute
    modal.setAttribute('aria-hidden', 'true');

    // Fix double scrollbar issue
    let body = document.getElementsByTagName('body')[0];
    body.className = body.className.replace(' fds-modal-scroll-fix','');

    // set focus back to the originating element
    let origin = document.querySelector('[data-modal-origin]');
    
    if( origin ){
      origin.removeAttribute('data-modal-origin');
      origin.setAttribute('aria-expanded', 'false');
      origin.focus();
    }
    
  };

  const trapModal = (e) => {
    // Check for TAB key press
    if (e.keyCode === 9) {
      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === modalFirstTabStop.value) {
          e.preventDefault();
          modalLastTabStop.value.focus();
        }
      // TAB
      } else {
        if (document.activeElement === modalLastTabStop.value) {
          e.preventDefault();
          modalFirstTabStop.value.focus();
        }
      }
    }
    // ESCAPE
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  const getModalId = () => {
    return modalId.value;
  }

  const setModalId = (val) => {
    modalId.value = val
  }

  return {
    setModalId,
    getModalId,
    showModal,
    hideModal
  }
}