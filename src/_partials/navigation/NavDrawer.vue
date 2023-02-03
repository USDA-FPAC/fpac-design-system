<template>
  <div :class="'ds-nav-drawer fds-hide@l ' + (IS_MENU_OPEN ? 'ds-nav-drawer--open' : ' closed')">
    <button type="button" class="fds-btn fds-btn--plain ds-btn--icon" title="Close Menu" aria-label="Close Menu">
      <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
      </svg>
    </button>

    <div class="ds-nav-drawer__header">
      <h3 v-if="!IS_MENU_OPEN">FPAC Design System</h3>
      <button v-if="IS_MENU_OPEN" type="button" class="fds-btn fds-btn--plain ds-btn--back" title="Back to Main Menu" aria-label="Back to Main Menu">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
        </svg>
        <span>Back to Main</span>
      </button>
    </div>

    <div class="ds-nav-drawer__content">
      <div :class="'ds-nav-drawer__main-menu' + (IS_MENU_OPEN ? ' ds-nav-drawer--translate-none' : ' ds-nav-drawer--translate-left')" aria-hidden="false">
        <ul aria-label="Primary Navigation">

          <li v-for="item in NAV_DATA.main" :key="item.uid" :data-control-id="item.uid" >
            <a :href="BASE_PATH + item.path" @click.prevent="navigateTo(item.uid+'-BTN', item.path)" class="ds-nav-drawer__item ds-nav-drawer__item--active">
              <svg v-for="icon in [item.icon]" :key="icon.path"
                :class="icon.class"
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
              >
                <path :d="icon.path" />
              </svg>
              <span class="ds-nav-drawer__label">{{ item.label }}</span>
            </a>
          </li>
          
        </ul>
      </div>
      <div :class="'ds-nav-drawer__sub-menu' + (IS_MENU_OPEN ? ' ds-nav-drawer--translate-none' : ' ds-nav-drawer--translate-right')" aria-hidden="true">
        <ul aria-label="Sub Navigation" aria-labelledby="">
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
import { ref, computed, watch } from "vue";
import { useNavigation } from "@/_composables/useNavigation";

export default {
  props: {
    BASE_PATH: String,
    NAV_DATA: Object,
    IS_MENU_OPEN: Boolean
  },
  setup(props) {

    const { goto } = useNavigation();

    const navigateTo = (_id, _path) => {
      //toggleMenu(_id)
      goto(_path);
    }

    return {
      navigateTo
    }
  }
}
</script>