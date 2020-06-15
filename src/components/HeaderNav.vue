<template>
  <div id="nav">
    <router-link to="/">Distraction Free</router-link>
    <div v-if="!$auth.loading">
      <button to="/app" class="login" v-if="!$auth.isAuthenticated" @click="login">Login w/ Google</button>
      <button to="/" class="login" v-if="$auth.isAuthenticated" @click="logout">Logout</button>
      {{$auth.isAuthenticated}}
    </div>
  </div>
</template>

<script>
export default {
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

.login {
  background-color: #c4c4c4;
  padding: 1rem;
}
</style>
