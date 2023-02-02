<template>
  <div class="fds-nav-rail fds-show@l">
    <nav-rail-main
      @home="resetSub('')"
      @foundation="viewSub('foundation')"
      @components="viewSub('components')"
      @patterns="viewSub('patterns')"
      @utilities="viewSub('utilities')"
      @guides="viewSub('guides')"
    >
    </nav-rail-main>
  </div>
  <div class="fds-nav-rail-drawer" ref="sub">
    <foundation-sub v-if="loadedSubMenu === 'foundation'"></foundation-sub>
    <components-sub v-if="loadedSubMenu === 'components'"></components-sub>
    <patterns-sub v-if="loadedSubMenu === 'patterns'"></patterns-sub>
    <utilities-sub v-if="loadedSubMenu === 'utilities'"></utilities-sub>
    <guides-sub v-if="loadedSubMenu === 'guides'"></guides-sub>
  </div>
</template>

<script>
import { ref } from "vue";
import NavRailLink from "@/_components/navigation/large-screen/nav-rail/nav-rail-link.vue";
import NavRailMain from "@/_components/navigation/large-screen/nav-rail/nav-rail-main.vue";
import ComponentsSub from "@/_components/navigation/large-screen/sub-menus/components-sub.vue";
import FoundationSub from "@/_components/navigation/large-screen/sub-menus/foundation-sub.vue";
import PatternsSub from "@/_components/navigation/large-screen/sub-menus/patterns-sub.vue";
import UtilitiesSub from "@/_components/navigation/large-screen/sub-menus/utilities-sub.vue";
import GuidesSub from "@/_components/navigation/large-screen/sub-menus/guides-sub.vue";

export default {
  components: {
    GuidesSub,
    UtilitiesSub,
    PatternsSub,
    FoundationSub,
    ComponentsSub,
    NavRailMain,
    NavRailLink
  },
  setup() {
    const loadedSubMenu = ref('');

    return {
      loadedSubMenu
    }
  },
  methods: {
    openDrawer() {
      const drawer = this.$refs.sub;
      const mainContent = document.getElementById("app-layout__main");
      drawer.classList.add('fds-nav-rail-drawer--open');
      mainContent.classList.add("app-layout__main--pushed");
    },
    closeDrawer() {
      const drawer = this.$refs.sub;
      const mainContent = document.getElementById("app-layout__main");
      drawer.classList.remove('fds-nav-rail-drawer--open');
      mainContent.classList.remove("app-layout__main--pushed");
    },
    viewSub(subMenu){
      this.loadedSubMenu = subMenu;
      this.openDrawer();
    },
    resetSub(subMenu){
      this.loadedSubMenu = subMenu;
      this.closeDrawer();
    }
  }
}
</script>

<style lang="scss" scoped>
//Need to figure out how to get these variables from fds-style

@function tint($color, $percent) {
  @return mix(#fff, $color, $percent);
}
$color-gray-warm-dark: #494440 !default;
$color-fds-tertiary: $color-gray-warm-dark;
$color-fds-tertiary-200: tint($color-fds-tertiary, 80%);
$color-white: #ffffff !default;

.fds-nav-rail {
  background-color: $color-white;
  border-right: 1px solid $color-fds-tertiary-200;
  height: 100%;
  width: 9rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  padding-top: 3rem;
}

.fds-nav-rail-drawer {
  background-color: $color-white;
  border-right: 1px solid $color-fds-tertiary-200;
  height: 100vh;
  width: 25rem;
  position: fixed;
  z-index: 4;
  top: 0;
  left: -25rem;
  transition: 0.3s;

  &--open {
    left: 9rem;
  }
}
</style>
