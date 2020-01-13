<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ user.firstName }}
    <SampleComp />
    <div>{{ getDate }}</div>
    <button @click="getName()">getName</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SampleComp from './SampleComp.vue';
import User from '../types';

@Component({
  components: {
    SampleComp,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public user!: User;

  constructor() {
    super();
    this.user = {
      firstName: '234234',
      lastName: 'Patlolla',
      email: 'raj@asdnasd.com',
      isExists: true,
    };
  }

  get getDate() {
    return new Date();
  }

  mounted() {
    window.console.log('inside mounted');
  }

  getName() {
    window.console.log('user obj: ', this.user);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
