<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>
    <syntaxHighlight></syntaxHighlight>

    <main id="main-content" tabindex="-1">
      <div class="ds-body">

            <div class="ds-page-title">
              <div class="ds-page-title__hd">
                <h1 class="ds-page-title__hd-text" id="article-title">Components</h1>
              </div>
              <div class="ds-page-title__ft"></div>
            </div>

            <div class="ds-l-page">

              <!-- Adjacent - START -->
              <div class="ds-l-page__adjacent">

                <!-- Jump Menu - START -->
                <div id="jump-target">
                  <div class="ds-jump">
                    <ul class="ds-jump__list">
                      
                      <li class="ds-jump__item ds-jump__item--active">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#main-content">Overview</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#general">General</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#header">Header</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#layout">Layout</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#controls-flow">Controls &amp; Flow</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#form-elements">Form Elements</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#tables-lists">Tables &amp; Lists</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#feedback">Feedback</a>
                      </li>
                      <li class="ds-jump__item">
                        <a @click="setSubmenu($event)" class="ds-jump__link" href="#footer">Footer</a>
                      </li>
                    
                    </ul>
                  </div>
                </div>
                <!-- Jump Menu - END -->

              </div>
              <!-- Adjacent - END -->
              
              <!-- Page Body - START -->
              <div class="ds-l-page">

                <p class="fds-text--lead fds-m-t--m">
                  Core building blocks of the Design System to ensure cohesive experiences across all FPAC digital products.
                </p>
            
                <div class="ds-l-page__body">
            
                  <article class="ds-article">

                  <!-- HAS components -->
                  
                    <h2 id="general">General</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/icons">
                            <span class="ds-subcat-list__text">
                              Icons
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/icons.png" alt="">
                            
                          </a>
                        </li>

                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/labels">
                            <span class="ds-subcat-list__text">
                              Labels
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/labels.png" alt="">
                            
                          </a>
                        </li>
                        
                      </ul>
                    </div>

                    <h2 id="header">Header Area</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/header-app">
                            <span class="ds-subcat-list__text">
                              Application Header
                            </span>
                              <img class="ds-subcat-list__img" src="/img/subcategories/header-app.png" alt="">
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/top-nav">
                            <span class="ds-subcat-list__text">
                              Global Nav
                            </span>
                              <img class="ds-subcat-list__img" src="/img/subcategories/top-nav.png" alt="">
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/tophat">
                            <span class="ds-subcat-list__text">
                              Top Hat
                            </span>
                              <img class="ds-subcat-list__img" src="/img/subcategories/tophat.png" alt="">
                          </a>
                        </li>
                        
                      </ul>
                    </div>

                    <h2 id="layout">Layout</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/box">
                            <span class="ds-subcat-list__text">
                              Box
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/box.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/divider">
                            <span class="ds-subcat-list__text">
                              Divider
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/divider.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/grid">
                            <span class="ds-subcat-list__text">
                              Grid System
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/grid.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/level">
                            <span class="ds-subcat-list__text">
                              Level
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/level.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/media-object">
                            <span class="ds-subcat-list__text">
                              Media Object
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/media-objects.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/section">
                            <span class="ds-subcat-list__text">
                              Section
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/section.png" alt="">
                            
                          </a>
                        </li>
                        
                      </ul>
                    </div>


                    <h2 id="controls-flow">Controls &amp; Flow</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                

                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/stepped-tabs">
                            <span class="ds-subcat-list__text">
                              Stepped Tabs
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/stepped-tabs.png" alt="">
                            
                          </a>
                        </li>


                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/stepped-control">
                            <span class="ds-subcat-list__text">
                              Stepped Control
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/stepped-control.png" alt="">
                            
                          </a>
                        </li>

                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/content-tabs">
                            <span class="ds-subcat-list__text">
                              Content Tabs
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/content-tabs.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/links">
                            <span class="ds-subcat-list__text">
                              Links
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/links.png" alt="">
                            
                          </a>
                        </li>

                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/breadcrumbs">
                            <span class="ds-subcat-list__text">
                              Breadcrumbs
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/breadcrumbs.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/pagination">
                            <span class="ds-subcat-list__text">
                              Pagination
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/pagination.png" alt="">
                            
                          </a>
                        </li>
                        
                        
                        
                      </ul>
                    </div>
                  
                    <h2 id="form-elements">Form Elements</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/buttons">
                            <span class="ds-subcat-list__text">
                              Buttons
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/buttons.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/button-group">
                            <span class="ds-subcat-list__text">
                              Button Group
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/button-group.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/checkbox">
                            <span class="ds-subcat-list__text">
                              Checkbox
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/checkbox.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/date-picker">
                            <span class="ds-subcat-list__text">
                              Date Picker
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/date-picker.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/form-fields">
                            <span class="ds-subcat-list__text">
                              Form Fields
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/form-fields.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/radio">
                            <span class="ds-subcat-list__text">
                              Radio
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/radio.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/search">
                            <span class="ds-subcat-list__text">
                              Search
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/search.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/select">
                            <span class="ds-subcat-list__text">
                              Select
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/select.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/select-multi">
                            <span class="ds-subcat-list__text">
                              Select Multi
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/select-multi.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/slider">
                            <span class="ds-subcat-list__text">
                              Slider
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/slider.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/spinbox">
                            <span class="ds-subcat-list__text">
                              Spinbox
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/spinbox.png" alt="">
                            
                          </a>
                        </li>
                        
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/switch">
                            <span class="ds-subcat-list__text">
                              Switch
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/switch.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/text-input">
                            <span class="ds-subcat-list__text">
                              Text Input
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/text-input.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/textarea">
                            <span class="ds-subcat-list__text">
                              Textarea
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/textarea.png" alt="">
                            
                          </a>
                        </li>
                        
                      </ul>
                    </div>

                    <h2 id="tables-lists">Tables &amp; Lists</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/lists">
                            <span class="ds-subcat-list__text">
                              Lists
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/lists.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/tables">
                            <span class="ds-subcat-list__text">
                              Tables
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/tables.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/timeline">
                            <span class="ds-subcat-list__text">
                              Timeline
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/timeline.png" alt="">
                            
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  
                    <h2 id="feedback">Feedback</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/badges">
                            <span class="ds-subcat-list__text">
                              Badges
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/badges.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/growl">
                            <span class="ds-subcat-list__text">
                              Growl Notifications
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/growl.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/alerts">
                            <span class="ds-subcat-list__text">
                              Inline Alerts
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/alerts.png" alt="">
                            
                          </a>
                        </li>
                        
                        
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/modal">
                            <span class="ds-subcat-list__text">
                              Modal
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/modal.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/progress">
                            <span class="ds-subcat-list__text">
                              Progress
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/progress.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/splash">
                            <span class="ds-subcat-list__text">
                              Splash
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/splash.png" alt="">
                            
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                    
                  
                    <h2 id="footer">Footer</h2>
                    <div class="ds-subcat-list">
                      <ul class="ds-subcat-list__list">
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/footer">
                            <span class="ds-subcat-list__text">
                              Footer
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/footer.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/topper">
                            <span class="ds-subcat-list__text">
                              Topper
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/topper.png" alt="">
                            
                          </a>
                        </li>
                        
                        <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                          <a class="ds-subcat-list__link " href="/fds-design-system/components/screen-id">
                            <span class="ds-subcat-list__text">
                              Screen ID
                            </span>
                            
                              <img class="ds-subcat-list__img" src="/img/subcategories/screen-id.png" alt="">
                            
                          </a>
                        </li>
                        
                      </ul>
                    </div>
            
                  </article>
            
                </div>
            
              </div>
              <!-- Page Body - END -->
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
  
    const setSubmenu = (_event) => {
      let nodes = document.querySelectorAll('.ds-jump__item');
      let p = _event.currentTarget.parentElement;

      nodes.forEach( el => el.setAttribute('class', 'ds-jump__item') );
      p.setAttribute('class', 'ds-jump__item ds-jump__item--active');
    }
   
    onMounted(()=>{
      //store.dispatch("videos/setVideos");
    });

    return {
      goto,
      setSubmenu
    };
  }
};
</script>