<template>
  <ul
      id="foundation-sub"
      class="fds-nav-rail-drawer__sub fds-list--unstyled"
      aria-label="Foundation Sub Navigation"
      aria-hidden="false"
  >
    <li>
      <nav-rail-drawer-link
        to="/foundation/color"
        label="Color"
      >
      </nav-rail-drawer-link>
    </li>
    <li>
      <nav-rail-drawer-link
        to="/foundation/typography"
        label="Typography"
      >
      </nav-rail-drawer-link>
    </li>
    <li>
      <nav-rail-drawer-link
        to="/foundation/spacing"
        label="Spacing"
      >
      </nav-rail-drawer-link>
    </li>
    <li>
      <nav-rail-drawer-link
        to="/foundation/shadows"
        label="Shadows"
      >
      </nav-rail-drawer-link>
    </li>
    <li>
      <nav-rail-drawer-link
        to="/foundation/icons"
        label="Icons"
      >
      </nav-rail-drawer-link>
    </li>
    <li>
      <nav-rail-drawer-link
        to="/foundation/logo"
        label="Logo"
      >
      </nav-rail-drawer-link>
    </li>
  </ul>
</template>

<script>
import NavRailDrawerLink from "@/_components/navigation/large-screen/nav-rail/nav-rail-drawer-link.vue";

export default {
  components: {
    NavRailDrawerLink
  },
  methods: {
    subIsActive(path) {
      return this.$route.path.startsWith(path)
    }
  }
}
</script>