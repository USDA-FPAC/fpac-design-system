
export const searchRoutes = [
  { 
    path: '/search/:id',
    component: () => import('@/Search/_views/Search.vue'),
    props: true
  },
]