import { createRouter, createWebHistory } from 'vue-router';

import { homeRoutes } from '@/Home/_routes/home.routes.js';
import { visualStyleRoutes } from '@/Visual-Style/_routes/visual-style.routes.js';
import { uiComponentsRoutes } from '@/UI-Components/_routes/ui-components.routes.js';
import { uxPatternsRoutes } from '@/UX-Patterns/_routes/ux-patterns.routes.js';
import { utilitiesRoutes } from '@/Utilities/_routes/utilities.routes.js';
import { searchRoutes } from '@/Search/_routes/search.routes.js';


const routes = [
  {
    path: '/',
    component: () => import('@/_layouts/Main.vue'),
    children: [
      ...homeRoutes,
      ...visualStyleRoutes,
      ...uiComponentsRoutes,
      ...uxPatternsRoutes,
      ...utilitiesRoutes,
      ...searchRoutes,
      { 
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/Shared/_views/NotFound.vue')
      }
    ]
  }  
];

export const router = createRouter({
  history: createWebHistory('/fpac-design-system/'), // base directory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
