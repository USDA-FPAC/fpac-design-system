
export const contentRoutes = [
  { 
    path: '/content/:id',
    component: () => import('@/Content/_views/Content.vue'),
    props: true
  },
  {
    path: '/foundation',
    component: () => import('@/Content/_views/foundation/Foundation.vue')
  },
  {
    path: '/foundation/color',
    component: () => import('@/Content/_views/foundation/Color.vue')
  },
  {
    path: '/foundation/typography',
    component: () => import('@/Content/_views/foundation/Typography.vue')
  },
  {
    path: '/components',
    component: () => import('@/Content/_views/components/Components.vue')
  },
  {
    path: '/components/buttons',
    component: () => import('@/Content/_views/components/Buttons.vue')
  },
  {
    path: '/components/checkbox',
    component: () => import('@/Content/_views/components/Checkbox.vue')
  }
]