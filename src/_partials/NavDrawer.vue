<template>
  <nav>
   <div :class="navDrawerOpen ? 'ds-nav-drawer ds-nav-drawer--open' : 'ds-nav-drawer'">
      <div class="ds-nav-drawer__bd">
        <button type="button" class="fds-btn fds-btn--plain ds-btn--icon fds-hide@l" title="Close Menu" aria-label="Close Menu">
          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
          </svg>
        </button>
        <div class="ds-nav-drawer__header fds-hide@l">
          <h3 v-if="!subMenuOpen">FPAC Design System</h3>
          <button v-if="subMenuOpen" type="button" class="fds-btn fds-btn--plain ds-btn--back" title="Back to Main Menu" aria-label="Back to Main Menu" @click="backToMain()">
            <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
            </svg>
            <span>Back to Main</span>
          </button>
        </div>
        <div class="ds-nav-drawer__content">
          <ul class="ds-nav-drawer__list" aria-label="Primary Navigation">
            <li class="ds-nav-drawer__list-item">
              <div class="ds-nav-drawer__item" :class="subMenuOpen ? 'ds-nav-drawer__item--hidden' : 'ds-nav-drawer__item'">
                <a class="ds-nav-drawer__link ds-nav-drawer__link--active">
                  <span class="ds-nav-drawer__icon">
                    <span class="ds-nav-drawer__icon-background"></span>
                    <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
                    </svg>
                  </span>
                  <span class="ds-nav-drawer__label">Home</span>
                </a>
              </div>
            </li>
            <li class="ds-nav-drawer__list-item">
              <div class="ds-nav-drawer__item" :class="subMenuOpen ? 'ds-nav-drawer__item--hidden' : 'ds-nav-drawer__item'" @click="openSub()">
                <a class="ds-nav-drawer__link ds-nav-drawer__link--has-sub-menu" aria-expanded="false" aria-controls="">
                  <span class="ds-nav-drawer__icon">
                    <span class="ds-nav-drawer__icon-background"></span>
                    <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" />
                    </svg>
                  </span>
                  <span class="ds-nav-drawer__label">Foundation</span>
                </a>
              </div>
              <div :class="subMenuOpen ? 'ds-nav-drawer__sub-menu ds-nav-drawer__sub-menu--open' : 'ds-nav-drawer__sub-menu'" id="" aria-hidden="true">
                <div class="ds-nav-drawer__sub-menu-bd">
                  <ul class="ds-nav-drawer__sub-menu-list" aria-labelledby="">
                    <li class="ds-nav-drawer__sub-menu-item">
                      <a class="ds-nav-drawer__sub-menu-link ds-nav-drawer__sub-menu-link--active">
                        <span>Sub Menu Item</span>
                      </a>
                    </li>
                    <li class="ds-nav-drawer__sub-menu-item">
                      <a class="ds-nav-drawer__sub-menu-link">
                        <span>Sub Menu Item</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const navDrawerOpen = ref(true);
    const subMenuOpen = ref(false);

    return {
      navDrawerOpen,
      subMenuOpen
    }
  },
  methods: {
    openSub() {
      this.subMenuOpen =! this.subMenuOpen;
      document.getElementById('temporary-id-1').classList.toggle('ds-nav-drawer-layout--pushed');
      document.getElementById('temporary-id-2').classList.toggle('ds-nav-drawer-layout--pushed');
    },

    backToMain() {
      this.subMenuOpen = false;
    }
  }
}
</script>
