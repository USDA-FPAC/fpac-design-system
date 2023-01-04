<template>
  <svg
      :class="'fds-icon fds-icon--size-' + size"
      aria-hidden="true"
      focusable="false"
      role="img"
  >
    <use :href="'/img/icons/icons.svg#' + name"></use>
  </svg>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "2",
      validator(value) {
        return ["0", "1", "2", "3", "4", "5", "6"].includes(value);
      },
    },
  },
  setup(props) {
    return {
      ...props,
      validator(value) {
        return undefined;
      }
    }
  }
}
</script>