import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/home/Home';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
