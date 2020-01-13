<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>Home page</div>
    <input type="text" v-model="searchStr" @input="filterList(searchStr)" />
    <div v-for="(post, index) in posts" :key="index">{{ index + 1 }} - {{ post.title }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      searchStr: '',
      posts: [],
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters(['getPostsGetter']),
  },
  mounted() {
    this.getPostsAction();
    this.posts = this.getPostsGetter;
  },
  watch: {
    getPostsGetter(val) {
      this.posts = val;
    },
  },
  methods: {
    ...mapActions(['getPostsAction']),
    filterList(searchStr) {
      this.posts = this.getPostsGetter.filter(o => {
        return o.title.indexOf(searchStr) >= 0;
      });
    },
  },
};
</script>
