<template>
  <div class="posts">
    <h3>Reddit Posts you've missed</h3>
    <ul v-if="posts.length" class="list">
      <li v-for="post in posts" :key="post.id">
        <a
          v-bind:href="post.url"
          target="_blank"
          @click="markPostRead(post)"
          class="link"
          >{{ post.title }}</a
        >
      </li>
    </ul>
    <div v-else-if="loadSpinner">
      You have read all saved titles.
    </div>
    <loading-circle v-if="!loadSpinner" v-bind:small="true" />
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
    return { posts: [], loading: false };
  },
  methods: {
    markPostRead(post) {
      api
        .updatePost({
          auth: this.$auth,
          redditId: post.reddit_id,
        })
        .then(() => {
          this.getFilteredPosts();
        });
    },
    getFilteredPosts() {
      api.getPosts(this.$auth).then((res) => {
        this.posts = res.data.posts;
        this.loading = false;
        this.$store.commit('saveData', { key: 'posts', data: this.posts });
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
.link {
  color: #2c3e50;
  text-decoration: none;
}

.posts h3 {
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
