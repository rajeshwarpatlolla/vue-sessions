import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueProgressBar from "vue-progressbar";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const options = {
  color: "green",
  failedColor: "red",
  thickness: "10px",
  transition: {
    speed: "0.2s",
    opacity: "0.8s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

Vue.mixin({
  name: "mixin",
  data() {
    return {
      appName: "FLIPKART",
    };
  },
  mounted() {
    window.console.log("MIXIN: In mounted");
  },
  methods: {
    showCurrentTime() {
      window.console.log(new Date());
    },
    showModal(ref) {
      this.$refs[ref].show();
    },
    hideModal(ref) {
      this.$refs[ref].hide();
    },
  },
});

Vue.filter("country", (val, ...params) => {
  if (params[0] === "INDIA") {
    return `${val} INR`;
  } else if (params[1] === "CHINA") {
    return `${val} CC`;
  }
  return `${val} $`;
});

Vue.use(VueProgressBar, options);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
