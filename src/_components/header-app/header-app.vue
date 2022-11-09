<template>
  <div class="fds-header-app">
    <div class="fds-header-app__bd">
      <div class="fds-header-app__primary">
        <router-link to="home" class="fds-header-app__home-link">
          <span class="fds-header-app__app-name">
            <abbr v-if="APP_ABBR_NAME" class="fds-header-app__app-abbr" :title="appTitleValue">{{ APP_ABBR_NAME }}</abbr>
            <span class="fds-header-app__app-full">{{ APP_FULL_NAME }}</span>
          </span>
        </router-link>
      </div>
      <div class="fds-header-app__secondary">
        <span class="fds-header-app__profile">
          <a :href="LOGOFF_URL" class="fds-header-app__profile-link">
            <span class="fds-header-app__profile-name">{{ PROFILE_NAME }}</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    APP_ABBR_NAME: String,
    APP_FULL_NAME: String,
    PROFILE_NAME: String,
    LOGOFF_URL: String,
  },

  setup(props){

    const appTitleValue = computed(() => {
      return props.APP_ABBR_NAME + " Prototype Kit"
    });

    return {
      appTitleValue,
    }
  }
}
</script>