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
    component: () => import('@/views/Main/MainForm.vue'),
    children:[
      {
        path:'pie',
        name:'pie',
        component:()=>import('@/views/chart/pie')
      },
      {
        path:'line',
        name:'line',
        component:()=>import('@/views/chart/line')
      },
      {
        path:'funnel',
        name:'funnel',
        component:()=>import('@/views/chart/funnel')
      },
      {
        path: 'press',
        name: 'press',
        component: () => import('@/views/chart/press')

      },
      {
        path:'serch',
        name:'serch',
        component:()=>import('@/views/pageserch')
      }
    ]
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
