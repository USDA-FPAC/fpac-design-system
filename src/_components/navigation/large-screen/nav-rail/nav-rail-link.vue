<template>
  <RouterLink class="fds-nav-rail__item fds-link--underline-none" to="">
    <div class="fds-nav-rail__link fds-p-b--m">
      <div class="fds-nav-rail__icon-container">
        <div class="fds-nav-rail__background"></div>
        <app-icon
            v-if="icon"
            :name="icon"
            size="2"
            class="fds-nav-rail__icon fds-m-t--xxs"
        >
        </app-icon>
      </div>
      <div class="fds-nav-rail__label fds-text-size--1">
        {{ label }}
      </div>
    </div>
  </RouterLink>
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
      ...props,
    }
  }
}
</script>

<style lang="scss" scoped>
//Need to figure out how to get these variables from fds-style

@function shade($color, $percent) {
  @return mix(#000, $color, $percent);
}

@function tint($color, $percent) {
  @return mix(#fff, $color, $percent);
}

$color-gray-warm-dark: #494440;
$color-fds-tertiary: $color-gray-warm-dark;
$color-fds-tertiary-900: shade($color-fds-tertiary, 35%);
$color-green: #2e8540;
$color-fds-primary: shade($color-green, 25%);
$color-fds-primary-100: tint($color-fds-primary, 85%);
$color-fds-primary-200: tint($color-fds-primary, 65%);
$size-base: 0.4rem;


.fds-nav-rail {
  &__link {
    color: $color-fds-tertiary-900;
    text-align: center;

    &:hover {
      .fds-nav-rail__background {
        background-color: $color-fds-primary-100;
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
    margin-top: -($size-base);
  }

  .router-link-active {
    .fds-nav-rail__background {
      background-color: $color-fds-primary-200;
    }
  }

  //[aria-expanded=true] {
  //  .fds-nav-rail__background {
  //    background-color: $color-fds-primary-200;
  //  }
  //}
}
</style>
