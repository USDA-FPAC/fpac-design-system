import{_ as m,r as l,c as u,a as p,e as n,b as e,i as _,t as h,j as f,k as g,g as i,h as v}from"./index.4bd0a2da.js";import{u as b}from"./useNavigation.5c14f430.js";import x from"./BaseHeader.7ad82f4b.js";import U from"./BaseFooter.b1ae411b.js";const y={components:{baseHeader:x,baseFooter:U},setup(){const o=l("/fpac-design-system/"),{goto:s}=b(),r=u(()=>{let t=Math.floor(Math.random()*4);return[{img:"sarah-kilian-52jRtc2S_VE-unsplash.jpg",creditName:"Sarah Kilian",creditProfile:"https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/52jRtc2S_VE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"},{img:"etienne-girardet-OA0qcP6GOw0-unsplash.jpg",creditName:"Etienne Girardet",creditProfile:"https://unsplash.com/@etiennegirardet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/OA0qcP6GOw0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"},{img:"jon-tyson-od1pKBU7PKA-unsplash.jpg",creditName:"Jon Tyson",creditProfile:"https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/od1pKBU7PKA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"},{img:"chuttersnap-Odc4dcsjUBw-unsplash.jpg",creditName:"CHUTTERSNAP",creditProfile:"https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditUrl:"https://unsplash.com/photos/Odc4dcsjUBw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",creditSite:"Unsplash"}][t]});return{baseUrl:o,goto:s,currentRandomImage:r}}},j={id:"main-content",tabindex:"-1"},N=f('<div class="fds-section"><div class="fds-section__bd"><div class="fds-m-t--l"><div class="fds-level@m fds-level--justify-between"><h1 class="fds-m--none">Page Not Found</h1></div></div></div></div>',1),C={class:"fds-section"},T={class:"fds-section__bd"},P={class:"fds-box fds-box--bg-1 fds-m-t--l"},S=["src"],R={class:"fds-ellipsis fds-text-size--0"},k=g(" Photo Credit: "),A=["href"];function B(o,s,r,t,a,w){const c=i("baseHeader"),d=i("baseFooter");return v(),p("div",null,[n(c),e("main",j,[N,e("div",C,[e("div",T,[e("div",P,[e("img",{src:"/img/404/"+t.currentRandomImage.img},null,8,S),e("p",R,[k,e("a",{href:t.currentRandomImage.creditUrl,onClick:s[0]||(s[0]=_(O=>t.goto(t.currentRandomImage.creditUrl,"_blank"),["prevent"]))},h(t.currentRandomImage.creditSite),9,A)])])])])]),n(d)])}const K=m(y,[["render",B]]);export{K as default};
