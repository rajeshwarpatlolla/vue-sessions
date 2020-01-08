import eventBus from "../eventBus";

export default {
  name: "Header",
  data() {
    return {
      cVal: this.counterProp,
    };
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
      this.cVal += 1;
      this.getUpdatedValueProp(this.cVal);
      eventBus.$emit("updatedFromHeader", this.cVal);
    },
  },
};
