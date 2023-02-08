<template>
  <div class="ds-nav-drawer ds-nav-drawer--open">
    <div class="ds-nav-drawer__main">
      <ul aria-label="Primary Navigation">
        <li>
          <a href="" class="ds-nav-drawer__item ds-nav-drawer__item--active">
            <span class="ds-nav-drawer__icon">
              <span class="ds-nav-drawer__icon-background"></span>
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
              </svg>
            </span>
            <span class="ds-nav-drawer__label">Home</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="ds-nav-drawer__sub">
      <ul aria-label="Sub Navigation" aria-labelledby="">
        <li>
          <a href="" class="ds-nav-drawer__item ds-nav-drawer__item--active">
            <span>Sub Menu Item</span>
          </a>
        </li>
      </ul>
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
