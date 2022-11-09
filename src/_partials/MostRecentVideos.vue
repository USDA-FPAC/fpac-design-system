<template>
  <div>
    <h2 id="most-recent">Most Recent Videos</h2>
    <div class="ds-subcat-list">
      <ul class="ds-subcat-list__list">
        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/icons')" class="ds-subcat-list__link" :href="baseUrl + 'video/icons'">
            <span class="ds-subcat-list__text">Icons</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/icons-title.png'"
              alt
            />
          </a>
        </li>

        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/stepped-controls')" class="ds-subcat-list__link" :href="baseUrl + 'video/stepped-controls'">
            <span class="ds-subcat-list__text">Stepped Controls</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/stepped-controls-title.png'"
              alt
            />
          </a>
        </li>

        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
          <a @click.prevent="goto('/video/form-fields')" class="ds-subcat-list__link" :href="baseUrl + 'video/form-fields'">
            <span class="ds-subcat-list__text">Form Fields</span>

            <img
              class="ds-subcat-list__img"
              :src="baseUrl + 'img/video-titles/ui-components/form-fields-title.png'"
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