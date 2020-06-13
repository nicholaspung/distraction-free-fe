<template>
  <div class="reddit-tracker">
    <h2>Reddit Tracker</h2>
    <div class="add-title">
      <h3>Add a New Title ➡</h3>
      <BaseInputText
        class="title-input"
        v-model="newTitle"
        placeholder="Add Title"
        @keydown.enter="addTitle"
      />
    </div>
    <div class="titles-list">
      <div>
        <h3>Saved Titles</h3>
      </div>
      <div>
        <h3>Reddit Posts you've missed</h3>
      </div>
      <div>
        <h3>Latest Reddit Posts</h3>
        <ul v-if="redditPosts.length">
          <li
            v-for="redditPost in redditPosts"
            :key="redditPost.data.id"
          >{{ redditPost.data.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api';
import BaseInputText from '@/components/BaseInputText.vue';

export default {
  components: { BaseInputText },
  data() {
    return {
      newTitle: '',
      savedTitles: [],
      savedRedditPosts: [],
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
  methods: {
    addTitle() {},
  },
};
</script>

<style scoped>
.reddit-tracker h2 {
  background-color: #c4c4c4;
  padding: 1rem;
  margin: 0;
}

.add-title {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #d2d7db;
}

.add-title h3 {
  margin: 0;
  padding-right: 0.5rem;
}

.title-input {
  padding: 0.5rem;
}

.titles-list {
  display: flex;
  justify-content: space-around;
}
</style>
