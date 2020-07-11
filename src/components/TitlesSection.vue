<template>
  <div>
    <div class="add-title">
      <h5>Add a New Title ⬇</h5>
      <base-input-text
        class="title-input"
        v-model="newTitle"
        placeholder="Add Title (no commas)"
        @keydown.enter="addTitle"
      />
    </div>
    <div class="title-section">
      <h3 class="padding">Saved Titles</h3>
      <ul v-if="titles.length" class="list">
        <li v-for="titleObj in titles" :key="titleObj.id">
          <span>{{ titleObj.title }}</span>
          <button @click="deleteTitle(titleObj.title)">X</button>
        </li>
      </ul>
      <div v-else-if="loadSpinner" class="padding">You have no saved titles.</div>
      <loading-circle v-if="loading" v-bind:size="'small'" />
      <p v-if="error" class="error">{{ error }}</p>
    </div>
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
      <export-titles v-if="showExport" v-bind:titles="titles" />
    </div>
  </div>
</template>

<script>
import api from '@/utils/api';
import BaseInputText from '@/components/BaseInputText.vue';
import LoadingCircle from '@/components/LoadingCircle.vue';
import ExportTitles from '@/components/ExportTitles.vue';

export default {
  components: { BaseInputText, LoadingCircle, ExportTitles },
  computed: {
    loadSpinner() {
      return !this.loading && this.titles.length === 0;
    },
  },
  data() {
    return {
      newTitle: '',
      titles: this.$store.state.titles || [],
      loading: false,
      error: '',
      showExport: false,
      showImport: false,
      titlesToImport: '',
    };
  },
  methods: {
    getTitles() {
      this.error = '';
      api
        .getTitles(this.$auth)
        .then((res) => {
          this.titles = res.data.titles;
          this.loading = false;
          this.$store.commit('saveData', { key: 'titles', data: this.titles });
        })
        .catch((err) => {
          console.error(err);
          this.error = "We've caught an unexpected error. Please try again.";
        });
    },
    addTitle() {
      this.error = '';
      document.body.style.cursor = 'wait';
      if (this.titles.find((el) => el.title === this.newTitle)) {
        this.newTitle = '';
      }
      if (this.newTitle) {
        api
          .addTitle({ auth: this.$auth, title: this.newTitle.trim() })
          .then(() => {
            this.newTitle = '';
            this.getTitles();
          })
          .catch((err) => {
            console.error(err);
            this.error = "We've caught an unexpected error. Please try again.";
          });
      }
      document.body.style.cursor = 'default';
    },
    deleteTitle(item) {
      this.error = '';
      api
        .deleteTitle({ auth: this.$auth, title: item })
        .then(() => {
          this.getTitles();
        })
        .catch((err) => {
          console.error(err);
          this.error = "We've caught an unexpected error. Please try again.";
        });
    },
    showExportTitles() {
      this.showExport = !this.showExport;
      this.showImport = false;
    },
    showImportTitles() {
      this.showImport = !this.showImport;
      this.showExport = false;
    },
    importTitles() {
      if (this.titlesToImport[0] === '[' && this.titlesToImport[this.titlesToImport.length - 1] === ']') {
        const titlesToImport = JSON.parse(this.titlesToImport);
        const addTitlesPromiseChain = [];
        titlesToImport.forEach((title) => {
          if (!this.titles.find((el) => el.title === title)) {
            addTitlesPromiseChain.push(api.addTitle({ auth: this.$auth, title: title.trim() }));
          }
        });
        Promise.all(addTitlesPromiseChain).then(() => this.getTitles());
      }
      this.titlesToImport = '';
      this.showImport = false;
    },
  },
  created() {
    this.loading = true;
    this.getTitles();
  },
};
</script>

<style scoped>
.add-title {
  padding: 1rem;
  background-color: #d2d7db;
}

.add-title h5 {
  margin: 0;
}

.padding {
  padding: 0 1rem;
}

.list {
  padding-left: 0;
  list-style: none;
}

.list li {
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list li span {
  padding-right: 0.25rem;
}

.list li:nth-of-type(2n) {
  background-color: #d2d7db;
}

.error {
  color: red;
  padding: 0 1rem;
}

.export-section {
  padding: 0 1rem;
  text-align: center;
}

.export-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
