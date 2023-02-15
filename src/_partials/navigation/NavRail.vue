<template>
  <div>

    <!-- <div class="ds-nav-bar fds-hide@l">
      <div class="ds-nav-bar__bd">
        <button @click="openRail" type="button" class="fds-btn fds-btn--plain ds-btn--icon" title="Open Menu" aria-label="Open Menu">
          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
          </svg>
        </button>
      </div>
    </div> -->

    <div class="ds-nav-rail fds-show@l">
      <ul aria-label="Primary Navigation">

        <li v-for="item in NAV_DATA.main" :key="item.uid" :data-control-id="item.uid" >
          <a :href="BASE_PATH + item.path" @click.prevent="setMenu(item)" :class="'ds-nav-rail__item ' + (selectedMenu==item.uid ? 'ds-nav-rail__active' : '')">
            <span class="ds-nav-rail__icon-container">
              <span class="ds-nav-rail__background"></span>
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
            <span class="ds-nav-rail__label">{{ item.label }}</span>
          </a>

          <!-- Has Children & Has Headers -->
          <!-- <div v-if="item.hasChild=='true' && item.hasHeaders=='true'" :key="item.uid" :class="'ds-nav-rail-drawer fds-show@l ' + (isMenuOpen && isCurrentMenu(item.uid) ? 'ds-nav-rail-drawer--open' : '')" aria-hidden="true">
            <div v-for="child in item.children" :key="child.uid">
              <h3>{{ child.header }}</h3>
              <ul aria-label="Sub Navigation" aria-labelledby="">
                <li v-for="gp in child.group" :key="gp.uid">

                  <a :href="BASE_PATH + gp.path" @click.prevent="navigateTo(gp.path)" class="ds-nav-rail-drawer__item">
                    <span>{{ gp.label }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div> -->

          <!-- Has Children -->
          <!-- <div v-else-if="item.hasChild=='true' && item.hasHeaders!='true'" :key="item.uid + new Date()" :class="'ds-nav-rail-drawer fds-show@l ' + (isMenuOpen && isCurrentMenu(item.uid) ? 'ds-nav-rail-drawer--open' : '')" aria-hidden="true">
            <div v-for="child in item.children" :key="child.uid">
              <ul aria-label="Sub Navigation" aria-labelledby="">
                <li>
                  <a :href="BASE_PATH + child.path" @click.prevent="navigateTo(child.path)" class="ds-nav-rail-drawer__item">
                    <span>{{ child.label }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div> -->

        </li>
        
      </ul>
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
      /* if(_obj.hasChild == 'true') selectMenu(_obj.uid)
      else navigateTo(_obj.path); */

      navigateTo(_obj.path);
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