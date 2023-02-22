<template>
  <footer>
    <footerTopper></footerTopper>
    <footerFooter 
      APP_ABBR_NAME="FDS">
    </footerFooter>
    <footerScreenId
      :SCREEN_ID="'FPAC Design System - '+currentYear">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
const footerTopper = defineAsyncComponent(() => import("@/_components/footer/footer-topper.vue"));
const footerFooter = defineAsyncComponent(() => import("@/_components/footer/footer-footer.vue"));
const footerScreenId = defineAsyncComponent(() => import("@/_components/footer/footer-screen-id.vue"));
const hiddenItems = defineAsyncComponent(() => import("@/_components/hidden/hidden-items.vue"));

export default {
  
  components: {
    footerTopper,
    footerFooter,
    footerScreenId,
    hiddenItems
  },
  setup(){
    const currentYear = ref( new Date().getFullYear() );
    return {
      currentYear
    }
  }
}
</script>