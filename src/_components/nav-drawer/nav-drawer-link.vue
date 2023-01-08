<template>
  <a class="fds-nav-drawer__item fds-link--underline-none">
    <div
        class="fds-nav-drawer__link fds-p-b--xxs fds-m-b--s"
        :class="{ 'fds-level': icon, 'fds-p-l--xs': !icon }"
    >
      <div class="fds-nav-drawer__icon fds-level">
        <app-icon v-if="icon" :name="icon"> </app-icon>
      </div>
      <div class="fds-nav-drawer__label">
        {{ label }}
        <div class="fds-nav-drawer__underline"></div>
      </div>
    </div>
  </a>
</template>

<script>
import appIcon from "@/_components/app-icon/app-icon.vue";

export default {
  components: {
    appIcon
  },

  props: {
    icon: String,
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
//Need to figure out how to get these variables from fds-style

@function shade($color, $percent) {
  @return mix(#000, $color, $percent);
}
$color-gray-warm-dark: #494440;
$color-fds-tertiary: $color-gray-warm-dark;
$color-fds-tertiary-900: shade($color-fds-tertiary, 35%);
$color-green: #2e8540;
$color-fds-primary: shade($color-green, 25%);

.fds-nav-drawer {
  &__link {
    color: $color-fds-tertiary-900;
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
      background-color: $color-fds-primary;
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