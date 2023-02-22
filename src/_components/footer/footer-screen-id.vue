<template>
  <div class="fds-screen-id">
    <div class="fds-screen-id__bd">
      <dl class="fds-screen-id__dl">
        <dt class="fds-screen-id__dt">Open Source</dt>
        <dd class="fds-screen-id__dd">{{ SCREEN_ID }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    SCREEN_ID: String
  }
}
</script>