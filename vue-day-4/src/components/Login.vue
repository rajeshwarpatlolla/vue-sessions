<template>
  <div class="login">
    <form class="login-form">
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="staticEmail" v-model="user.email" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" v-model="user.password" />
        </div>
      </div>
      <button class="btn btn-primary" @click.prevent="loginUser()">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    loginUser() {
      window.console.log(this.user);
      window.localStorage.setItem("user-obj", JSON.stringify(this.user));
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 2000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
  max-width: 400px;
  padding-top: 80px;
  margin: auto;
  /* background-color: #aaa; */
}
</style>
