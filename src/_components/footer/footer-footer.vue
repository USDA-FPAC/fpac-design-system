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
                  <a href="" @click.prevent="goto('https://usda-fsa.github.io/training/','_blank')">FPAC Design System</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://github.com/USDA-FSA/fds-design-system','_blank')">Design System Codebase</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://www.figma.com/community/file/994660481391659106','_blank')">Figma Design System</a>
                </li>
              </ul>
            </div>
            
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Government Sites</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://designsystem.digital.gov/','_blank')">USWDS - Digital.gov</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://www.section508.gov/','_blank')">Section 508</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://www.usds.gov/','_blank')">U.S. Digital Service</a>
                </li>
                
              </ul>
            </div>

            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Industry Resources</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://lawsofux.com/','_blank')">Laws of UX</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://www.interaction-design.org/literature','_blank')">Interaction Design Foundation</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://www.nngroup.com/articles/','_blank')">Nielsen Norma Group</a>
                </li>
                <li class="fds-footer__list-item">
                  <a href="" @click.prevent="goto('https://uxmag.com/topics/government-and-public-services','_blank')">UX Magazine</a>
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
              <a href="" @click.prevent="goto('https://www.fpacbc.usda.gov/','_blank')">FPAC Business Center</a>
            </li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item">
              <a href="" @click.prevent="goto('https://www.usda.gov','_blank')">USDA Website</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useNavigation } from "@/_composables/useNavigation";

export default {
  props: {
    APP_ABBR_NAME: String
  },
  setup(props){
    const { goto } = useNavigation();
    return {
      goto
    }
  }
}
</script>