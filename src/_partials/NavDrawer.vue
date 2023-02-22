<template>
  <nav>

    <div class="ds-nav-bar fds-hide@l">
      <div class="ds-nav-bar__bd">
        
        <div class="ds-nav-bar__btn">
          <button @click="openMenu(true)"
            type="button"
            class="fds-btn fds-btn--plain fds-p--xs fds-radius--full fds-bg--white fds-color--tertiary fds-link:hover--primary fds-bg:hover--primary-100"
            title="Open Menu"
            aria-label="Open Menu"
            aria-controls="primary-navigation"
            :aria-expanded="isMenuOpen ? 'true' : 'false'">
            <svg class="fds-icon fds-icon--size-2" :aria-hidden="isMenuOpen ? 'false' : 'true'" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
            </svg>
          </button>
        </div>
      
      </div>
    </div>

    <div :class="'ds-nav-drawer' + (isMenuOpen ? ' ds-nav-drawer--open' : '')">
      <div class="ds-nav-drawer__bd">
        
        <div class="ds-nav-drawer__btn">
          <button @click="openMenu(false)"
            type="button"
            class="fds-btn fds-btn--plain fds-p--xs fds-radius--full fds-bg--white fds-color--tertiary fds-link:hover--primary fds-bg:hover--primary-100 fds-hide@l"
            title="Close Menu"
            aria-label="Close Menu"
            aria-controls="primary-navigation"
            :aria-expanded="isMenuOpen ? 'true' : 'false'">
            <svg class="fds-icon fds-icon--size-2" :aria-hidden="isMenuOpen ? 'false' : 'true'" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
            </svg>
          </button>
        </div>


        <div class="ds-nav-drawer__content">
          <ul class="ds-nav-drawer__list" id="primary-navigation" :aria-hidden="isMenuOpen ? 'false' : 'true'" aria-label="Primary Navigation">

            <li v-for="item in NAV_DATA.main" :key="item.uid" :data-control-id="item.uid" class="ds-nav-drawer__list-item">
              <div :class="'ds-nav-drawer__item' + (isMenuOpen ? '' : ' ds-nav-drawer__item--hidden')">
                
                <!-- How to use this with dynamic subnav and 508 Compliance? -->
                <a :href="BASE_PATH + item.path" @click.prevent="setMenu(item)" :class="'ds-nav-drawer__link ' + (selectedMenu==item.uid ? 'ds-nav-drawer__link--active' : '')">
                  <span class="ds-nav-drawer__icon">
                    <span class="ds-nav-drawer__icon-background"></span>
                    <svg v-for="icon in [item.icon]" :key="icon.path"
                        :class="icon.class"
                        :aria-hidden="isMenuOpen ? 'false' : 'true'"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                      >
                        <path :d="icon.path" />
                      </svg>
                  </span>
                  <span class="ds-nav-drawer__label">{{ item.label }}</span>
                </a>

              </div>
            </li>
            
          </ul>
        </div>

      </div>
    </div>

  </nav>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useNavigation } from "@/_composables/useNavigation";
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    BASE_PATH: String,
    NAV_DATA: Object,
    SELECTED_MENU: String,
    IS_MENU_OPEN: Boolean
  },
  setup(props, {emit}) {

    const { goto } = useNavigation();

    const menuOpen = computed(()=> {return props.IS_MENU_OPEN});
    const isMenuOpen = ref(null);

    const selectedNavigation = computed(()=> {return props.SELECTED_MENU});
    const selectedMenu = ref(null);

    const setMenu = (_obj) => {
      navigateTo(_obj.path);
      selectMenu(_obj.uid)
    }

    const navigateTo = (_path) => { 
      openMenu(false);
      goto(_path)
    };

    const openMenu = (_boo) => {
      emit("emitSetMenuOpen", _boo)
    }

    const selectMenu = (_id) => {
      emit("emitSelectMenu", _id)
    }

    const isCurrentMenu = (_id) => {
      if(_id == selectedMenu.value) return true;
      else return false;
    }

    watch([menuOpen, selectedNavigation],([_isOpen, _selected]) => {
      isMenuOpen.value = _isOpen;
      selectedMenu.value = _selected;
    })

    return {
      navigateTo,
      setMenu,
      isMenuOpen,
      openMenu,
      selectedMenu,
      isCurrentMenu
    }

  }
}
</script>