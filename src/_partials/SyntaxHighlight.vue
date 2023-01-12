<template>
  <span class="sr-only"></span>
</template>

<script>
import { useSyntax } from "@/_composables/useSyntax";
import { onMounted } from "vue";

export default {

  setup(props) {

    const { createSyntax } = useSyntax();

    /* const escapeHTMl = () => {
      document.querySelectorAll("code.escape-html").forEach(el => {
        el.textContent = el.innerHTML;
      })
      hljs.highlightAll();
    } */

    onMounted(()=>{
      //escapeHTMl();
      createSyntax();
    });

    return {

    }
  }
}
</script>