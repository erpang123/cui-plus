import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/Index',
    name: 'Index',
    component: () => import('@/views/Content/demo.md')
  },
  {
    path: '/dropTable',
    name: 'dropTable',
    component: () => import('@/views/drop/index.md')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router