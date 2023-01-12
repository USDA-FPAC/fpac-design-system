<template>
  <ul
      id="patterns-sub"
      class="fds-nav-rail-drawer__sub fds-list--unstyled"
      aria-label="Patterns Sub Navigation"
      aria-hidden="false"
  >
    <li>
      <nav-rail-drawer-link
        to=""
        label="patterns menu item"
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