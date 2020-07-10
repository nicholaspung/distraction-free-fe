<template>
  <div class="export">
    <div class="bar">
      <button @click="showPlain">Plain Text</button>
      <button @click="showJavascript">Javscript</button>
    </div>
    <div class="output">
      <button @click="copyToClipboard">Copy to Clipboard</button>
      <br />
      <p v-if="type === 'plain'" id="plain">{{ output }}</p>
      <pre v-if="type === 'javascript'" id="javascript">{{ output }}</pre>
    </div>
  </div>
</template>;

<script>
export default {
  props: {
    titles: Array,
  },
  methods: {
    showPlain() {
      this.type = 'plain';
      const output = this.titles.map((item) => item.title).join(', ');
      this.output = output;
      return output;
    },
    showJavascript() {
      this.type = 'javascript';
      const output = this.titles.map((item) => item.title);
      this.output = output;
      return output;
    },
    copyToClipboard() {
      const el = document.createElement('textarea');
      el.style.display = 'none';
      console.log(this.output);
      el.innerHTML = this.output;
      console.log(el);
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
  data() {
    return {
      output: this.showPlain(),
      type: 'plain',
    };
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

.output {
  padding: 1rem 0;
  text-align: center;
}

pre {
  white-space: normal;
  background-color: lightgrey;
  padding: 0.25rem;
}

span {
  padding: 0.25rem;
}
</style>
