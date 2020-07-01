import Vue from 'vue';
import dotenv from 'dotenv';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import authGuard from '../auth/authGuard';

dotenv.config();

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
    beforeEnter: authGuard,
  },
  {
    path: '/login-redirect',
    name: 'Redirect',
    redirect: '/app',
  },
  {
    path: '*',
    component: () => import('../views/NotFoundComponent.vue'),
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.URL,
  routes,
});

export default router;
