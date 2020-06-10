<template>
  <div class="container">
    <reddit-tracker />
  </div>
</template>

<script>
import RedditTracker from '@/components/RedditTracker.vue';

export default {
  components: { RedditTracker },
};
</script>

<style>
#app {
  justify-content: flex-start;
  text-align: left;
}
</style>

<style scoped>
.container {
  margin: 1rem;
}
</style>
