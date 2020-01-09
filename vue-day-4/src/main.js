import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import routes from "./routes";

Vue.config.productionTip = false;

axios.interceptors.request.use(
  function(config) {
    config.headers.common['Authorization'] = "TOKEN";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new Router({
  // mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const userObj = JSON.parse(window.localStorage.getItem("user-obj"));
  let authenticatedUser = false;
  if (userObj && userObj.email && userObj.password) {
    authenticatedUser = true;
  }
  if (!authenticatedUser && to.meta.auth) {
    next("/login");
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
