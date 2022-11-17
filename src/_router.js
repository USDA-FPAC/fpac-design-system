import { createRouter, createWebHistory } from 'vue-router';

import { homeRoutes } from '@/Home/_routes/home.routes.js';
import { contentRoutes } from '@/Content/_routes/content.routes.js';
import { searchRoutes } from '@/Search/_routes/search.routes.js';


const routes = [
  ...homeRoutes,
  ...contentRoutes,
  ...searchRoutes,
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