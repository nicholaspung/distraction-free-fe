<template>
  <div id="nav">
    <router-link to="/">Distraction Free</router-link>
    <router-link to="/app" class="login" v-if="!loggedIn">Login w/ Google</router-link>
    <router-link to="/" class="login" v-else>Logout</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style scoped>
#nav {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.login {
  background-color: #c4c4c4;
  padding: 1rem;
}
</style>
