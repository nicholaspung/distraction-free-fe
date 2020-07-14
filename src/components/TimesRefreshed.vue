<template>
  <div class="refresh">
    <button @click="increment">Click to Refresh</button>
    <p v-if="clicked" class="clicked"># of times refreshed: {{ refreshCount }}</p>
    <p v-else># of times refreshed: {{ refreshCount }}</p>
  </div>
</template>

<script>
export default {
  props: {
    action: Function,
  },
  data() {
    return {
      clicked: false,
      refreshCount: 0,
    };
  },
  methods: {
    increment() {
      this.clicked = true;
      this.action();
      this.refreshCount += 1;
      setTimeout(() => {
        this.clicked = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.refresh {
  padding: 1rem;
  background-color: #d2d7db;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clicked {
  color: #ff5678;
}
</style>
