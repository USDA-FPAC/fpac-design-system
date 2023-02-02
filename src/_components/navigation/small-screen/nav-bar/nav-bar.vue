<template>
  <div class="ds-nav-bar fds-hide@l">
    <button type="button" class="fds-btn fds-btn--plain ds-btn--icon" title="Open Menu" aria-label="Open Menu">
      <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
      </svg>
    </button>
  </div>
</template>

<script>

export default {
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
@use "../../../../_style/core/_fds.variables.scss" as fds;

.ds-nav-bar {
  background-color: fds.$color-white;
  border-bottom: 1px solid fds.$color-fds-tertiary-200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
</style>
