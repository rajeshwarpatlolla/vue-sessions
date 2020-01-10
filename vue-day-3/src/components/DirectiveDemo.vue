<template>
  <div>
    <!-- <p>This is a directives demo page</p>
    <div v-fs:color.red="fontSize">{{ msg }}</div>

    <div>{{ "123123123.1234567890" | decimals }}</div>
    <div>{{ "123123123.1234567890" | country("INDIA") }}</div>
    <div>{{ "123123123.1234567890" | decimals | country("US", "CHINA") }}</div> -->

    <slot name="1"></slot>
    <slot name="11">VVVVVV</slot>
    <div><slot name="AMAZON">VVVVVV</slot></div>
    <div><slot name="header">VVVVVV</slot></div>
    <slot v-bind:msg="msg">
      {{ msg }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome",
      fontSize: 32,
    };
  },
  filters: {
    decimals(val) {
      return parseFloat(val).toFixed(2);
    },
  },
  directives: {
    fs: {
      bind(el, binding, vnode) {
        el.style.fontSize = binding.value + "px";
        if (binding.modifiers.red) {
          el.style.color = "red";
        } else {
          el.style.color = "yellow";
        }
        // el.innerHTML = 'Overridden content';
        window.console.log(el, binding, vnode);
      },
      update(el, binding, vnode, oldVnode) {
        window.console.log(el, binding, vnode, oldVnode);
      },
    },
  },
  mounted() {
    setTimeout(() => {
      this.msg = "Bye";
      this.fontSize = 128;
    }, 4000);
  },
};
</script>

<style></style>
