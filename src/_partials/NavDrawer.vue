<template>
  <div class="ds-nav-drawer">
    <button type="button" class="fds-btn fds-btn--plain ds-btn--icon fds-hide@l" title="Close Menu" aria-label="Close Menu">
      <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
      </svg>
    </button>

    <div class="ds-nav-drawer__header fds-hide@l">
      <h3 v-if="!subMenuActive">FPAC Design System</h3>
      <button v-if="subMenuActive" type="button" class="fds-btn fds-btn--plain ds-btn--back" title="Back to Main Menu" aria-label="Back to Main Menu">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
        </svg>
        <span>Back to Main</span>
      </button>
    </div>

    <div class="ds-nav-drawer__content">
      <div :class="'ds-nav-drawer__main-menu' + [mainMenuActive ? ' ds-nav-drawer--translate-none' : ' ds-nav-drawer--translate-left']" aria-hidden="false">
        <ul aria-label="Primary Navigation">
          <li>
            <a href="" class="ds-nav-drawer__item ds-nav-drawer__item--active">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
              </svg>
              <span class="ds-nav-drawer__label">Home</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" />
              </svg>
              <span class="ds-nav-drawer__label">Foundation</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 15C7.1 15 8 15.9 8 17C8 18.1 7.1 19 6 19C4.9 19 4 18.1 4 17C4 15.9 4.9 15 6 15ZM6 13C3.8 13 2 14.8 2 17C2 19.2 3.8 21 6 21C8.2 21 10 19.2 10 17C10 14.8 8.2 13 6 13ZM12 5C13.1 5 14 5.9 14 7C14 8.1 13.1 9 12 9C10.9 9 10 8.1 10 7C10 5.9 10.9 5 12 5ZM12 3C9.8 3 8 4.8 8 7C8 9.2 9.8 11 12 11C14.2 11 16 9.2 16 7C16 4.8 14.2 3 12 3ZM18 15C19.1 15 20 15.9 20 17C20 18.1 19.1 19 18 19C16.9 19 16 18.1 16 17C16 15.9 16.9 15 18 15ZM18 13C15.8 13 14 14.8 14 17C14 19.2 15.8 21 18 21C20.2 21 22 19.2 22 17C22 14.8 20.2 13 18 13Z"/>
              </svg>
              <span class="ds-nav-drawer__label">Components</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M11 7H7V11H11V7Z" />
                <path d="M17 7H13V11H17V7Z" />
                <path d="M11 13H7V17H11V13Z" />
                <path d="M17 13H13V17H17V13Z" />
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
              </svg>
              <span class="ds-nav-drawer__label">Patterns</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 15.18V7C19 4.79 17.21 3 15 3C12.79 3 11 4.79 11 7V17C11 18.1 10.1 19 9 19C7.9 19 7 18.1 7 17V8.82C8.16 8.4 9 7.3 9 6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6C3 7.3 3.84 8.4 5 8.82V17C5 19.21 6.79 21 9 21C11.21 21 13 19.21 13 17V7C13 5.9 13.9 5 15 5C16.1 5 17 5.9 17 7V15.18C15.84 15.59 15 16.69 15 18C15 19.66 16.34 21 18 21C19.66 21 21 19.66 21 18C21 16.7 20.16 15.6 19 15.18ZM6 7C5.45 7 5 6.55 5 6C5 5.45 5.45 5 6 5C6.55 5 7 5.45 7 6C7 6.55 6.55 7 6 7ZM18 19C17.45 19 17 18.55 17 18C17 17.45 17.45 17 18 17C18.55 17 19 17.45 19 18C19 18.55 18.55 19 18 19Z" />
              </svg>
              <span class="ds-nav-drawer__label">Utilities</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13 10H18L21 7L18 4H13V2H11V4H4V10H11V12H6L3 15L6 18H11V22H13V18H20V12H13V10ZM6 6H17.17L18.17 7L17.17 8H6V6ZM18 16H6.83L5.83 15L6.83 14H18V16Z" />
              </svg>
              <span class="ds-nav-drawer__label">Guides</span>
            </a>
          </li>
        </ul>
      </div>
      <div :class="'ds-nav-drawer__sub-menu' + [subMenuActive ? ' ds-nav-drawer--translate-none' : ' ds-nav-drawer--translate-right']" aria-hidden="true">
        <ul aria-label="Secondary Navigation" aria-labelledby="">
          <li>
            <a href="" class="ds-nav-drawer__item ds-nav-drawer__item--active">
              <span>Sub Menu Item</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <span>Sub Menu Item</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <span>Sub Menu Item</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const mainMenuActive = ref(true);
    const subMenuActive = ref(false);

    return {
      mainMenuActive,
      subMenuActive
    }
  }
}
</script>
