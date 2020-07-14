<template>
  <div>
    <h3 class="padding">Latest Reddit Posts</h3>

    <times-refreshed v-bind:action="loadPosts" />

    <ul v-if="redditPosts.length" class="list">
      <li v-for="redditPost in redditPosts" :key="redditPost.data.id">
        <span v-if="!redditPost.old">
          <button>
            <a v-bind:href="redditPost.data.url" target="_blank" class="link">Link</a>
          </button>
          {{ redditPost.data.title }}
        </span>
        <span v-else class="old">
          <button>
            <a v-bind:href="redditPost.data.url" target="_blank" class="link">Link</a>
          </button>
          {{ redditPost.data.title }}
        </span>
      </li>
    </ul>

    <div
      v-else-if="loadSpinner"
      class="padding"
    >Something went wrong with Reddit. Or refresh the page.</div>

    <loading-circle v-if="loading && !this.error" v-bind:size="'small'" />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import api from '@/utils/api';
import utils from '@/utils/utils';
import LoadingCircle from '@/components/LoadingCircle.vue';
import TimesRefreshed from '@/components/TimesRefreshed.vue';

export default {
  components: { LoadingCircle, TimesRefreshed },
  computed: {
    loadSpinner() {
      return !this.loading && this.redditPosts.length === 0;
    },
  },
  data() {
    return {
      redditPosts: this.$store.state.redditPosts || [],
      loading: false,
      error: '',
    };
  },
  methods: {
    loadPosts() {
      this.error = '';
      api.fetchCurrentRedditPosts().then((res) => {
        const processedData = utils.compareObjects(this.redditPosts, res.data.data);
        this.redditPosts = processedData;
        this.loading = false;
        this.$store.commit('saveData', {
          key: 'redditPosts',
          data: this.redditPosts,
        });
      })
        .catch((err) => {
          console.error(err);
          this.error = 'We\'ve caught an unexpected error. Please try again.';
        });
    },
  },
  mounted() {
    this.loading = true;
    this.loadPosts();
  },
};
</script>

<style scoped>
@import './css/sections.css';

.old {
  text-decoration: line-through;
}

.old button {
  display: none;
}

.list li {
  padding: 0.25rem 1rem;
}
</style>
