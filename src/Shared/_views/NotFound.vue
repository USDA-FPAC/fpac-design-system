<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--l">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="fds-m--none">Page Not Found</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-box fds-box--bg-1 fds-m-t--l">
            <img :src="baseUrl +'/img/404/' + currentRandomImage['img']" />
            <p class="fds-ellipsis fds-text-size--0">
              Photo Credit: <a :href="currentRandomImage['creditUrl']" @click.prevent="goto(currentRandomImage['creditUrl'], '_blank')">
                {{ currentRandomImage['creditSite'] }}
              </a>
            </p>
          </div>
        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useNavigation } from "@/_composables/useNavigation";

import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";

export default {
  components: {
    baseHeader,
    baseFooter
  },
  setup(){

    const baseUrl = ref(import.meta.env.BASE_URL);
    const { goto } = useNavigation();

    const currentRandomImage = computed(()=>{
      let randomNum = Math.floor(Math.random() * 4);
      let imgArr = [
        { 
          img: 'sarah-kilian-52jRtc2S_VE-unsplash.jpg',
          creditName: 'Sarah Kilian',
          creditProfile: 'https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/52jRtc2S_VE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        },
        { 
          img: 'etienne-girardet-OA0qcP6GOw0-unsplash.jpg',
          creditName: 'Etienne Girardet',
          creditProfile: 'https://unsplash.com/@etiennegirardet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/OA0qcP6GOw0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        },
        { 
          img: 'jon-tyson-od1pKBU7PKA-unsplash.jpg',
          creditName: 'Jon Tyson',
          creditProfile: 'https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/od1pKBU7PKA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        },
        { 
          img: 'chuttersnap-Odc4dcsjUBw-unsplash.jpg',
          creditName: 'CHUTTERSNAP',
          creditProfile: 'https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/Odc4dcsjUBw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        }  
      ]

      return imgArr[randomNum];
    });

    return {
      baseUrl,
      goto,
      currentRandomImage
    }

  }
}
</script>