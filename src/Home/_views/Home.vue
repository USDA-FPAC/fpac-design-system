<template>
  <div>
    <baseHeader USE_SEARCH="false"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="sr-only">Home</h1>
              <p class="fds-text--lead fds-m-t--m">
                <strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation.
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
                      <a class="ds-jump__link" href="#most-recent">Most Recent Videos</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Popular Videos</a>
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
                <!-- <p class="fds-text--lead fds-m-t--m">
                  <strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation.
                </p> -->
                <!-- HAS components -->

                <div class="ds-code-example">
                  <pre>
                    <code class="ds-code-example__code language-html">
                      <table class="fds-table">
                        <caption>
                          <h2>[Table caption as an &lt;h2&gt;]</h2>
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

                <most-recent-videos></most-recent-videos>

                <popular-videos></popular-videos>

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
import { ref, defineAsyncComponent, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
import { useSyntax } from "@/_composables/useSyntax";

import { v4 as uuidv4 } from "uuid";

import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";
//import syntaxHighlight from "@/_partials/SyntaxHighlight.vue";
import popularVideos from "@/_partials/PopularVideos.vue";
import mostRecentVideos from "@/_partials/MostRecentVideos.vue";

export default {
  components: {
    baseHeader,
    baseFooter,
    //syntaxHighlight,
    popularVideos,
    mostRecentVideos,
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();
    const { createExample } = useSyntax();

    const showTranscript = ref(false);

    const videoId = ref('RGurnlgbuQ4');
    const transcriptContainerId = ref('RGurnlgbuQ4-container');
    const videoDescription = ref('');

    const videosData = computed(() => {
      let data = store.getters["videos/getVideos"];
      if(data) return data.videos;
      else return null;
    });

    const toggleTranscriptDrawer = () => {
      let el = document.getElementById(videoId.value+'-container');
      let elParent = el.parentElement;

      if(showTranscript.value){
        
        elParent.classList.add('uxt-drawer__container-bg--hide');
        elParent.classList.remove('uxt-drawer__container-bg--show');
        showTranscript.value = false;
      } else {
        elParent.classList.add('uxt-drawer__container-bg--show');
        elParent.classList.remove('uxt-drawer__container-bg--hide');
        showTranscript.value = true;
      }
    }

    const initVideo = (_arr) => {
      let videoObj = _arr.filter((o)=>{ return o.uid == videoId.value});
      setDescription(videoObj);
      setTranscript(videoObj);
    }

    const setDescription = (_vid) => {
      videoDescription.value = _vid[0].desc;
    }

    const setTranscript = (_vid) => {
      let el = document.getElementById(videoId.value+'-container');
      if(el) el.innerHTML = _vid[0].transcript;
    }

    watch(videosData, (_value)=>{
      initVideo(_value);
    })

    const escapeHTMl = () => {
      document.querySelectorAll("code.escape-html").forEach(el => {
        el.textContent = el.innerHTML;
      })
      hljs.highlightAll();
    }

    onMounted(()=>{
      //store.dispatch("videos/setVideos");
      createExample();
    });

    return {
      goto,
      videoId,
      videosData,
      videoDescription,
      showTranscript,
      toggleTranscriptDrawer
    };
  }
};
</script>