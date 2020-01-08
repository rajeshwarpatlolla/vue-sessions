<template>
  <div class="text-field">
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">{{ data.label }}</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="staticEmail" :placeholder="data.placeholder" v-model="data.value" @input="valueChange" />
        <small id="passwordHelpBlock" class="form-text text-muted">
          {{ data.hint }}
        </small>
        <!-- <div class="valid">Looks good!</div> -->
        <div class="invalid" v-if="data.errorMessage && !data.value">{{ data.errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    data: { type: Object, required: true },
  },
  data() {
    return {};
  },
  methods: {
    valueChange(e) {
      switch (e.type) {
        case "input":
          window.console.log(e.type);
          break;
        case "email":
          window.console.log(e.type);
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invalid {
  color: red;
}
.valid {
  color: green;
}
</style>
