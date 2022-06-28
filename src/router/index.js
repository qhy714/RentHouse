import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const House = () => import('@/views/House')
const News = () => import('@/views/News')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      }, {
        path: 'news',
        component: News
      },
      {
        path: 'house',
        component: House
      },
      {
        path: 'my',
        component: My
      }
    ],

  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
