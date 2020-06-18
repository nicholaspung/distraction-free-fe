<template>
  <div class="reddit-tracker">
    <h2>Reddit Tracker</h2>
    <div class="add-title">
      <h3>Add a New Title ➡</h3>
      <base-input-text
        class="title-input"
        v-model="newTitle"
        placeholder="Add Title"
        @keydown.enter="addTitle"
      />
    </div>
    <div class="titles-list">
      <have-not-read />
      <saved-titles />
      <reddit-posts />
    </div>
  </div>
</template>

<script>
import api from '@/utils/api';
import BaseInputText from '@/components/BaseInputText.vue';
import RedditPosts from '@/components/RedditPosts.vue';
import SavedTitles from '@/components/SavedTitles.vue';
import HaveNotRead from '@/components/HaveNotRead.vue';

export default {
  components: { BaseInputText, RedditPosts, SavedTitles, HaveNotRead },
  data() {
    return {
      newTitle: '',
    };
  },
  methods: {
    addTitle() {
      api.addTitle({ auth: this.$auth, title: this.newTitle }).then((res) => {
        console.log(res);
        this.newTitle = '';
      });
    },
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
