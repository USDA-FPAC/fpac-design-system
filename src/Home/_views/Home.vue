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
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
//import { v4 as uuidv4 } from "uuid";
const navDrawer = defineAsyncComponent(() => import("@/_partials/NavDrawer.vue"));
const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));
const baseFooter = defineAsyncComponent(() => import("@/_partials/BaseFooter.vue"));
const popularVideos = defineAsyncComponent(() => import("@/_partials/PopularVideos.vue"));
const mostRecentVideos = defineAsyncComponent(() => import("@/_partials/MostRecentVideos.vue"));

export default {
  components: {
    navDrawer,
    baseHeader,
    baseFooter,
    popularVideos,
    mostRecentVideos,
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

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

    onMounted(()=>{
      //store.dispatch("videos/setVideos");
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
