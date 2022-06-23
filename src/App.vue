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
body {
  margin: 0px;
}
#app {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.07em;
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
