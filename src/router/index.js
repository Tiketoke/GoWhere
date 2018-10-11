import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detil from '@/pages/detil/Detil'
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
  },{
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/detil/:id',
    name: 'Detil',
    component: Detil
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})
