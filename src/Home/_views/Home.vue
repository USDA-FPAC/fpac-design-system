<template>
    <div>
      <baseHeader USE_SEARCH="false"></baseHeader>

      <main id="main-content" tabindex="-1">
        <div class="fds-section">
          <div class="fds-section__bd">
            <div class="fds-m-t--s fds-m-b--m">
              <div class="fds-level@m fds-level--justify-between">
                <h1 class="sr-only">Home Page</h1>
                <p class="fds-text--lead fds-m-t--m">
                  <strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="fds-section">
          <div class="fds-section__bd">

            <div class="fds-grid ds-home-features">
              <div class="fds-grid__1 fds-grid__1/2@s fds-grid__1/3@m ds-home-features__item">
                <a class="ds-home-features__link" :href="baseUrl + 'visual-style'" @click.prevent="goto('/visual-style')">
                  <span class="ds-home-features__title">Visual Style</span>
                  <img class="ds-home-features__img" src="/img/home/homepage_illustrations_visual_style_guide_2x.png" alt="">
                  <p class="ds-home-features__blurb">508-compliant colors and typography designed to establish a cohesive experience.</p>
                </a>
              </div>
              <div class="fds-grid__1 fds-grid__1/2@s fds-grid__1/3@m ds-home-features__item">
                <a class="ds-home-features__link" :href="baseUrl + 'components'" @click.prevent="goto('/components')">
                  <span class="ds-home-features__title">UI Components</span>
                  <img class="ds-home-features__img" src="/img/home/homepage_illustrations_ui_components_2x.png" alt="">
                  <p class="ds-home-features__blurb">Common web interactions with reusable and downloadable HTML/CSS.</p>
                </a>
              </div>
              <div class="fds-grid__1 fds-grid__1/2@s fds-grid__1/3@m ds-home-features__item">
                <a class="ds-home-features__link" :href="baseUrl + 'ux-patterns'" @click.prevent="goto('/ux-patterns')">
                  <span class="ds-home-features__title">UX Patterns</span>
                  <img class="ds-home-features__img" src="/img/home/homepage_illustrations_patterns_2x.png" alt="">
                  <p class="ds-home-features__blurb">Repeatable combinations of Design System components for recurring design solutions.</p>
                </a>
              </div>
              <div class="fds-grid__1 fds-grid__1/2@s fds-grid__1/3@m ds-home-features__item">
                <a class="ds-home-features__link" :href="baseUrl + 'utilities'" @click.prevent="goto('/utilities')">
                  <span class="ds-home-features__title">Utilities</span>
                  <img class="ds-home-features__img" src="/img/home/homepage_illustrations_ui_utilities_2x.png" alt="">
                  <p class="ds-home-features__blurb">Make targeted style alterations with these helper classes.</p>
                </a>
              </div>
              <div class="fds-grid__1 fds-grid__1/2@s fds-grid__1/3@m ds-home-features__item">
                <a class="ds-home-features__link" :href="baseUrl + 'guides'" @click.prevent="goto('/guides')">
                  <span class="ds-home-features__title">Guides</span>
                  <img class="ds-home-features__img" src="/img/home/homepage_illustrations_designer_2x.png" alt="">
                  <p class="ds-home-features__blurb">Guidelines covering topics such as Accessibility and Content.</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
      <baseFooter></baseFooter>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
//import { v4 as uuidv4 } from "uuid";

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));
const baseFooter = defineAsyncComponent(() => import("@/_partials/BaseFooter.vue"));

export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();


    onMounted(()=>{
      //store.dispatch("videos/setVideos");
    });

    return {
      baseUrl,
      goto
    };
  }
};
</script>
