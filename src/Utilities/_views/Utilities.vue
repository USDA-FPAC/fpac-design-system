<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1 class="sr-only">Design System Utilities</h1>
              <p class="fds-text--lead fds-m-t--l">
                Single-purpose styles typically mapped to a single CSS property and value (e.g. margin).
              </p>
              <p>Utilities – also known as “trumps,” “helper classes,” or “alterations” – are high-specificity selectors for making very targeted alterations to existing elements or components.</p>

              <p>They are most useful when you want to override a default value, in one-off situations, or even to explore design ideas; though be aware that they often use an !important flag in the CSS to ensure the desired alteration is achieved by superceding an element’s default style. This is very deliberate as utility classes are for final adjustments, and should not be overridden by anything that comes before them.</p>
                
              <p>Most include Responsive options, enabling you to make targeted alterations at different screen sizes. e.g. “Small padding on small screens, larger padding on bigger screens.”</p>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article">
            <h2 class="sr-only">Usage</h2>
            <!-- <p class="fds-text--lead fds-m-t--m">
              <strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation.
            </p> -->

          </article>

        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted } from "vue";
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
      goto,
    };
  }
};
</script>