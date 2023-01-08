<template>
  <div class="fds-nav-rail fds-show@l">
<!--    TODO: Remove toggleNavDrawer() button once navRailLinks are working-->
    <div class="fds-text-align--center fds-p-t--s fds-p-b--s">
      <app-button
          variant="plain"
          icon="fds-menu"
          class="fds-p--s fds-bg:hover--primary-100"
          @click="toggleNavDrawer()"
      >
      </app-button>
    </div>
    <nav-rail-link
        href=""
        to=""
        icon="fds-dashboard"
        label="Home"
        class=""
        @click.prevent=""
    >
    </nav-rail-link>
    <nav-rail-link
        href=""
        to=""
        icon="fds-book"
        label="Foundation"
        id=""
        class=""
        aria-expanded=""
        aria-controls=""
        @click.prevent=""
    >
    </nav-rail-link>
    <nav-rail-link
        href=""
        to=""
        icon="fds-workspaces"
        label="Components"
        id=""
        class=""
        aria-expanded=""
        aria-controls=""
        @click.prevent=""
    >
    </nav-rail-link>
    <nav-rail-link
        href=""
        to=""
        icon="fds-view_comfy_alt"
        label="Patterns"
        id=""
        class=""
        aria-expanded=""
        aria-controls=""
        @click.prevent=""
    >
    </nav-rail-link>
    <nav-rail-link
        href=""
        to=""
        icon="fds-route"
        label="Utilities"
        id=""
        class=""
        aria-expanded=""
        aria-controls=""
        @click.prevent=""
    >
    </nav-rail-link>
    <nav-rail-link
        href=""
        to=""
        icon="fds-signpost"
        label="Guides"
        id=""
        class=""
        aria-expanded=""
        aria-controls=""
        @click.prevent=""
    >
    </nav-rail-link>
  </div>
</template>

<script>
import appButton from "@/_components/app-button/app-button.vue";
import navRailLink from "@/_components/nav-rail/nav-rail-link.vue";

export default {
  components: {
    appButton,
    navRailLink
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
  width: 9rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>