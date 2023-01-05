<template>
  <button
      class="fds-btn"
      :class="[
      { ['fds-btn--' + variant]: variant },
      { ['fds-btn--' + size]: size },
    ]"
      type="button"
  >
    <app-icon v-if="icon" :name="icon"> </app-icon>

    {{ label }}
  </button>
</template>

<script>
import appIcon from "@/_components/app-icon/app-icon.vue";

export default {
  components: {
    appIcon
  },
  props: {
    variant: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "flat", "plain"].includes(
            value
        );
      },
    },
    label: String,
    icon: String,
    size: {
      type: String,
      validator(value) {
        return ["fill", "small", "large"].includes(value);
      },
    },
  },
  setup() {
    return {
      appIcon
    }
  }
}
</script>