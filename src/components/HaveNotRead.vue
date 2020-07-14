<template>
  <div class="posts">
    <h3 class="padding">Reddit Posts you've missed</h3>

    <ul v-if="posts.length" class="list">
      <li v-for="post in posts" :key="post.id">
        <div class="post">
          <a
            v-bind:href="post.url"
            target="_blank"
            @click="markPostRead(post)"
            class="link"
          >{{ post.title }}</a>
          <button @click="markPostRead(post)">Hide</button>
        </div>
      </li>
    </ul>

    <div v-else-if="loadSpinner" class="padding">You have read all saved titles.</div>

    <loading-circle v-if="loading && !this.error" v-bind:size="'small'" />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import api from '@/utils/api';
import LoadingCircle from '@/components/LoadingCircle.vue';

export default {
  components: { LoadingCircle },
  computed: {
    loadSpinner() {
      return !this.loading && this.posts.length === 0;
    },
  },
  data() {
    return {
      posts: [],
      loading: false,
      error: '',
    };
  },
  methods: {
    markPostRead(post) {
      this.error = '';
      document.body.style.cursor = 'wait';
      api
        .updatePost({
          auth: this.$auth,
          redditId: post.reddit_id,
        })
        .then(() => {
          this.getFilteredPosts();
          document.body.style.cursor = 'default';
        })
        .catch((err) => {
          console.error(err);
          this.error = 'We\'ve caught an unexpected error. Please try again.';
        });
    },
    getFilteredPosts() {
      this.error = '';
      api.getPosts(this.$auth).then((res) => {
        this.posts = res.data.posts;
        this.loading = false;
        this.$store.commit('saveData', { key: 'posts', data: this.posts });
      })
        .catch((err) => {
          console.error(err);
          this.error = 'We\'ve caught an unexpected error. Please try again.';
        });
    },
  },
  mounted() {
    this.loading = true;
    this.getFilteredPosts();
  },
};
</script>

<style scoped>
@import './css/sections.css';

.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post a {
  padding-right: 0.25rem;
}

.post button {
  cursor: pointer;
}

.list li {
  padding: 0.25rem 1rem;
}
</style>
