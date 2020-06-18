<template>
  <div>
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

export default {
  data() {
    return {
      titles: [],
    };
  },
  mounted() {
    api.getTitles(this.$auth).then((res) => {
      this.titles = res.data.titles;
    });
  },
};
</script>
