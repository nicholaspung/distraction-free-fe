<template>
  <div class="reddit-tracker">
    <h2>Reddit Tracker</h2>
    <div class="titles-list">
      <div>
        <h3>Saved Titles</h3>
      </div>
      <div>
        <h3>Reddit Posts you've missed</h3>
      </div>
      <div>
        <h3>Latest Reddit Posts</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedTitles: [],
      savedRedditPosts: [],
      redditPosts: [],
    };
  },
};
</script>

<style scoped>
.reddit-tracker h2 {
  background-color: #c4c4c4;
  padding: 1rem;
  margin: 0;
}

.titles-list {
  display: flex;
  justify-content: space-around;
}
</style>
