<template>
  <footer>
    <footerTopper></footerTopper>
    <footerFooter 
      APP_ABBR_NAME="FDS">
    </footerFooter>
    <footerScreenId
      SCREEN_ID="FDS-2022">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>
import { inject, onMounted, ref, computed } from 'vue';

import footerTopper from '@/_components/footer/footer-topper.vue';
import footerFooter from '@/_components/footer/footer-footer.vue';
import footerScreenId from '@/_components/footer/footer-screen-id.vue';
import hiddenItems from '@/_components/hidden/hidden-items.vue';

export default {
  setup(){

  },
  components: {
    footerTopper,
    footerFooter,
    footerScreenId,
    hiddenItems
  }
}
</script>