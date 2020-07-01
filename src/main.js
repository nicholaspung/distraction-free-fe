/* eslint-disable comma-dangle */
import Vue from 'vue';
import store from './store/store';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Import the Auth0 configuration
import {
  domain, clientId, audience, scope
} from '../auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './auth';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  scope,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : { path: '/login-redirect', search: '' }
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
