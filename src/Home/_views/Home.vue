<template>
  <div>
<!--    <baseHeader USE_SEARCH="false"></baseHeader>-->

<!--    <main id="main-content" tabindex="-1">-->
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

<!--    Temporary content added to show scrolling-->
    <div class="fds-section">
      <div class="fds-section__bd">
        <div class="fds-m-b--m" style="height:300px; background-color:white; border:1px solid #dbdad9;"></div>
        <div class="fds-m-b--m" style="height:300px; background-color:white; border:1px solid #dbdad9;"></div>
        <div class="fds-m-b--m" style="height:300px; background-color:white; border:1px solid #dbdad9;"></div>
      </div>
    </div>


<!--      <div class="fds-section">-->
<!--        <div class="fds-section__bd">-->

<!--          <div class="ds-l-page">-->

<!--            &lt;!&ndash; Adjacent - START &ndash;&gt;-->
<!--            <div class="ds-l-page__adjacent">-->

<!--              &lt;!&ndash; Jump Menu - START &ndash;&gt;-->
<!--              <div id="jump-target">-->
<!--                <div class="ds-jump">-->
<!--                  <ul class="ds-jump__list">-->
<!--                    -->
<!--                    <li class="ds-jump__item ds-jump__item&#45;&#45;active">-->
<!--                      <a class="ds-jump__link" href="#main-content">Overview</a>-->
<!--                    </li>-->
<!--                    <li class="ds-jump__item">-->
<!--                      <a class="ds-jump__link" href="#most-recent">Most Recent Videos</a>-->
<!--                    </li>-->
<!--                    <li class="ds-jump__item">-->
<!--                      <a class="ds-jump__link" href="#popular-videos">Popular Videos</a>-->
<!--                    </li>-->
<!--                   -->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--              &lt;!&ndash; Jump Menu - END &ndash;&gt;-->

<!--            </div>-->
<!--            &lt;!&ndash; Adjacent - END &ndash;&gt;-->
<!--            -->
<!--            &lt;!&ndash; Page Body - START &ndash;&gt;-->
<!--            <div class="ds-l-page__body">-->
<!--              <article class="ds-article">-->
<!--                <h2 class="sr-only">Overview</h2>-->
<!--                &lt;!&ndash; <p class="fds-text&#45;&#45;lead fds-m-t&#45;&#45;m">-->
<!--                  <strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation.-->
<!--                </p> &ndash;&gt;-->
<!--                &lt;!&ndash; HAS components &ndash;&gt;-->


<!--                <most-recent-videos></most-recent-videos>-->

<!--                <popular-videos></popular-videos>-->

<!--              </article>-->
<!--            </div>-->
<!--            &lt;!&ndash; Page Body - END &ndash;&gt;-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </main>-->

<!--    <baseFooter></baseFooter>-->
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";

import { v4 as uuidv4 } from "uuid";

// import baseHeader from "@/_partials/BaseHeader.vue";
// import baseFooter from "@/_partials/BaseFooter.vue";
// import popularVideos from "@/_partials/PopularVideos.vue";
// import mostRecentVideos from "@/_partials/MostRecentVideos.vue";

export default {
  components: {
    // baseHeader,
    // baseFooter,
    // popularVideos,
    // mostRecentVideos
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