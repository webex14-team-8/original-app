<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link>| -->
    <router-link to="/post">投稿ページ</router-link>|
    <router-link to="/map">地震確率予測</router-link>
  </nav>
  <router-view />
  <!-- <HomeView /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: aliceblue;
  margin: 0 0 0 auto;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
