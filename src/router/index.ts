import {createRouter, createWebHashHistory} from 'vue-router';
import HelloWorld  from '@/components/HelloWorld.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    },
  ]
})

export default router