<template>
  <ul
      class="fds-list--unstyled"
      aria-label="Main Navigation"
  >
    <li>
      <nav-rail-link
        to="/"
        label="Home"
        @click="setSub('home')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="/foundation"
        label="Foundation"
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
        label="Components"
        :class="{'router-link-active': subIsActive('/components')}"
        :aria-expanded="!!subIsActive('/components')"
        aria-controls="components-sub"
        @click="setSub('components')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="/patterns"
        label="Patterns"
        :class="{'router-link-active': subIsActive('/patterns')}"
        :aria-expanded="!!subIsActive('/patterns')"
        aria-controls="patterns-sub"
        @click="setSub('patterns')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="utilities"
        label="Utilities"
        :class="{'router-link-active': subIsActive('/utilities')}"
        :aria-expanded="!!subIsActive('/utilities')"
        aria-controls="utilities-sub"
        @click="setSub('utilities')"
      >
      </nav-rail-link>
    </li>
    <li>
      <nav-rail-link
        to="guides"
        label="Guides"
        :class="{'router-link-active': subIsActive('/guides')}"
        :aria-expanded="!!subIsActive('/guides')"
        aria-controls="guides0sub"
        @click="setSub('guides')"
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
