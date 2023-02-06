<template>
  <a class="ds-nav-rail__item">
    <span class="ds-nav-rail__link">
      <span class="ds-nav-rail__icon-container">
        <span class="ds-nav-rail__background"></span>
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
        </svg>
      </span>
      <span class="ds-nav-rail__label">
        {{ label }}
      </span>
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
      ...props,
    }
  }
}
</script>
