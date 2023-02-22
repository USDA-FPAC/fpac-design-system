<template>
  <div class="fds-footer">
    <div class="fds-footer__bd">
      <div class="fds-grid">
        <div class="fds-footer__primary fds-grid__1/1 fds-grid__9/12@l">
          <div class="fds-grid">
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">FPAC UX Resources</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item">
                  <a :href="baseUrl + 'home'" @click.prevent="goto('/home')" >FPAC Design System</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="https://github.com/USDA-FPAC/fds-style" @click.prevent="goto('https://github.com/USDA-FPAC/fds-style','_blank')">Design System Codebase</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="https://www.figma.com/community/file/994660481391659106" @click.prevent="goto('https://www.figma.com/community/file/994660481391659106','_blank')">Figma Community File</a>
                </li>
              </ul>
            </div>
            
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Government Sites</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item">
                  <a href="https://designsystem.digital.gov" @click.prevent="goto('https://designsystem.digital.gov','_blank')">USWDS - Digital.gov</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="https://www.section508.gov" @click.prevent="goto('https://www.section508.gov','_blank')">Section 508</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="https://www.usds.gov" @click.prevent="goto('https://www.usds.gov','_blank')">U.S. Digital Service</a>
                </li>
                
              </ul>
            </div>

            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Industry Resources</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item">
                  <a href="https://www.interaction-design.org/literature" @click.prevent="goto('https://www.interaction-design.org/literature','_blank')">Interaction Design Foundation</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="https://www.nngroup.com/articles" @click.prevent="goto('https://www.nngroup.com/articles','_blank')">Nielsen Norman Group</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="https://lawsofux.com" @click.prevent="goto('https://lawsofux.com','_blank')">Laws of UX</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="https://uxmag.com/topics/government-and-public-services" @click.prevent="goto('https://uxmag.com/topics/government-and-public-services','_blank')">UX Magazine</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="fds-footer__secondary fds-grid__1/1 fds-grid__3/12@l">
          <ul class="fds-footer__list fds-footer__secondary-list">
            <li class="fds-footer__list-item fds-footer__secondary-list-item">
              <a class="fds-btn fds-footer__btn" href="mailto:sm.fpac.bc.uxconsultants@usda.gov?subject=UX Training site question" target="_blank" role="button">Contact Us</a>
            </li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item">
              <a href="https://www.fpacbc.usda.gov" @click.prevent="goto('https://www.fpacbc.usda.gov','_blank')">FPAC Business Center</a>
            </li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item">
              <a href="https://www.usda.gov" @click.prevent="goto('https://www.usda.gov','_blank')">USDA Website</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useNavigation } from "@/_composables/useNavigation";

export default {
  props: {
    APP_ABBR_NAME: String
  },
  setup(props){
    const baseUrl = ref(import.meta.env.BASE_URL);
    const { goto } = useNavigation();
    return {
      baseUrl,
      goto
    }
  }
}
</script>