
export const homeRoutes = [
  { 
    path: '/',
    component: () => import('@/Home/_views/Home.vue')
  },
  { 
    path: '/home',
    component: () => import('@/Home/_views/Home.vue')
  }
]