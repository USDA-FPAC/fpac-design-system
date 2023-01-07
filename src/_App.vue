<template>
  <div class="fds-whiteout" tabindex="-1" id="fds-whiteout" aria-hidden="true"></div>
  <alert-system></alert-system>
  <div class="app-layout">
    <nav>
      <nav-bar></nav-bar>
      <nav-rail></nav-rail>
      <nav-drawer></nav-drawer>
    </nav>
    <div>
      <base-header></base-header>
      <main id="main-content">
        <div class="fds-section">
          <div class="fds-section__bd">
            <router-view v-slot="{ Component }">
              <!-- <keep-alive>
                <component :is="Component" :key="$route.fullPath"></component>
              </keep-alive> -->
              <component :is="Component"></component>
            </router-view>
          </div>
        </div>
      </main>
      <base-footer></base-footer>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch } from 'vue'
import AlertSystem from "@/_partials/AlertSystem.vue";
import navRail from "@/_components/nav-rail/nav-rail.vue";
import navDrawer from "@/_components/nav-drawer/nav-drawer.vue";
import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";
import navBar from "@/_components/nav-bar/nav-bar.vue";

export default {
  name: "app",
  components: {
    navBar,
    AlertSystem,
    navRail,
    navDrawer,
    baseHeader,
    baseFooter
  },
  setup(){
    const route = useRoute();
    watch( () => route.params, (toParams, fromParams) => {
        // react to route changes...
    });    
  }
};
</script>

<style lang="scss">
@import '@/_style/index.scss';

@media screen and (min-width: 864px) {
  .app-layout {
    display: grid;
    grid-template-columns: 33rem 1fr;
  }
}
</style>