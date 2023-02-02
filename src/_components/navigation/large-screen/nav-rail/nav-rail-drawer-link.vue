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

<style lang="scss" scoped>
@use "../../../../_style/core/_fds.variables.scss" as fds;

.fds-nav-rail-drawer {
  &__link {
    color: fds.$color-fds-tertiary-900;
    cursor: pointer;
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

    .router-link-active &::before {
      transform: none;
    }
  }
}
</style>
