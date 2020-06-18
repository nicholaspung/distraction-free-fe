<template>
  <div>
    <h3>Latest Reddit Posts</h3>
    <ul v-if="redditPosts.length">
      <li v-for="redditPost in redditPosts" :key="redditPost.data.id">
        <button>
          <a v-bind:href="redditPost.data.url" target="_blank" class="link">Link</a>
        </button>
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

<style scoped>
.link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
