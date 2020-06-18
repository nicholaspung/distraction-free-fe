<template>
  <div>
    <h3>Reddit Posts you've missed</h3>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <a v-bind:href="post.url" target="_blank">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/utils/api';

export default {
  data() {
    return { posts: [] };
  },
  mounted() {
    api.getPosts(this.$auth).then((res) => {
      this.posts = res.data.posts;
    });
  },
};
</script>
