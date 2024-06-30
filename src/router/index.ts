import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: ()=>import('@/views/Login/LoginComp.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main/MainForm.vue')
  },
  {
    path:'/:patchMatch(.*)',
    component:()=>import(('@/views/Notfound/NotFound.vue'))
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
