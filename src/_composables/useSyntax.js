
import { v4 as uuidv4 } from "uuid";

import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

export function useSyntax() {
  
  const createSyntax = () => {

    document.querySelectorAll("div.ds-code-example").forEach(el => {
      let codeId = uuidv4();
      let pre = el.childNodes[0];
      let code = pre.children[0];
      let contents = code.innerHTML;
      // clean whitespace
      let indent = contents.split('<')[0];
      contents = contents.replaceAll(indent, '\r');
      contents = contents.trim();

      // destroy current content in base element
      el.innerHTML = '';

      // create Example Preview container 
      let previewDiv = document.createElement('div')
      previewDiv.setAttribute('class', 'ds-preview');
      el.before(previewDiv);
      previewDiv.innerHTML = code.innerHTML;
      
      // create new <pre> element to apply Syntax Highlighting
      let newPre = document.createElement('pre');
      newPre.setAttribute('class', 'ds-code-example__pre');
      el.appendChild(newPre);

      // create and add Copy Code button to Syntax container
      let copyBtn = createCopyButton(previewDiv);
      newPre.appendChild(copyBtn);

      // add code to Syntax container
      let newCode = document.createElement('code');
      newCode.setAttribute('class', 'language-html');
      newCode.setAttribute('id', codeId);
      newPre.appendChild(newCode);

      // Add original code contents
      newCode.textContent = contents;

    })

    // Run Hightlight.js for all PRE tags on page
    highlightAll();
  }

  const createCopyButton = (_el) => {
    let copyBtn = document.createElement('button');
    copyBtn.setAttribute('class', 'fds-btn fds-btn--secondary fds-btn--small ds-code-example__copy');
    copyBtn.setAttribute('title', 'Copy code to clipboard'); 
    //copyBtn.setAttribute('data-behavior', 'copy-code');
    //copyBtn.setAttribute('id', _id);
    copyBtn.innerHTML = `<svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
      </svg> Copy`;
    copyBtn.onclick = (evt) => { copyCode(_el) };

    return copyBtn;
  }

  const copyCode = (_el) => {
    // add code from syntax box to Clipboard
    let code = _el.innerHTML.trim();
    navigator.clipboard.writeText(code);
  }

  const highlightAll = () => {
    // Run Hightlight.js for all PRE tags on page
    hljs.configure({languages:['html','javascript','xml']});
    hljs.highlightAll();
  }

  return {
    createSyntax,
    highlightAll
  }
}