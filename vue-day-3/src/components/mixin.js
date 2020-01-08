export default {
  name: "mixin",
  data() {
    return {
      appName: "FLIPKART",
    };
  },
  mounted() {
    window.console.log("MIXIN: In mounted");
  },
  methods: {
    showCurrentTime() {
      window.console.log(new Date());
    },
    showModal(ref) {
      this.$refs[ref].show();
    },
    hideModal(ref) {
      this.$refs[ref].hide();
    },
  },
};
