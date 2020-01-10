<template>
  <div id="app">
    <h4>This is app component</h4>
    {{products}}
    <button @click="addProductAction()">Get Data</button>
    <HelloWorld msg="this is message" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
  },
  data() {
    return {
      newProduct: null,
      products: null,
      localTest: this.test,
    };
  },
  mounted(){
    this.products = this.$store.state.main.products;
  },
  computed: {
    productsList() {
      window.console.log("in computed:", this.test);
      return this.$store.getters.getProductsGetters;
    },
    getTest() {
      window.console.log("in computed: getTest");
      return this.test;
    },
  },
  watch: {
    test(ov, nv) {
      window.console.log(ov, nv);
    },
    localTest(ov, nv) {
      window.console.log(ov, nv);
    },
  },
  methods: {
    ...mapActions(['addProductAction']),
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
