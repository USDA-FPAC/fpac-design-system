<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--l">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="fds-m--none">Page Not Found</h1>
            </div>
          </div>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";

export default {
  components: {
    baseHeader,
    baseFooter
  },
  setup(){

  }
}
</script>