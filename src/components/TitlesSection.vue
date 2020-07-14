<template>
  <div>
    <add-title v-bind:after-submit-action="getTitles" />

    <div class="title-section">
      <h3 class="padding">Saved Titles</h3>

      <ul v-if="titles.length" class="list">
        <li v-for="titleObj in titles" :key="titleObj.id">
          <span>{{ titleObj.title }}</span>
          <button @click="deleteTitle(titleObj.title)">X</button>
        </li>
      </ul>

      <div v-else-if="loadSpinner" class="padding">You have no saved titles.</div>

      <loading-circle v-if="loading && !this.error" v-bind:size="'small'" />
      <p v-if="error" class="error">{{ error }}</p>
    </div>

    <export-titles-section v-bind:after-submit-action="getTitles" />
  </div>
</template>

<script>
import api from '@/utils/api';
import LoadingCircle from '@/components/LoadingCircle.vue';
import ExportTitlesSection from '@/components/ExportTitlesSection.vue';
import AddTitle from '@/components/AddTitle.vue';

export default {
  components: { LoadingCircle, ExportTitlesSection, AddTitle },
  computed: {
    loadSpinner() {
      return !this.loading && this.titles.length === 0;
    },
  },
  data() {
    return {
      titles: this.$store.state.titles || [],
      loading: false,
      error: '',
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
  },
  created() {
    this.loading = true;
    this.getTitles();
  },
};
</script>

<style scoped>
@import './css/sections.css';

.list li {
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list li span {
  padding-right: 0.25rem;
}
</style>
