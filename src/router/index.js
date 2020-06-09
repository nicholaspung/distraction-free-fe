import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/app',
    name: 'App',
    component: () => import(/* webpackChunkName: "about" */ '../views/App.vue'),
  },
  {
    path: '*',
    component: () => import('../views/NotFoundComponent.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
