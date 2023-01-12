<template>
  <ul
    id="guides-sub"
    class="fds-nav-rail-drawer__sub fds-list--unstyled"
    aria-label="Guides Sub Navigation"
    aria-hidden="false"
  >
    <li>
      <nav-rail-drawer-link
        to=""
        label="guides menu item"
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