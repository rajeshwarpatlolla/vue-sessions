<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <span style="padding-right:16px;">{{ counterProp }}</span>
      <button @click="changeVal()">change value from child comp</button>
      <input type="text" v-model="counterProp" />
    </b-navbar>
  </div>
</template>

<script>
// import eventBus from "../eventBus";

export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    counterProp: {
      type: [Number, String],
      default: 10,
    },
    getUpdatedValueProp: {
      type: Function,
    },
  },
  components: {},
  methods: {
    changeVal() {
      this.counterProp += 1;
      // this.getUpdatedValueProp(this.cVal);
      // eventBus.$emit("updatedFromHeader", this.cVal);
    },
  },
};
</script>

<style>
.header {
}
</style>
