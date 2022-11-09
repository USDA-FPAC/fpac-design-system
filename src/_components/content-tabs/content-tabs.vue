<template>
  <div>
    <div v-if="tabsData" class="fds-content-tabs fds-content-tabs--justified-equal">
      <ul class="fds-content-tabs__list">
        <li v-for="tab in tabsData" :key="tab.id" class="fds-content-tabs__item">
          <a :id="tab.id"
            @click.prevent="handleTabSelected(tab.id)"
            :class="'fds-content-tabs__label fds-content-tabs__label--large ' + setSelectedClass(tab.isSelected)"
            href="">
            <span class="fds-content-tabs__label-text">{{ tab.label }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="fds-m-t--l">
      <slot name="containers"></slot>
    </div>

  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useUtilities } from '@/_composables/useUtilities';

export default {

  props: {
    TABS_DATA: Array
  },

  setup(props, {emit}){

    const { getPropertyFromId, setPropertyFromProperty } = useUtilities();

    const tabsData = computed(()=> { 
      if(props.TABS_DATA) return props.TABS_DATA
      else return null
    });

    const handleTabSelected = (_id) => {
      tabsData.value.forEach( (o) => setPropertyFromProperty(o.id, 'id', 'isSelected', false, tabsData.value) );
      setPropertyFromProperty(_id, 'id', 'isSelected', true, tabsData.value);
      setVisibility();
      emit("emitTabSelection",{id: _id})
    }
    //const setIsSelectedContainer = (_id) => getPropertyFromId(_id, 'isSelected', tabsData.value);
    const setSelectedClass = (_boo) => { return _boo ? 'fds-content-tabs__label--active' : ''};

    const setVisibility = () => {
      tabsData.value.forEach( (o) => {
        if(o.isSelected) {
          document.getElementById(o.containerId).style.visibility = "initial";
          document.getElementById(o.containerId).style.display = "inline";
        } else { 
          document.getElementById(o.containerId).style.visibility = "hidden";
          document.getElementById(o.containerId).style.display = "none";
        }
      })
    }

    const initilizeTabs = () => { if(tabsData.value) setVisibility() };

    onMounted(()=>{
      initilizeTabs()
    })

    return {
      tabsData,
      handleTabSelected,
      setSelectedClass,
      //setIsSelectedContainer
    }
  }
}
</script>