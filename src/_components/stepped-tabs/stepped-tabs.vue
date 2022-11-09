<template>
  <nav aria-label="Breadcrumbs">
    <div :id="ID" class="fds-stepped-tabs">
      <div class="fds-stepped-tabs__bd">
        <ol class="fds-stepped-tabs__list">
          <li v-for="tab in tabsData" :key="tab.id" class="fds-stepped-tabs__item">
            <!-- if enabled -->
            <a v-if="tab.isEnabled" @click.prevent="setSelected(tab.id)"
              :class="'fds-stepped-tabs__label ' + getTabStatusClass(tab.id)"
              href="#">
              <span class="fds-stepped-tabs__text">
              <svg v-if="tab.useIcon=='true'"
                class="fds-icon fds-icon--size-2"
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24">
                <path :d="tab.iconPath"/>
              </svg> {{ tab.label }}</span>
            </a>
            <!-- if disabled -->
            <span v-if="!tab.isEnabled" :class="'fds-stepped-tabs__label ' + getTabStatusClass(tab.id)">
              <span class="fds-stepped-tabs__text">
              <svg v-if="tab.useIcon=='true'"
                class="fds-icon fds-icon--size-2"
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24">
                <path :d="tab.iconPath"/>
              </svg> {{ tab.label }}</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed, watch, onMounted} from 'vue';
import { useStore } from "vuex";
import { useNavigation } from '@/_composables/useNavigation.js';
import { useUtilities } from '@/_composables/useUtilities.js';

export default {
  props: {
    ID: String,
    TABS_DATA: Array,
  },

  setup(props, {emit}) {
    const store = useStore();
    const { goto } = useNavigation();
    const { getPropertyFromId, setPropertyFromId } = useUtilities();

    const steppedTabsData = computed(() => {
      let data = props.TABS_DATA;
      if( data ) return data;
      else return null; 
    });
    const tabsData = ref(null);
    
    const tabStatesClasses = ref({
      complete: 'fds-stepped-tabs__label--complete',
      active: 'fds-stepped-tabs__label--active',
      incomplete: 'fds-stepped-tabs__label--incomplete'
    })
    const getTabStatusClass = (_id) => tabStatesClasses.value[ getPropertyFromId(_id, 'status', tabsData.value) ];
    
    const setSelected = (_id) => {
      //let path = getPropertyFromId(_id, 'path', tabsData.value);
      emit('emitSelectedTab', _id );
      //if(isEnabled) goto( path );
    }

    const setSteppedTabsData = (_data) => {
      console.log('component Stepped Tabs _data',_data)
      tabsData.value = _data;
    }

    watch(steppedTabsData, (value)=>{
      setSteppedTabsData(value);
    });

    onMounted(()=>{
      if(props.TABS_DATA) setSteppedTabsData(props.TABS_DATA);
    })

    return {
      setSelected,
      getTabStatusClass,
      tabsData
    };
  }
}
</script>
