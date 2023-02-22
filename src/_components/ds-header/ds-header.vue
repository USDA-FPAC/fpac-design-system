<template>
  <div class="ds-header">
    <div class="ds-header__title fds-level fds-level--justify-between">
      <a :href="basePath" @click.prevent="goto('/')" class="ds-header__link" title="Home" aria-label="FPAC Design System Homepage">
        FPAC Design System
        <small class="ds-header__version" title="version 3.0.0 of fds-style CSS Framework">fds-style@3.0</small>
      </a>
      <div class="fds-level fds-level--gutter-s">
        <a class="fds-btn ds-btn--start fds-level__item--align-bottom" :href="basePath + '/getting-started'" @click.prevent="goto('/getting-started')">Get Started</a>
        <a class="ds-header__link ds-header__link--github fds-level__item--align-top" href="https://github.com/USDA-FPAC/fpac-design-system" @click.prevent="goto('https://github.com/USDA-FPAC/fpac-design-system')">
          <svg class="fds-icon fds-icon--size-3" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="drGithub" class="drcls-1" d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 005 16.5c-.91-.62.07-.61.07-.61a2.13 2.13 0 011.53 1 2.14 2.14 0 002.91.83 2.16 2.16 0 01.63-1.34c-2.14-.21-4.52-1.07-4.52-4.9a3.89 3.89 0 011-2.69 3.57 3.57 0 01.1-2.64s.84-.27 2.75 1a9.63 9.63 0 015 0c1.91-1.29 2.75-1 2.75-1a3.57 3.57 0 01.1 2.64 3.89 3.89 0 011 2.69c0 3.84-2.34 4.68-4.57 4.93a2.39 2.39 0 01.68 1.85v2.75c0 .33.18.58.69.48A10 10 0 0012 2z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useNavigation } from "@/_composables/useNavigation";

export default {

  setup(props) {

    const { goto } = useNavigation();
    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );

    return {
      goto,
      basePath
    }
  }
}
</script>