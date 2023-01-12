<template>
  <div class="fds-growl-container" id="alertSystem">
    <!--<span v-for="alert in alertsData" :key="alert.id">-->
      <growl v-for="alert in alertsData" :key="alert.id"
        :ID="alert.id"
        :EXTRA_CLASSES="alert.extraClasses"
        :TITLE="alert.title"
        :USE_ICON="alert.useIcon"
        :ICON_PATH="alert.iconPath"
        :ICON_SIZE_CLASS="alert.iconSizeClass"
        :USE_MESSAGE="alert.useMessage"
        :USE_CENTERED="alert.useCentered"
        :MESSAGE="alert.message"
        @emitGrowlClose="handleGrowlClose">

        <template v-slot:growlContainer>
          <div v-if="alert.growlBody">
            {{ alert.growlBody }}
          </div>
        </template>
      </growl>

    <!--</span>-->
  </div>
</template>
<script>
import { defineAsyncComponent, ref, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { useGrowlControls } from '@/_composables/useGrowlControls';
const growl = defineAsyncComponent(() => import("@/_components/growl/growl.vue"));


export default {
  components: {
    growl
  },
  setup(props){
    const store = useStore();
    const {
      showGrowl,
      hideGrowl,
      hideWhiteout
    } = useGrowlControls();

    const alerts = computed( ()=> {
      let data = store.getters['alerts/getAlerts'];
      if(data) return data;
      else return null; 
    });
    const alertsData = ref([]);

    const handleGrowlClose = (_obj) => {
      if(_obj.isModal) hideWhiteout();
      store.dispatch('alerts/removeAlert', { id: _obj.id })
    }

    const updateAlerts = (_alerts) => {

      // if the store array is greater then the local array, an alert was added
      if(_alerts.length > alertsData.value.length){
      
        // find the added alert
        let alertsToAdd = _alerts.filter( ({ id: id1 }) => !alertsData.value.some(({ id: id2 }) => id2 === id1));

        // update alerts data
        setAlertsData(_alerts);

        alertsToAdd.forEach( (o) => { 
          setTimeout( () => { 
            showGrowl(o.id)
          }, 10 );
        });
      // if the store array is less than the local array, an alert was removed
      } else if( alertsData.value.length > _alerts.length ){

        // find the removed alert
        let alertsToRemove = alertsData.value.filter( ({ id: id1 }) => !_alerts.some(({ id: id2 }) => id2 === id1));

        // animate the alert OUT
        alertsToRemove.forEach( (o) => { 
          setTimeout( () => {
            hideGrowl( o.id, () => { setAlertsData(_alerts) } )
          }, 10 );
        });

      }
    }

    const setAlertsData = (_alerts) =>{
      alertsData.value = _alerts;
    }

    const getHTML = (_html) => {
      let parser = new DOMParser();
      return parser.parseFromString(_html, "text/html");
    }

    watch( alerts, (value) => { 
      let reversedAlerts = [...value].reverse();
      updateAlerts(reversedAlerts);
    });

    return {
      alertsData,
      handleGrowlClose,
      getHTML
    }
  }
}

</script>