<template>
  <div class="ds-nav-rail fds-show@l">
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
