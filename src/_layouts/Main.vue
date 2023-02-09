<template>
  <div class="ds-layout--main">
    <div class="ds-nav-rail-layout">
      <div :class="'ds-nav-rail-layout__nav ' + (isMenuOpen ? 'ds-nav-rail-drawer--open ' : '')">
        <nav-rail
          :BASE_PATH="basePath"
          :NAV_DATA="navigationData"
          :IS_MENU_OPEN="isMenuOpen"
          :SELECTED_MENU="selectedMenu"
          @emitSetMenuOpen="setMenuOpen"
          @emitSelectMenu="selectMenu">
        </nav-rail>
        <nav-drawer
          :BASE_PATH="basePath"
          :NAV_DATA="navigationData"
          :IS_MENU_OPEN="isMenuOpen"
          :SELECTED_MENU="selectedMenu"
          @emitSetMenuOpen="setMenuOpen"
          @emitSelectMenu="selectMenu">
        </nav-drawer>
      </div>
      <div :class="'ds-nav-rail-layout__body ' + (isMenuOpen ? 'ds-nav-rail-drawer--open ' : '')">
        
        <router-view></router-view>
      
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

const NavDrawer = defineAsyncComponent(() => import("@/_partials/navigation/NavDrawer.vue"));
const NavRail = defineAsyncComponent(() => import("@/_partials/navigation/NavRail.vue"));

export default {
  components: {
    NavRail,
    NavDrawer
  },

  setup(props) {

    const store = useStore();

    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );

    const navigationData = computed(() => store.getters["navigation/getNavigation"]);

    const isNavigationOpen = computed(() => {
      let data = store.getters["navigation/getIsMenuOpen"];
      if(data) return data;
      else return null;
    });
    const isMenuOpen = ref();

    const selectedNavigationMenu = computed(() => {
      let data = store.getters["navigation/getSelectedMenu"];
      if(data) return data;
      else return null;
    });
    const selectedMenu = ref();

    const selectMenu = (_id) => {
      store.dispatch("navigation/setSelectedMenu", _id);
      setMenuOpen(true);
    };

    const setMenuOpen = (_val) => {
      store.dispatch("navigation/setMenuOpen", _val);
    }

    watch([isNavigationOpen, selectedNavigationMenu],([_isOpen, _selected]) => {
      isMenuOpen.value = _isOpen;
      selectedMenu.value = _selected;
    })

    onMounted(()=>{
      store.dispatch("navigation/setNavigation");
      store.dispatch("navigation/setMenuOpen",false);
    });
    
    return {
      basePath,
      isMenuOpen,
      navigationData,
      selectedMenu,
      selectMenu,
      setMenuOpen
    }
  }
}
</script>