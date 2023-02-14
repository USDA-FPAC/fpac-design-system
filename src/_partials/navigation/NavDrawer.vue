<template>
  <nav>

    <div class="ds-nav-drawer" :class="{'ds-nav-drawer--open': navDrawerOpen}">
      <div class="ds-nav-drawer__bd">
        <button type="button" class="fds-btn fds-btn--plain ds-btn--icon fds-hide@l" title="Close Menu" aria-label="Close Menu">
          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" />
          </svg>
        </button>
        <div class="ds-nav-drawer__header fds-hide@l">
          <h3 v-if="!subMenuOpen">FPAC Design System</h3>
          <button v-if="subMenuOpen" type="button" class="fds-btn fds-btn--plain ds-btn--back" title="Back to Main Menu" aria-label="Back to Main Menu">
            <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
            </svg>
            <span>Back to Main</span>
          </button>
        </div>

        <div class="ds-nav-drawer__content">
          <ul class="ds-nav-drawer__list" aria-label="Primary Navigation">

            <li v-for="item in NAV_DATA.main" :key="item.uid" :data-control-id="item.uid" class="ds-nav-drawer__list-item">
              <div class="ds-nav-drawer__item" :class="{'ds-nav-drawer__item--hidden': subMenuOpen}">
                
                <!-- How to use this with dynamic subnav and 508 Compliance? -->
                <a class="ds-nav-drawer__link ds-nav-drawer__link--active">
                  <span class="ds-nav-drawer__icon">
                    <span class="ds-nav-drawer__icon-background"></span>
                    <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
                    </svg>
                  </span>
                  <span class="ds-nav-drawer__label">Home</span>
                </a>
                <!--  -->

                
                <a :href="BASE_PATH + item.path" @click.prevent="setMenu(item)" :class="'ds-nav-drawer__item ' + (selectedMenu==item.uid ? 'ds-nav-drawer__active' : '')">
                  <span class="ds-nav-drawer__icon-container">
                    <span class="ds-nav-drawer__background"></span>
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
                    </span>
                  <span class="ds-nav-drawer__label">{{ item.label }}</span>
                </a>

              </div>

              <!-- Has Children & Has Headers -->
              <div v-if="item.hasChild=='true' && item.hasHeaders=='true'" :key="item.uid" :class="'ds-nav-drawer-drawer fds-show@l ' + (isMenuOpen && isCurrentMenu(item.uid) ? 'ds-nav-drawer-drawer--open' : '')" aria-hidden="true">
                <div v-for="child in item.children" :key="child.uid">
                  <h3>{{ child.header }}</h3>
                  <ul aria-label="Sub Navigation" aria-labelledby="">
                    <li v-for="gp in child.group" :key="gp.uid">
                      <!-- <a href="" class="ds-nav-drawer-drawer__item ds-nav-drawer-drawer__item--active"></a> -->
                      <a :href="BASE_PATH + gp.path" @click.prevent="navigateTo(gp.path)" class="ds-nav-drawer-drawer__item">
                        <span>{{ gp.label }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Has Children -->
              <div v-else-if="item.hasChild=='true' && item.hasHeaders!='true'" :key="item.uid + new Date()" :class="'ds-nav-drawer-drawer fds-show@l ' + (isMenuOpen && isCurrentMenu(item.uid) ? 'ds-nav-drawer-drawer--open' : '')" aria-hidden="true">
                <div v-for="child in item.children" :key="child.uid">
                  <ul aria-label="Sub Navigation" aria-labelledby="">
                    <li>
                      <a :href="BASE_PATH + child.path" @click.prevent="navigateTo(child.path)" class="ds-nav-drawer-drawer__item">
                        <span>{{ child.label }}</span>
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
import { ref, computed, watch } from "vue";
import { useNavigation } from "@/_composables/useNavigation";

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
      if(_obj.hasChild == 'true') selectMenu(_obj.uid)
      else navigateTo(_obj.path);
    }

    const navigateTo = (_path) => { 
      toggleMenu();
      goto(_path)
    };

    const toggleMenu = () => {
      emit("emitSetMenuOpen", !isMenuOpen)
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
      toggleMenu,
      selectedMenu,
      isCurrentMenu
    }

  }
}
</script>