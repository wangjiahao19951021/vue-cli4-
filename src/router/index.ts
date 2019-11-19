import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About1 from '../views/about1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    // component: Home,
  }, 
  // {
  //   path: '/about',
  //   // name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  // {
  //   path: '/about1',
  //   component: About1,  
  //   children: [
  //     {
  //       path: 'about11',
  //       component: About1,
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  // mode: 'history', //路由不再显示hash, http://localhost:8080/#/about1/about11 --> http://localhost:8080/about1/about11
  // base: process.env.BASE_URL,
  // routes
  routes
})

export default router
