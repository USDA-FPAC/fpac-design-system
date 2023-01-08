
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
    path: '/foundation/spacing',
    component: () => import('@/Content/_views/foundation/Spacing.vue')
  },
  {
    path: '/foundation/shadows',
    component: () => import('@/Content/_views/foundation/Shadows.vue')
  },
  {
    path: '/foundation/icons',
    component: () => import('@/Content/_views/foundation/Icons.vue')
  },
  {
    path: '/foundation/logo',
    component: () => import('@/Content/_views/foundation/Logo.vue')
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
  },
  {
    path: '/patterns',
    component: () => import('@/Content/_views/patterns/Patterns.vue')
  },
  {
    path: '/utilities',
    component: () => import('@/Content/_views/utilities/Utilities.vue')
  },
  {
    path: '/guides',
    component: () => import('@/Content/_views/guides/Guides.vue')
  }
]