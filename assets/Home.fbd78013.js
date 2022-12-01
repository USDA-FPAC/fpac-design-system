import{_ as f,g as c,o as g,c as h,e as s,m as b,d as k,i as V,j as C,r,a as _,q as U,b as j}from"./index.5c68ae27.js";import{u as x,b as y,a as F}from"./BaseFooter.53e9d0bb.js";import{p as H}from"./PopularVideos.020d253e.js";const S={setup(u){const e=c("/fpac-design-system/"),{goto:d}=x();return{baseUrl:e,goto:d}}},E=s("h2",{id:"most-recent"},"Most Recent Videos",-1),R={class:"ds-subcat-list"},B={class:"ds-subcat-list__list"},D={class:"ds-subcat-list__list-item ds-subcat-list__list-item--thirds"},L=["href"],M=s("span",{class:"ds-subcat-list__text"},"Icons",-1),P=["src"],I={class:"ds-subcat-list__list-item ds-subcat-list__list-item--thirds"},N=["href"],O=s("span",{class:"ds-subcat-list__text"},"Stepped Controls",-1),T=["src"],A={class:"ds-subcat-list__list-item ds-subcat-list__list-item--thirds"},G=["href"],Q=s("span",{class:"ds-subcat-list__text"},"Form Fields",-1),q=["src"];function z(u,e,d,t,a,l){return g(),h("div",null,[E,s("div",R,[s("ul",B,[s("li",D,[s("a",{onClick:e[0]||(e[0]=b(n=>t.goto("/video/icons"),["prevent"])),class:"ds-subcat-list__link",href:t.baseUrl+"video/icons"},[M,s("img",{class:"ds-subcat-list__img",src:t.baseUrl+"img/video-titles/ui-components/icons-title.png",alt:""},null,8,P)],8,L)]),s("li",I,[s("a",{onClick:e[1]||(e[1]=b(n=>t.goto("/video/stepped-controls"),["prevent"])),class:"ds-subcat-list__link",href:t.baseUrl+"video/stepped-controls"},[O,s("img",{class:"ds-subcat-list__img",src:t.baseUrl+"img/video-titles/ui-components/stepped-controls-title.png",alt:""},null,8,T)],8,N)]),s("li",A,[s("a",{onClick:e[2]||(e[2]=b(n=>t.goto("/video/form-fields"),["prevent"])),class:"ds-subcat-list__link",href:t.baseUrl+"video/form-fields"},[Q,s("img",{class:"ds-subcat-list__img",src:t.baseUrl+"img/video-titles/ui-components/form-fields-title.png",alt:""},null,8,q)],8,G)])])])])}const J=f(S,[["render",z]]),K={components:{baseHeader:y,baseFooter:F,popularVideos:H,mostRecentVideos:J},setup(u){c("/fpac-design-system/");const e=U(),{goto:d}=x(),t=c(!1),a=c("RGurnlgbuQ4");c("RGurnlgbuQ4-container");const l=c(""),n=k(()=>{let o=e.getters["videos/getVideos"];return o?o.videos:null}),m=()=>{let i=document.getElementById(a.value+"-container").parentElement;t.value?(i.classList.add("uxt-drawer__container-bg--hide"),i.classList.remove("uxt-drawer__container-bg--show"),t.value=!1):(i.classList.add("uxt-drawer__container-bg--show"),i.classList.remove("uxt-drawer__container-bg--hide"),t.value=!0)},p=o=>{let i=o.filter($=>$.uid==a.value);v(i),w(i)},v=o=>{l.value=o[0].desc},w=o=>{let i=document.getElementById(a.value+"-container");i&&(i.innerHTML=o[0].transcript)};return V(n,o=>{p(o)}),C(()=>{}),{goto:d,videoId:a,videosData:n,videoDescription:l,showTranscript:t,toggleTranscriptDrawer:m}}},W={id:"main-content",tabindex:"-1"},X=j('<div class="fds-section"><div class="fds-section__bd"><div class="fds-m-t--s fds-m-b--m"><div class="fds-level@m fds-level--justify-between"><h1 class="sr-only">Home</h1><p class="fds-text--lead fds-m-t--m"><strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>&#39;s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation. </p></div></div></div></div>',1),Y={class:"fds-section"},Z={class:"fds-section__bd"},ss={class:"ds-l-page"},ts=j('<div class="ds-l-page__adjacent"><div id="jump-target"><div class="ds-jump"><ul class="ds-jump__list"><li class="ds-jump__item ds-jump__item--active"><a class="ds-jump__link" href="#main-content">Overview</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#most-recent">Most Recent Videos</a></li><li class="ds-jump__item"><a class="ds-jump__link" href="#popular-videos">Popular Videos</a></li></ul></div></div></div>',1),es={class:"ds-l-page__body"},os={class:"ds-article"},is=s("h2",{class:"sr-only"},"Overview",-1);function ns(u,e,d,t,a,l){const n=r("baseHeader"),m=r("most-recent-videos"),p=r("popular-videos"),v=r("baseFooter");return g(),h("div",null,[_(n,{USE_SEARCH:"true"}),s("main",W,[X,s("div",Y,[s("div",Z,[s("div",ss,[ts,s("div",es,[s("article",os,[is,_(m),_(p)])])])])])]),_(v)])}const ls=f(K,[["render",ns]]);export{ls as default};
