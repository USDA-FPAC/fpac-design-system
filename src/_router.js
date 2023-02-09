import { createRouter, createWebHistory } from 'vue-router';

import { homeRoutes } from '@/Home/_routes/home.routes.js';
import { foundationRoutes } from '@/Foundation/_routes/foundation.routes.js';
import { uiComponentsRoutes } from '@/UI-Components/_routes/ui-components.routes.js';
import { patternsRoutes } from '@/Patterns/_routes/patterns.routes.js';
import { utilitiesRoutes } from '@/Utilities/_routes/utilities.routes.js';
import { searchRoutes } from '@/Search/_routes/search.routes.js';


const routes = [
  {
    path: '/',
    component: () => import('@/_layouts/Main.vue'),
    children: [
      ...homeRoutes,
      ...foundationRoutes,
      ...uiComponentsRoutes,
      ...patternsRoutes,
      ...utilitiesRoutes,
      ...searchRoutes,
    ]
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/Shared/_views/NotFound.vue')
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
