import { createRouter, createWebHistory } from 'vue-router';

import { homeRoutes } from '@/Home/_routes/home.routes.js';
import { uiComponentsRoutes } from '@/UI-Components/_routes/ui-components.routes.js';
import { patternsRoutes } from '@/Patterns/_routes/patterns.routes.js';
import { contentRoutes } from '@/Content/_routes/content.routes.js';
import { searchRoutes } from '@/Search/_routes/search.routes.js';


const routes = [
  {
    path: '',
    component: () => import('@/Shared/_layouts/Main.vue'),
    children: [
      ...homeRoutes,
      ...uiComponentsRoutes,
      ...patternsRoutes,
      ...contentRoutes,
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
