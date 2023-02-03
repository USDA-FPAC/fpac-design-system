<template>
  <div>
    <div class="ds-nav-rail fds-show@l">
      <ul aria-label="Primary Navigation">

        <li v-for="item in NAV_DATA.main" :key="item.uid" :data-control-id="item.uid" >
          <a :href="BASE_PATH + item.path" @click.prevent="navigateTo(item.uid+'-BTN', item.path)" class="ds-nav-rail__item">
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
        </li>
        
      </ul>
    </div>
    <div :class="'ds-nav-rail-drawer fds-show@l ' + (IS_MENU_OPEN ? 'ds-nav-rail-drawer--open' : '')">
      <ul aria-label="Sub Navigation" aria-labelledby="">
        <li>
          <a href="" class="ds-nav-rail-drawer__item ds-nav-rail-drawer__item--active">
            <span>Sub Menu Item</span>
          </a>
        </li>
        <li>
          <a href="" class="ds-nav-rail-drawer__item">
            <span>Sub Menu Item</span>
          </a>
        </li>
        <li>
          <a href="" class="ds-nav-rail-drawer__item">
            <span>Sub Menu Item</span>
          </a>
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