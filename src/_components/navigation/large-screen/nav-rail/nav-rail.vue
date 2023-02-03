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
</template>

<script>
import NavRailLink from "@/_components/navigation/large-screen/nav-rail/nav-rail-link.vue";
import NavRailMain from "@/_components/navigation/large-screen/nav-rail/nav-rail-main.vue";

export default {
  components: {
    NavRailMain,
    NavRailLink
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
@use "../../../../_style/core/_fds.variables.scss" as fds;

.fds-nav-rail {
  background-color: fds.$color-white;
  border-right: 1px solid fds.$color-fds-tertiary-200;
  height: 100%;
  width: 9rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  padding-top: 3rem;
}

.fds-nav-rail-drawer {
  background-color: fds.$color-white;
  border-right: 1px solid fds.$color-fds-tertiary-200;
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
