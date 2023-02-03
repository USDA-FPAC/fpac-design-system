<template>
  <RouterLink class="fds-link--underline-none" to="">
    <div class="fds-nav-rail-drawer__link fds-m--m fds-p-b--xxs fds-m-b--s">
      {{ label }}
      <div class="fds-nav-rail-drawer__underline"></div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    label: String
  },

  setup(props) {
    return {
      ...props
    }
  }
}
</script>
