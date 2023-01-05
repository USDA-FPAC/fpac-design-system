<template>
  <div class="fds-nav-drawer">

    <div v-if="subMenuActive">
      <button @click="backToMain()">Back to Main</button>
    </div>

    <div class="fds-nav-drawer__wrapper">
      <div
          :class="[mainMenuActive ? 'fds-translateX' : 'fds-translateX--left']"
          class="fds-nav-drawer__main"
      >
        <button id="foundation-btn" @click="navigateTo('foundation-btn', '/foundation')" class="fds-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="foundation">
          <span class="" id="foundation-sub">Foundation</span>
        </button>

        <button id="components-btn" @click="navigateTo('components-btn', '/components')" class="fds-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="components">
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

<script>
import {useMenuSystem} from "@/_composables/useMenuSystem";
import {useNavigation} from "@/_composables/useNavigation";
import {ref} from "vue";

export default {
  setup() {

    const {
      openMenu,
      closeMenu,
      loopItems,
    } = useMenuSystem();

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
      basePath,
      baseUrl,
      mainMenuActive,
      subMenuActive
    }
  },

  methods: {}
}
</script>