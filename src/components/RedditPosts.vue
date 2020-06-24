<template>
  <div class="reddit-posts">
    <div class="refresh">
      <button @click="increment">Click to Refresh</button>
      <p v-if="clicked" class="clicked"># of times refreshed: {{ refreshCount }}</p>
      <p v-else># of times refreshed: {{ refreshCount }}</p>
    </div>
    <h3>Latest Reddit Posts</h3>
    <ul v-if="redditPosts.length" class="list">
      <li v-for="redditPost in redditPosts" :key="redditPost.data.id">
        <button>
          <a v-bind:href="redditPost.data.url" target="_blank" class="link">Link</a>
        </button>
        {{ redditPost.data.title }}
      </li>
    </ul>
    <div v-else-if="loadSpinner">Something went wrong with Reddit. Or refresh the page.</div>
    <loading-circle v-if="loading" v-bind:small="true" />
  </div>
</template>

<script>
import api from '@/utils/api';
import LoadingCircle from '@/components/LoadingCircle.vue';

export default {
  components: { LoadingCircle },
  computed: {
    loadSpinner() {
      return !this.loading && this.redditPosts.length === 0;
    },
  },
  data() {
    return {
      redditPosts: this.$store.state.redditPosts || [],
      loading: false,
      refreshCount: 0,
      clicked: false,
    };
  },
  methods: {
    loadPosts() {
      api.fetchCurrentRedditPosts().then((res) => {
        this.redditPosts = res.data.data;
        this.loading = false;
        this.$store.commit('saveData', {
          key: 'redditPosts',
          data: this.redditPosts,
        });
      });
    },
    increment() {
      this.clicked = true;
      this.loadPosts();
      this.refreshCount += 1;
      setTimeout(() => {
        this.clicked = false;
      }, 1000);
    },
  },
  mounted() {
    this.loading = true;
    this.loadPosts();
  },
};
</script>

<style scoped>
.refresh {
  padding: 1rem;
  background-color: #d2d7db;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clicked {
  color: #ff5678;
}

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
