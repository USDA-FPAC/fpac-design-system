<template>
  <button
      class="fds-btn"
      :class="[
      { ['fds-btn--' + variant]: variant },
      { ['fds-btn--' + size]: size },
    ]"
      type="button"
  >
    <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
    </svg>

    {{ label }}
  </button>
</template>

<script>

export default {
  props: {
    variant: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "flat", "plain"].includes(
            value
        );
      },
    },
    label: String,
    size: {
      type: String,
      validator(value) {
        return ["fill", "small", "large"].includes(value);
      },
    },
  }
}
</script>
