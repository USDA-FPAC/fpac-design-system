<template>
  <div class="ds-layout--main">
    <div class="ds-nav-rail-layout">
      <div :class="'ds-nav-rail-layout__nav ' + isMenuOpen ? 'ds-nav-rail-drawer--open' : ''">
        <nav-rail :IS_MENU_OPEN="isMenuOpen" :CURR_MENU="currentMenu"></nav-rail>
        <nav-drawer :IS_MENU_OPEN="isMenuOpen" :CURR_MENU="currentMenu"></nav-drawer>
      </div>
      <div :class="'ds-nav-rail-layout__body  ' + isMenuOpen ? 'ds-nav-rail-drawer--open' : ''">

        <router-view></router-view>
      
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

const navDrawer = defineAsyncComponent(() => import("@/_partials/navigation/NavDrawer.vue"));
const navRail = defineAsyncComponent(() => import("@/_partials/navigation/NavRail.vue"));

export default {
  components: {
    navRail,
    navDrawer
  },

  setup(props) {

    const store = useStore();

    const isNavigationOpen = computed(() => {
      let data = store.getters["navigation/getIsMenuOpen"];
      if(data) return data;
      else return null;
    });
    const isMenuOpen = ref(false);

    const currentMenuSelected = computed(() => {
      let data = store.getters["navigation/getCurrentMenuSelected"];
      if(data) return data;
      else return null;
    });
    const currentMenu = ref({curr: 'home', prev: ''});

    watch([isNavigationOpen, currentMenuSelected], (isOpen, currMenu) => {
      isMenuOpen.value = isOpen;
      currentMenu.value = currMenu;
    })
    
    return {
      isMenuOpen,
      currentMenu
    }
  }
}
</script>