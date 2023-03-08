<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>
    <syntaxHighlight></syntaxHighlight>

    <main id="main-content" tabindex="-1">
      <div class="ds-body">

        <div class="ds-page-title">
          <div class="ds-page-title__hd">
            <h1 class="ds-page-title__hd-text" id="article-title">Visual Style</h1>
          </div>
          <div class="ds-page-title__ft"></div>
        </div>

        <div class="ds-l-page">

          <p class="fds-text--lead fds-m-t--m">
            Core building blocks of the Design System to ensure cohesive experiences across all FPAC digital products.
          </p>

      
          <div class="ds-l-page__body">
            <article class="ds-article">

              <p>
                <code>fds-style</code>, the Design System’s CSS Framework, offers a clean, modern aesthetic that meets high standards of visual accessibility while promoting a sense of credibility, trust, and warmth in the design.
              </p>

              <h2 id="general">Replace Me</h2>

              <div class="ds-code-example">
                <pre>
                  <code class="ds-code-example__code language-html">
                    <p>The <a href="/link.html">a element</a> and <a class="usa-external_link" href="http://www.kansascity.com" target="_blank">external a element</a></p>
                    <p>The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples</p>
                    <p>The <b>b element</b> example, though you probably want to use <strong>strong</strong></p>
                    <p>The <cite>cite element</cite> example</p>
                    <p>The <code>code element</code> example</p>
                    <p>The <del>del element</del> example</p>
                    <p>The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples</p>
                    <p>The <em>em element</em> example</p>
                    <p>The <i>i element</i> example, though you probably want to use <em>em</em></p>
                    <p>The <ins>ins element</ins> example</p>
                    <p>The <kbd>kbd element</kbd> example</p>
                    <p>The <mark>mark element</mark> example</p>
                    <p>The <q>q element</q> example</p>
                    <p>The <q>q element <q>inside</q> a q element</q> example</p>
                    <p>The <s>s element</s> example</p>
                    <p>The <samp>samp element</samp> example</p>
                    <p>The <small>small element</small> example</p>
                    <p>The <span>span element</span> example</p>
                    <p>The <strong>strong element</strong> example</p>
                    <p>The <sub>sub element</sub> example</p>
                    <p>The <sup>sup element</sup> example</p>
                    <p>The <time datetime="2005-05-15 19:00">time element</time> example</p>
                    <p>The <u>u element</u> example</p>
                    <p>The <var>var element</var> example</p>
                  </code>
                </pre>
              </div>

            </article>
          </div>
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

    });

    return {
      goto,
    };
  }
};
</script>