<template>
  <div class="fds-nav-rail fds-show@l">
<!--    TODO: Remove toggleNavDrawer() button once navRailLinks are complete-->
    <app-button
        variant="plain"
        icon="fds-menu"
        class="fds-p--s fds-bg:hover--primary-100"
        @click="toggleNavDrawer()"
    >
    </app-button>
  </div>
</template>

<script>
import appButton from "@/_components/app-button/app-button.vue";

export default {
  components: {
    appButton
  },
  methods: {
    toggleNavDrawer() {
      const navDrawer = document.getElementById("fds-nav-drawer");
      const mainContent = document.getElementById("app-layout__main");
      navDrawer.classList.toggle("fds-nav-drawer--open");
      mainContent.classList.toggle("app-layout__main--pushed");
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
  width: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>