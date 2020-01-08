<template>
  <div class="app">
    <h2>Parent</h2>
    <div v-for="(item, index) of [{ a: 1 }, { b: 2 }]" :key="index">{{ item }}</div>
    <button @click="toggleComponents('header-comp')">Show Header</button>
    <button @click="toggleComponents('main-body')">Show MainBody</button>
    <div>counterProp: {{ counter }}</div>
    <!-- <HeaderComp :counterProp.sync="counter" /> -->
    <keep-alive>
      <component :is="currentComp"></component>
    </keep-alive>
    <!-- dynamic form -->
    {{ counter }}
  </div>
</template>

<script>
import HeaderComp from "./components/Header.vue";
// import MainBody from "./components/MainBody.vue";

export default {
  name: "app",
  data() {
    return {
      counter: 2,
      color: "yellow",
      currentComp: null,
    };
  },
  components: {
    HeaderComp,
    MainBody: () => import("./components/MainBody.vue"),
  },
  mounted() {
    setTimeout(() => {
      this.color = "redd";
    }, 2000);
  },
  methods: {
    toggleComponents(comp) {
      this.currentComp = comp;
    },
  },
};
</script>

<style>
.app {
  background-color: #9dc2f8;
  padding: 16px;
}
</style>
