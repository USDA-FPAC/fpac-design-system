<template>
  <div :class="'ds-nav-drawer fds-hide@l ' + (isMenuOpen ? 'ds-nav-drawer--open' : ' YYY ')">

    <button @click="toggleMenu()" type="button" class="fds-btn fds-btn--plain ds-btn--icon" title="Close Menu" aria-label="Close Menu">
      <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
      </svg>
    </button>

    <div class="ds-nav-drawer__header">
      <h3 v-if="!isMenuOpen">FPAC Design System</h3>
      <button v-if="isMenuOpen" type="button" class="fds-btn fds-btn--plain ds-btn--back" title="Back to Main Menu" aria-label="Back to Main Menu">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
        </svg>
        <span>Back to Main</span>
      </button>
    </div>

    <div class="ds-nav-drawer__content">
      <div :class="'ds-nav-drawer__main-menu' + (isMenuOpen ? ' ds-nav-drawer--translate-none' : ' ds-nav-drawer--translate-left')" aria-hidden="false">
        <ul aria-label="Primary Navigation">

          <li v-for="item in NAV_DATA.main" :key="item.uid" :data-control-id="item.uid" >
            <a :href="BASE_PATH + item.path" @click.prevent="navigateTo(item)" :class="'ds-nav-drawer__item ' + (selectedMenu==item.uid ? 'ds-nav-drawer__item--active' : '')">
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
              <span class="ds-nav-drawer__label">{{ item.label }} Drawer</span>
            </a>
          </li>
          
        </ul>
      </div>
      <div :class="'ds-nav-drawer__sub-menu' + (isMenuOpen ? ' ds-nav-drawer--translate-none' : ' ds-nav-drawer--translate-right')" aria-hidden="true">
        <ul aria-label="Sub Navigation" aria-labelledby="">
          <li>
            <!-- <a href="" class="ds-nav-drawer__item ds-nav-drawer__item--active"></a> -->
            <a href="" class="ds-nav-drawer__item">
              <span>Sub Menu Item Drawer</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <span>Sub Menu Item Drawer</span>
            </a>
          </li>
          <li>
            <a href="" class="ds-nav-drawer__item">
              <span>Sub Menu Item Drawer</span>
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
  setup(props, {emit}) {

    const { goto } = useNavigation();

    const menuOpen = computed(()=> {return props.IS_MENU_OPEN});
    const isMenuOpen = ref(null);

    const selectedNavigation = computed(()=> {return props.SELECTED_MENU});
    const selectedMenu = ref(null);

    const navigateTo = (_obj) => {
      if(_obj.hasChild == 'true') selectMenu(_obj.uid)
      else goto(_obj.path);
    }

    const toggleMenu = () => {
      emit("emitSetMenuOpen", !isMenuOpen)
    }

    const selectMenu = (_id) => {
      emit("emitSelectMenu", _id)
    }


    watch([menuOpen, selectedNavigation],([_isOpen, _selected]) => {
      isMenuOpen.value = _isOpen;
      selectedMenu.value = _selected;
    })

    return {
      navigateTo,
      isMenuOpen,
      toggleMenu,
      selectedMenu
    }
  }
}
</script>