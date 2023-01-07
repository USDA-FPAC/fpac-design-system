<template>
  <div class="fds-nav-bar fds-hide@l">
    <app-button
        variant="plain"
        icon="fds-menu"
        class="fds-p--s fds-bg:hover--primary-100"
    >
    </app-button>
  </div>
</template>

<script>
import appButton from "@/_components/app-button/app-button.vue";

export default {
  components: {
    appButton
  }
}
</script>

<style lang="scss" scoped>
//Need to figure out how to get these variables from fds-style

@function tint($color, $percent) {
  @return mix(#fff, $color, $percent);
}
$color-gray-warm-dark: #494440 !default;
$color-fds-tertiary: $color-gray-warm-dark;
$color-fds-tertiary-200: tint($color-fds-tertiary, 80%);
$color-white: #ffffff !default;

.fds-nav-bar {
  background-color: $color-white;
  border-bottom: 1px solid $color-fds-tertiary-200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
</style>