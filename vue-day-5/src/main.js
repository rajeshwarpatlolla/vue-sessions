import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.test = "TEST";

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
