<template>
  <div>
    <div class="ds-preview">
      <slot name="syntaxContainer"></slot>
    </div>
    <pre>
      <code class="escape-html language-html">
        <slot name="syntaxContainer"></slot>
      </code>
    </pre>
    
  </div>
</template>

<script>
import { onMounted } from "vue";



export default {

  setup(props) {

    const escapeHTMl = () => {
      document.querySelectorAll("code.escape-html").forEach(el => {
        el.textContent = el.innerHTML;
      })
      hljs.highlightAll();
    }


    onMounted(()=>{
      escapeHTMl();
    });

    return {

    }
  }
}
</script>