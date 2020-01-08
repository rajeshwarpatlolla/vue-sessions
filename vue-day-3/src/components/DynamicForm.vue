<template>
  <div class="dynamic-form">
    <div v-for="(formElement, index) in formdata" :key="index">
      <component :is="formElement.type" :data="formElement"></component>
    </div>
    <div>{{ formdata }}</div>
  </div>
</template>

<script>
import textField from "./textField.vue";
import radioField from "./radioField.vue";

export default {
  name: "DynamicForm",
  data() {
    return {
      formdata: [],
    };
  },
  components: { textField, radioField },
  mounted() {
    this.$Progress.start();
    setTimeout(() => {
      this.formdata = [
        { type: "textField", label: "Full Name", placeholder: "Please enter your name here", value: "Rajeshwar", errorMessage: "", hint: "should have string" },
        { type: "textField", label: "Email", placeholder: "Please enter your email here", value: null, errorMessage: "Enter a valid email", hint: "should have @ and .com/.in" },
        { type: "radioField", label: "Gender", placeholder: "Please select gender", value: "M", errorMessage: "" },
      ];
      // this.$Progress.finish();
       this.$Progress.fail()
    }, 2000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
