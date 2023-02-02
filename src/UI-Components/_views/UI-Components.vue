<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>
    <syntaxHighlight></syntaxHighlight>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="sr-only">UI Components</h1>
              <p class="fds-text--lead fds-m-t--m">
                Core building blocks of the design system to ensure cohesive experiences across FPAC digital products.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="ds-l-page">

            <!-- Adjacent - START -->
            <div class="ds-l-page__adjacent">

              <!-- Jump Menu - START -->
              <div id="jump-target">
                <div class="ds-jump">
                  <ul class="ds-jump__list">
                    
                    <li class="ds-jump__item ds-jump__item--active">
                      <a class="ds-jump__link" href="#main-content">Overview</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#most-recent">General</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Header</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Form Elements</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Feedback</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Layout</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Flow Controls</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Tables and Lists</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Footer</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <!-- Jump Menu - END -->

            </div>
            <!-- Adjacent - END -->
            
            <!-- Page Body - START -->
            <div class="ds-l-page__body">
              <article class="ds-article">
                <h2 class="sr-only">Overview</h2>

                <div class="ds-code-example">
                  <pre>
                    <code class="ds-code-example__code language-html">
                      <table class="fds-table">
                        <caption>
                          <h2>[Table caption UI Components]</h2>
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col" aria-sort="ascending"><button class="fds-table__sort fds-table__sort--ascending" type="button">Commodity</button></th>
                            <th scope="col" class="fds-text-align--right"><button class="fds-table__sort" type="button">Loan Rate</button></th>
                            <th scope="col" class="fds-text-align--right"><button class="fds-table__sort" type="button">30-Day Period PCP</button></th>
                            <th scope="col" class="fds-text-align--right"><button class="fds-table__sort" type="button">Effective LDP Rate ($)</button></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Barley $/Bushel</td>
                            <td class="fds-text-align--right">1.75</td>
                            <td class="fds-text-align--right">3.30</td>
                            <td class="fds-text-align--right">0.00</td>
                          </tr>
                          <tr>
                            <td>Canola $/Cwt.</td>
                            <td class="fds-text-align--right">8.94</td>
                            <td class="fds-text-align--right">15.99</td>
                            <td class="fds-text-align--right">0.00</td>
                          </tr>
                          <tr>
                            <td>Flaxseed $/Cwt.</td>
                            <td class="fds-text-align--right">10.13</td>
                            <td class="fds-text-align--right">15.90</td>
                            <td class="fds-text-align--right">0.00</td>
                          </tr>
                          <tr>
                            <td>Oats $/Bushel</td>
                            <td class="fds-text-align--right">1.43</td>
                            <td class="fds-text-align--right">2.97</td>
                            <td class="fds-text-align--right">0.00</td>
                          </tr>
                          <tr>
                            <td>Wheat - Soft Red Winter $/Bushel</td>
                            <td class="fds-text-align--right">2.42</td>
                            <td class="fds-text-align--right">4.49</td>
                            <td class="fds-text-align--right">0.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </code>
                  </pre>
                </div>

              </article>
            </div>
            <!-- Page Body - END -->
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
      goto
    };
  }
};
</script>