<template>
  <div class="fds-field">
    <!-- Popover START -->
      <button @click="showPopover(POPOVER_ID)" class="fds-btn fds-btn--flat"
        data-behavior="toggle-popover"
        :data-target="POPOVER_ID">
        <svg v-if="POPOVER_TYPE=='help'" :class="'fds-icon '+iconSize" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
        </svg>
        <svg v-if="POPOVER_TYPE=='info'" :class="'fds-icon '+iconSize" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
        </svg>
      </button>
    <!-- Popover END -->
    <!-- Popover START -->
    <div :class="'fds-popover '+ POPOVER_CLASSES" :id="POPOVER_ID" aria-hidden="true">
      <div class="fds-popover__content">
        <div class="fds-popover__hd">
          <div class="fds-level@m fds-level--justify-between">
            <span class="fds-popover__title">{{ POPOVER_HEADER }}</span>
            <button @click="hidePopover(POPOVER_ID)" class="" type="button">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="false" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="fds-popover__bd">
          <slot>Help text body content</slot>
        </div>
      </div>
    </div>
    <!-- Popover END -->
 </div>
</template>

<script>
import { computed } from 'vue';
import { usePopoverControls } from '@/_composables/usePopoverControls';
export default {
  props:{
    POPOVER_TYPE: String,
    POPOVER_CLASSES: String,
    POPOVER_ID: String,
    POPOVER_HEADER: String,
    ICON_SIZE: String,
  },
  setup(props){
    const { showPopover, hidePopover } = usePopoverControls();
    
    const iconSize = computed(()=>{ 
      return props.ICON_SIZE == '' ? 'fds-icon--size-1' : props.ICON_SIZE;
    });

    return{
      iconSize,
      showPopover,
      hidePopover
    }
  }
}
</script>>