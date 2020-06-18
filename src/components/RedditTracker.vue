<template>
  <div class="reddit-tracker">
    <h2>Reddit Tracker</h2>
    <div class="titles-list">
      <have-not-read />
      <titles-section />
      <reddit-posts />
    </div>
  </div>
</template>

<script>
import RedditPosts from '@/components/RedditPosts.vue';
import TitlesSection from '@/components/TitlesSection.vue';
import HaveNotRead from '@/components/HaveNotRead.vue';

export default {
  components: { RedditPosts, TitlesSection, HaveNotRead },
};
</script>

<style scoped>
.reddit-tracker h2 {
  background-color: #c4c4c4;
  padding: 1rem;
  margin: 0;
}

.title-input {
  padding: 0.5rem;
}

.titles-list {
  display: flex;
  justify-content: space-around;
}
</style>
