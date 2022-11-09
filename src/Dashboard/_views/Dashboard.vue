<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--l">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="fds-m--none">Dashboard</h1>
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

                <p
                  class="fds-text--lead fds-m-t--m"
                >Welcome to your new training resource for the <strong>FPAC Design System</strong>, industry standards, and general User Experience best practices.</p>

                <!-- HAS components -->

                <!-- <div class="uxt-video uxt-video__md">
                  <iframe
                    width="640"
                    height="360"
                    :src="'https://www.youtube.com/embed/'+ videoId +'?rel=0&showinfo=0'"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </div>  -->

                <div class="uxt-video uxt-video__md">
                  <img class="" src="/img/overview-fake-928x527.png" alt="Overview Video Image" />
                </div>

                <h3>Video Description</h3>
                  
                <div class="fds-m-t--s fds-m-b--l">
                  <p>{{ videoDescription }}</p>
                </div>

                <div class="uxt-drawer">
                  <div @click="toggleTranscriptDrawer" class="uxt-drawer__front">
                    <div class="fds-level fds-level--justify-between fds-border--xxs fds-border:hover--none fds-shadow:hover--raised">
                      <span class="fds-text-size--4 fds-p--s">
                        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                        View Transcript
                      </span>
                      <span>
                        <button v-if="!showTranscript" type="button" class="fds-btn fds-btn--plain fds-p--s" title="Expand" aria-label="Expand">
                          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                        </button>
                        <button v-if="showTranscript" type="button" class="fds-btn fds-btn--plain fds-p--s" title="Expand" aria-label="Expand">
                          <svg  class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                        </button>
                      </span>
                    </div>
                  </div>               
                  <div class="uxt-drawer__container fds-m-l--xxs fds-m-r--xxs">
                    <div class="uxt-drawer__container-bg--hide fds-p--m fds-border--xxs">
                      <span :id="videoId +'-container'"></span>
                      <div class="fds-m-t--l fds-text-align--center">
                        <button @click="toggleTranscriptDrawer" class="fds-btn fds-btn--flat">Close</button>
                      </div>
                    </div>
                  </div>
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

import { v4 as uuidv4 } from "uuid";

import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";
import popularVideos from "@/_partials/PopularVideos.vue";
import mostRecentVideos from "@/_partials/MostRecentVideos.vue";

export default {
  components: {
    baseHeader,
    baseFooter,
    popularVideos,
    mostRecentVideos
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
      store.dispatch("videos/setVideos");
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