import Vue from "vue";
import vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(vuex);

const store = new vuex.Store({
  modules: {
    main: {
      state: {
        products: ["mobiles", "tvs"],
        users: [],
      },
      actions,
      mutations,
      getters: {
        getProductsGetters: state => {
          return state.products;
        },
        getUsersGetters: state => {
          return state.users;
        },
      },
    },
    payments: {
      state: {
        products: ["mobiles", "tvs"],
        users: [],
      },
      actions,
      mutations,
      getters: {
        getProductsGetters: state => {
          return state.products;
        },
        getUsersGetters: state => {
          return state.users;
        },
      },
    },
  },
});

export default store;
