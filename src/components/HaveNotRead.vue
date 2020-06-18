<template>
  <div>
    <h3>Reddit Posts you've missed</h3>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <a v-bind:href="post.url" target="_blank" @click="markPostRead(post)">{{
          post.title
        }}</a>
        <button @click="deletePost(post.id)">X</button>
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
      this.posts = res.data.posts;
    });
  },
};
</script>
