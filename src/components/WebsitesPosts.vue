<template>
  <div>
    <div class="refresh">
      <button @click="increment">Click to Refresh</button>
      <p v-if="clicked" class="clicked"># of times refreshed: {{ refreshCount }}</p>
      <p v-else># of times refreshed: {{ refreshCount }}</p>
    </div>
    <h3 class="padding">Latest Website Titles</h3>
    <ul v-if="websitePosts.length" class="list">
      <li v-for="websitePost in websitePosts" :key="websitePost.title">
        <span v-if="!websitePost.old">
          <button>
            <a v-bind:href="websitePost.url" target="_blank" class="link">Link</a>
          </button>
          {{ websitePost.title }}
        </span>
        <span v-else class="old">
          <button>
            <a v-bind:href="websitePost.url" target="_blank" class="link">Link</a>
          </button>
          {{ websitePost.title }}
        </span>
      </li>
    </ul>
    <div
      v-else-if="loadSpinner"
      class="padding"
    >Something went wrong with loading the websites. Or refresh the page.</div>
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
      return !this.loading && this.websitePosts.length === 0;
    },
  },
  data() {
    return {
      websitePosts: this.$store.state.websitePosts || [],
      loading: false,
      refreshCount: 0,
      clicked: false,
    };
  },
  methods: {
    loadPosts() {
      api.fetchWebsites().then((res) => {
        this.websitePosts = res.data.data;
        this.loading = false;
        this.$store.commit('saveData', {
          key: 'websitePosts',
          data: this.websitePosts,
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

.old {
  text-decoration: line-through;
}

.old button {
  display: none;
}

.link {
  color: #2c3e50;
  text-decoration: none;
}

.padding {
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
