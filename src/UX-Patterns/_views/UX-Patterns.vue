<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>
    <syntaxHighlight></syntaxHighlight>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="sr-only">UX Patterns</h1>
              <p class="fds-text--lead fds-m-t--m">
                Repeatable combinations of Design System components for recurring design solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article">
            <h2 class="sr-only">Overview</h2>
            <!-- <p class="fds-text--lead fds-m-t--m">
              <strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation.
            </p> -->
            <!-- HAS components -->

            <div class="ds-code-example">
              <pre>
                <code class="ds-code-example__code language-html">
                  <span class="fds-btn-group" role="group" aria-label="Label describing this group">
                    <button class="fds-btn-group__item" type="button">Label</button>
                    <button class="fds-btn-group__item fds-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
                    <button class="fds-btn-group__item" type="button">Label</button>
                    <button class="fds-btn-group__item" type="button">Label</button>
                  </span>
                </code>
              </pre>
            </div>

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
const syntaxHighlight = defineAsyncComponent(() => import("@/_partials/SyntaxHighlight.vue"));

export default {
  components: {
    baseHeader,
    baseFooter,
    syntaxHighlight
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