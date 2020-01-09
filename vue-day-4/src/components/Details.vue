<template>
  <div class="details">
    details page
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      student: null,
    };
  },
  mounted() {
    window.console.log(this.$route.params.studentId);
    window.console.log(this.$route.query.studentId);
    // this.getStudentDetails(this.$route.params.studentId);
  },
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
