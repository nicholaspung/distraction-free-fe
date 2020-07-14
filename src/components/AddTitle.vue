<template>
  <div class="add-title">
    <h5>Add a New Title ⬇</h5>
    <base-input-text
      v-model="newTitle"
      placeholder="Add Title (no commas)"
      @keydown.enter="addTitle"
    />
  </div>
</template>

<script>
import api from '@/utils/api';
import BaseInputText from '@/components/BaseInputText.vue';

export default {
  components: { BaseInputText },
  props: {
    afterSubmitAction: Function,
  },
  data() {
    return {
      newTitle: '',
      error: '',
      titles: this.$store.state.titles || [],
    };
  },
  methods: {
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
            this.afterSubmitAction();
          })
          .catch((err) => {
            console.error(err);
            this.error = "We've caught an unexpected error. Please try again.";
          });
      }
      document.body.style.cursor = 'default';
    },
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
</style>
