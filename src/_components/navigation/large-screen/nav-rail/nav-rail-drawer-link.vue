<template>
  <a class="fds-link--underline-none">
    <span class="fds-nav-rail-drawer__link fds-m--m fds-p-b--xxs fds-m-b--s">
      {{ label }}
    </span>
  </a>
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
