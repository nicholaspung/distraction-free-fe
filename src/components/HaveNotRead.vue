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
        >{{ post.title }}</a>
        <button @click="deletePost(post.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/utils/api';

export default {
  data() {
    return { posts: [{ id: 1, url: '', title: '' }] };
  },
  methods: {
    deletePost(id) {
      api.deletePost({ auth: this.$auth, id }).then((res) => {
        console.log(res);
      });
    },
    markPostRead(post) {
      api
        .updatePost({
          auth: this.$auth,
          title: post.title,
          redditId: post.reddit_id,
        })
        .then((res) => console.log(res));
    },
  },
  mounted() {
    api.getPosts(this.$auth).then((res) => {
      console.log(res);
      this.posts = res.data.posts;
    });
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
