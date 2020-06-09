<template>
  <div class="home">
    <div class="banner">
      <icon-meditating height="auto" width="auto" />
    </div>
    <div class="description">
      <p>Find yourself checking Reddit or Twitter way too often?</p>
      <p>Only use Reddit or Twitter for specific keywords?</p>
      <p>This tool will help you group all the distractions together so when you check, you only need to check one website!</p>
      <button>Sign up w/ Google</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import IconMeditating from '@/components/icons/IconMeditating.vue';

export default {
  name: 'Home',
  components: { IconMeditating },
};
</script>

<style scoped>
.home {
  display: flex;
}

.banner {
  flex: 1 0 50%;
}

.description {
  flex: 1;
  text-align: left;
}
</style>
