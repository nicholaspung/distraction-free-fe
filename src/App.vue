<template>
  <div id="app">
    <header-nav />
    <router-view />
    <div id="footer">
      <p>Intentionally made with little color and limited pictures to discourage frequent checking.</p>
      <p>© 2020, Nicholas Pung</p>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';

export default {
  components: { HeaderNav },
};
</script>

<style>
html,
body {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

#footer {
  padding: 1rem;
  border-top: 1px solid black;
}

@media only screen and (min-width: 850px) {
  #footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
