// main.js

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import CreateAccount from './components/CreateAccount.vue';
import EditAccount from './components/EditAccount.vue';

import IndexComponent from './components/IndexComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

const routes = [
  {
      name: 'create',
      path: '/create',
      component: CreateAccount
  },
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditAccount
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');