<template>
  <header>
    <tophat
      AG_ABBR="USDA"
      AG_FULL="United States Department of Agriculture"
      AG_URL="//www.usda.gov"
      :AG_LOGO="baseUrl + 'img/usda-logo--white.svg'"
      SUB_AG_ABBR="FPAC"
      SUB_AG_FULL="Farm Production and Conservation"
      SUB_AG_URL="//fsa.usda.gov"
     >
     </tophat>
     
    <headerApp
      APP_ABBR_NAME="FDS"
      APP_FULL_NAME="FPAC Design System"
      PROFILE_NAME=""
      LOGOFF_URL="https://www.eauth.usda.gov/Logout/logoff.asp"
    >
    </headerApp>
    
    <globalNav
      :NAV_DATA="navigationData"
      EXTRA_CLASSES="fds-nav-global__list-item--multi-column"
      @emitSearch="submitSearch"
      :USE_SEARCH="USE_SEARCH"
    ></globalNav>

  </header>
</template>

<script>
import { onMounted, ref, computed, watch } from 'vue';

import { navigationService } from '@/Shared/_services/navigation.service';
import { useStore } from 'vuex';
import { useNavigation } from "@/_composables/useNavigation";

import tophat from '@/_components/tophat/tophat.vue';
import headerApp from '@/_components/header-app/header-app.vue';
import globalNav from '@/_components/global-nav/global-nav.vue';
//import modal from '@/_components/Modal.vue';

export default {
  components: {
    tophat,
    headerApp,
    globalNav
  },
  props: {
    USE_SEARCH: String
  },
  setup(props, {emit}){

    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    const navigationData = computed(() => store.getters["navigation/getNavigation"]);

    const submitSearch = ( obj ) => {
      emit('emitSearch',obj)
      //console.log('NAV SEARCH BASEHEADER', obj)
      goto('/search/' + obj.phrase)
    };

    onMounted(()=>{
      store.dispatch("navigation/setNavigation");
    });

    return {
      baseUrl,
      navigationData,
      submitSearch
    }
  }  
}

</script>