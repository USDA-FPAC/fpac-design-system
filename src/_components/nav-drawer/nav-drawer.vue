<template>
  <div id="fds-nav-drawer" class="fds-nav-drawer">
    <div class="fds-nav-drawer__menu-toggle">
      <app-button
          variant="plain"
          icon="fds-menu-open"
          class="fds-p--s fds-bg:hover--primary-100"
          @click=""
      >
      </app-button>
    </div>
    <div class="fds-nav-drawer__header">
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
    </div>
    <div class="fds-nav-drawer__content fds-p--s">
      <div
          :class="[mainMenuActive ? 'fds-translateX' : 'fds-translateX--left']"
          class="fds-nav-drawer__main-container"
      >
        <ul
            aria-label="Primary Navigation"
            id="primary-navigation"
            class="fds-list--unstyled"
        >
          <li>
            <nav-drawer-link
                :href="basePath"
                to="/"
                icon="fds-dashboard"
                label="Home"
                class="fds-nav-drawer__label--active"
                @click.prevent="goto('/')"
            >
            </nav-drawer-link>
          </li>
          <li>
            <nav-drawer-link
              :href="basePath + '/foundation'"
              to="/foundation"
              icon="fds-book"
              label="Foundation"
              id="foundation"
              class="fds-nav-global__link--has-sub-menu"
              aria-expanded="false"
              aria-controls="foundation-sub-menu"
              @click.prevent="navigateTo('foundation', '/foundation')"
            >
            </nav-drawer-link>
          </li>
          <li>
            <nav-drawer-link
                :href="basePath + '/components'"
                to="/components"
                icon="fds-workspaces"
                label="Components"
                id="components"
                class="fds-nav-global__link--has-sub-menu"
                aria-expanded="false"
                aria-controls="components-sub-menu"
                @click.prevent="navigateTo('components', '/components')"
            >
            </nav-drawer-link>
          </li>
        </ul>
      </div>

      <div
          :class="[subMenuActive ? 'fds-translateX' : 'fds-translateX--right']"
          class="fds-nav-drawer__sub-container"
      >
        <div class="fds-nav-drawer__sub-menu" id="foundation-sub-menu" aria-hidden="true">
          <ul class="fds-list--unstyled" aria-labelledby="foundation">
            <li>
              <nav-drawer-link
                  :href="basePath + '/foundation/color'"
                  to="/foundation/color"
                  label="Color"
                  @click.prevent="goto('/foundation/color')"
              >
              </nav-drawer-link>
            </li>
            <li>
              <nav-drawer-link
                  :href="basePath + '/foundation/typography'"
                  to="/foundation/typography"
                  label="Typography"
                  @click.prevent="goto('/foundation/typography')"
              >
              </nav-drawer-link>
            </li>
          </ul>
        </div>

        <div class="fds-nav-drawer__sub-menu" id="components-sub-menu" aria-hidden="true">
          <ul class="fds-list--unstyled" aria-labelledby="components">
            <li>
              <nav-drawer-link
                  :href="basePath + '/components/buttons'"
                  to="/components/buttons"
                  label="Buttons"
                  @click.prevent="goto('/components/buttons')"
              >
              </nav-drawer-link>
            </li>
            <li>
              <nav-drawer-link
                  :href="basePath + '/components/checkbox'"
                  to="/components/checkbox"
                  label="Checkbox"
                  @click.prevent="goto('/components/checkbox')"
              >
              </nav-drawer-link>
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
import { onMounted, ref } from "vue";
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

    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );

    function toggleMenu(_id) {
      let theItem = document.getElementById(_id);
      let theMenu = theItem.nextSibling;

      let expanded = theItem.getAttribute('aria-expanded');
      loopItems('closeAllMenus');

      if (expanded ==="true") closeMenu( theItem, theMenu );
      else openMenu( theItem, theMenu );
    }

    function navigateTo(_id, _path) {
      toggleMenu(_id)
      goto(_path);

      this.mainMenuActive = !this.mainMenuActive;
      this.subMenuActive = !this.subMenuActive;
    }

    function backToMain() {
      loopItems('closeAllMenus');

      this.mainMenuActive = !this.mainMenuActive;
      this.subMenuActive = !this.subMenuActive;
    }

    onMounted(() => {
      const navDrawer = document.getElementById("fds-nav-drawer");
      const navItems = navDrawer.getElementsByClassName("fds-nav-drawer__item");
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function() {
          const current = document.getElementsByClassName("fds-nav-drawer__label--active");
          current[0].className = current[0].className.replace(" fds-nav-drawer__label--active", "");
          this.className += " fds-nav-drawer__label--active";
        });
      }
    });

    return {
      toggleMenu,
      backToMain,
      openMenu,
      goto,
      navigateTo,
      basePath,
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
  position: fixed;
  z-index: 4;
  top: 0;
  //left: -25rem;
  left: 0;
  transition: 0.3s;

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
    left: 8rem;
  }
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
