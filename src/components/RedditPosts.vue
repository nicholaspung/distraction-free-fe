<template>
  <div>
    <h3>Latest Reddit Posts</h3>
    <ul v-if="redditPosts.length">
      <li v-for="redditPost in redditPosts" :key="redditPost.data.id">
        {{ redditPost.data.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/utils/api';

export default {
  data() {
    return {
      redditPosts: [],
    };
  },
  mounted() {
    api
      .fetchCurrentRedditPosts()
      .then((res) => {
        this.redditPosts = res.data.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped></style>
