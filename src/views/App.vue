<template>
  <div class="container">
    <reddit-tracker />
    <button @click="testApi">Test Api</button>
  </div>
</template>

<script>
import RedditTracker from '@/components/RedditTracker.vue';
import api from '@/utils/api';

export default {
  components: { RedditTracker },
  mounted() {
    if (!this.$auth.loading) {
      api.checkIfUserInDb(this.$auth);
    }
  },
  methods: {
    testApi() {
      api.testApi(this.$auth).then((res) => console.log(res));
    },
  },
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
