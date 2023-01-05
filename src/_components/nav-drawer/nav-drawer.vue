<template>
  <div class="fds-nav-drawer">
    <div class="fds-nav-drawer__menu-toggle">
      <app-button
          variant="plain"
          icon="fds-menu-open"
          class="fds-p--s fds-bg:hover--primary-100"
          @click=""
      >
      </app-button>
    </div>

    <div
        v-if="!subMenuActive"
        class="fds-text-size--4 fds-p-l--s fds-p-r--s fds-p-t--m fds-p-b--m"
    >
      FPAC Design System
    </div>

    <app-button
        v-if="subMenuActive"
        variant="plain"
        icon="fds-arrow-back"
        label="Back to Main"
        class="fds-p-l--s fds-p-r--s fds-p-t--m fds-p-b--m fds-bg:hover--primary-100"
        @click="backToMain()"
        >
    </app-button>

    <div class="fds-nav-drawer__wrapper fds-p--s">
      <div
          :class="[mainMenuActive ? 'fds-translateX' : 'fds-translateX--left']"
          class="fds-nav-drawer__main"
      >

<!--        Originally built using nav-drawer-link component, but toggleMenu() doesn't work here to get submenu?-->
        <nav>
          <ul
              aria-label="Main Navigation"
              aria-hidden="false"
              id="main-navigation"
              class="fds-list--unstyled"
          >
            <li>
              <nav-drawer-link
                  to="/"
                  icon="fds-dashboard"
              >
                Home
              </nav-drawer-link>
            </li>
            <li>
              <nav-drawer-link
                to="/foundation"
                icon="fds-book"
                id="foundation-btn"
                class="fds-nav-global__link--has-sub-menu"
                aria-expanded="false"
                aria-controls="foundation"
                @click="toggleMenu('foundation-btn')"
              >
                Foundation
              </nav-drawer-link>
            </li>
            <li>
              <nav-drawer-link
                  to="/components"
                  icon="fds-workspaces"
                  id="components-btn"
                  class="fds-nav-global__link--has-sub-menu"
                  aria-expanded="false"
                  aria-controls="components"
                  @click="toggleMenu('components-btn')"
              >
                Components
              </nav-drawer-link>
            </li>
          </ul>
        </nav>

<!--        Using buttons works but no active link class?-->
        <button
            @click="navigateTo('foundation-btn', '/foundation')"
            id="foundation-btn"
            class="fds-btn--plain fds-nav-global__link--has-sub-menu"
            type="button"
            aria-expanded="false"
            aria-controls="foundation"
        >
          <span class="" id="foundation-sub">Foundation</span>
        </button>

        <button
            @click="navigateTo('components-btn', '/components')"
            id="components-btn"
            class="fds-btn--plain fds-nav-global__link--has-sub-menu"
            type="button"
            aria-expanded="false"
            aria-controls="components"
        >
          <span class="" id="components-sub">Components</span>
        </button>
      </div>

      <div
          :class="[subMenuActive ? 'fds-translateX' : 'fds-translateX--right']"
          class="fds-nav-drawer__sub"
      >
        <div class="sub-menu" id="foundation" aria-hidden="true">
          <ul class="" aria-labelledby="foundation-sub">
            <li class="">
              <a href="" @click.prevent="goto('/foundation/color')" class="">Color</a>
            </li>
            <li class="">
              <a href="" @click.prevent="goto('/foundation/typography')" class="">Typography</a>
            </li>
          </ul>
        </div>

        <div class="sub-menu" id="components" aria-hidden="true">
          <ul class="" aria-labelledby="components-sub">
            <li class="">
              <a href="" @click.prevent="goto('/components/buttons')" class="">Buttons</a>
            </li>
            <li class="">
              <a href="" @click.prevent="goto('/components/checkbox')" class="">Checkbox</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMenuSystem } from "@/_composables/useMenuSystem";
import { useNavigation } from "@/_composables/useNavigation";
import { ref } from "vue";
import appIcon from "@/_components/app-icon/app-icon.vue";
import appButton from "@/_components/app-button/app-button.vue";
import navDrawerLink from "@/_components/nav-drawer/nav-drawer-link.vue";

export default {
  components: { appIcon, appButton, navDrawerLink },

  setup() {
    const { openMenu, closeMenu, loopItems } = useMenuSystem();
    const { goto } = useNavigation();
    const mainMenuActive = ref(true);
    const subMenuActive = ref(false);

    function toggleMenu(_id) {
      let theItem = document.getElementById(_id);
      let theMenu = theItem.nextSibling;

      let expanded = theItem.getAttribute('aria-expanded');
      loopItems('closeAllMenus');

      if (expanded ==="true") closeMenu( theItem, theMenu );
      else openMenu( theItem, theMenu );
    }

    function navigateTo (_id, _path) {
      toggleMenu(_id)
      goto(_path);

      this.mainMenuActive = !this.mainMenuActive;
      this.subMenuActive = !this.subMenuActive;
    }

    function backToMain () {
      loopItems('closeAllMenus');

      this.mainMenuActive = !this.mainMenuActive;
      this.subMenuActive = !this.subMenuActive;
    }

    return {
      toggleMenu,
      backToMain,
      openMenu,
      goto,
      navigateTo,
      mainMenuActive,
      subMenuActive
    }
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

.fds-nav-drawer {
  background-color: $color-white;
  border-right: 1px solid $color-fds-tertiary-200;
  height: 100vh;
  width: 25rem;
  position: absolute;
  z-index: 4;
  top: 0;
  //left: -25rem;
  left: 0;
  transition: 0.3s;

  &__wrapper {
    display: flex;
    position: relative;
    overflow-x: hidden;
    height: 100%;
  }

  &__main,
  &__sub {
    width: 100%;
    position: absolute;
  }

  &--open {
    left: 0;
  }
}

.sub-menu[aria-hidden=true] {
  display: none;
}

.sub-menu[aria-hidden=false] {
  display: block;
}

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
</style>
