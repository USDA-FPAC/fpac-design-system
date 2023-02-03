<template>
  <a class="fds-nav-drawer__item fds-link--underline-none">
    <div class="fds-nav-drawer__link fds-p-b--xxs fds-m-b--s">
      <div class="fds-nav-drawer__icon fds-level">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
        </svg>
      </div>
      <div class="fds-nav-drawer__label">
        {{ label }}
        <div class="fds-nav-drawer__underline"></div>
      </div>
    </div>
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
