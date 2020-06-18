<template>
  <div>
    <div class="add-title">
      <h3>Add a New Title ➡</h3>
      <base-input-text
        class="title-input"
        v-model="newTitle"
        placeholder="Add Title"
        @keydown.enter="addTitle"
      />
    </div>
    <h3>Saved Titles</h3>
    <ul v-if="titles.length">
      <li v-for="titleObj in titles" :key="titleObj.id">
        {{ titleObj.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/utils/api';
import BaseInputText from '@/components/BaseInputText.vue';

export default {
  components: { BaseInputText },
  data() {
    return {
      newTitle: '',
      titles: [],
    };
  },
  mounted() {
    this.getTitles();
  },
  methods: {
    getTitles() {
      api.getTitles(this.$auth).then((res) => {
        this.titles = res.data.titles;
      });
    },
    addTitle() {
      api.addTitle({ auth: this.$auth, title: this.newTitle }).then(() => {
        this.newTitle = '';
        this.getTitles();
      });
    },
  },
};
</script>

<style scoped>
.add-title {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #d2d7db;
}

.add-title h3 {
  margin: 0;
  padding-right: 0.5rem;
}
</style>
