
export const contentRoutes = [
  { 
    path: '/content/:id',
    component: () => import('@/Content/_views/Content.vue'),
    props: true
  }
]