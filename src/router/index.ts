import {createRouter, createWebHashHistory} from 'vue-router';
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: Layout,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: {title: '首页', icon: 'dashboard', affix: true}
        },
      ]
    },
  ]
})

export default router