import{_ as O,d as N,r as o,c as i,w as f,o as S,a as w,b as u,e as _,n as p,f as A,u as h,g as v,h as y}from"./index.74597a30.js";const D=N(()=>A(()=>import("./NavDrawer.390751f6.js"),["assets/NavDrawer.390751f6.js","assets/index.74597a30.js","assets/index.069ac69f.css","assets/useNavigation.1d99d32a.js"])),P={components:{NavDrawer:D},setup(M){const t=h();let r="/fpac-design-system/".substring(0,20-1);const n=o(r),c=i(()=>t.getters["navigation/getNavigation"]),d=i(()=>{let e=t.getters["navigation/getIsMenuOpen"];return e||null}),a=o(),s=i(()=>{let e=t.getters["navigation/getSelectedMenu"];return e||null}),l=o(),g=e=>{t.dispatch("navigation/setSelectedMenu",e)},E=e=>{console.log("setMenuOpen =>",e),t.dispatch("navigation/setMenuOpen",e)};return f([d,s],([e,m])=>{a.value=e,l.value=m}),S(()=>{t.dispatch("navigation/setNavigation"),t.dispatch("navigation/setMenuOpen",!1)}),{basePath:n,isMenuOpen:a,navigationData:c,selectedMenu:l,selectMenu:g,setMenuOpen:E}}},T={class:"ds-nav-drawer-layout"};function b(M,t,r,n,c,d){const a=v("nav-drawer"),s=v("router-view");return y(),w("div",T,[u("div",{class:p("ds-nav-drawer-layout__nav "+(n.isMenuOpen?"ds-nav-drawer-layout--open ":""))},[_(a,{BASE_PATH:n.basePath,NAV_DATA:n.navigationData,IS_MENU_OPEN:n.isMenuOpen,SELECTED_MENU:n.selectedMenu,onEmitSetMenuOpen:n.setMenuOpen,onEmitSelectMenu:n.selectMenu},null,8,["BASE_PATH","NAV_DATA","IS_MENU_OPEN","SELECTED_MENU","onEmitSetMenuOpen","onEmitSelectMenu"])],2),u("div",{class:p("ds-nav-drawer-layout__bd "+(n.isMenuOpen?"ds-nav-drawer-layout--open ":""))},[_(s)],2)])}const C=O(P,[["render",b]]);export{C as default};
