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
  {
    path: '/selectTable',
    name: 'selectTable',
    component: () => import('@/views/selectTable/index.md')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router