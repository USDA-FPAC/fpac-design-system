<template>
  <div class="fds-nav-rail fds-show@l"></div>
</template>

<style lang="scss" scoped>
//Need to figure out how to get these variables from fds-style

@function tint($color, $percent) {
  @return mix(#fff, $color, $percent);
}
$color-gray-warm-dark: #494440 !default;
$color-fds-tertiary: $color-gray-warm-dark;
$color-fds-tertiary-200: tint($color-fds-tertiary, 80%);
$color-white: #ffffff !default;

.fds-nav-rail {
  background-color: $color-white;
  border-right: 1px solid $color-fds-tertiary-200;
  height: 100%;
  width: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>