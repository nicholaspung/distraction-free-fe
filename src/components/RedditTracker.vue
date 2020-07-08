<template>
  <div class="reddit-tracker">
    <h2>Reddit Tracker</h2>
    <div class="titles-list">
      <titles-section class="section titles" />
      <have-not-read class="section" />
      <reddit-posts class="section" />
    </div>
    <div class="bottom" />
  </div>
</template>

<script>
import RedditPosts from '@/components/RedditPosts.vue';
import TitlesSection from '@/components/TitlesSection.vue';
import HaveNotRead from '@/components/HaveNotRead.vue';

export default {
  components: {
    RedditPosts,
    TitlesSection,
    HaveNotRead,
  },
};
</script>

<style scoped>
.reddit-tracker {
  border-left: 2px solid #c4c4c4;
  border-right: 2px solid #c4c4c4;
}

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
  flex-direction: column;
  justify-content: space-around;
}

.section {
  flex: 1;
  border-right: 2px solid #c4c4c4;
}

.section:last-child {
  border-right: 0;
}

.titles {
  flex: 0;
}

.bottom {
  height: 3rem;
  background-color: #c4c4c4;
}

@media only screen and (min-width: 475px) {
}

@media only screen and (min-width: 700px) {
}

@media only screen and (min-width: 850px) {
  .titles-list {
    flex-direction: row;
  }
}
</style>
