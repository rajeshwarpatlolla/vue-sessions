<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Page not found</h1>
      <button class="btn btn-primary btn-lg" @click="goToLoginPage()">Please go to Login page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundComp",
  methods: {
    goToLoginPage() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
