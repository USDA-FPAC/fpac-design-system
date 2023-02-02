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

<style lang="scss" scoped>
@use "../../../../_style/core/_fds.variables.scss" as fds;

.fds-nav-drawer {
  &__link {
    color: fds.$color-fds-tertiary-900;
    cursor: pointer;
  }

  &__label {
    width: fit-content;
    display: block;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.3rem;
      border-radius: 0.3rem;
      background-color: fds.$color-fds-primary;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }

    &--active &::before {
      transform: none;
    }
  }
}
</style>
