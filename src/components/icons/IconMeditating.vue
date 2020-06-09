<template>
  <img :src="mySVG" :width="width" :height="height" />
</template>

<script>
import meditatingSVG from '../../assets/meditating.svg';

export default {
  props: {
    width: {
      type: [Number, String],
      default: 100,
    },
    height: {
      type: [Number, String],
      default: 100,
    },
  },
  data() {
    return {
      mySVG: meditatingSVG,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
