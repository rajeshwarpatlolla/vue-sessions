<template>
  <div class="app">
    <!-- <SimpleForm /> -->
    <!-- <DynamicForm /> -->
    <!-- <DirectiveDemo /> -->
    <h2>{{ msg }}</h2>
    <div>{{ appName }}</div>
    <button @click="showCurrentTime()">Show Current Time</button>

    <button @click="showModal('my-modal')">Show Modal</button>

    <vue-progress-bar></vue-progress-bar>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal('my-modal')">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="hideModal('my-modal')">Toggle Me</b-button>
    </b-modal>
  </div>
</template>

<script>
// import SimpleForm from "./components/SimpleForm.vue";
// import DynamicForm from "./components/DynamicForm.vue";
// import DirectiveDemo from "./components/DirectiveDemo.vue";
// import defaultMixin from "./components/mixin.js";

export default {
  name: "app",
  // mixins: [defaultMixin],
  components: {
    // SimpleForm,
    // DynamicForm,
    // DirectiveDemo,
  },
  data() {
    return {
      msg: "Message from App.vue",
      appName: "AMAZON",
    };
  },
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 16px;
}
.red {
  color: red;
}
</style>
