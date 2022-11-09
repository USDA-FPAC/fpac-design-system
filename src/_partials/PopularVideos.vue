<template>
  <div>
    <h2 id="popular-videos" class="fds-m-t--l">Popular Videos</h2>
    <div class="ds-subcat-list">
      <ul class="ds-subcat-list__list">
        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/buttons')" class="ds-subcat-list__link" :href="baseUrl + 'video/buttons'">
            <span class="ds-subcat-list__text">Buttons</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/buttons-title.png'"
              alt
            />
          </a>
        </li>

        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/date-picker')" class="ds-subcat-list__link" :href="baseUrl + 'video/date-picker'">
            <span class="ds-subcat-list__text">Date Picker</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/date-picker-title.png'"
              alt
            />
          </a>
        </li>

        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/stepped-tabs')" class="ds-subcat-list__link" :href="baseUrl + 'video/stepped-tabs'">
            <span class="ds-subcat-list__text">Stepped Tabs</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/stepped-tabs-title.png'"
              alt
            />
          </a>
        </li>

        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/stepped-control')" class="ds-subcat-list__link" :href="baseUrl + 'video/stepped-control'">
            <span class="ds-subcat-list__text">Stepped Control</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/stepped-controls-title.png'"
              alt
            />
          </a>
        </li>

        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/button-group')" class="ds-subcat-list__link" :href="baseUrl + 'video/button-group'">
            <span class="ds-subcat-list__text">Button Group</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/button-group-title.png'"
              alt
            />
          </a>
        </li>

        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/508-accessibility')" class="ds-subcat-list__link" :href="baseUrl + 'video/508-accessibility'">
            <span class="ds-subcat-list__text">508 Accessibility</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/guides/508-title.png'"
              alt
            />
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useNavigation } from "@/_composables/useNavigation";

export default {

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const { goto } = useNavigation();

    return {
      baseUrl,
      goto
    };
  }
};
</script>