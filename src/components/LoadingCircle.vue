<template>
  <div v-bind:class="loadStyle" />
</template>

<script>
export default {
  props: {
    size: String,
  },
  computed: {
    loadStyle() {
      switch (this.size) {
        case 'small':
          return 'loader-small';
        case 'tiny':
          return 'loader-tiny';
        default:
          return 'loader-big';
      }
    },
  },
};
</script>

<style scoped>
.loader-big {
  margin: auto;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #ff5678;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.loader-small {
  margin: auto;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #ff5678;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

.loader-tiny {
  margin: auto;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #ff5678;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
