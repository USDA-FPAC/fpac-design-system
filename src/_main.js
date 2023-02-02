import { createApp } from 'vue';
import App from '@/_App.vue'

/* import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
hljs.configure({languages:['html','javascript','xml']}); */

const app = createApp(App);

//app.use(hljs)

import { store } from '@/_store.js';
app.use(store);

import { router } from '@/_router.js';
app.use(router);

// BEFORE REMOVED - using vite.config.js to load in fds-Style
// Import FDS Style here to allow for font, image, and CSS assets
//import 'fds-style/src/stylesheets/fds-style.scss';
//import 'fds-style';
// uncomment below if importing individual components
//import { fsaModal } from 'fds-style';

app.mount('#app');