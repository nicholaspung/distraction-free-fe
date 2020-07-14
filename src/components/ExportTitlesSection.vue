<template>
  <div class="export-section">
    <div class="export-buttons">
      <button type="button" @click="showImportTitles">Import</button>
      <button type="button" @click="showExportTitles">Export</button>
    </div>
    <div v-if="showImport">
      <p>Format in a Javascript</p>
      <base-input-text
        class="import-titles"
        v-model="titlesToImport"
        placeholder="Add Titles to Import"
        @keydown.enter="importTitles"
      />
    </div>
    <export-titles v-if="showExport" />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import api from '@/utils/api';
import ExportTitles from '@/components/ExportTitles.vue';
import BaseInputText from '@/components/BaseInputText.vue';

export default {
  components: { ExportTitles, BaseInputText },
  props: {
    afterSubmitAction: Function,
  },
  data() {
    return {
      showExport: false,
      showImport: false,
      titlesToImport: '',
      error: '',
    };
  },
  methods: {
    showExportTitles() {
      this.showExport = !this.showExport;
      this.showImport = false;
    },
    showImportTitles() {
      this.showImport = !this.showImport;
      this.showExport = false;
    },
    importTitles() {
      this.error = '';
      if (this.titlesToImport[0] === '[' && this.titlesToImport[this.titlesToImport.length - 1] === ']') {
        const titlesToImport = JSON.parse(this.titlesToImport);
        const addTitlesPromiseChain = [];
        titlesToImport.forEach((title) => {
          if (!this.$store.state.titles.find((el) => el.title === title)) {
            addTitlesPromiseChain.push(api.addTitle({ auth: this.$auth, title: title.trim() }));
          }
        });
        Promise.all(addTitlesPromiseChain).then(() => this.afterSubmitAction());
      } else {
        this.error = 'Import is in wrong format. Please paste a JavaScript array.';
      }
      this.titlesToImport = '';
      this.showImport = false;
    },
  },
};
</script>

<style scoped>
.export-section {
  padding: 0 1rem;
  text-align: center;
}

.export-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
