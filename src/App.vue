<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Distraction Free</router-link>
      <router-link to="/about" class="login">Login w/ Google</router-link>
    </div>
    <router-view />
    <div id="footer">
      <p>Intentionally made with little color and limited pictures to discourage frequent checking.</p>
      <p>© 2020, Nicholas Pung</p>
    </div>
  </div>
</template>

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

#footer {
  margin: 1rem;
}

@media only screen and (min-width: 850px) {
  #footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
