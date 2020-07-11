<template>
  <div class="export">
    <div class="bar">
      <button @click="showPlain">Plain Text</button>
      <button @click="showJavascript">Javscript</button>
    </div>
    <div class="output">
      <button
        type="button"
        v-clipboard:copy="output"
        v-clipboard:success="onClick"
        v-clipboard:error="onClick"
        v-bind:disabled="disableCopyButton"
      >Copy to Clipboard</button>
      <br />
      <p v-if="type === 'plain'" id="plain">{{ output }}</p>
      <pre v-if="type === 'javascript'" id="javascript">{{ output }}</pre>
    </div>
  </div>
</template
>;

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
      const output = JSON.stringify(this.titles.map((item) => item.title));
      this.output = output.split(',').join(', ');
      return output;
    },
    onClick() {
      this.disableCopyButton = !this.disableCopyButton;
      setTimeout(() => {
        this.disableCopyButton = !this.disableCopyButton;
      }, 1000);
    },
  },
  data() {
    return {
      output: this.showPlain(),
      type: 'plain',
      disableCopyButton: false,
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
