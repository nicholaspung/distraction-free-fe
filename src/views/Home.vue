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
import IconMeditating from '@/components/icons/IconMeditating.vue';

export default {
  name: 'Home',
  components: { IconMeditating },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner {
  width: 65%;
}

.description {
  text-align: left;
  margin: 1rem;
  display: flex;
  flex-direction: column;
}

button {
  background-color: #c4c4c4;
  padding: 1rem;
  border: 0;
  font-weight: bold;
  align-self: center;
  cursor: pointer;
}

@media only screen and (min-width: 475px) {
  .banner {
    width: 50%;
  }
  .description {
    width: 80%;
  }
}

@media only screen and (min-width: 700px) {
  .banner {
    width: 40%;
  }
  .description {
    width: 60%;
  }
}

@media only screen and (min-width: 850px) {
  .home {
    flex-direction: row;
    justify-content: space-around;
  }

  .banner {
    flex: 0.75;
  }

  .description {
    flex: 1;
    display: block;
  }
}
</style>
