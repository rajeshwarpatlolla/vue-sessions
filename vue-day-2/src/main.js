import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import GlobalComp from "./components/GlobalComp";

Vue.component("GlobalComp", GlobalComp);

Vue.directive("bgRed", {
  bind(el, binding, vnode) {
    window.console.log(binding, vnode);
    if (binding.arg === "bg") {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
    if (binding.modifiers.fs) {
      el.style.fontSize = "42px";
    }
  },
  // componentUpdated(el, binding, vnode) {
  //   window.console.log(el, binding, vnode);
  // },
});

Vue.filter("lowercase", val => {
  return val.toLowerCase();
});

Vue.filter("addChar", (val, arg1, arg2) => {
  return `${val.split("").join(arg1)} - ${arg2}`;
});

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
