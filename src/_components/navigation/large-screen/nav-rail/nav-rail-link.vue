<template>
  <a class="fds-nav-rail__item fds-link--underline-none">
    <span class="fds-nav-rail__link fds-p-b--m">
      <span class="fds-nav-rail__icon-container">
        <span class="fds-nav-rail__background"></span>
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
        </svg>
      </span>
      <span class="fds-nav-rail__label fds-text-size--1">
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

<style lang="scss" scoped>
@use "../../../../_style/core/_fds.variables.scss" as fds;

.fds-nav-rail {
  &__link {
    color: fds.$color-fds-tertiary-900;
    text-align: center;

    &:hover {
      .fds-nav-rail__background {
        background-color: fds.$color-fds-primary-100;
      }
    }
  }

  &__icon-container {
    height: 3.6rem;
    width: 3.6rem;
    margin: auto;
  }

  &__background {
    height: 3.6rem;
    width: 3.6rem;
    position: absolute;
    border-radius: 50%;
  }

  &__icon {
    position: relative;
  }

  &__label {
    margin-top: -(fds.$size-base);
  }

  .router-link-active {
    .fds-nav-rail__background {
      background-color: fds.$color-fds-primary-200;
    }
  }
}
</style>
