<template>
  <div id="nav">
    <router-link to="/">Distraction Free</router-link>
    <div v-if="!$auth.loading">
      <router-link to="/app" v-if="renderAppLink">
        <button>App</button>
      </router-link>
      <button to="/app" v-if="!$auth.isAuthenticated" @click="login">Login w/ Google</button>
      <button to="/" v-if="$auth.isAuthenticated" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    renderAppLink() {
      return this.$auth.isAuthenticated && this.$route.path !== '/app';
    },
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
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

button {
  border: 0;
  font-weight: bold;
  background-color: #c4c4c4;
  padding: 1rem;
  margin: 0 0 0 1rem;
  cursor: pointer;
}
</style>
