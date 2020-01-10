<template>
  <div class="app">
    <!-- <SimpleForm /> -->
    <!-- <DynamicForm /> -->

    <DirectiveDemo>
      <div slot="1">from in side the comp line 1</div>
      <div>from in side the comp line 2</div>
      <template v-slot:[appName]>Dynamic name of slot</template>
      <template #[appName]>header slot</template>
      <div>{{ msg }}</div>
    </DirectiveDemo>

    <button @click="toggle = !toggle">toggle section</button>
    
    <transition name="faed" :duration="{ enter: 5000, leave: 5000 }">
      <div class="jumbotron" v-if="toggle">
        <h1 class="display-4">Hello, world!</h1>
      </div>
    </transition>

    <!-- <h2>{{ msg }}</h2>
    <div>{{ appName }}</div>
    <button @click="showCurrentTime()">Show Current Time</button>

    <button @click="showModal('my-modal')">Show Modal</button> -->

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
import DirectiveDemo from "./components/DirectiveDemo.vue";
// import defaultMixin from "./components/mixin.js";

export default {
  name: "app",
  // mixins: [defaultMixin],
  components: {
    // SimpleForm,
    // DynamicForm,
    DirectiveDemo,
  },
  data() {
    return {
      // msg: "Message from App.vue",
      appName: "AMAZON",
      toggle: false,
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
.faed-enter-active,
.faed-leave-active {
  transition: opacity 0.5s;
  animation: bounce-in 0.5s;
}
.faed-enter, .faed-leave-to /* .faed-leave-active below version 2.1.8 */ {
  opacity: 0;
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
