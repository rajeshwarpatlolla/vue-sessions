<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="nameClass">{{ name }}</div>
    <button @click="changeShow()">Toggle</button>
    <div class="toggleClass" v-if="show">This will toggle</div>
  </div>
</template>

<script>
/* eslint-disable */
import { returnStatement } from "@babel/types";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      name: "abc",
      show: false,
      dynamicVar: ""
    };
  },
  computed: {
    getName() {
      return this.name + "xyz";
    }
  },
  methods: {
    getFullName() {
      return `FN ${this.name} LN`;
    },
    changeShow() {
      this.show = !this.show;
    },
    dynamicFunction(val) {
      this.dynamicVar = val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
