<template>
  <div>
    <div class="fds-whiteout" tabindex="-1" id="fds-whiteout" aria-hidden="true"></div>
    <alert-system></alert-system>
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </router-view>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch } from 'vue'
import AlertSystem from "@/_partials/AlertSystem.vue";

export default {
  name: "app",
  components: {
    AlertSystem
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
</style>