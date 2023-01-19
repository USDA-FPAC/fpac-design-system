<template>
  <div id="fds-nav-drawer" class="fds-nav-drawer">
    <div class="fds-nav-drawer__toggle fds-hide@l">
      <app-button
          variant="plain"
          icon="fds-menu-open"
          class="fds-p--s fds-bg:hover--primary-100"
          @click="toggleNavDrawer()"
      >
      </app-button>
    </div>
    <div class="fds-nav-drawer__header fds-hide@l">
      <div
          v-if="!subMenuActive"
          class="fds-text-size--4 fds-p-l--s fds-p-r--s"
      >
        FPAC Design System
      </div>

      <app-button
          v-if="subMenuActive"
          variant="plain"
          icon="fds-arrow-back"
          label="Back to Main"
          class="fds-p-l--s fds-p-r--s"
          @click="backToMain()"
      >
      </app-button>
    </div>



    <div class="fds-nav-drawer__content fds-p--s">
      <div
          :class="[mainMenuActive ? 'fds-translateX' : 'fds-translateX--left']"
          class="fds-nav-drawer__main-container fds-hide@l"
      >
        <ul aria-label="Primary Navigation" id="nav-drawer-navigation" class="fds-list--unstyled">


          <li>
            <a href="" class="fds-nav-drawer__item fds-link--underline-none fds-nav-drawer__label--active">
              <span class="fds-nav-drawer__link fds-level fds-p-b--xxs fds-m-b--s">
                <span class="fds-nav-drawer__icon fds-level">
                  <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
                  </svg>
                </span>
                <span class="fds-nav-drawer__label">
                  Home
                  <span class="fds-nav-drawer__underline"></span>
                </span>
              </span>
            </a>
          </li>



        </ul>
      </div>

      <div
          :class="[subMenuActive ? 'fds-translateX' : 'fds-translateX--right']"
          class="fds-nav-drawer__sub-container"
      >
        <div class="fds-nav-drawer__sub-menu" id="foundation-sub-menu" aria-hidden="true">
          <ul class="fds-list--unstyled" aria-labelledby="foundation">

          </ul>
        </div>

      </div>
    </div>
  </div>
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
.fds-nav-drawer {
  background-color: $color-white;
  border-right: 1px solid $color-fds-tertiary-200;
  height: 100vh;
  width: 25rem;
  position: fixed;
  z-index: 4;
  top: 0;
  left: -25rem;
  transition: 0.3s;
  &__header {
    height: 7.5rem;
    display: flex;
    align-items: center;
  }
  &__content {
    display: flex;
    position: relative;
    overflow-x: hidden;
    height: 100%;
  }
  &__main-container,
  &__sub-container {
    width: 100%;
    position: absolute;
  }
  &__sub-menu[aria-hidden=true] {
    display: none;
  }
  &__sub-menu[aria-hidden=false] {
    display: block;
  }
  &--open {
    left: 0;
  }
  @media screen and (min-width: 864px) {
    &__sub-container {
      position: static;
    }
    &--open {
      left: 9rem;
    }
  }
}
@media screen and (max-width: 864px) {
  .fds-translateX {
    transform: translateX(0);
    transition: transform 0.3s;
    &--left {
      transform: translateX(-100%);
      transition: transform 0.3s;
    }
    &--right {
      transform: translateX(100%);
      transition: transform 0.3s;
    }
  }
}
</style>