<template>
  <div class="export">
    <div class="bar">
      <button @click="showPlain">Plain Text</button>
      <button @click="showJavascript">Javscript</button>
    </div>
    <div>{{ output }}</div>
  </div>
</template>;

<script>
export default {
  props: {
    titles: Array,
  },
  methods: {
    showPlain() {
      this.output = `${this.titles.map((item) => item.title)}`;
    },
    showJavascript() {
      this.output = this.titles.map((item) => item.title);
    }
  },
  data() {
    return { output: this.showPlain() };
  },
};
</script>

<style scoped>
.export {
  padding: 1rem 0;
}

.bar {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.bar button {
  flex: 1;
  background: white;
  border: 2px solid #d2d7db;
}

.bar button:nth-of-type(2) {
  border-left: 0;
}
</style>
