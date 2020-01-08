<template>
  <div class="main-body">
    <h2>{{ msg }}</h2>
    <button @click="changeMessage()">Change Message</button>
    <input type="text" v-model="msg" />
    <div v-html="details"></div>
  </div>
</template>

<script>
export default {
  name: "MainBody",
  props: ["msgProp"],
  data() {
    return {
      msg: this.msgProp,
      name: "rajeshwar",
      mobile: 909090909,
      details: null,
    };
  },
  components: {},
  created() {
    this.$root.$on("updatedFromHeader", val => {
      this.msg = val;
      window.console.log("im from main body", val);
    });
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      // this.details = "Name is: " + this.name + "  and mobile no is : " + this.mobile;
      this.details = `Name is: ${this.name} and <br/> mobile is : ${this.mobile}`;
    },
    changeMessage() {
      this.msg = "this is updated message";
    },
  },
};
</script>

<style scoped>
.main-body {
  background-color: #aaa;
  padding: 16px;
}
</style>
