<template>
  <div class="fds-tophat">
    <div class="fds-tophat__bd">
      <div class="fds-tophat__primary">
        <span class="fds-tophat__agency">
          <a :href="AG_URL" class="fds-tophat__link" :title="agTitleValue">
            <img role="presentation" class="fds-tophat__agency-logo" :src="AG_LOGO" alt="">
            <abbr class="fds-tophat__agency-abbr" title="">{{ AG_ABBR }}</abbr>
            <span class="fds-tophat__agency-fullname">{{ AG_FULL }}</span>
          </a>
        </span>
      </div>
      <div class="fds-tophat__secondary">
        <span class="fds-tophat__subagency">
          <a :href="SUB_AG_URL" class="fds-tophat__link" :title="subAgTitleValue">{{ SUB_AG_FULL }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    AG_ABBR: String,
    AG_FULL: String,
    AG_URL: String,
    AG_LOGO: String,
    SUB_AG_ABBR: String,
    SUB_AG_FULL: String,
    SUB_AG_URL: String,
  },
  setup(props){

    const agTitleValue = computed(() => {
      return "Link to " + props.AG_ABBR + " homepage"
    });

    const subAgTitleValue = computed(() => {
      return "Link to " + props.SUB_AG_ABBR + " homepage"
    });

    return {
      agTitleValue,
      subAgTitleValue
    }
    
  }
  
}
</script>