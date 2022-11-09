<template>
  <div :class="'fds-field '+ (hasError ? fieldErrorClass : '') +' '+ EXTRA_FIELD_CLASSES">
    <label class="fds-field__label" :for="ID" :id="ID +'_label'">
      {{ RANGE_LABEL }}
      <span v-if="REQUIRED=='true'" class="fds-field__label-desc">Required</span> 
      <span v-if="USE_POPOVER=='true'" class="fds-field__label-desc fds-m-l--xxs">
        <button @click="showPopover(POPOVER_ID)" class="fds-btn fds-btn--flat"
          data-behavior="toggle-popover"
          :data-target="POPOVER_ID">
          <svg v-if="POPOVER_TYPE=='help'" class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
          </svg>
          <svg v-if="POPOVER_TYPE=='info'" class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
          </svg>
        </button>
      </span>
    </label>
    <!-- Popover START -->
    <div v-if="USE_POPOVER" :class="'fds-popover '+ POPOVER_CLASSES" :id="POPOVER_ID" aria-hidden="true">
      
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
    <div class="fds-level">
      
      <spinbox
        :ID="ID+'-low'"
        :INPUT_VALUE="LOW_VALUE"
        :LABEL_TITLE="LOW_LABEL_TITLE"
        :HAS_ERROR="HAS_ERROR"
        ERROR_CLASS="fds-spinbox--error"
        INPUT_ERROR_CLASS="fds-input--error"
        :STEP="STEP"
        :USE_PREFIX="USE_PREFIX"
        :PREFIX="PREFIX"
        :USE_SUFFIX="USE_SUFFIX"
        :SUFFIX="SUFFIX"
        :USE_ICON="USE_ICON"
        :ICON_PATH="ICON_PATH"
        :ICON_SIZE_CLASS="ICON_SIZE_CLASS"
        @emitSpin="handleSpinboxLow"
        :ARIA_DESCRIBEDBY="ID+'-low'"
        ref="lowRangeRef"
        >
      </spinbox>      

      <div> - </div>
      
      <spinbox
        :ID="ID+'-high'"
        :INPUT_VALUE="HIGH_VALUE"
        :LABEL_TITLE="HIGH_LABEL_TITLE"
        :HAS_ERROR="HAS_ERROR"
        ERROR_CLASS="fds-spinbox--error"
        INPUT_ERROR_CLASS="fds-input--error"
        :STEP="STEP"
        :USE_PREFIX="USE_PREFIX"
        :PREFIX="PREFIX"
        :USE_SUFFIX="USE_SUFFIX"
        :SUFFIX="SUFFIX"
        :USE_ICON="USE_ICON"
        :ICON_PATH="ICON_PATH"
        :ICON_SIZE_CLASS="ICON_SIZE_CLASS"
        @emitSpin="handleSpinboxHigh"
        :ARIA_DESCRIBEDBY="ID+'-high'"
        ref="highRangeRef"
        >
      </spinbox>

    </div>
    <span v-if="HELP_MESSAGE" :id="ID + '__help'" class="fds-field__help">{{ HELP_MESSAGE }}</span>
    <span v-if="hasError" :id="ID + '__error-message'" class="fds-field__message" role="alert">{{ ERROR_MESSAGE }}</span>
  </div>  
</template>
<script>
import { defineAsyncComponent, ref, computed, onMounted } from 'vue';
import { useErrorState } from '@/_composables/useErrorState';
import { usePopoverControls } from '@/_composables/usePopoverControls';
import { useSpinboxControls } from '@/_composables/useSpinboxControls';
import { useRangeControls } from '@/_composables/useRangeControls';

const spinbox = defineAsyncComponent(() => import('@/_components/spinbox/spinbox.vue'));

export default {
  props: {
    ID: String,
    EXTRA_FIELD_CLASSES: String,
    REQUIRED: String,
    RANGE_LABEL: String,
    HIGH_VALUE: String,
    HIGH_LABEL_TITLE: String,
    LOW_VALUE: String,
    LOW_LABEL_TITLE: String,
    STEP: String,
    USE_PREFIX: String,
    PREFIX: String,
    USE_SUFFIX: String,
    SUFFIX: String,
    USE_ICON: String,
    ICON_PATH: String,
    ICON_SIZE_CLASS: String,
    FIELD_ERROR_CLASS: String,
    ARIA_REQUIRED: String,
    ARIA_DESCRIBEDBY: String,
    HELP_MESSAGE: String,
    ERROR_MESSAGE: String,
    HAS_ERROR: String,
    USE_POPOVER: String,
    POPOVER_TYPE: String,
    POPOVER_CLASSES: String,
    POPOVER_ID: String,
    POPOVER_HEADER: String
  },

  components: {
    spinbox
  },

  setup(props, {emit}){
    const fieldErrorClass = props.FIELD_ERROR_CLASS ? props.FIELD_ERROR_CLASS : ref('fds-field--error');
    const inputErrorClass = props.INPUT_ERROR_CLASS ? props.INPUT_ERROR_CLASS : ref('fds-input--error');


    const { showPopover, hidePopover } = usePopoverControls();
    
    const {
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage } = useErrorState();

    const {
      initRange,
      setSpinboxLow,
      setSpinboxHigh,
      getRangeValues } = useRangeControls();

    const lowRangeRef = ref(null);
    const highRangeRef = ref(null);
    
    const handleSpinboxLow = (_obj) => callSpinbox( setSpinboxLow, _obj);
    const handleSpinboxHigh = (_obj) => callSpinbox( setSpinboxHigh, _obj);

    const callSpinbox = (_callback, _obj) => {
      let range = _callback(
        _obj,
        document.getElementById( props.ID + '-low' ),
        document.getElementById( props.ID + '-high' ),
        props.STEP
      );
      let newObj = _obj;
      newObj.range = range;
      emit('emitRangeChange', newObj);
    }

    const hasErrorCaller = (_boo) => {
      lowRangeRef.value.setHasError(_boo);
      highRangeRef.value.setHasError(_boo);
    }

    onMounted(() => {
      if(props.HAS_ERROR == 'true') setHasError(true);
    })

    return {
      hasError,
      setHasError,
      lowRangeRef,
      highRangeRef,
      hasErrorCaller,
      handleSpinboxLow,
      handleSpinboxHigh,
      fieldErrorClass,
      inputErrorClass,
      showPopover,
      hidePopover
    }
  }
}
</script>