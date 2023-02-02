<template>
  <div id="fds-nav-drawer" class="fds-nav-drawer">
    <div class="fds-nav-drawer__toggle fds-hide@l">
      <button type="button" class="fds-btn fds-btn--plain ds-btn--icon" title="Close Menu" aria-label="Close Menu">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
        </svg>
      </button>
    </div>
    <div class="fds-nav-drawer__header fds-hide@l">
      <div
          v-if="!subMenuActive"
          class="fds-text-size--4 fds-p-l--s fds-p-r--s"
      >
        FPAC Design System
      </div>

      <button v-if="subMenuActive" type="button" class="fds-btn fds-btn--plain ds-btn--back" title="Back to Main Menu" aria-label="Back to Main Menu">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
        </svg>
        <span>Back to Main</span>
      </button>
    </div>
    <div class="fds-nav-drawer__content fds-p--s">
      <div
          :class="[mainMenuActive ? 'fds-translateX' : 'fds-translateX--left']"
          class="fds-nav-drawer__main-container fds-hide@l"
      >
        <ul
            aria-label="Primary Navigation"
            id="nav-drawer-navigation"
            class="fds-list--unstyled"
        >
          <li>
            <nav-drawer-link
                :href="basePath"
                to="/"
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
                label="Components"
                id="components"
                class="fds-nav-global__link--has-sub-menu"
                aria-expanded="false"
                aria-controls="components-sub-menu"
                @click.prevent="navigateTo('components', '/components')"
            >
            </nav-drawer-link>
          </li>
          <li>
            <nav-drawer-link
                :href="basePath + '/patterns'"
                to="/patterns"
                label="Patterns"
                id="patterns"
                class="fds-nav-global__link--has-sub-menu"
                aria-expanded="false"
                aria-controls="patterns-sub-menu"
                @click.prevent="navigateTo('patterns', '/patterns')"
            >
            </nav-drawer-link>
          </li>
          <li>
            <nav-drawer-link
                :href="basePath + '/utilities'"
                to="/utilities"
                label="Utilities"
                id="utilities"
                class="fds-nav-global__link--has-sub-menu"
                aria-expanded="false"
                aria-controls="utilities-sub-menu"
                @click.prevent="navigateTo('utilities', '/utilities')"
            >
            </nav-drawer-link>
          </li>
          <li>
            <nav-drawer-link
                :href="basePath + '/guides'"
                to="/guides"
                label="Guides"
                id="guides"
                class="fds-nav-global__link--has-sub-menu"
                aria-expanded="false"
                aria-controls="guides-sub-menu"
                @click.prevent="navigateTo('guides', '/guides')"
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
            <li>
              <nav-drawer-link
                  :href="basePath + '/foundation/spacing'"
                  to="/foundation/spacing"
                  label="Spacing"
                  @click.prevent="goto('/foundation/spacing')"
              >
              </nav-drawer-link>
            </li>
            <li>
              <nav-drawer-link
                  :href="basePath + '/foundation/shadows'"
                  to="/foundation/shadows"
                  label="Shadows"
                  @click.prevent="goto('/foundation/shadows')"
              >
              </nav-drawer-link>
            </li>
            <li>
              <nav-drawer-link
                  :href="basePath + '/foundation/icons'"
                  to="/foundation/icons"
                  label="Icons"
                  @click.prevent="goto('/foundation/icons')"
              >
              </nav-drawer-link>
            </li>
            <li>
              <nav-drawer-link
                  :href="basePath + '/foundation/logo'"
                  to="/foundation/logo"
                  label="Logo"
                  @click.prevent="goto('/foundation/logo')"
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
        <div class="fds-nav-drawer__sub-menu" id="patterns-sub-menu" aria-hidden="true">
          <ul class="fds-list--unstyled" aria-labelledby="patterns">
          </ul>
        </div>
        <div class="fds-nav-drawer__sub-menu" id="utilities-sub-menu" aria-hidden="true">
          <ul class="fds-list--unstyled" aria-labelledby="utilities">
          </ul>
        </div>
        <div class="fds-nav-drawer__sub-menu" id="guides-sub-menu" aria-hidden="true">
          <ul class="fds-list--unstyled" aria-labelledby="guides">
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
import navDrawerLink from "@/_components/navigation/small-screen/nav-drawer/nav-drawer-link.vue";

export default {
  components: { navDrawerLink },

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
      openMenu,
      closeMenu,
      loopItems,
      toggleMenu,
      backToMain,
      goto,
      navigateTo,
      basePath,
      mainMenuActive,
      subMenuActive
    }
  },
  methods: {
    toggleNavDrawer() {
      const navDrawer = document.getElementById("fds-nav-drawer");
      navDrawer.classList.toggle("fds-nav-drawer--open");
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../../../../_style/core/_fds.variables.scss" as fds;

.fds-nav-drawer {
  background-color: fds.$color-white;
  border-right: 1px solid fds.$color-fds-tertiary-200;
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
