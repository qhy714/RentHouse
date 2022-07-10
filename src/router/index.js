import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const House = () => import('@/views/House')
const News = () => import('@/views/News')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const cityList = () => import('@/views/cityList')
const HouseResourse = () => import('@/components/houseResource.vue')
const ToRent = () => import('@/views/ToRent')
Vue.use(VueRouter)
const HouseDetails = () => import('@/views/HouseDetail')

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
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
  },
  {
    path: '/citylist',
    component: cityList
  },
  {
    path: '/houseresourse',
    component: HouseResourse

  },
  {
    path: '/torent',
    component: ToRent,
  },
  {
    path: '/housedetails',
    component: HouseDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
