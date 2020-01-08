<template>
  <div class="simple-form">
    <form>
      <div>Name : <input type="text" v-model.trim="user.name" /></div>
      <div>Enter some no : <input type="text" v-model.number="user.no" /></div>

      <div>Email: <input type="email" v-model.lazy="user.email" /></div>
      <div class="red" v-if="!this.user.email">Please enter a valid email</div>
      <div>Password: <input type="password" v-model="user.password" /></div>
      <div>Mobile: <input type="tel" v-model="user.mobile" /></div>
      <div>Gender: <input type="radio" name="gender" value="M" v-model="user.gender" /> Male <input type="radio" name="gender" value="F" v-model="user.gender" /> FeMale</div>
      <div>
        Type
        <select v-model="user.type">
          <option value="Individual">Individual</option>
          <option value="Organization">Organization</option>
        </select>
      </div>
      <div>Terms & Conditions <input type="checkbox" v-model="user.termsAndConditions" /></div>

      <button @click.prevent="submitData()" :disabled="!this.user.email">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SimpleForm",
  props: {
    msg: String,
  },
  data() {
    return {
      user: {
        name: null,
        email: null,
        no: null,
        password: null,
        mobile: null,
        gender: null,
        type: null,
        termsAndConditions: null,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.user = {
        name: "rajeshwar",
        email: "rajeshwar.patlolla@gmail.com",
        mobile: 9090909090,
        gender: "M",
        type: "Individual",
        termsAndConditions: true,
      };
    }, 3000);
  },
  methods: {
    submitData() {
      window.console.log(this.user);
      if (this.user.email.indexOf("@") <= 0) {
        window.console.log("this is not a valid email id");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
