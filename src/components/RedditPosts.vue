<template>
  <div class="reddit-posts">
    <h3>Latest Reddit Posts</h3>
    <ul v-if="redditPosts.length" class="list">
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

.reddit-posts h3 {
  padding: 0 1rem;
}

.list {
  padding-left: 0;
  list-style: none;
}

.list li {
  padding: 0.25rem 1rem;
}

.list li:nth-of-type(2n) {
  background-color: #d2d7db;
}
</style>
