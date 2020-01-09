<template>
  <div class="home">
    <button @click="addPost()">Add Post</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">School</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(photo, index) in photos" :key="index">
          <td>{{ photo.id }}</td>
          <td>{{ photo.title }}</td>
          <td>
            <img :src="photo.thumbnailUrl" alt="" />
          </td>
          <td>
            <button class="btn btn-primary">
              <router-link :to="{ name: 'details', query: { studentId: photo.id } }">Show Details</router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.getImages();
    this.addPost();
  },
  methods: {
    async getImages() {
      try {
        const photos = await axios.get("https://jsonplaceholder.typicode.com/photos/1111");
        this.photos = photos;
        this.photos = this.photos;
      } catch (error) {
        window.console.log(error);
      }
    },
    async addPost() {
      try {
        const newPhoto = await axios.post("https://jsonplaceholder.typicode.com/posts", {
          title: "new title",
          body: "new body",
          userId: 1111,
        });
        window.console.log(newPhoto);
      } catch (error) {
        window.console.log(error);
      }
    },
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
