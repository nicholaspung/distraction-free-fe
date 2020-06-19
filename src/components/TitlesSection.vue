<template>
  <div>
    <div class="add-title">
      <h3>Add a New Title ⬇</h3>
      <base-input-text
        class="title-input"
        v-model="newTitle"
        placeholder="Add Title"
        @keydown.enter="addTitle"
      />
    </div>
    <div class="title-section">
      <h3>Saved Titles</h3>
      <ul v-if="titles.length" class="list">
        <li v-for="titleObj in titles" :key="titleObj.id">
          {{ titleObj.title }}
          <button @click="deleteTitle(titleObj.title)">X</button>
        </li>
      </ul>
    </div>
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
    deleteTitle(item) {
      api.deleteTitle({ auth: this.$auth, title: item }).then(() => {
        this.getTitles();
      });
    },
  },
  mounted() {
    this.getTitles();
  },
};
</script>

<style scoped>
.add-title {
  padding: 1rem;
  background-color: #d2d7db;
}

.add-title h3 {
  margin: 0;
}

.title-section h3 {
  padding: 0 1rem;
}

.list {
  padding-left: 0;
  list-style: none;
}

.list li {
  padding: 0.25rem 1rem;
}

.list li:nth-of-type(2n) {
  background-color: #d2d7db;
}
</style>
