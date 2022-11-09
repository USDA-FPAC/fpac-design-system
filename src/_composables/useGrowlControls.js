
import { useStore } from "vuex";
import { useUtilities } from './useUtilities';
import { v4 as uuidv4 } from 'uuid';

export function useGrowlControls() {

  const store = useStore();
  const { 
    hasClass,
    getAnimationString
   } = useUtilities();

  let firstTabStop = null;
  let lastTabStop = null;
  const originStr = 'data-growl-origin';

  const showGrowl = (_id) => {
    let growl = document.getElementById(_id);

    growl.setAttribute('aria-hidden', false);    
    // for Center Modal style only
    if( hasClass(growl, 'fds-growl--centered') ){
      // trap tabs inside of modal
      growl.addEventListener('keydown', trapTab);
      // Find all focusable children
      let focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
      let focusableElements = growl.querySelectorAll(focusableElementsString);

      // Convert NodeList to Array
      focusableElements = Array.prototype.slice.call(focusableElements);

      firstTabStop = focusableElements[0];
      lastTabStop = focusableElements[focusableElements.length - 1];
      firstTabStop.focus();
      growl.focus();
    }else{
      growl.addEventListener( getAnimationString(growl), showDelay);
    }
  }

  const hideGrowl = (_id, _callback=null) => {
    dismiss( document.getElementById(_id), _callback);
  }

  const trapTab = (_e) => {
    // Check for TAB key press
    if (_e.keyCode === 9) {
      // SHIFT + TAB
      if (_e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          _e.preventDefault();
          lastTabStop.focus();
        }
      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          _e.preventDefault();
          firstTabStop.focus();
        }
      }
    }
    // ESCAPE
    if (_e.keyCode === 27) {
      dismiss();
    }
  }

  const showDelay = (_e) => {
    let growl = _e.target;
    // clean up
    growl.removeEventListener( getAnimationString(growl), showDelay);
  }

  const dismiss = (_g, _callback=null) => {
    _g.className = _g.className + ' fds-growl--dismissing';
    _g.addEventListener( getAnimationString(_g), (_e) => {
      dismissDelay(_e, _callback)
    });
    if( hasClass(_g, 'fds-growl--centered') ) _g.focus();
  }

  const dismissDelay = (_e, _callback=null) => {
    let growl = _e.target;

    growl.className = growl.className.replace(' fds-growl--dismissing','');
    growl.setAttribute('aria-hidden', 'true');

    if( getOrigin() ) removeOrigin();
    if(_callback) _callback();

    // clean up
    growl.removeEventListener( getAnimationString(growl), dismissDelay);
  }

  const setOrigin = (_id) => {
    let el = document.getElementById(_id);
    el.setAttribute( originStr ,'');
    el.setAttribute('aria-expanded', 'true');
  }

  const getOrigin = () => {
    return document.querySelector('['+ originStr +']');
  }

  const removeOrigin = () => {
    let origin = getOrigin();
    try {
      origin.removeAttribute( originStr );
      origin.setAttribute('aria-expanded', 'false');
      // set focus back to the originating element
      origin.focus();
    } catch(e) {
      console.log('Origin Catch', e)
    }
  }

  const showDefaultGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: '',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      iconSizeClass: 'fds-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showSuccessGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: 'fds-growl--success',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      iconSizeClass: 'fds-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showErrorGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: 'fds-growl--error',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
      iconSizeClass: 'fds-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showWarningGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: 'fds-growl--warning',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
      iconSizeClass: 'fds-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showErrorModalGrowl = (_obj) => {
    setOrigin(_obj.id);
    let alertObj = {
      id: String( uuidv4() ),
      useCentered: 'true',
      extraClasses: 'fds-growl--error',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
      iconSizeClass: 'fds-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
    showWhiteout();
  }

  const showWhiteout = () => {
    document.getElementById('fds-whiteout').setAttribute('aria-hidden', 'false');
  }

  const hideWhiteout = () => {
    document.getElementById('fds-whiteout').setAttribute('aria-hidden', 'true');
  }


  return {
    showGrowl,
    hideGrowl,
    showWhiteout,
    hideWhiteout,
    showDefaultGrowl,
    showSuccessGrowl,
    showErrorGrowl,
    showWarningGrowl,
    showErrorModalGrowl,
    setOrigin
  }
}