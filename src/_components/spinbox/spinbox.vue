<template>
  <div :class="'fds-spinbox ' + (hasError ? ERROR_CLASS : '')">
    <div class="fds-spinbox__number">

      <span class="fds-affix fds-affix--fill">
        <label v-if="usePrefix" :for="+'-prefix-label'" class="fds-affix__prefix" aria-hidden="true" :title="LABEL_TITLE">
          <svg v-if="USE_ICON=='true'" :class="'fds-icon '+ ICON_SIZE_CLASS" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path :d="ICON_PATH"></path>
          </svg>
          <span v-if="usePrefix">{{ PREFIX }}</span>
        </label>
        

        <input
          @blur="handleBlur"
          @keydown="handleKeydown"
          :class="'fds-input fds-field__item fds-spinbox__input ' + (usePrefix || useSuffix ? 'fds-affix__item' : '') + (hasError ? ' '+ inputErrorClass : '')"
          type="number"
          :value="INPUT_VALUE"
          :step="STEP"
          :id="ID"
          :aria-describedby="ARIA_DESCRIBEDBY"
          :name="ID"
        >

        <!-- <input
          @blur="handleBlur"
          @keydown="handleKeydown"
          :class="'fds-input fds-field__item fds-spinbox__input ' + (useSuffix  ? 'fds-affix__item' : '') + (hasError ? inputErrorClass : '')"
          type="number"
          :value="INPUT_VALUE"
          :step="STEP"
          :id="ID"
          :aria-describedby="ARIA_DESCRIBEDBY"
          :name="ID"
        > -->

        
        <label v-if="useSuffix" :for="ID +'-suffix-label'" class="fds-affix__suffix" aria-hidden="true" :title="LABEL_TITLE">
          <svg v-if="USE_ICON=='true'" :class="'fds-icon '+ ICON_SIZE_CLASS" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path :d="ICON_PATH"></path>
          </svg>
          <span v-if="useSuffix">{{ SUFFIX }}</span>
        </label>
      </span>

    </div>
    <div class="fds-spinbox__actions" aria-hidden="true">
      <button @click="spin('up')" tabindex="-1" class="fds-spinbox__btn fds-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button @click="spin('down')" tabindex="-1" class="fds-spinbox__btn fds-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useErrorState } from '@/_composables/useErrorState';
import { useSpinboxControls } from '@/_composables/useSpinboxControls';

export default {
  props: {
    ID: String,
    INPUT_VALUE: String,
    LABEL_TITLE: String,
    ERROR_CLASS: String,
    INPUT_ERROR_CLASS: String,
    STEP: String,
    USE_PREFIX: String,
    PREFIX: String,
    USE_SUFFIX: String,
    SUFFIX: String,
    USE_ICON: String,
    ICON_PATH: String,
    ICON_SIZE_CLASS: String,
    ARIA_DESCRIBEDBY: String
  },
  setup(props, {emit}) {
    const inputErrorClass = props.INPUT_ERROR_CLASS ? props.INPUT_ERROR_CLASS : ref('fds-input--error');
    const usePrefix = ref(false);
    const useSuffix = ref(false);

    const { hasError, setHasError } = useErrorState();

    const prevValue = ref(null);
    const { stepUp, stepDown } = useSpinboxControls( props.ID, props.STEP);
    
    const callParent = (_dir) => {
      emit('emitSpin', {
        id: props.ID,
        dir: _dir,
        val: parseInt( document.getElementById(props.ID).value )
      });
    };

    const spin = (_dir) => {
      if(_dir == 'up') stepUp();
      if(_dir == 'down') stepDown();
      callParent(_dir);
      prevValue.value = parseInt( document.getElementById(props.ID).value );
    };

    const handleKeydown = (_e) => {
      if(_e.keyCode === 38 && _e.key == 'ArrowUp'){
        _e.preventDefault();
        stepUp();
        callParent('up');
      }
      if(_e.keyCode === 40 && _e.key == 'ArrowDown'){
        _e.preventDefault();
        stepDown();
        callParent('down');
      }
    };

    const handleBlur = () => {
      let val = parseInt( document.getElementById(props.ID).value );
      if( prevValue.value > val) callParent('up');
      else callParent('down');
      prevValue.value = val;
    }

    onMounted(()=>{
      usePrefix.value = props.USE_PREFIX == 'true' ? true : false;
      useSuffix.value = props.USE_SUFFIX == 'true' ? true : false;
    })
    
    return {
      hasError,
      setHasError,
      spin,
      handleKeydown,
      handleBlur,
      hasError,
      inputErrorClass,
      usePrefix,
      useSuffix
    }
    
  }
}
</script>