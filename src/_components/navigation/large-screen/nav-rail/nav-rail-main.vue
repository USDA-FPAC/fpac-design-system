<template>
  <ul
      class="fds-list--unstyled"
      aria-label="Main Navigation"
  >
    <li>
      <nav-rail-link
        to="/"
        icon="fds-dashboard"
        label="Home"
        @click="setSub('home')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="/foundation"
        icon="fds-book"
        label="Foundation"
        id=""
        :class="{'router-link-active': subIsActive('/foundation')}"
        :aria-expanded="!!subIsActive('/foundation')"
        aria-controls="foundation-sub"
        @click="setSub('foundation')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="/components"
        icon="fds-workspaces"
        label="Components"
        id=""
        :class="{'router-link-active': subIsActive('/components')}"
        :aria-expanded="!!subIsActive('/components')"
        aria-controls=""
        @click="setSub('components')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="/patterns"
        icon="fds-view_comfy_alt"
        label="Patterns"
        id=""
        :class="{'router-link-active': subIsActive('/patterns')}"
        :aria-expanded="!!subIsActive('/patterns')"
        aria-controls=""
        @click="setSub('')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="utilities"
        icon="fds-route"
        label="Utilities"
        id=""
        :class="{'router-link-active': subIsActive('/utilities')}"
        :aria-expanded="!!subIsActive('/utilities')"
        aria-controls=""
        @click="setSub('')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="guides"
        icon="fds-signpost"
        label="Guides"
        id=""
        :class="{'router-link-active': subIsActive('/guides')}"
        :aria-expanded="!!subIsActive('/guides')"
        aria-controls=""
        @click="setSub('')"
      >
      </nav-rail-link>
    </li>
  </ul>
</template>

<script>
import navRailLink from "@/_components/navigation/large-screen/nav-rail/nav-rail-link.vue";

export default {
  components: {
    navRailLink
  },
  methods: {
    setSub(subMenu) {
      this.$emit(subMenu);
    },
    subIsActive(path) {
      return this.$route.path.startsWith(path)
    },
  }
}
</script>